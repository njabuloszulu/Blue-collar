const { poolPromise } = require("../connection/DB");
const { hashedPassword } = require("../security/hashedPassword");
const { createToken } = require("../security/generator");
const bcrypt = require("bcrypt");

const Routes = (app) => {
  app.get("/query", async (req, res) => {
    try {
      const pool = await poolPromise;
      const results = await pool.query(`select * from bluecollar.employers`);
      res.send(results.rows[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  app.post("/query/register", async (req, res) => {
    const { name, surname, email, physicalAddress, password } = req.body;
    try {
      const user = await poolPromise;
      const result = await user.query(
        `select * from bluecollar.applicant where email =$1 `,
        [email]
      );
      if (result.rows.length !== 0) {
        return res.status(403).send("email already exist ");
      }
      const passwordHash = await hashedPassword(password);
      const results = await user.query( 
        `insert into bluecollar.applicant(name,surname,email,physicalAddress,password) values($1,$2,$3,$4,$5)`,
        [name, surname, email, physicalAddress, passwordHash]
      );
      const token = createToken(results.rows[0]);
      res.send({ token });
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  app.post("/query/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await poolPromise;
      const results = await user.query(
        `select * from bluecollar.applicant where email =$1 `,
        [email]
      );
      if (results.rows.length === 0) {
        return res.status(401).json("email or password is incorrect");
      }

      const isValid = await bcrypt.compare(password, results.rows[0].password);

      if (!isValid) {
        return res.status(401).json("email or password is incorrect");
      }

      const token = createToken(results.rows[0]);
      res.send({ token });
    } catch (error) {
      res.status(500).json(error.message);
    }
  });
};

module.exports = { Routes };
