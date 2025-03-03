import { useState, useRef } from "react";
import { Typography, Container, CircularProgress, Box } from "@mui/material";
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
  const [loading, setLoading] = useState(false);
  const [loadingFilteredData, setLoadingFilteredData] = useState(false);
  const [loadingCleanedData, setLoadingCleanedData] = useState(false);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const fileInputRef = useRef(null);

  return (
    <Container style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Time Series Data Upload & Visualization
      </Typography>

      <Box mb={4}>
        <FileUpload
          handleFileChange={(event) => handleFileChange(event, setFile, setUploadError, setShowCleanedData, setShowFilteredData, setUploadDisabled)}
          handleUpload={() => handleUpload(file, setLoading, setUploadDisabled, () => fetchFilteredData(filter, setLoadingFilteredData, setData, setAnalysisDataError), () => fetchCleanedData(setLoadingCleanedData, setCleanedData, setCleanedDataError), setUploadError, setShowCleanedData, setShowFilteredData, setFile, fileInputRef)}
          fileInputRef={fileInputRef}
          error={uploadError}
          setError={setUploadError}
          disabled={uploadDisabled}
        />
      </Box>

      {loading && <CircularProgress />}

      {showFilteredData && (
        <DataSection
          loading={loadingFilteredData}
          error={analysisDataError}
          data={data}
          fetchData={() => fetchFilteredData(filter, setLoadingFilteredData, setData, setAnalysisDataError)}
          filter={filter}
          setFilter={setFilter}
        />
      )}

      {showCleanedData && (
        <DataSection
          loading={loadingCleanedData}
          error={cleanedDataError}
          data={cleanedData}
          fetchData={() => fetchCleanedData(setLoadingCleanedData, setCleanedData, setCleanedDataError)}
        />
      )}
    </Container>
  );
}

export default App;