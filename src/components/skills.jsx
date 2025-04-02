export default function Skills() {
    const reactLogo = "/assets/react.png";
    const cssLogo = "/assets/css.png";
    const githubLogo = "/assets/github-logo.png";
    const reduxLogo = "/assets/redux.png";
    const vsStudioLogo = "/assets/vsStudio.png";
    const jsLogo = "/assets/javascript.png";
  
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 md:mx-12 lg:mx-60 p-6">
      <div className="flex flex-col gap-8 text-center sm:text-left">
        <h2 className="text-4xl sm:text-6xl font-bold mt-4 text-[#4731D3]">Skills</h2>
      </div>
    
      <div className="flex flex-col gap-8 items-center sm:items-start">
        <div className="flex items-center gap-6">
          <img src={reactLogo} className="w-20 sm:w-32 h-20 sm:h-32 object-contain bg-white p-4 rounded-lg" alt="React Logo" />
          <p className="text-xl sm:text-2xl font-bold text-gray-700">React</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={reduxLogo} className="w-20 sm:w-32 h-20 sm:h-32 object-contain bg-white p-4 rounded-lg" alt="Redux Logo" />
          <p className="text-xl sm:text-2xl font-bold text-gray-700">Redux</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={vsStudioLogo} className="w-20 sm:w-32 h-20 sm:h-32 object-contain bg-white p-4 rounded-lg" alt="VS Code Logo" />
          <p className="text-xl sm:text-2xl font-bold text-gray-700">VS Code</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center sm:items-start">
        <div className="flex items-center gap-6">
          <img src={jsLogo} className="w-20 sm:w-32 h-20 sm:h-32 object-contain bg-white p-4 rounded-lg" alt="JavaScript Logo" />
          <p className="text-xl sm:text-2xl font-bold text-gray-700">JavaScript</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={githubLogo} className="w-20 sm:w-32 h-20 sm:h-32 object-contain bg-white p-4 rounded-lg" alt="GitHub Logo" />
          <p className="text-xl sm:text-2xl font-bold text-gray-700">GitHub</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={cssLogo} className="w-20 sm:w-32 h-20 sm:h-32 object-contain bg-white p-4 rounded-lg" alt="CSS Logo" />
          <p className="text-xl sm:text-2xl font-bold text-gray-700">CSS</p>
        </div>
      </div>
    </section>
    
    );
  }
  