function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col space-y-0.5 px-3 md:px-3.5 py-2 bg-red-950/50 border border-red-800/50 rounded-lg selection:bg-red-800/75 selection:text-white/75">
      <span className="text-red-700 text-sm md:text-base font-medium">
        Failed to load poll
      </span>
      <p className="text-xs md:text-sm">
        {error.message}
      </p>
    </div>
  )
}

export default Error
