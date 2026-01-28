import React from 'react'

interface ColorSwatchProps {
  name: string
  cssVar: string
  hex?: string
}

function ColorSwatch({ name, cssVar, hex }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-16 h-16 rounded-lg border border-[var(--warm-border)] shadow-sm"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-[var(--warm-ink-light)] font-mono">{cssVar}</p>
        {hex && <p className="text-xs text-[var(--warm-ink-light)]">{hex}</p>}
      </div>
    </div>
  )
}

interface ColorGroupProps {
  title: string
  colors: ColorSwatchProps[]
}

function ColorGroup({ title, colors }: ColorGroupProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-[var(--warm-ink)]">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colors.map((color) => (
          <ColorSwatch key={color.cssVar} {...color} />
        ))}
      </div>
    </div>
  )
}

interface RadiusSwatchProps {
  name: string
  cssVar: string
}

function RadiusSwatch({ name, cssVar }: RadiusSwatchProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-20 h-20 bg-[var(--brand-accent)]"
        style={{ borderRadius: `var(${cssVar})` }}
      />
      <div className="text-center">
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-[var(--warm-ink-light)] font-mono">{cssVar}</p>
      </div>
    </div>
  )
}

interface SpacingSwatchProps {
  name: string
  value: string
}

function SpacingSwatch({ name, value }: SpacingSwatchProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="h-4 bg-[var(--brand-accent)]"
        style={{ width: value }}
      />
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-[var(--warm-ink-light)]">{value}</p>
      </div>
    </div>
  )
}

export function BrandingColors() {
  const brandColors: ColorSwatchProps[] = [
    { name: 'Brand Accent', cssVar: '--brand-accent', hex: '#E34234' },
    { name: 'Brand Accent Pressed', cssVar: '--brand-accent-pressed', hex: '#C13525' },
    { name: 'Brand Accent Text', cssVar: '--brand-accent-text', hex: '#F5F5DC' },
  ]

  const warmThemeColors: ColorSwatchProps[] = [
    { name: 'Warm Background', cssVar: '--warm-background', hex: '#F5F0E6' },
    { name: 'Warm Background Secondary', cssVar: '--warm-background-secondary', hex: '#EDE8DC' },
    { name: 'Warm Surface', cssVar: '--warm-surface', hex: '#FFFFFF' },
    { name: 'Warm Ink', cssVar: '--warm-ink', hex: '#2C2C2C' },
    { name: 'Warm Ink Medium', cssVar: '--warm-ink-medium', hex: '#4A4A4A' },
    { name: 'Warm Ink Light', cssVar: '--warm-ink-light', hex: '#787878' },
    { name: 'Warm Border', cssVar: '--warm-border', hex: '#D4CFC3' },
  ]

  const semanticColors: ColorSwatchProps[] = [
    { name: 'Background', cssVar: '--background' },
    { name: 'Foreground', cssVar: '--foreground' },
    { name: 'Primary', cssVar: '--primary' },
    { name: 'Primary Foreground', cssVar: '--primary-foreground' },
    { name: 'Secondary', cssVar: '--secondary' },
    { name: 'Secondary Foreground', cssVar: '--secondary-foreground' },
    { name: 'Muted', cssVar: '--muted' },
    { name: 'Muted Foreground', cssVar: '--muted-foreground' },
    { name: 'Accent', cssVar: '--accent' },
    { name: 'Accent Foreground', cssVar: '--accent-foreground' },
    { name: 'Destructive', cssVar: '--destructive' },
  ]

  const uiColors: ColorSwatchProps[] = [
    { name: 'Card', cssVar: '--card' },
    { name: 'Card Foreground', cssVar: '--card-foreground' },
    { name: 'Popover', cssVar: '--popover' },
    { name: 'Popover Foreground', cssVar: '--popover-foreground' },
    { name: 'Border', cssVar: '--border' },
    { name: 'Input', cssVar: '--input' },
    { name: 'Ring', cssVar: '--ring' },
  ]

  const chartColors: ColorSwatchProps[] = [
    { name: 'Chart 1', cssVar: '--chart-1' },
    { name: 'Chart 2', cssVar: '--chart-2' },
    { name: 'Chart 3', cssVar: '--chart-3' },
    { name: 'Chart 4', cssVar: '--chart-4' },
    { name: 'Chart 5', cssVar: '--chart-5' },
  ]

  return (
    <div className="p-8 bg-[var(--warm-background)] min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-[var(--warm-ink)]">FoxRed Design System</h1>
      <p className="text-[var(--warm-ink-medium)] mb-8">Color palette and design tokens</p>

      <ColorGroup title="Brand Colors" colors={brandColors} />
      <ColorGroup title="Warm Theme (Danki-inspired)" colors={warmThemeColors} />
      <ColorGroup title="Semantic Colors" colors={semanticColors} />
      <ColorGroup title="UI Colors" colors={uiColors} />
      <ColorGroup title="Chart Colors" colors={chartColors} />
    </div>
  )
}

