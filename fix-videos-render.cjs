const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the video-lectures block
const targetStr = `          {state === 'video-lectures' && (
            <motion.div key="video-lectures" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
              <div className="flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">SFK Media Lab</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Elite Video Lecture Series</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>

              <div className="bg-brand-green text-brand-gold p-16 rounded-[64px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="w-32 h-32 bg-brand-gold text-brand-green rounded-[40px] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
                      <Youtube className="w-16 h-16" />
                    </div>
                    <div className="space-y-6 max-w-2xl text-center md:text-left">
                       <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">{siteConfig.videoTitle || VIDEO_PLAYLIST.title}</h3>
                       <p className="text-brand-gold/70 font-bold text-lg leading-relaxed">{VIDEO_PLAYLIST.description}</p>
                       <button 
                         onClick={() => window.open(siteConfig.videoUrl || VIDEO_PLAYLIST.url, '_blank')}
                         className="px-10 py-5 bg-brand-gold text-brand-green rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 w-full md:w-fit justify-center"
                       >
                         Launch Full Playlist <Globe className="w-5 h-5" />
                       </button>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-24">
                <div className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[48px] space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="p-4 bg-red-500/10 text-red-500 rounded-2xl">
                        <Youtube className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black text-brand-green dark:text-brand-gold uppercase tracking-widest">Youtube Access</h4>
                   </div>
               <p className="text-slate-500 font-bold leading-relaxed">Direct synchronization with the official SFK Academy Youtube channel. All lectures are hosted and updated regularly on the primary playlist.</p>
                </div>
                <div className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[48px] space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="p-4 bg-brand-gold/10 text-brand-gold rounded-2xl">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black text-brand-green dark:text-brand-gold uppercase tracking-widest">Exclusive Content</h4>
                   </div>
                   <p className="text-slate-500 font-bold leading-relaxed">Premium members get additional early access and downloadable high-resolution worksheets accompanying every lecture module.</p>
                </div>
              </div>
            </motion.div>
          )}`;

const replaceStr = `          {state === 'video-lectures' && (
            <motion.div key="video-lectures" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
              <div className="flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">SFK Media Lab</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Elite Video Lecture Series</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>

              {(!siteConfig.mediaSections || siteConfig.mediaSections.length === 0) ? (
                 <div className="bg-brand-green text-brand-gold p-16 rounded-[64px] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                   <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                      <div className="w-32 h-32 bg-brand-gold text-brand-green rounded-[40px] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
                        <Youtube className="w-16 h-16" />
                      </div>
                      <div className="space-y-6 max-w-2xl text-center md:text-left">
                         <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">{siteConfig.videoTitle || VIDEO_PLAYLIST.title}</h3>
                         <p className="text-brand-gold/70 font-bold text-lg leading-relaxed">{VIDEO_PLAYLIST.description}</p>
                         <button 
                           onClick={() => window.open(siteConfig.videoUrl || VIDEO_PLAYLIST.url, '_blank')}
                           className="px-10 py-5 bg-brand-gold text-brand-green rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 w-full md:w-fit justify-center"
                         >
                           Launch Full Playlist <Globe className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="space-y-12">
                   {siteConfig.mediaSections.map((section: any, sIdx: number) => (
                      <div key={sIdx} className="space-y-6">
                         <h3 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{section.title}</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.videos.map((vid: any, vIdx: number) => {
                               // Extract YouTube ID safely
                               let ytId = '';
                               const match = vid.url.match(/(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&v=))([^&\\n\\?\\#]+)/);
                               if (match && match[1]) ytId = match[1];

                               return (
                                 <div key={vIdx} className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-brand-green hover:shadow-2xl transition-all">
                                    {ytId ? (
                                      <iframe
                                        className="w-full aspect-video"
                                        src={\`https://www.youtube.com/embed/\${ytId}\`}
                                        title={vid.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                      <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-4 text-center text-slate-500 font-bold">
                                         Invalid Video URL
                                      </div>
                                    )}
                                    <div className="p-6">
                                       <h4 className="font-bold text-lg text-slate-800 dark:text-white line-clamp-2">{vid.title}</h4>
                                       {isAdminUser && (
                                         <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-brand-green font-bold text-center italic">
                                           Add comments logic or edit capabilities via Admin Site Settings.
                                         </div>
                                       )}
                                    </div>
                                 </div>
                               );
                            })}
                         </div>
                      </div>
                   ))}
                </div>
              )}
            </motion.div>
          )}`;

code = code.replace(targetStr, replaceStr);

fs.writeFileSync('src/App.tsx', code);
console.log('Done rendering video UI');
