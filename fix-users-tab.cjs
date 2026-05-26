const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

let target = `<button 
                  onClick={() => setAdminTab('quizzes')}
                  className={\`pb-4 px-2 font-black text-xs tracking-widest uppercase transition-all relative \${adminTab === 'quizzes' ? 'text-brand-green dark:text-brand-gold' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}\`}
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Manage Quizzes
                  </div>
                  {adminTab === 'quizzes' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green dark:bg-brand-gold rounded-full" />}
                </button>
              </div>`;

let replacement = target.replace('              </div>', `                <button 
                  onClick={() => setAdminTab('users')}
                  className={\`pb-4 px-2 font-black text-xs tracking-widest uppercase transition-all relative \${adminTab === 'users' ? 'text-brand-green dark:text-brand-gold' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}\`}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Users
                  </div>
                  {adminTab === 'users' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green dark:bg-brand-gold rounded-full" />}
                </button>
              </div>`);

code = code.replace(target, replacement);

let usersTabCode = `
                  {adminTab === 'users' && (
                    <div className="p-12">
                      <h3 className="heading-serif text-3xl font-black text-brand-green dark:text-brand-gold mb-8 flex items-center gap-4">
                        <Users className="w-8 h-8" /> User Management
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-brand-green dark:bg-slate-800 text-brand-gold border-b border-brand-green-hover dark:border-slate-700">
                              <th className="px-8 py-5 text-sm font-black uppercase tracking-widest whitespace-nowrap">Name</th>
                              <th className="px-8 py-5 text-sm font-black uppercase tracking-widest whitespace-nowrap text-center">Score</th>
                              <th className="px-8 py-5 text-sm font-black uppercase tracking-widest whitespace-nowrap text-center">Role</th>
                              <th className="px-8 py-5 text-sm font-black uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                            {allUsers.map((u) => (
                              <tr key={u.email} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                                <td className="px-8 py-6">
                                  <div className="flex flex-col">
                                    <span className="font-black text-slate-800 dark:text-slate-200 text-lg group-hover:text-brand-green dark:group-hover:text-brand-gold transition-colors">{u.name}</span>
                                    <span className="text-sm font-bold text-slate-400 dark:text-slate-500">{u.email}</span>
                                  </div>
                                </td>
                                <td className="px-8 py-6 text-center tabular-nums font-black text-slate-800 dark:text-slate-200">
                                  {u.xp || 0} XP
                                </td>
                                <td className="px-8 py-6 text-center">
                                  <span className="uppercase text-[10px] font-black tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">{u.role || 'student'}</span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                  <select 
                                    className="bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold p-2 outline-none cursor-pointer text-slate-600 dark:text-slate-300"
                                    value={u.role || 'student'}
                                    onChange={(e) => {
                                       setDoc(doc(db, 'students', u.email), { role: e.target.value }, { merge: true });
                                       setAllUsers(allUsers.map(x => x.email === u.email ? { ...x, role: e.target.value as any } : x));
                                    }}
                                  >
                                    <option value="student">Student</option>
                                    <option value="editor">Editor</option>
                                    <option value="admin">Admin</option>
                                  </select>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
`;

code = code.replace("{adminTab === 'settings' && (", usersTabCode + "{adminTab === 'settings' && (");

// script execution without import check
fs.writeFileSync('src/App.tsx', code);
console.log('Modified users tab successfully');
