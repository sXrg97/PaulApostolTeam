'use client'

import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { btnPrimary } from '../lib/ui';
import { CustomSelect } from './custom-select';

const genderOptions = [
  { value: 'female', label: 'Feminin' },
  { value: 'male', label: 'Masculin' },
];

const activityOptions = [
  { value: '1.2', label: 'Sedentar (0-1 antrenamente/săptămână)' },
  { value: '1.37', label: 'Activitate ușoară (1-3 antrenamente/săptămână)' },
  { value: '1.55', label: 'Activitate moderată (3-5 antrenamente/săptămână)' },
  { value: '1.72', label: 'Activitate foarte activă (6-7 antrenamente/săptămână)' },
  { value: '1.9', label: 'Activitate extremă (sportivi de performanță)' },
];

const fieldClass =
  'w-full min-h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-red-500 focus:ring-2 focus:ring-red-500/30';
const LIMITS = {
  weight: { min: 30, max: 300 },
  height: { min: 100, max: 250 },
  age: { min: 15, max: 100 },
};

const labelClass = 'mb-2 block text-sm font-medium text-zinc-300';

export const CalorieCalculator = () => {
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [bmr, setBmr] = useState(0);
  const [error, setError] = useState('');

  const calculateBMR = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBmr(0);
    setError('');

    if (!weight || !height || !age) {
      setError('Te rugăm să completezi toate câmpurile pentru a calcula necesarul caloric.');
      return;
    }

    const w = parseFloat(weight.replace(',', '.'));
    const h = parseFloat(height.replace(',', '.'));
    const a = parseFloat(age.replace(',', '.'));

    // Limite realiste, ca formula să dea un rezultat cu sens
    const checks: [number, number, number, string][] = [
      [w, LIMITS.weight.min, LIMITS.weight.max, `Greutatea trebuie să fie între ${LIMITS.weight.min} și ${LIMITS.weight.max} kg.`],
      [h, LIMITS.height.min, LIMITS.height.max, `Înălțimea trebuie să fie între ${LIMITS.height.min} și ${LIMITS.height.max} cm.`],
      [a, LIMITS.age.min, LIMITS.age.max, `Vârsta trebuie să fie între ${LIMITS.age.min} și ${LIMITS.age.max} de ani.`],
    ];
    const failed = checks.find(([v, min, max]) => !Number.isFinite(v) || v < min || v > max);
    if (failed) {
      setError(failed[3]);
      return;
    }

    let result = 0;
    if (gender === 'female') {
      result = 655.1 + (9.563 * w) + (1.85 * h) - (4.676 * a);
    } else {
      result = 66.47 + (13.75 * w) + (5.003 * h) - (6.755 * a);
    }
    result *= parseFloat(activityLevel);

    if (!Number.isFinite(result) || result <= 0) {
      setError('Nu am putut calcula un rezultat pentru valorile introduse. Verifică datele și încearcă din nou.');
      return;
    }
    setBmr(Math.round(result));
  };

  return (
    <div id="calculator" className="scroll-mt-24 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:p-10">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
          <Calculator className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Calculator necesar caloric
          </h3>
          <p className="text-sm text-zinc-400">Calculul se face doar în browserul tău, nu salvăm nimic.</p>
        </div>
      </div>

      <form onSubmit={calculateBMR} noValidate className="mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <span id="gender-label" className={labelClass}>Gen</span>
            <CustomSelect id="gender-select" labelId="gender-label" value={gender} options={genderOptions} onChange={setGender} />
          </div>
          <div>
            <label htmlFor="weight-input" className={labelClass}>Greutate (kg)</label>
            <input
              id="weight-input"
              type="number"
              inputMode="decimal"
              min={LIMITS.weight.min}
              max={LIMITS.weight.max}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={fieldClass}
              placeholder="ex. 70"
            />
          </div>
          <div>
            <label htmlFor="height-input" className={labelClass}>Înălțime (cm)</label>
            <input
              id="height-input"
              type="number"
              inputMode="decimal"
              min={LIMITS.height.min}
              max={LIMITS.height.max}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={fieldClass}
              placeholder="ex. 170"
            />
          </div>
          <div>
            <label htmlFor="age-input" className={labelClass}>Vârstă (ani)</label>
            <input
              id="age-input"
              type="number"
              inputMode="numeric"
              min={LIMITS.age.min}
              max={LIMITS.age.max}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={fieldClass}
              placeholder="ex. 30"
            />
          </div>
          <div className="md:col-span-2">
            <span id="activity-label" className={labelClass}>Nivel de activitate</span>
            <CustomSelect id="activity-select" labelId="activity-label" value={activityLevel} options={activityOptions} onChange={setActivityLevel} />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center">
          <button type="submit" className={`${btnPrimary} w-full md:w-auto`}>
            Calculează
          </button>
          <div aria-live="polite" className="min-h-[1.5rem]">
            {error && <p className="text-sm text-red-300">{error}</p>}
            {bmr > 0 && (
              <p className="text-base text-zinc-200 md:text-lg">
                Necesarul tău caloric zilnic este aproximativ{' '}
                <span className="font-display text-3xl font-bold text-red-500">{bmr} calorii</span>
              </p>
            )}
          </div>
        </div>
      </form>

      <p className="mt-8 flex gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
        Rezultatul este o estimare. Dacă ai afecțiuni medicale, consultă medicul înainte de a începe.
      </p>
    </div>
  );
};
