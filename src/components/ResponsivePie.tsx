import { ResponsivePie } from "@nivo/pie";

const MyResponsivePie = ({ data = [] }: any) => {
  const margin = { top: 30, right: 200, bottom: 30, left: 30 };

  const styles = {
    totalLabel: {
      fontSize: 24,
    },
  };

  const theme = {
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#aaaaaa",
        },
      },
    },
    grid: {
      line: {
        stroke: "#555555",
      },
    },
  };

  return (
    <div
      style={{
        fontFamily: "consolas, sans-serif",
        textAlign: "center",
        position: "relative",
        width: 600,
        height: 600,
      }}
    >
      <ResponsivePie
        margin={margin}
        data={data}
        innerRadius={0.8}
        // enableRadialLabels={false}
        // enableSlicesLabels={false}
        enableArcLinkLabels={false}
        theme={theme}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: margin.right,
          bottom: 0,
          left: margin.left,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // This is important to preserve the chart interactivity
          pointerEvents: "none",
        }}
      >
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          $9.99k
        </h2>
        <p className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          Net Worth
        </p>
      </div>
    </div>
  );
};

export default MyResponsivePie;
