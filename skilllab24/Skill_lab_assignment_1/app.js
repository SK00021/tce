const express = require('express');
const app = express();
const middleware = require('./middleware/applicationMiddleware');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Express setup and configurations
app.use(express.json());
app.use(middleware.commonMiddleware);

// Routes
app.use('/api/auth', authRoutes); // Updated route path
app.use('/api/blogs', blogRoutes); // Updated route path

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
