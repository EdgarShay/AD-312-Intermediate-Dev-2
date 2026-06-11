import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import "./PollDashboard.css";

export default function PollDashboard() {
    const [votes, setVotes] = useState({
        React: 0,
        Vue: 0,
        Angular: 0,
    });

    const canvasRef = useRef(null);
    const chartInstanceRef = useRef(null);

    const vote = (framework) => {
        setVotes((prev) => ({
            ...prev,
            [framework]: prev[framework] + 1,
        }));
    };

    const resetVotes = () => {
        setVotes({
            React: 0,
            Vue: 0,
            Angular: 0,
        });
    };

    useEffect(() => {
        const values = Object.values(votes);

        if (!chartInstanceRef.current) {
            chartInstanceRef.current = new Chart(
                canvasRef.current,
                {
                    type: "bar",
                    data: {
                        labels: Object.keys(votes),
                        datasets: [
                            {
                                label: "Votes",
                                data: values,
                                borderWidth: 1,
                            },
                        ],
                    },
                }
            );
        } else {
            chartInstanceRef.current.data.datasets[0].data =
                values;

            chartInstanceRef.current.update();
        }

        // Destroying the previous Chart.js instance
        // prevents multiple charts from attaching
        // to the same canvas, which causes rendering
        // errors and memory leaks.

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [votes]);

    const totalVotes =
        votes.React +
        votes.Vue +
        votes.Angular;

    return (
        <div className="dashboard">
            <h1>Favorite JavaScript Framework</h1>

            <div className="vote-card">
                Total Votes: {totalVotes}
            </div>

            <div className="buttons">
                <button onClick={() => vote("React")}>
                    Vote React
                </button>

                <button onClick={() => vote("Vue")}>
                    Vote Vue
                </button>

                <button onClick={() => vote("Angular")}>
                    Vote Angular
                </button>

                <button onClick={resetVotes}>
                    Reset Votes
                </button>
            </div>

            <canvas ref={canvasRef}></canvas>

            <div className="results">
                <p>React: {votes.React}</p>
                <p>Vue: {votes.Vue}</p>
                <p>Angular: {votes.Angular}</p>
            </div>
        </div>
    );
}