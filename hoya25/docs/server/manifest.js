const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.BwCOwv5f.js","app":"_app/immutable/entry/app.DTEDfT4I.js","imports":["_app/immutable/entry/start.BwCOwv5f.js","_app/immutable/chunks/Dddn1_z5.js","_app/immutable/chunks/hSpz0eEQ.js","_app/immutable/chunks/QitHyaU9.js","_app/immutable/entry/app.DTEDfT4I.js","_app/immutable/chunks/BuSPJqfp.js","_app/immutable/chunks/DmCwL4lx.js","_app/immutable/chunks/hSpz0eEQ.js","_app/immutable/chunks/Dddn1_z5.js","_app/immutable/chunks/QitHyaU9.js","_app/immutable/chunks/DLlVTwdE.js","_app/immutable/chunks/CyWEXB8q.js","_app/immutable/chunks/Bl0YDEcl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B8VbIYq4.js')),
			__memo(() => import('./chunks/1-NVm2yOnG.js')),
			__memo(() => import('./chunks/2-BDSVQwdj.js')),
			__memo(() => import('./chunks/3-DxH7p0CV.js')),
			__memo(() => import('./chunks/4-B7yOuCzt.js')),
			__memo(() => import('./chunks/5-OBzDb2LI.js')),
			__memo(() => import('./chunks/6-ElnLe2aS.js')),
			__memo(() => import('./chunks/7-C_vey2jF.js')),
			__memo(() => import('./chunks/8-Dl5CsCOy.js')),
			__memo(() => import('./chunks/9-B_UF8EXm.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/backendTest",
				pattern: /^\/backendTest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dataTransfer",
				pattern: /^\/dataTransfer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/demo/lucia",
				pattern: /^\/demo\/lucia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/demo/lucia/login",
				pattern: /^\/demo\/lucia\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/demo/paraglide",
				pattern: /^\/demo\/paraglide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/results",
				pattern: /^\/results\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
