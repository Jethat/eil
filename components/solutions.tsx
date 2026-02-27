'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  HardHat,
  FlaskConical,
  Leaf,
  Settings2,
  CheckCircle2,
} from 'lucide-react'

const solutions = [
  {
    id: 1,
    title: 'Hydrocarbon Processing',
    description:
      'End-to-end engineering consultancy for refineries, petrochemical complexes and natural gas processing units with world-class design capabilities.',
    icon: HardHat,
    features: [
      'Refinery Design & Optimisation',
      'Process Simulation & Modelling',
      'Debottlenecking Studies',
    ],
  },
  {
    id: 2,
    title: 'Fertilisers & Chemicals',
    description:
      'Comprehensive project management and engineering services for fertiliser plants, specialty chemical units and bulk chemical facilities.',
    icon: FlaskConical,
    features: [
      'Ammonia & Urea Plant Design',
      'Specialty Chemical Units',
      'Safety & Hazard Analysis',
    ],
  },
  {
    id: 3,
    title: 'Sustainability & Green Energy',
    description:
      'Driving the energy transition through hydrogen infrastructure, carbon capture, renewable fuel integration and energy efficiency programmes.',
    icon: Leaf,
    features: [
      'Green Hydrogen Projects',
      'Carbon Capture & Storage',
      'Renewable Energy Integration',
    ],
  },
  {
    id: 4,
    title: 'Infrastructure & Pipelines',
    description:
      'Design, project management and inspection services for cross-country pipelines, terminals, storage facilities and utility systems.',
    icon: Settings2,
    features: [
      'Cross-Country Pipeline Design',
      'Terminal & Storage Engineering',
      'Integrity Management Systems',
    ],
  },
]

export default function Solutions() {
  const [selectedId, setSelectedId] = useState(1)
  const selected = solutions.find((s) => s.id === selectedId) || solutions[0]
  const Icon = selected.icon

  return (
    <section id="solutions" className="relative overflow-hidden bg-white">

      {/* ── Hero Banner: refinery.svg with blue overlay ── */}
      <div className="relative w-full overflow-hidden  bg-[#0d3a6e]" style={{ height: '260px' }}>
        {/* SVG fills the full width */}
        <img
          src="/refinery.svg"
          alt="Refinery illustration"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom opacity-60"
          style={{ filter: 'brightness(1.1) saturate(1.2)' }}
        />

        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3a6e]/90 via-[#1a6ed8]/60 to-[#0d3a6e]/80" />

        {/* Title over the banner */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-[#7dd3fc] text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Our <span className="text-[#38bdf8]">Business</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-xl text-base">
            Trusted engineering & consultancy across the energy value chain
          </p>
        </div>

        {/* Bottom fade into white page */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ── Interactive Cards Section ── */}
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-24 py-16">
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">

          {/* Left: Solution Selector */}
          <div className="lg:col-span-2 flex flex-col gap-3 h-[40vh]">
            {solutions.map((solution) => {
              const SIcon = solution.icon
              const isSelected = selectedId === solution.id
              return (
                <button
                  key={solution.id}
                  onClick={() => setSelectedId(solution.id)}
                  className={`w-full rounded-2xl text-left px-5 py-4  border-2 transition-all duration-300 flex items-center gap-4 group flex-1 ${isSelected
                    ? 'border-[#1a6ed8] bg-[#e8f4ff] shadow-md shadow-[#1a6ed8]/20'
                    : 'border-gray-200 bg-white hover:border-[#1a6ed8]/40 hover:bg-[#f0f8ff]'
                    }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isSelected
                      ? 'bg-[#1a6ed8] text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-[#1a6ed8]/10 group-hover:text-[#1a6ed8]'
                      }`}
                  >
                    <SIcon className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-semibold text-sm transition-colors ${isSelected ? 'text-[#1a6ed8]' : 'text-gray-700'
                      }`}
                  >
                    {solution.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:col-span-3 rounded-2xl relative h-[40vh]">
            {/* Refinery SVG watermark behind the panel */}
            <div className="absolute inset-  overflow-hidden rounded-3xl pointer-events-none">
              <img
                src="/refinery.svg"
                alt=""
                aria-hidden
                className="absolute -bottom-4 -right-4 w-64 opacity-[10]"
              />
            </div>

            <div className="relative z-10 h-full rounded-2xl border-2 border-[#1a6ed8]/20 bg-gradient-to-br from-[#f0f8ff] to-white p-8 shadow-xl shadow-[#1a6ed8]/10 flex flex-col">
              {/* Icon + title */}
              <div className="flex  items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1a6ed8] to-[#38bdf8] flex items-center justify-center shadow-lg shadow-[#1a6ed8]/30">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0d3a6e]">{selected.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                {selected.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <p className="text-xs font-bold text-[#1a6ed8] uppercase tracking-widest mb-4">
                  Key Capabilities
                </p>
                <ul className="space-y-3">
                  {selected.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA — pushed to bottom */}
              <div className="mt-auto pt-2">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a6ed8] to-[#38bdf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#1a6ed8]/40 transition-all active:scale-[0.98]">
                  Explore This Solution →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
