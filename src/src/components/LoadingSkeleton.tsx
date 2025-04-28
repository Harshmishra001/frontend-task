export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-64 w-full bg-teal-50">
        <div className="absolute top-2 right-2 h-5 w-10 bg-teal-100 rounded-full"></div>
      </div>
      <div className="p-4">
        <div className="h-6 w-16 bg-teal-50 rounded-full mb-2"></div>
        <div className="h-5 bg-gray-100 rounded w-3/4 mb-2"></div>
        <div className="flex justify-between items-center mt-2">
          <div className="h-5 bg-teal-50 rounded w-16"></div>
          <div className="h-4 bg-gray-100 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-4 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-96 bg-teal-50 rounded-lg"></div>
        <div className="w-full md:w-1/2">
          <div className="h-8 bg-gray-100 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-teal-50 rounded-full w-1/4 mb-4"></div>
          <div className="h-6 bg-teal-50 rounded w-1/4 mb-4"></div>
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-100 rounded-full"></div>
              ))}
            </div>
            <div className="h-4 bg-gray-100 rounded w-16 ml-2"></div>
          </div>
          <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-100 rounded w-3/4 mb-4"></div>
          <div className="h-10 bg-teal-100 rounded-md w-1/3 mt-4"></div>
        </div>
      </div>
      <div className="mt-8">
        <div className="h-6 bg-teal-50 rounded w-32"></div>
      </div>
    </div>
  );
}

export function FilterBarSkeleton() {
  return (
    <div className="bg-teal-50 p-4 rounded-lg shadow-sm mb-6 animate-pulse">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="h-5 bg-teal-100 rounded w-24 mb-2"></div>
          <div className="h-10 bg-white rounded-md w-full"></div>
        </div>
        <div className="w-full md:w-48">
          <div className="h-5 bg-teal-100 rounded w-16 mb-2"></div>
          <div className="h-10 bg-white rounded-md w-full"></div>
        </div>
        <div className="w-full md:w-48">
          <div className="h-5 bg-teal-100 rounded w-16 mb-2"></div>
          <div className="h-10 bg-white rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
}
