import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList } from "../context/ui/EntryList";
import { NewEntry } from '../context/ui/NewEntry';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ heigh: "calc(100vh-100px)" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry/>
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ heigh: "calc(100vh-100px)" }}>
            <CardHeader title="En progreso" />
            <CardContent>
              <EntryList status="in-progres" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ heigh: "calc(100vh-100px)" }}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
