# For Developers
## Commit Message Conventions

We follow specific commit message conventions to maintain a clean and organized commit history. Please follow the guidelines below when crafting your commit messages:

- Use the [Conventional Commits](https://www.conventionalcommits.org/) format.
- Examples of acceptable commit messages:
  - feat: Add new feature X
  - fix: Resolve issue with Y
  - chore: Update dependencies
  - docs: Add documentation for Z
  - refactor: Refactor code
  - test: Add tests
- Commit messages should be clear, concise, and describe the changes made.

To ensure your commits meet these standards, we use Commitlint. Make sure your commit messages pass the Commitlint rules before creating a pull request.

We use Commitlint to enforce commit message conventions. Before making a pull request, ensure your commit messages adhere to the following rules:

- Install Commitlint: `npm install @commitlint/{config-conventional,cli} --save-dev`
- Run Commitlint before creating a PR: `npx commitlint --from=HEAD~1`

Commit messages should follow the Conventional Commits format for better readability and maintainability of our commit history.

# Dawizz - Data Visualization and Analysis Platform

# Data Input and Integration

- **Multi-Source Data Import:** Seamlessly import data from various sources such as CSV, Excel, JSON, APIs, Sheets etc.
- **Real-time Data Connectivity:** Establish connections for live data streaming from APIs, Live Website, Web Applications.
- **Data Cleansing Tools:** Provide tools to clean and preprocess data, including handling missing values and outliers.
- **Schema Mapping and Auto-Detection:** Automatically map and detect data schemas for efficient integration.
- **Historical Data Versioning:** Store historical versions of imported datasets for traceability and comparison.

# Visualization and Exploration

- **Customizable Dashboards:** Create personalized dashboards with customizable layouts, widgets, and themes.
- **Rich Chart Library:** Offer a diverse library of charts, including line, bar, scatter, histogram, bubble, treemap, and waterfall charts.
- **3D Visualization Support:** Enable 3D visualization for enhanced depth and perspective in data representation.
- **Hierarchical Data Representation:** Visualize hierarchical or nested data structures like tree maps or sunburst diagrams.
- **Network Graphs:** Visualize complex relationships between entities with network or graph-based representations.

# Analysis and Interactivity

- **Drag-and-Drop Analytics:** Enable intuitive drag-and-drop tools for quick data analysis and manipulation.
- **Advanced Filters and Segmentation:** Facilitate complex filtering and segmentation options for precise data slicing.
- **Statistical Analysis Tools:** Provide statistical functions for descriptive and inferential analysis (mean, median, regression, ANOVA).
- **Machine Learning Insights:** Generate basic ML-driven insights (correlation analysis, clustering) without user-defined models.
- **Time-Series Analysis:** Offer tools for time-based analysis, including trend identification and seasonal patterns.

# Collaboration and Sharing

- **Real-time Collaboration:** Enable multiple users to collaborate simultaneously on the same dashboard.
- **Commenting and Annotations:** Add comments and annotations to specific data points or visualizations.
- **Scheduled Reports and Alerts:** Set up scheduled reports and alerts for timely notifications and sharing.
- **Role-Based Access Control:** Implement granular access controls for different user roles and permissions.
- **Embedding Capabilities:** Allow embedding visualizations into external websites or applications.

# Performance and Optimization

- **Data Compression and Optimization:** Optimize data storage and rendering for faster performance, especially with large datasets.
- **Lazy Loading for Big Data:** Implement lazy loading techniques for smoother handling of large datasets.
- **Caching Mechanisms:** Utilize caching strategies to improve response times and reduce server load.
- **Parallel Processing:** Employ parallel processing techniques for faster computations and rendering.
- **Offline Mode:** Provide limited functionality in an offline mode for continued access to visualizations.

# Security and Compliance

- **Data Encryption:** Ensure data security through encryption mechanisms during transmission and storage with the help of Supabase.
- **Audit Trails:** Maintain detailed logs and audit trails of user actions for accountability.
- **Two-Factor Authentication:** Offer enhanced security measures with two-factor authentication for user access.
- **Secure Data Sharing:** Implement secure sharing mechanisms for sensitive or confidential data.

# Additional Functionalities

- **Predictive Analytics Toolbox:** Offer basic predictive analysis tools (linear regression, forecasting) for users.
- **Dynamic Data Alerts:** Automatically trigger alerts based on predefined thresholds or conditions.
- **Data Comparison and Benchmarking:** Enable easy comparison of multiple datasets or benchmarks.
- **Anomaly Detection Algorithms:** Incorporate algorithms to detect anomalies or outliers in datasets.
- **Data Export Automation:** Automate data export processes for seamless integration with other tools or systems.
