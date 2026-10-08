export function GeoAmbition() {
  const steps = ["India", "Asia", "Global"];
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#111322]" aria-label="Geographic ambition: India to Asia to Global">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-full bg-[#EEE7FF] px-4 py-2 text-[#6C2BFF]">{step}</span>
          {i < steps.length - 1 && (
            <span className="text-[#606273] font-normal" aria-hidden>
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
