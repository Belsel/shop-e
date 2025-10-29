import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import Chart from 'react-apexcharts';

export default function Index() {
    const lineChart = {
        series: [
            {
                name: 'Ventas',
                data: [10, 41, 35, 51, 49, 62, 69, 91],
            },
        ],
        options: {
            chart: { id: 'ventas-line' },
            xaxis: {
                categories: [
                    'Ene',
                    'Feb',
                    'Mar',
                    'Abr',
                    'May',
                    'Jun',
                    'Jul',
                    'Ago',
                ],
            },
        },
    };

    const barChart = {
        series: [{ data: [20, 30, 40, 50, 60] }],
        options: {
            chart: { type: 'bar' as const },
            xaxis: { categories: ['A', 'B', 'C', 'D', 'E'] },
        },
    };

    const pieChart = {
        series: [44, 55, 13, 43],
        options: {
            labels: ['Marketing', 'Ventas', 'Desarrollo', 'Soporte'],
        },
    };
    return (
        <AppLayout>
            <Head title="Graphs" />
            <div className="min-h-screen space-y-8 bg-gray-100 p-6">
                <h1 className="text-center text-3xl font-bold">
                    Expenses data
                </h1>

                <div className="rounded bg-white p-4 shadow">
                    <h2 className="mb-2 text-xl font-semibold">
                        Gráfico de líneas
                    </h2>
                    <Chart
                        options={lineChart.options}
                        series={lineChart.series}
                        type="line"
                        height={300}
                    />
                </div>

                <div className="rounded bg-white p-4 shadow">
                    <h2 className="mb-2 text-xl font-semibold">
                        Gráfico de barras
                    </h2>
                    <Chart
                        options={barChart.options}
                        series={barChart.series}
                        type="bar"
                        height={300}
                    />
                </div>

                <div className="rounded bg-white p-4 shadow">
                    <h2 className="mb-2 text-xl font-semibold">
                        Gráfico de pastel
                    </h2>
                    <Chart
                        options={pieChart.options}
                        series={pieChart.series}
                        type="pie"
                        height={300}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
