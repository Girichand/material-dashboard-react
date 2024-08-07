// react
import React from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import assessmentTableData from "layouts/assessments/data/assessmentTableData";

function Assessments() {
  const { course, term, student } = useParams();
  const { columns, rows } = assessmentTableData({ course, term, student });

  const handleClick = async () => {
    const url = `http://localhost:3000/${course}/${term}/z${student}/calculate-final-mark`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
              >
                <MDTypography variant="h6" color="white">
                  {course + " " + term + " - z" + student}
                </MDTypography>
                {/* <MDButton onClick={handleClick}>Calculate Final Mark</MDButton> */}
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Assessments;
