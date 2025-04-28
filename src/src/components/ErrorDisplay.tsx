interface ErrorDisplayProps {
  message: string;
}

export default function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-md max-w-md mx-auto">
      <div className="text-teal-500 text-6xl mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Something went wrong</h2>
      <p className="text-gray-600 mb-6">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}
