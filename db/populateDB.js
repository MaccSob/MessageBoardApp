async function populateDB(messages, data) {
    const client = new Client(dbConfig);

  
    try {
      await client.connect();
      const messages = 'messages'; // Replace with your actual table name
  
      const insertQuery = `
        INSERT INTO "${messages}"."${messages}" ("column1", "column2", "column3")
        VALUES ($1, $2, $3)
      `;
  
      for (const row of data) {
        await client.query(insertQuery, [row.column1, row.column2, row.column3]);
      }
  
      console.log(`Data inserted into ${messages}.${messages}`);
    } catch (err) {
      console.error(`Error inserting data into ${messages}:`, err);
    } finally {
      await client.end();
    }
  }