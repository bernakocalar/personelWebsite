export default function Skills() {
    const reactLogo = "/assets/react.png";
    const cssLogo = "/assets/css.png";
    const githubLogo = "/assets/github-logo.png";
    const reduxLogo = "/assets/redux.png";
    const vsStudioLogo = "/assets/vsStudio.png";
    const jsLogo = "/assets/javascript.png";
  
    return (
      <section className="grid grid-cols-3 gap-8 mx-60">
        {/* 1. Sütun */}
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold mt-4 text-[#4731D3]" >Skills</h2>
        </div>
  
        {/* 2. Sütun */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <img src={reactLogo} className="w-32 h-32 object-contain bg-white p-4 rounded-lg" alt="React Logo" />
            <p className="text-2xl font-bold text-gray-700">React</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={reduxLogo} className="w-32 h-32 object-contain bg-white p-4 rounded-lg" alt="Redux Logo" />
            <p className="text-2xl font-bold text-gray-700">Redux</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={vsStudioLogo} className="w-32 h-32 object-contain bg-white p-4 rounded-lg" alt="VS Code Logo" />
            <p className="text-2xl font-bold text-gray-700">VS Code</p>
          </div>
        </div>
  
        {/* 3. Sütun */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <img src={jsLogo} className="w-32 h-32 object-contain bg-white p-4 rounded-lg" alt="JavaScript Logo" />
            <p className="text-2xl font-bold text-gray-700">JavaScript</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={githubLogo} className="w-32 h-32 object-contain bg-white p-4 rounded-lg" alt="GitHub Logo" />
            <p className="text-2xl font-bold text-gray-700">GitHub</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={cssLogo} className="w-32 h-32 object-contain bg-white p-4 rounded-lg" alt="css Logo" />
            <p className="text-2xl font-bold text-gray-700">CSS</p>
          </div>
        </div>
      </section>
    );
  }
  