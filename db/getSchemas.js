async function getSchemas() {
    const client = new Client(dbConfig);
    try {
      await client.connect();
      const res = await client.query(`
        SELECT messages
        FROM messages
        WHERE messages NOT IN ('information_schema', 'pg_catalog', 'public');
      `);
      return res.rows.map(row => row.schema_name);
    } catch (err) {
      console.error('Error retrieving schemas:', err);
    } finally {
      await client.end();
    }
  }