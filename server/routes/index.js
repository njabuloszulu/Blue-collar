const { poolPromise } = require("../connection/DB");

const Routes = (app) => {
  app.get("/query", async (req, res) => {
    try {
      // console.log("pool", poolPromise);
      const pool = await poolPromise;
      const results = await pool.query(`select * from bluecollar.applicant`);
      console.log('results', results.rows[0])
      res.send(results.rows[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });
};

module.exports = { Routes };
