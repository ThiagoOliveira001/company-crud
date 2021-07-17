import app from './App';

app.listen(process.env.PORT, () => {
  const port = process.env.PORT;

  console.log(`SERVER RUNNING ON PORT ${port}`);
});
