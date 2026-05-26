const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetProfileUpdate = `const updates: any = {
      academyName: formData.get('academyName'),
      heroHeading1: formData.get('heroHeading1'),
      heroHeading2: formData.get('heroHeading2'),
      missionStatement: formData.get('missionStatement'),
      founderBio: formData.get('founderBio'),
      videoTitle: formData.get('videoTitle'),
      videoUrl: formData.get('videoUrl'),
    };`;
    
const resultProfileUpdate = `const updates: any = {
      academyName: formData.get('academyName'),
      heroHeading1: formData.get('heroHeading1'),
      heroHeading2: formData.get('heroHeading2'),
      missionStatement: formData.get('missionStatement'),
      founderBio: formData.get('founderBio'),
      founderImageUrl: formData.get('founderImageUrl'),
      videoTitle: formData.get('videoTitle'),
      videoUrl: formData.get('videoUrl'),
    };`;
    
code = code.replace(targetProfileUpdate, resultProfileUpdate);

// Replace in the Admin UI
const targetInput = `                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Founder Bio</label>
                          <textarea 
                            name="founderBio" 
                            defaultValue={siteConfig.founderBio || PORTFOLIO_DATA.profile} 
                            rows={4} 
                            className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold" 
                            placeholder="Professional biographical summary..."
                          />
                        </div>`;

const resultInput = targetInput + `
                        <div className="md:col-span-2 space-y-2 mt-4">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Founder Profile Image URL</label>
                          <input 
                            name="founderImageUrl" 
                            defaultValue={siteConfig.founderImageUrl || "https://storage.googleapis.com/aistudio-artifacts-public/db61ce7b-586b-4eeb-b6df-22d735048cd4/image.jpg"} 
                            className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold" 
                            placeholder="https://..."
                          />
                        </div>`;

code = code.replace(targetInput, resultInput);

// Replace the image source in portfolio state
const targetImg = `<img 
                      src="https://storage.googleapis.com/aistudio-artifacts-public/db61ce7b-586b-4eeb-b6df-22d735048cd4/image.jpg" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={PORTFOLIO_DATA.name} 
                    />`;
                    
const resultImg = `<img 
                      src={siteConfig.founderImageUrl || "https://storage.googleapis.com/aistudio-artifacts-public/db61ce7b-586b-4eeb-b6df-22d735048cd4/image.jpg"} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={PORTFOLIO_DATA.name} 
                    />`;

code = code.replace(targetImg, resultImg);

fs.writeFileSync('src/App.tsx', code);
console.log('Added founder image setting');
