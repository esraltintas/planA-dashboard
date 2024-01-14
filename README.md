# Plan A Frontend Coding Challenge

## Intro

Plan A helps companies monitor, reduce, and offset their carbon footprint, based on the data
they input about their emissions. Though this gives individual companies visibility on their
own emissions, it doesn't give us a clear idea on our progress on a country level.
This task addresses the other side of the problem; using satellite data to estimate the
amount of GHG emissions in the atmosphere over time to measure our actual impact.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/esraltintas/planA-dashboard.git
   ```

2. Run the test suite:

## Install

It's recommended to install `yarn`:

```
npm install --global yarn
```

`npm` is also possible, but you may run into peer dependency issues. You can get around them with the `--legacy-peer-deps` flag.

To run the application, use `yarn install`

## Available Scripts

### `yarn start`

### `yarn test`

### `yarn lint`

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Header

The header of the amount of GHG emissions application may include the PlanA logo

## Product Dashboard Card

Before initiating the procurement process, users come across the "Dashboard Product Card." This card offers a snapshot of available products, presenting essential details such as:

- Title
- Description

## Project Features

### Select GHG Type

The project provides users with the flexibility to choose the type of Greenhouse Gas (GHG) data they want to explore. Whether it's carbon dioxide, methane, or any other GHG type, users can easily customize their data view.

### Date Range Selection

To cater to diverse analysis needs, the project includes a user-friendly date range selection feature. Users can specify a start date and end date, allowing them to focus on a particular timeframe for a more targeted and insightful analysis.

### Interactive Charts

Visualizing environmental data is made easy with the interactive charting feature. The project utilizes Recharts library to create dynamic and informative charts. Users can observe trends, compare data, and gain valuable insights into GHG densities over time.

To leverage these features effectively, refer to the documentation or user guide for detailed instructions on how to make the most out of the GHG type selection, date range selection, and charting capabilities.

## Libraries

Please use the following libraries for your solution.

- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [recharts](https://recharts.org/en-US/)
- [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
