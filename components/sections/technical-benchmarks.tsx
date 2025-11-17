'use client'

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

const voltageData = [
  { time: '9:00', voltage: 345, regulated: 400 },
  { time: '12:00', voltage: 420, regulated: 400 },
  { time: '15:00', voltage: 340, regulated: 400 },
  { time: '18:00', voltage: 430, regulated: 400 },
  { time: '21:00', voltage: 470, regulated: 400 },
  { time: '24:00', voltage: 380, regulated: 400 }
]

const efficiencyData = [
  { range: '30 kVA', efficiency: 99.5 },
  { range: '100 kVA', efficiency: 99.2 },
  { range: '500 kVA', efficiency: 99.0 },
  { range: '2000 kVA', efficiency: 98.8 },
  { range: '5000 kVA', efficiency: 98.5 }
]

export function TechnicalBenchmarks() {
  return (
    <section id="benchmarks" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Performance</h2>
          <p className="text-lg text-muted-foreground">Real-world performance metrics that matter</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <h3 className="font-bold text-lg mb-6">Voltage Regulation Throughout Day</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={voltageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="voltage" stroke="#ef4444" name="Incoming Voltage" strokeWidth={2} />
                <Line type="monotone" dataKey="regulated" stroke="#22c55e" name="Regulated Output" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-8">
            <h3 className="font-bold text-lg mb-6">Efficiency by Capacity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis domain={[97, 100]} />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Bar dataKey="efficiency" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Response Time', value: '<10ms', subtext: 'Industry fastest' },
            { label: 'Voltage Accuracy', value: '±1%', subtext: 'Precision control' },
            { label: 'Input Range', value: '300-500V', subtext: 'Widest available' },
            { label: 'Efficiency', value: '99.5%', subtext: 'Maximum savings' },
            { label: 'Lifespan', value: '20 years', subtext: 'Built to last' },
            { label: 'Correction Rate', value: '6-15V/s', subtext: 'Up to 500 kVA' }
          ].map((metric, index) => (
            <Card key={index} className="p-4 text-center">
              <p className="text-xs text-muted-foreground mb-2">{metric.label}</p>
              <p className="font-bold text-xl text-primary mb-1">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.subtext}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
