import React from 'react';
import { Box, CircularProgress, Alert, Button } from '@mui/material';
import DataVisualization from './DataVisualization';
import DataTable from './DataTable';

const DataSection = ({ loading, error, data, fetchData, filter, setFilter }) => {
  return (
    <Box mb={4}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {error && (
            <Alert severity="error">
              {error}
              <Button
                onClick={fetchData}
                color="primary"
                size="small"
                variant="contained"
                style={{ marginLeft: "10px" }}
              >
                Retry
              </Button>
            </Alert>
          )}
          {!error && data.length > 0 && (
            <>
              {filter ? (
                <DataVisualization data={data} filter={filter} setFilter={setFilter} fetchFilteredData={fetchData} />
              ) : (
                <DataTable data={data} />
              )}
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default DataSection;