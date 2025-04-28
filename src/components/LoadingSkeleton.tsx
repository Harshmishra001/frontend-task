export function ProductCardSkeleton() {
  return (
    <div className="card skeleton" style={{ overflow: 'hidden' }}>
      <div style={{ height: '250px', width: '100%', backgroundColor: 'var(--gray-200)' }}>
        <div style={{ position: 'absolute', top: '8px', right: '8px', height: '20px', width: '40px', backgroundColor: 'var(--gray-300)', borderRadius: '9999px' }}></div>
      </div>
      <div style={{ padding: '1rem' }}>
        <div style={{ height: '24px', width: '64px', backgroundColor: 'var(--gray-200)', borderRadius: '9999px', marginBottom: '0.5rem' }}></div>
        <div style={{ height: '20px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '75%', marginBottom: '0.5rem' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
          <div style={{ height: '20px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '64px' }}></div>
          <div style={{ height: '16px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '48px' }}></div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="container skeleton" style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ width: '100%', height: '384px', backgroundColor: 'var(--gray-200)', borderRadius: '0.5rem' }}></div>
        <div style={{ width: '100%' }}>
          <div style={{ height: '32px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '75%', marginBottom: '1rem' }}></div>
          <div style={{ height: '24px', backgroundColor: 'var(--gray-200)', borderRadius: '9999px', width: '25%', marginBottom: '1rem' }}></div>
          <div style={{ height: '24px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '25%', marginBottom: '1rem' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{ width: '16px', height: '16px', backgroundColor: 'var(--gray-200)', borderRadius: '9999px' }}></div>
              ))}
            </div>
            <div style={{ height: '16px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '64px', marginLeft: '0.5rem' }}></div>
          </div>
          <div style={{ height: '16px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '100%', marginBottom: '0.5rem' }}></div>
          <div style={{ height: '16px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '100%', marginBottom: '0.5rem' }}></div>
          <div style={{ height: '16px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '75%', marginBottom: '1rem' }}></div>
          <div style={{ height: '40px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '33%', marginTop: '1rem' }}></div>
        </div>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <div style={{ height: '24px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '128px' }}></div>
      </div>
    </div>
  );
}

export function FilterBarSkeleton() {
  return (
    <div className="filter-bar skeleton">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ flex: '1' }}>
          <div style={{ height: '20px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '96px', marginBottom: '0.5rem' }}></div>
          <div style={{ height: '40px', backgroundColor: 'white', borderRadius: '0.25rem', width: '100%' }}></div>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ height: '20px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '64px', marginBottom: '0.5rem' }}></div>
          <div style={{ height: '40px', backgroundColor: 'white', borderRadius: '0.25rem', width: '100%' }}></div>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ height: '20px', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', width: '64px', marginBottom: '0.5rem' }}></div>
          <div style={{ height: '40px', backgroundColor: 'white', borderRadius: '0.25rem', width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
}
