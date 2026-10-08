const METRICS = [
  "Users",
  "DAU",
  "MAU",
  "Retention",
  "Paid conversion",
  "CAC",
  "LTV",
  "Revenue",
  "Institutional pilots",
  "Communities",
  "Digital Twins",
];

export function InvestorMetricGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {METRICS.map((label) => (
        <div key={label} className="rounded-2xl border border-white/15 bg-[#141428] p-5">
          <p className="text-sm font-semibold text-[#F7F3FF]">{label}</p>
          <p className="mt-2 text-2xl font-bold text-white">—</p>
          <p className="mt-1 text-xs text-[#C9C5D8]">Coming as product data becomes available</p>
        </div>
      ))}
    </div>
  );
}
