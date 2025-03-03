import { useState, useRef } from "react";
import { Typography, Container, Box } from "@mui/material";
import FileUpload from "./components/FileUpload";
import DataSection from "./components/DataSection";
import {
  handleFileChange,
  handleUpload,
  fetchFilteredData,
  fetchCleanedData,
} from "./handlers/dataHandlers";

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [cleanedDataError, setCleanedDataError] = useState(null);
  const [analysisDataError, setAnalysisDataError] = useState(null);
  const [filter, setFilter] = useState("daily");
  const [cleanedData, setCleanedData] = useState([]);
  const [showCleanedData, setShowCleanedData] = useState(false);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [loadingFilteredData, setLoadingFilteredData] = useState(false);
  const [loadingCleanedData, setLoadingCleanedData] = useState(false);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async () => {
    await handleUpload(
      file,
      setUploadDisabled,
      async () => {
        const filteredDataSuccess = await fetchFilteredData(filter, setLoadingFilteredData, setData, setAnalysisDataError);
        if (filteredDataSuccess) {
          setShowFilteredData(true);
        }
      },
      async () => {
        const cleanedDataSuccess = await fetchCleanedData(setLoadingCleanedData, setCleanedData, setCleanedDataError);
        if (cleanedDataSuccess) {
          setShowCleanedData(true);
        }
      },
      setUploadError,
      setShowCleanedData,
      setShowFilteredData,
      setFile,
      fileInputRef
    );
  };

  return (
    <Container style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Time Series Data Upload & Visualization
      </Typography>

      <Box mb={4}>
        <FileUpload
          handleFileChange={(event) =>
            handleFileChange(
              event,
              setFile,
              setUploadError,
              setShowCleanedData,
              setShowFilteredData,
              setUploadDisabled
            )
          }
          handleUpload={handleFileUpload}
          fileInputRef={fileInputRef}
          error={uploadError}
          setError={setUploadError}
          disabled={uploadDisabled}
        />
      </Box>

      {showFilteredData && (
        <DataSection
          loading={loadingFilteredData}
          error={analysisDataError}
          data={data}
          fetchData={() =>
            fetchFilteredData(filter, setLoadingFilteredData, setData, setAnalysisDataError)
          }
          filter={filter}
          setFilter={setFilter}
        />
      )}

      {showCleanedData && (
        <DataSection
          loading={loadingCleanedData}
          error={cleanedDataError}
          data={cleanedData}
          fetchData={() =>
            fetchCleanedData(setLoadingCleanedData, setCleanedData, setCleanedDataError)
          }
        />
      )}
    </Container>
  );
}

export default App;