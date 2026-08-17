import { BUILD_INFO } from '../core/buildInfo'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-5 text-center text-xs text-slate-500">
        <p>{BUILD_INFO.phase} · Architecture {BUILD_INFO.architecture}</p>
        <p className="mt-1">Build {BUILD_INFO.version} · {BUILD_INFO.buildDate}</p>
      </div>
    </footer>
  )
}
