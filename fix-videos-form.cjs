const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const tSettings = `  const handleSettingsUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updates = {
      academyName: formData.get('academyName'),
      heroHeading1: formData.get('heroHeading1'),
      heroHeading2: formData.get('heroHeading2'),
      missionStatement: formData.get('missionStatement'),
      founderBio: formData.get('founderBio'),
      videoTitle: formData.get('videoTitle'),
      videoUrl: formData.get('videoUrl'),
    };`;

const rSettings = `  const handleSettingsUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updates: any = {
      academyName: formData.get('academyName'),
      heroHeading1: formData.get('heroHeading1'),
      heroHeading2: formData.get('heroHeading2'),
      missionStatement: formData.get('missionStatement'),
      founderBio: formData.get('founderBio'),
      videoTitle: formData.get('videoTitle'),
      videoUrl: formData.get('videoUrl'),
    };
    
    // Parse the advanced JSON fields
    try {
      const mediaSectionsStr = formData.get('mediaSectionsJson');
      if (mediaSectionsStr) {
        updates.mediaSections = JSON.parse(mediaSectionsStr.toString());
      }
    } catch (err) {
      alert("Invalid JSON format for Media Labs Advanced Configuration.");
      return;
    }
  `;

code = code.replace(tSettings, rSettings);

const tForm = `<div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Video Hub URL</label>
                          <input 
                            name="videoUrl" 
                            defaultValue={siteConfig.videoUrl || VIDEO_PLAYLIST.url} 
                            className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold" 
                            placeholder="https://youtube.com/..."
                          />
                        </div>`;

const rForm = tForm + `
                        <div className="md:col-span-2 space-y-2 mt-8 border-t-2 border-slate-100 dark:border-slate-800 pt-8">
                          <div className="flex items-center justify-between pointer-events-none">
                             <label className="text-sm font-black text-brand-green dark:text-brand-gold uppercase tracking-widest">Advanced Media Lab Config (JSON)</label>
                             <span className="text-[10px] bg-red-100 text-red-600 px-3 py-1 rounded-full font-black uppercase">Admin Editor Only</span>
                          </div>
                          <p className="text-xs font-bold text-slate-500 mb-2">Use this to add complete subsections to the Media Lab page. Example: <br/><code className="text-brand-green bg-brand-green/10 p-1 rounded font-mono">[{'{"title":"Physics Series", "videos": [{"title":"1. Vectors", "url":"https://youtube.com/watch?v=..."}]}'}]</code></p>
                          <textarea 
                            name="mediaSectionsJson" 
                            defaultValue={JSON.stringify(siteConfig.mediaSections || [], null, 2)} 
                            rows={10} 
                            className="w-full p-4 bg-slate-900 text-brand-gold font-mono text-xs border-2 border-brand-green/20 rounded-2xl shadow-inner focus:border-brand-green outline-none"
                            placeholder="Enter JSON Array"
                          />
                        </div>`;

code = code.replace(tForm, rForm);

fs.writeFileSync('src/App.tsx', code);
console.log('Done rendering video UI form');