export function BrandingTypography() {
  return (
    <div className="p-8 bg-[var(--warm-background)] min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-[var(--warm-ink)]">Typography</h1>
      <p className="text-[var(--warm-ink-medium)] mb-8">Font families and type scale</p>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Font Families</h2>

        <div className="space-y-6">
          <div className="p-6 bg-[var(--warm-surface)] rounded-lg border border-[var(--warm-border)]">
            <p className="text-sm text-[var(--warm-ink-light)] mb-2 font-mono">--font-sans (Geist Sans)</p>
            <p className="font-sans text-2xl text-[var(--warm-ink)]">
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-sans text-lg text-[var(--warm-ink-medium)] mt-2">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
          </div>

          <div className="p-6 bg-[var(--warm-surface)] rounded-lg border border-[var(--warm-border)]">
            <p className="text-sm text-[var(--warm-ink-light)] mb-2 font-mono">--font-mono (Geist Mono)</p>
            <p className="font-mono text-2xl text-[var(--warm-ink)]">
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-mono text-lg text-[var(--warm-ink-medium)] mt-2">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Type Scale</h2>

        <div className="space-y-4 bg-[var(--warm-surface)] p-6 rounded-lg border border-[var(--warm-border)]">
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-xs</span>
            <span className="text-xs text-[var(--warm-ink)]">Extra Small Text (12px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-sm</span>
            <span className="text-sm text-[var(--warm-ink)]">Small Text (14px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-base</span>
            <span className="text-base text-[var(--warm-ink)]">Base Text (16px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-lg</span>
            <span className="text-lg text-[var(--warm-ink)]">Large Text (18px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-xl</span>
            <span className="text-xl text-[var(--warm-ink)]">Extra Large Text (20px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-2xl</span>
            <span className="text-2xl text-[var(--warm-ink)]">2XL Text (24px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-3xl</span>
            <span className="text-3xl text-[var(--warm-ink)]">3XL Text (30px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-4xl</span>
            <span className="text-4xl text-[var(--warm-ink)]">4XL Text (36px)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-20 font-mono">text-5xl</span>
            <span className="text-5xl text-[var(--warm-ink)]">5XL Text (48px)</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Font Weights</h2>

        <div className="space-y-3 bg-[var(--warm-surface)] p-6 rounded-lg border border-[var(--warm-border)]">
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-24 font-mono">font-light</span>
            <span className="font-light text-xl text-[var(--warm-ink)]">Light (300)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-24 font-mono">font-normal</span>
            <span className="font-normal text-xl text-[var(--warm-ink)]">Normal (400)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-24 font-mono">font-medium</span>
            <span className="font-medium text-xl text-[var(--warm-ink)]">Medium (500)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-24 font-mono">font-semibold</span>
            <span className="font-semibold text-xl text-[var(--warm-ink)]">Semibold (600)</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-[var(--warm-ink-light)] w-24 font-mono">font-bold</span>
            <span className="font-bold text-xl text-[var(--warm-ink)]">Bold (700)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BrandingSpacing() {
  const radii: RadiusSwatchProps[] = [
    { name: 'Small', cssVar: '--radius-sm' },
    { name: 'Medium', cssVar: '--radius-md' },
    { name: 'Large', cssVar: '--radius-lg' },
    { name: 'XL', cssVar: '--radius-xl' },
    { name: '2XL', cssVar: '--radius-2xl' },
    { name: '3XL', cssVar: '--radius-3xl' },
    { name: '4XL', cssVar: '--radius-4xl' },
  ]

  const spacingScale: SpacingSwatchProps[] = [
    { name: 'px', value: '1px' },
    { name: '0.5', value: '0.125rem' },
    { name: '1', value: '0.25rem' },
    { name: '2', value: '0.5rem' },
    { name: '3', value: '0.75rem' },
    { name: '4', value: '1rem' },
    { name: '5', value: '1.25rem' },
    { name: '6', value: '1.5rem' },
    { name: '8', value: '2rem' },
    { name: '10', value: '2.5rem' },
    { name: '12', value: '3rem' },
    { name: '16', value: '4rem' },
    { name: '20', value: '5rem' },
    { name: '24', value: '6rem' },
  ]

  return (
    <div className="p-8 bg-[var(--warm-background)] min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-[var(--warm-ink)]">Spacing & Radius</h1>
      <p className="text-[var(--warm-ink-medium)] mb-8">Spacing scale and border radius tokens</p>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Border Radius</h2>
        <p className="text-sm text-[var(--warm-ink-medium)] mb-4">Base radius: 0.625rem (10px)</p>

        <div className="flex flex-wrap gap-6 bg-[var(--warm-surface)] p-6 rounded-lg border border-[var(--warm-border)]">
          {radii.map((radius) => (
            <RadiusSwatch key={radius.cssVar} {...radius} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Spacing Scale</h2>
        <p className="text-sm text-[var(--warm-ink-medium)] mb-4">Tailwind default spacing scale</p>

        <div className="space-y-3 bg-[var(--warm-surface)] p-6 rounded-lg border border-[var(--warm-border)]">
          {spacingScale.map((spacing) => (
            <SpacingSwatch key={spacing.name} {...spacing} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function BrandingShadows() {
  return (
    <div className="p-8 bg-[var(--warm-background)] min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-[var(--warm-ink)]">Shadows & Effects</h1>
      <p className="text-[var(--warm-ink-medium)] mb-8">Box shadows and visual effects</p>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Box Shadows</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg shadow-sm" />
            <p className="text-sm font-medium">shadow-sm</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg shadow" />
            <p className="text-sm font-medium">shadow</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg shadow-md" />
            <p className="text-sm font-medium">shadow-md</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg shadow-lg" />
            <p className="text-sm font-medium">shadow-lg</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg shadow-xl" />
            <p className="text-sm font-medium">shadow-xl</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-[var(--warm-ink)]">Ring (Focus States)</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg ring-1 ring-[var(--ring)]" />
            <p className="text-sm font-medium">ring-1</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg ring-2 ring-[var(--ring)]" />
            <p className="text-sm font-medium">ring-2</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg ring-2 ring-[var(--brand-accent)]" />
            <p className="text-sm font-medium">ring (brand)</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-[var(--warm-surface)] rounded-lg ring-2 ring-offset-2 ring-[var(--brand-accent)]" />
            <p className="text-sm font-medium">ring-offset-2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BrandingDarkMode() {
  return (
    <div className="dark p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Dark Mode</h1>
      <p className="text-muted-foreground mb-8">Dark theme color palette</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { name: 'Background', cssVar: '--background' },
          { name: 'Foreground', cssVar: '--foreground' },
          { name: 'Card', cssVar: '--card' },
          { name: 'Card Foreground', cssVar: '--card-foreground' },
          { name: 'Primary', cssVar: '--primary' },
          { name: 'Primary Foreground', cssVar: '--primary-foreground' },
          { name: 'Secondary', cssVar: '--secondary' },
          { name: 'Secondary Foreground', cssVar: '--secondary-foreground' },
          { name: 'Muted', cssVar: '--muted' },
          { name: 'Muted Foreground', cssVar: '--muted-foreground' },
          { name: 'Accent', cssVar: '--accent' },
          { name: 'Accent Foreground', cssVar: '--accent-foreground' },
          { name: 'Destructive', cssVar: '--destructive' },
          { name: 'Border', cssVar: '--border' },
          { name: 'Input', cssVar: '--input' },
          { name: 'Ring', cssVar: '--ring' },
        ].map((color) => (
          <div key={color.cssVar} className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-lg border border-border shadow-sm"
              style={{ backgroundColor: `var(${color.cssVar})` }}
            />
            <div>
              <p className="font-medium text-sm text-foreground">{color.name}</p>
              <p className="text-xs text-muted-foreground font-mono">{color.cssVar}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
