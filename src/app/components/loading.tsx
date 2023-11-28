export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 ">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-gray-400"></div>
    </div>
  );
}
