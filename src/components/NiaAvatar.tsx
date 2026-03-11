import { motion } from 'framer-motion';

export default function NiaAvatar() {
  return (
    <div className="nia-avatar-shell">
      <motion.svg
        viewBox="0 0 420 420"
        className="nia-avatar"
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        role="img"
        aria-label="Illustration of Nia, the Asili360 travel assistant"
      >
        <defs>
          <linearGradient id="niaSky" x1="210" y1="20" x2="210" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8E6FF" />
            <stop offset="1" stopColor="#F8EAD3" />
          </linearGradient>
          <linearGradient id="niaMountain" x1="108" y1="172" x2="122" y2="268" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C6D7" />
            <stop offset="1" stopColor="#9D8B7C" />
          </linearGradient>
          <linearGradient id="niaJacket" x1="125" y1="235" x2="289" y2="357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9A2F" />
            <stop offset="1" stopColor="#DF6414" />
          </linearGradient>
          <linearGradient id="niaScarf" x1="145" y1="233" x2="236" y2="284" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F7D32" />
            <stop offset="0.52" stopColor="#9CB933" />
            <stop offset="1" stopColor="#E7C95E" />
          </linearGradient>
          <linearGradient id="niaSkin" x1="173" y1="116" x2="236" y2="246" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B96021" />
            <stop offset="0.5" stopColor="#D57B2E" />
            <stop offset="1" stopColor="#F0A15C" />
          </linearGradient>
          <linearGradient id="niaHair" x1="153" y1="56" x2="255" y2="209" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2C1816" />
            <stop offset="1" stopColor="#0F0C0D" />
          </linearGradient>
          <filter id="niaShadow" x="0" y="0" width="420" height="420" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#7E5526" floodOpacity="0.18" />
          </filter>
        </defs>

        <g filter="url(#niaShadow)">
          <rect x="34" y="28" width="352" height="352" rx="44" fill="url(#niaSky)" />
        </g>

        <g opacity="0.9">
          <path d="M42 124C67 99 108 101 126 128C110 123 94 124 77 133C63 140 51 139 42 124Z" fill="#FFFFFF" fillOpacity="0.82" />
          <path d="M284 108C304 88 339 87 365 110C351 107 338 108 322 116C307 123 293 122 284 108Z" fill="#FFFFFF" fillOpacity="0.82" />
          <path d="M314 140C328 126 353 126 371 142C360 141 350 143 338 149C327 154 318 152 314 140Z" fill="#FFFFFF" fillOpacity="0.76" />
        </g>

        <path d="M64 245C98 197 131 182 162 190C138 208 126 222 118 250L64 245Z" fill="url(#niaMountain)" opacity="0.92" />
        <path d="M56 286C92 264 122 260 158 272C134 278 114 292 100 316L56 286Z" fill="#B6A588" opacity="0.6" />
        <path d="M52 300C108 284 163 284 222 302C270 316 321 318 378 302V362H52V300Z" fill="#E3C171" />
        <path d="M52 338C118 314 168 314 220 332C274 350 327 352 378 337V380H52V338Z" fill="#CFAB58" opacity="0.55" />

        <path d="M86 250C86 231 101 216 120 216C139 216 154 231 154 250H145C145 236 134 226 120 226C106 226 95 236 95 250H86Z" fill="#6C6C35" />
        <rect x="117" y="248" width="6" height="40" rx="3" fill="#6C5635" />
        <path d="M112 278C115 269 120 265 127 264C126 272 124 278 120 284L112 278Z" fill="#C47A30" />
        <path d="M313 294C317 281 326 272 337 269C339 281 337 294 334 306L313 294Z" fill="#87724A" />
        <path d="M329 264C339 252 352 247 367 249C370 261 365 276 358 288C345 286 335 278 329 264Z" fill="#9B8356" />
        <path d="M329 264C337 256 347 252 358 254" stroke="#B89B66" strokeWidth="3" strokeLinecap="round" />

        <motion.g animate={{ x: [0, 4, 0], y: [0, -3, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}>
          <path d="M48 138C60 129 75 126 90 130C82 134 76 141 71 149L48 138Z" fill="#74543E" />
          <path d="M69 145C82 136 95 133 108 136C98 141 91 150 88 161L69 145Z" fill="#F59A34" />
          <path d="M84 145C94 140 101 140 110 143L102 154L84 145Z" fill="#6FA14A" />
        </motion.g>
        <motion.g animate={{ x: [0, -5, 0], y: [0, 2, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
          <path d="M64 186C74 180 86 179 98 182C90 186 86 192 82 199L64 186Z" fill="#85674C" />
          <path d="M80 191C90 184 100 182 110 184C103 189 98 196 96 204L80 191Z" fill="#E5A84A" />
        </motion.g>

        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}>
          <path d="M157 147C154 114 166 87 191 74C217 60 248 68 263 92C272 106 276 122 271 149C268 133 261 120 250 112C236 100 218 95 194 101C178 106 165 120 157 147Z" fill="url(#niaHair)" />
          <ellipse cx="214" cy="82" rx="40" ry="30" fill="#1A1213" />
          <path d="M180 86C195 58 228 55 246 81C232 75 217 73 201 76C192 77 186 80 180 86Z" fill="#2C1816" />
          <path d="M173 94C184 74 201 66 224 68C244 69 258 80 264 97" stroke="#8E5419" strokeWidth="5" strokeLinecap="round" />
          <path d="M168 102C183 87 198 81 214 80C230 79 246 85 262 102" stroke="#3B2521" strokeWidth="9" strokeLinecap="round" strokeOpacity="0.82" />
          <path d="M174 109C180 147 173 184 164 229" stroke="#1C1516" strokeWidth="13" strokeLinecap="round" />
          <path d="M251 107C259 140 258 176 259 223" stroke="#1C1516" strokeWidth="13" strokeLinecap="round" />
          <path d="M185 114C187 149 181 179 176 205" stroke="#322122" strokeWidth="8" strokeLinecap="round" />
          <path d="M240 113C245 145 245 173 244 203" stroke="#322122" strokeWidth="8" strokeLinecap="round" />
        </motion.g>

        <path d="M167 155C167 125 188 102 216 102C244 102 265 125 265 155V188C265 220 242 247 214 247C186 247 163 220 163 188L167 155Z" fill="url(#niaSkin)" />
        <path d="M186 156C194 149 202 147 213 148" stroke="#3A221A" strokeWidth="6" strokeLinecap="round" />
        <path d="M226 148C236 147 245 149 252 156" stroke="#3A221A" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="196" cy="173" rx="8" ry="9" fill="#251715" />
        <ellipse cx="236" cy="173" rx="8" ry="9" fill="#251715" />
        <circle cx="198" cy="171" r="2" fill="#FFFFFF" fillOpacity="0.75" />
        <circle cx="238" cy="171" r="2" fill="#FFFFFF" fillOpacity="0.75" />
        <path d="M209 176C211 184 211 191 209 198" stroke="#A85D31" strokeWidth="4" strokeLinecap="round" />
        <path d="M192 213C200 222 210 226 223 225C231 224 238 221 244 214" stroke="#8C3418" strokeWidth="5" strokeLinecap="round" />
        <path d="M194 216C203 220 214 221 224 220" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.82" />
        <circle cx="172" cy="187" r="10" fill="#E79252" fillOpacity="0.45" />
        <circle cx="254" cy="188" r="10" fill="#E79252" fillOpacity="0.45" />

        <circle cx="168" cy="188" r="13" stroke="#F2C44C" strokeWidth="5" fill="none" />
        <circle cx="261" cy="190" r="13" stroke="#F2C44C" strokeWidth="5" fill="none" />

        <path d="M138 340C146 279 171 250 213 250C254 250 282 278 296 340" fill="url(#niaJacket)" />
        <path d="M176 259C189 252 201 249 215 249C230 249 243 252 256 260L240 334H183L176 259Z" fill="#FAF3E4" />
        <path d="M169 267C188 281 222 281 256 267" stroke="#5E8E2D" strokeWidth="11" strokeLinecap="round" />
        <path d="M162 255C187 236 237 239 262 259C249 273 240 286 236 300C221 294 201 293 185 298C181 282 173 268 162 255Z" fill="url(#niaScarf)" />
        <path d="M165 267C181 257 194 255 206 257C220 259 233 266 248 277" stroke="#FFF0B9" strokeWidth="7" strokeLinecap="round" opacity="0.7" />
        <path d="M178 302L245 302" stroke="#1B2530" strokeWidth="7" strokeLinecap="round" />
        <path d="M189 301L196 318L208 302L219 318L229 301L239 318" stroke="#D4491A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="168" y="320" width="84" height="15" rx="7.5" fill="#2B2C31" />
        <rect x="182" y="316" width="10" height="23" rx="4" fill="#F5CF5F" />
        <rect x="230" y="316" width="10" height="23" rx="4" fill="#F5CF5F" />

        <path d="M139 277L117 318" stroke="#223448" strokeWidth="10" strokeLinecap="round" />
        <path d="M289 276L311 316" stroke="#223448" strokeWidth="10" strokeLinecap="round" />
        <rect x="88" y="260" width="80" height="64" rx="16" fill="#1D2430" />
        <circle cx="120" cy="292" r="26" fill="#0F141C" />
        <circle cx="120" cy="292" r="18" fill="#202D40" />
        <circle cx="120" cy="292" r="11" fill="#364C6A" />
        <rect x="105" y="248" width="28" height="18" rx="7" fill="#29303A" />
        <rect x="186" y="292" width="103" height="70" rx="10" fill="#2A2B31" />
        <rect x="192" y="298" width="91" height="58" rx="8" fill="#1A1C22" />

        <path d="M108 320C124 320 142 327 151 338" stroke="#C8772C" strokeWidth="9" strokeLinecap="round" />
        <path d="M253 320C272 325 292 336 304 350" stroke="#C8772C" strokeWidth="9" strokeLinecap="round" />
        <circle cx="149" cy="341" r="8" fill="#D98B43" />
        <circle cx="306" cy="353" r="8" fill="#D98B43" />

        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}>
          <path d="M292 165C313 149 343 151 361 168C347 168 333 171 320 178C307 185 297 182 292 165Z" fill="#FFFFFF" fillOpacity="0.92" />
          <path d="M316 172L330 184" stroke="#D9D0C2" strokeWidth="3" strokeLinecap="round" />
          <path d="M325 171C333 165 345 165 354 170" stroke="#E06D21" strokeWidth="10" strokeLinecap="round" />
          <circle cx="350" cy="171" r="10" fill="#35B34A" />
          <path d="M345 171L349 175L356 167" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
