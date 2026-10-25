(()=>{var Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,Uh=1,Wd=2;var Nh=1,Ml=2,li=3,Mi=0,sn=1,Pe=2,Si=0,br=1,Fh=2,Oh=3,Bh=4,Xd=5,Hi=100,$d=101,qd=102,Yd=103,Zd=104,Jd=200,Kd=201,jd=202,Qd=203,Ga=204,Wa=205,tf=206,ef=207,nf=208,rf=209,sf=210,of=211,af=212,lf=213,cf=214,wl=0,Sl=1,Tl=2,Mr=3,El=4,Al=5,Cl=6,Rl=7,kh=0,hf=1,uf=2,Ti=0,df=1,ff=2,pf=3,$o=4,mf=5,gf=6,xf=7;var zh=300,Pr=301,Lr=302,Il=303,Pl=304,qo=306,_s=1e3,Vi=1001,Xa=1002,En=1003,_f=1004;var Yo=1005;var zn=1006,Ll=1007;var Ki=1008;var Xn=1009,Vh=1010,Hh=1011,Us=1012,Dl=1013,ji=1014,ci=1015,Ns=1016,Ul=1017,Nl=1018,Fs=1020,Gh=35902,Wh=35899,Xh=1021,$h=1022,Cn=1023,ys=1026,Os=1027,qh=1028,Fl=1029,Yh=1030,Ol=1031;var Bl=1033,Zo=33776,Jo=33777,Ko=33778,jo=33779,kl=35840,zl=35841,Vl=35842,Hl=35843,Gl=36196,Wl=37492,Xl=37496,$l=37808,ql=37809,Yl=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,rc=37820,sc=37821,oc=36492,ac=36494,lc=36495,cc=36283,hc=36284,uc=36285,dc=36286;var fo=2300,$a=2301,Ha=2302,Mh=2400,wh=2401,Sh=2402;var yf=3200,vf=3201;var Zh=0,bf=1,Ei="",He="srgb",wr="srgb-linear",po="linear",fe="srgb";var yr=7680;var Th=519,Mf=512,wf=513,Sf=514,Jh=515,Tf=516,Ef=517,Af=518,Cf=519,qa=35044;var Kh="300 es",kn=2e3,mo=2001;var ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=1234567,lo=Math.PI/180,vs=180/Math.PI;function ni(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function jh(n,t){return(n%t+t)%t}function ym(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function vm(n,t,e){return n!==t?(e-n)/(t-n):0}function co(n,t,e){return(1-e)*n+e*t}function bm(n,t,e,i){return co(n,t,1-Math.exp(-e*i))}function Mm(n,t=1){return t-Math.abs(jh(n,t*2)-t)}function wm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Tm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Em(n,t){return n+Math.random()*(t-n)}function Am(n){return n*(.5-Math.random())}function Cm(n){n!==void 0&&(hd=n);let t=hd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rm(n){return n*lo}function Im(n){return n*vs}function Pm(n){return(n&n-1)===0&&n!==0}function Lm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Um(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),p=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*p,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*p,a*l);break;case"ZYZ":n.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Bs={DEG2RAD:lo,RAD2DEG:vs,generateUUID:ni,clamp:te,euclideanModulo:jh,mapLinear:ym,inverseLerp:vm,lerp:co,damp:bm,pingpong:Mm,smoothstep:wm,smootherstep:Sm,randInt:Tm,randFloat:Em,randFloatSpread:Am,seededRandom:Cm,degToRad:Rm,radToDeg:Im,isPowerOfTwo:Pm,ceilPowerOfTwo:Lm,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:Um,normalize:ue,denormalize:Bn},dt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=g;return}if(u!==g||c!==d||l!==f||h!==p){let x=1-a,m=c*d+l*f+h*p+u*g,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let E=Math.sqrt(_),A=Math.atan2(E,m*M);x=Math.sin(x*A)/E,a=Math.sin(a*A)/E}let v=a*M;if(c=c*x+d*v,l=l*x+f*v,h=h*x+p*v,u=u*x+g*v,x===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-a*f,t[e+2]=l*p+h*f+a*d-c*u,t[e+3]=h*p-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ud.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new P,ud=new An,Kt=class n{constructor(t,e,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],g=r[0],x=r[3],m=r[6],M=r[1],_=r[4],v=r[7],E=r[2],A=r[5],N=r[8];return s[0]=o*g+a*M+c*E,s[3]=o*x+a*_+c*A,s[6]=o*m+a*v+c*N,s[1]=l*g+h*M+u*E,s[4]=l*x+h*_+u*A,s[7]=l*m+h*v+u*N,s[2]=d*g+f*M+p*E,s[5]=d*x+f*_+p*A,s[8]=d*m+f*v+p*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,p=e*u+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(r*l-h*i)*g,t[2]=(a*i-r*o)*g,t[3]=d*g,t[4]=(h*e-r*c)*g,t[5]=(r*s-a*e)*g,t[6]=f*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new Kt;function Qh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rf(){let n=go("canvas");return n.style.display="block",n}var dd={};function bs(n){n in dd||(dd[n]=!0,console.warn(n))}function If(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var fd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nm(){let n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===fe&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?po:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:t,whitePoint:i,transfer:po,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),n}var re=Nm();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var es,Ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{es===void 0&&(es=go("canvas")),es.width=t.width,es.height=t.height;let r=es.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fm=0,Ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jc(r[o].image)):s.push(Jc(r[o]))}else s=Jc(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Om=0,Kc=new P,cn=class n extends ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Vi,r=Vi,s=zn,o=Ki,a=Cn,c=Xn,l=n.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ni(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=zh;cn.DEFAULT_ANISOTROPY=1;var de=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],g=c[2],x=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+x)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,E=(m+1)/2,A=(h+d)/4,N=(u+g)/4,O=(p+x)/4;return _>v&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=N/i):v>E?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=O/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=N/s,r=O/s),this.set(i,r,s,e),this}let M=Math.sqrt((x-p)*(x-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(x-p)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let r={width:t,height:e,depth:i.depth},s=new cn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Za{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},xo=class extends cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),xa.subVectors(this.max,js),ns.subVectors(t.a,js),is.subVectors(t.b,js),rs.subVectors(t.c,js),Ni.subVectors(is,ns),Fi.subVectors(rs,is),mr.subVectors(ns,rs);let e=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-mr.z,mr.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,mr.z,0,-mr.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-mr.y,mr.x,0];return!jc(e,ns,is,rs,xa)||(e=[1,0,0,0,1,0,0,0,1],!jc(e,ns,is,rs,xa))?!1:(_a.crossVectors(Ni,Fi),e=[_a.x,_a.y,_a.z],jc(e,ns,is,rs,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mi=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,ga=new Vn,ns=new P,is=new P,rs=new P,Ni=new P,Fi=new P,mr=new P,js=new P,xa=new P,_a=new P,gr=new P;function jc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gr.fromArray(n,s);let a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),c=t.dot(gr),l=e.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bm=new Vn,Qs=new P,Qc=new P,Sr=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Bm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Qc)),this.expandByPoint(Qs.copy(t.center).sub(Qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gi=new P,th=new P,ya=new P,Oi=new P,eh=new P,va=new P,nh=new P,Gi=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){th.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(th);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ya),a=Oi.dot(this.direction),c=-Oi.dot(ya),l=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=s*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(th).addScaledVector(ya,d),f}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,r,s){eh.subVectors(e,t),va.subVectors(i,t),nh.crossVectors(eh,va);let o=this.direction.dot(nh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let c=a*this.direction.dot(va.crossVectors(Oi,va));if(c<0)return null;let l=a*this.direction.dot(eh.cross(Oi));if(l<0||c+l>o)return null;let h=-a*Oi.dot(nh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,r,s,o,a,c,l,h,u,d,f,p,g,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,u,d,f,p,g,x)}set(t,e,i,r,s,o,a,c,l,h,u,d,f,p,g,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=g,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,p=l*h,g=l*u;e[0]=d+g*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,p=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,g=a*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,p=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*c,f=o*l,p=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,zm)}lookAt(t,e,i){let r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),ba.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=ba.x,r[8]=xn.x,r[1]=Bi.y,r[5]=ba.y,r[9]=xn.y,r[2]=Bi.z,r[6]=ba.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],g=i[6],x=i[10],m=i[14],M=i[3],_=i[7],v=i[11],E=i[15],A=r[0],N=r[4],O=r[8],w=r[12],y=r[1],I=r[5],z=r[9],T=r[13],F=r[2],k=r[6],B=r[10],$=r[14],H=r[3],tt=r[7],L=r[11],C=r[15];return s[0]=o*A+a*y+c*F+l*H,s[4]=o*N+a*I+c*k+l*tt,s[8]=o*O+a*z+c*B+l*L,s[12]=o*w+a*T+c*$+l*C,s[1]=h*A+u*y+d*F+f*H,s[5]=h*N+u*I+d*k+f*tt,s[9]=h*O+u*z+d*B+f*L,s[13]=h*w+u*T+d*$+f*C,s[2]=p*A+g*y+x*F+m*H,s[6]=p*N+g*I+x*k+m*tt,s[10]=p*O+g*z+x*B+m*L,s[14]=p*w+g*T+x*$+m*C,s[3]=M*A+_*y+v*F+E*H,s[7]=M*N+_*I+v*k+E*tt,s[11]=M*O+_*z+v*B+E*L,s[15]=M*w+_*T+v*$+E*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],g=t[7],x=t[11],m=t[15];return p*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*f-i*c*f)+g*(+e*c*f-e*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+x*(+e*l*u-e*a*f-s*o*u+i*o*f+s*a*h-i*l*h)+m*(-r*a*h-e*c*u+e*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],g=t[13],x=t[14],m=t[15],M=u*x*l-g*d*l+g*c*f-a*x*f-u*c*m+a*d*m,_=p*d*l-h*x*l-p*c*f+o*x*f+h*c*m-o*d*m,v=h*g*l-p*u*l+p*a*f-o*g*f-h*a*m+o*u*m,E=p*u*c-h*g*c-p*a*d+o*g*d+h*a*x-o*u*x,A=e*M+i*_+r*v+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return t[0]=M*N,t[1]=(g*d*s-u*x*s-g*r*f+i*x*f+u*r*m-i*d*m)*N,t[2]=(a*x*s-g*c*s+g*r*l-i*x*l-a*r*m+i*c*m)*N,t[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*f-i*c*f)*N,t[4]=_*N,t[5]=(h*x*s-p*d*s+p*r*f-e*x*f-h*r*m+e*d*m)*N,t[6]=(p*c*s-o*x*s-p*r*l+e*x*l+o*r*m-e*c*m)*N,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*f+e*c*f)*N,t[8]=v*N,t[9]=(p*u*s-h*g*s-p*i*f+e*g*f+h*i*m-e*u*m)*N,t[10]=(o*g*s-p*a*s+p*i*l-e*g*l-o*i*m+e*a*m)*N,t[11]=(h*a*s-o*u*s-h*i*l+e*u*l+o*i*f-e*a*f)*N,t[12]=E*N,t[13]=(h*g*r-p*u*r+p*i*d-e*g*d-h*i*x+e*u*x)*N,t[14]=(p*a*r-o*g*r-p*i*c+e*g*c+o*i*x-e*a*x)*N,t[15]=(o*u*r-h*a*r+h*i*c-e*u*c-o*i*d+e*a*d)*N,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,p=s*u,g=o*h,x=o*u,m=a*u,M=c*l,_=c*h,v=c*u,E=i.x,A=i.y,N=i.z;return r[0]=(1-(g+m))*E,r[1]=(f+v)*E,r[2]=(p-_)*E,r[3]=0,r[4]=(f-v)*A,r[5]=(1-(d+m))*A,r[6]=(x+M)*A,r[7]=0,r[8]=(p+_)*N,r[9]=(x-M)*N,r[10]=(1-(d+g))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=ss.set(r[0],r[1],r[2]).length(),o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Fn.copy(this);let l=1/s,h=1/o,u=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=kn,c=!1){let l=this.elements,h=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),f=(i+r)/(i-r),p,g;if(c)p=s/(o-s),g=o*s/(o-s);else if(a===kn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=kn,c=!1){let l=this.elements,h=2/(e-t),u=2/(i-r),d=-(e+t)/(e-t),f=-(i+r)/(i-r),p,g;if(c)p=1/(o-s),g=o/(o-s);else if(a===kn)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===mo)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ss=new P,Fn=new ve,km=new P(0,0,0),zm=new P(1,1,1),Bi=new P,ba=new P,xn=new P,md=new ve,gd=new An,Hn=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(md,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gd.setFromEuler(this),this.setFromQuaternion(gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vm=0,xd=new P,os=new An,xi=new ve,Ma=new P,to=new P,Hm=new P,Gm=new An,_d=new P(1,0,0),yd=new P(0,1,0),vd=new P(0,0,1),bd={type:"added"},Wm={type:"removed"},as={type:"childadded",child:null},ih={type:"childremoved",child:null},We=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Hn,i=new An,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(_d,t)}rotateY(t){return this.rotateOnAxis(yd,t)}rotateZ(t){return this.rotateOnAxis(vd,t)}translateOnAxis(t,e){return xd.copy(t).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_d,t)}translateY(t){return this.translateOnAxis(yd,t)}translateZ(t){return this.translateOnAxis(vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(to,Ma,this.up):xi.lookAt(Ma,to,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(xi),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bd),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wm),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bd),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};We.DEFAULT_UP=new P(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new P,_i=new P,rh=new P,yi=new P,ls=new P,cs=new P,Md=new P,sh=new P,oh=new P,ah=new P,lh=new de,ch=new de,hh=new de,vi=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),On.subVectors(t,e),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){On.subVectors(r,e),_i.subVectors(i,e),rh.subVectors(t,e);let o=On.dot(On),a=On.dot(_i),c=On.dot(rh),l=_i.dot(_i),h=_i.dot(rh),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(lh,s.x),o.addScaledVector(ch,s.y),o.addScaledVector(hh,s.z),o}static isFrontFacing(t,e,i,r){return On.subVectors(i,e),_i.subVectors(t,e),On.cross(_i).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),On.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;ls.subVectors(r,i),cs.subVectors(s,i),sh.subVectors(t,i);let c=ls.dot(sh),l=cs.dot(sh);if(c<=0&&l<=0)return e.copy(i);oh.subVectors(t,r);let h=ls.dot(oh),u=cs.dot(oh);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(ls,o);ah.subVectors(t,s);let f=ls.dot(ah),p=cs.dot(ah);if(p>=0&&f<=p)return e.copy(s);let g=f*l-c*p;if(g<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(cs,a);let x=h*p-f*u;if(x<=0&&u-h>=0&&f-p>=0)return Md.subVectors(s,r),a=(u-h)/(u-h+(f-p)),e.copy(r).addScaledVector(Md,a);let m=1/(x+g+d);return o=g*m,a=d*m,e.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},wa={h:0,s:0,l:0};function uh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=jh(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=uh(o,s,t+1/3),this.g=uh(o,s,t),this.b=uh(o,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=He){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let i=Pf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return re.workingToColorSpace(je.copy(this),t),Math.round(te(je.r*255,0,255))*65536+Math.round(te(je.g*255,0,255))*256+Math.round(te(je.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(je.copy(this),e);let i=je.r,r=je.g,s=je.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=He){re.workingToColorSpace(je.copy(this),t);let e=je.r,i=je.g,r=je.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(wa);let i=co(ki.h,wa.h,e),r=co(ki.s,wa.s,e),s=co(ki.l,wa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Gt;Gt.NAMES=Pf;var Xm=0,si=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=br,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Wi=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new P,Sa=new dt,$m=0,rn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}};var _o=class extends rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var yo=class extends rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends rn{constructor(t,e,i){super(new Float32Array(t),e,i)}},qm=0,Tn=new ve,dh=new We,hs=new P,_n=new Vn,eo=new Vn,Ve=new P,Ae=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?yo:_o)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(_n.min,eo.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,eo.max),_n.expandByPoint(Ve)):(_n.expandByPoint(eo.min),_n.expandByPoint(eo.max))}_n.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ve));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Ve.add(hs)),r=Math.max(r,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new P,c[O]=new P;let l=new P,h=new P,u=new P,d=new dt,f=new dt,p=new dt,g=new P,x=new P;function m(O,w,y){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,O),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.sub(l),u.sub(l),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[O].add(g),a[w].add(g),a[y].add(g),c[O].add(x),c[w].add(x),c[y].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let O=0,w=M.length;O<w;++O){let y=M[O],I=y.start,z=y.count;for(let T=I,F=I+z;T<F;T+=3)m(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let _=new P,v=new P,E=new P,A=new P;function N(O){E.fromBufferAttribute(r,O),A.copy(E);let w=a[O];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(A,w);let I=v.dot(c[O])<0?-1:1;o.setXYZW(O,_.x,_.y,_.z,I)}for(let O=0,w=M.length;O<w;++O){let y=M[O],I=y.start,z=y.count;for(let T=I,F=I+z;T<F;T+=3)N(t.getX(T+0)),N(t.getX(T+1)),N(t.getX(T+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),g=t.getX(d+1),x=t.getX(d+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let g=0,x=c.length;g<x;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,i);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wd=new ve,xr=new Gi,Ta=new Sr,Sd=new P,Ea=new P,Aa=new P,Ca=new P,fh=new P,Ra=new P,Td=new P,Ia=new P,ie=class extends We{constructor(t=new Ae,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(fh.fromBufferAttribute(u,t),o?Ra.addScaledVector(fh,h):Ra.addScaledVector(fh.sub(e),h))}e.add(Ra)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),xr.copy(t.ray).recast(t.near),!(Ta.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ta,Sd)===null||xr.origin.distanceToSquared(Sd)>(t.far-t.near)**2))&&(wd.copy(s).invert(),xr.copy(t.ray).applyMatrix4(wd),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xr)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=o[x.materialIndex],M=Math.max(x.start,f.start),_=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let v=M,E=_;v<E;v+=3){let A=a.getX(v),N=a.getX(v+1),O=a.getX(v+2);r=Pa(this,m,t,i,l,h,u,A,N,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let x=p,m=g;x<m;x+=3){let M=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);r=Pa(this,o,t,i,l,h,u,M,_,v),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=o[x.materialIndex],M=Math.max(x.start,f.start),_=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let v=M,E=_;v<E;v+=3){let A=v,N=v+1,O=v+2;r=Pa(this,m,t,i,l,h,u,A,N,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=p,m=g;x<m;x+=3){let M=x,_=x+1,v=x+2;r=Pa(this,o,t,i,l,h,u,M,_,v),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function Ym(n,t,e,i,r,s,o,a){let c;if(t.side===sn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Mi,a),c===null)return null;Ia.copy(a),Ia.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ia);return l<e.near||l>e.far?null:{distance:l,point:Ia.clone(),object:n}}function Pa(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Ea),n.getVertexPosition(c,Aa),n.getVertexPosition(l,Ca);let h=Ym(n,t,e,i,Ea,Aa,Ca,Td);if(h){let u=new P;vi.getBarycoord(Td,Ea,Aa,Ca,u),r&&(h.uv=vi.getInterpolatedAttribute(r,a,c,l,u,new dt)),s&&(h.uv1=vi.getInterpolatedAttribute(s,a,c,l,u,new dt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};vi.getNormal(Ea,Aa,Ca,d.normal),h.face=d,h.barycoord=u}return h}var oi=class n extends Ae{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,r,o,2),p("x","z","y",1,-1,t,i,-e,r,o,3),p("x","y","z",1,-1,t,e,i,r,s,4),p("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function p(g,x,m,M,_,v,E,A,N,O,w){let y=v/N,I=E/O,z=v/2,T=E/2,F=A/2,k=N+1,B=O+1,$=0,H=0,tt=new P;for(let L=0;L<B;L++){let C=L*I-T;for(let U=0;U<k;U++){let q=U*y-z;tt[g]=q*M,tt[x]=C*_,tt[m]=F,l.push(tt.x,tt.y,tt.z),tt[g]=0,tt[x]=0,tt[m]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(U/N),u.push(1-L/O),$+=1}}for(let L=0;L<O;L++)for(let C=0;C<N;C++){let U=d+C+k*L,q=d+C+k*(L+1),Mt=d+(C+1)+k*(L+1),ft=d+(C+1)+k*L;c.push(U,q,ft),c.push(q,Mt,ft),H+=6}a.addGroup(f,H,w),f+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Dr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Qe(n){let t={};for(let e=0;e<n.length;e++){let i=Dr(n[e]);for(let r in i)t[r]=i[r]}return t}function Zm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function tu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Lf={clone:Dr,merge:Qe},Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},vo=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zi=new P,Ed=new dt,Ad=new dt,Ge=class extends vo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,Ad),e.subVectors(Ad,Ed)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,Ka=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ge(us,ds,t,e);r.layers=this.layers,this.add(r);let s=new Ge(us,ds,t,e);s.layers=this.layers,this.add(s);let o=new Ge(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new Ge(us,ds,t,e);a.layers=this.layers,this.add(a);let c=new Ge(us,ds,t,e);c.layers=this.layers,this.add(c);let l=new Ge(us,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},bo=class extends cn{constructor(t=[],e=Pr,i,r,s,o,a,c,l,h){super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ja=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new bo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oi(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Si});s.uniforms.tEquirect.value=e;let o=new ie(r,s),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=zn),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},Tt=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let x=e.getJointPose(g,i),m=this._getHandJoint(l,g);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Mo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ts=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new P,wo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Es=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fs,no=new P,ps=new P,ms=new P,gs=new dt,io=new dt,Df=new ve,La=new P,ro=new P,Da=new P,Cd=new dt,ph=new dt,Rd=new dt,So=class extends We{constructor(t=new Es){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qa(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new wo(i,3,0,!1)),fs.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=fs,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Df.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Ua(La.set(-.5,-.5,0),ms,o,ps,r,s),Ua(ro.set(.5,-.5,0),ms,o,ps,r,s),Ua(Da.set(.5,.5,0),ms,o,ps,r,s),Cd.set(0,0),ph.set(1,0),Rd.set(1,1);let a=t.ray.intersectTriangle(La,ro,Da,!1,no);if(a===null&&(Ua(ro.set(-.5,.5,0),ms,o,ps,r,s),ph.set(0,1),a=t.ray.intersectTriangle(La,Da,ro,!1,no),a===null))return;let c=t.ray.origin.distanceTo(no);c<t.near||c>t.far||e.push({distance:c,point:no.clone(),uv:vi.getInterpolation(no,La,ro,Da,Cd,ph,Rd,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ua(n,t,e,i,r,s){gs.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(io.x=s*gs.x-r*gs.y,io.y=r*gs.x+s*gs.y):io.copy(gs),n.copy(t),n.x+=io.x,n.y+=io.y,n.applyMatrix4(Df)}var mh=new P,Qm=new P,t0=new Kt,ln=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=mh.subVectors(i,e).cross(Qm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(mh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||t0.getNormalMatrix(t),r=this.coplanarPoint(mh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new Sr,e0=new dt(.5,.5),Na=new P,As=class{constructor(t=new ln,e=new ln,i=new ln,r=new ln,s=new ln,o=new ln){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],M=s[12],_=s[13],v=s[14],E=s[15];if(r[0].setComponents(l-o,f-h,m-p,E-M).normalize(),r[1].setComponents(l+o,f+h,m+p,E+M).normalize(),r[2].setComponents(l+a,f+u,m+g,E+_).normalize(),r[3].setComponents(l-a,f-u,m-g,E-_).normalize(),i)r[4].setComponents(c,d,x,v).normalize(),r[5].setComponents(l-c,f-d,m-x,E-v).normalize();else if(r[4].setComponents(l-c,f-d,m-x,E-v).normalize(),e===kn)r[5].setComponents(l+c,f+d,m+x,E+v).normalize();else if(e===mo)r[5].setComponents(c,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);let e=e0.distanceTo(t.center);return _r.radius=.7071067811865476+e,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Na.x=r.normal.x>0?t.max.x:t.min.x,Na.y=r.normal.y>0?t.max.y:t.min.y,Na.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wn=class extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tl=new P,el=new P,Id=new ve,so=new Gi,Fa=new Sr,gh=new P,Pd=new P,Xi=class extends We{constructor(t=new Ae,e=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)tl.fromBufferAttribute(e,r-1),el.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=tl.distanceTo(el);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;Id.copy(r).invert(),so.copy(t.ray).applyMatrix4(Id);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p-1;g<x;g+=l){let m=h.getX(g),M=h.getX(g+1),_=Oa(this,t,so,c,m,M,g);_&&e.push(_)}if(this.isLineLoop){let g=h.getX(p-1),x=h.getX(f),m=Oa(this,t,so,c,g,x,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,x=p-1;g<x;g+=l){let m=Oa(this,t,so,c,g,g+1,g);m&&e.push(m)}if(this.isLineLoop){let g=Oa(this,t,so,c,p-1,f,p-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Oa(n,t,e,i,r,s,o){let a=n.geometry.attributes.position;if(tl.fromBufferAttribute(a,r),el.fromBufferAttribute(a,s),e.distanceSqToSegment(tl,el,gh,Pd)>i)return;gh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(gh);if(!(l<t.near||l>t.far))return{distance:l,point:Pd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ld=new P,Dd=new P,To=class extends Xi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ld.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ld.distanceTo(Dd);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tr=class extends cn{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Eo=class extends cn{constructor(t,e,i=ji,r,s,o,a=En,c=En,l,h=ys,u=1){if(h!==ys&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ao=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Co=class n extends Ae{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,g=[],x=i/2,m=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function M(){let v=new P,E=new P,A=0,N=(e-t)/i;for(let O=0;O<=s;O++){let w=[],y=O/s,I=y*(e-t)+t;for(let z=0;z<=r;z++){let T=z/r,F=T*c+a,k=Math.sin(F),B=Math.cos(F);E.x=I*k,E.y=-y*i+x,E.z=I*B,u.push(E.x,E.y,E.z),v.set(k,N,B).normalize(),d.push(v.x,v.y,v.z),f.push(T,1-y),w.push(p++)}g.push(w)}for(let O=0;O<r;O++)for(let w=0;w<s;w++){let y=g[w][O],I=g[w+1][O],z=g[w+1][O+1],T=g[w][O+1];(t>0||w!==0)&&(h.push(y,I,T),A+=3),(e>0||w!==s-1)&&(h.push(I,z,T),A+=3)}l.addGroup(m,A,0),m+=A}function _(v){let E=p,A=new dt,N=new P,O=0,w=v===!0?t:e,y=v===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,x*y,0),d.push(0,y,0),f.push(.5,.5),p++;let I=p;for(let z=0;z<=r;z++){let F=z/r*c+a,k=Math.cos(F),B=Math.sin(F);N.x=w*B,N.y=x*y,N.z=w*k,u.push(N.x,N.y,N.z),d.push(0,y,0),A.x=k*.5+.5,A.y=B*.5*y+.5,f.push(A.x,A.y),p++}for(let z=0;z<r;z++){let T=E+z,F=I+z;v===!0?h.push(F,F+1,T):h.push(F+1,F,T),O+=3}l.addGroup(m,O,v===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nl=class n extends Ae{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};let s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new P,v=new P,E=new P;for(let A=0;A<e.length;A+=3)f(e[A+0],_),f(e[A+1],v),f(e[A+2],E),c(_,v,E,M)}function c(M,_,v,E){let A=E+1,N=[];for(let O=0;O<=A;O++){N[O]=[];let w=M.clone().lerp(v,O/A),y=_.clone().lerp(v,O/A),I=A-O;for(let z=0;z<=I;z++)z===0&&O===A?N[O][z]=w:N[O][z]=w.clone().lerp(y,z/I)}for(let O=0;O<A;O++)for(let w=0;w<2*(A-O)-1;w++){let y=Math.floor(w/2);w%2===0?(d(N[O][y+1]),d(N[O+1][y]),d(N[O][y])):(d(N[O][y+1]),d(N[O+1][y+1]),d(N[O+1][y]))}}function l(M){let _=new P;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(M),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function h(){let M=new P;for(let _=0;_<s.length;_+=3){M.x=s[_+0],M.y=s[_+1],M.z=s[_+2];let v=x(M)/2/Math.PI+.5,E=m(M)/Math.PI+.5;o.push(v,1-E)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let _=o[M+0],v=o[M+2],E=o[M+4],A=Math.max(_,v,E),N=Math.min(_,v,E);A>.9&&N<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,_){let v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function p(){let M=new P,_=new P,v=new P,E=new P,A=new dt,N=new dt,O=new dt;for(let w=0,y=0;w<s.length;w+=9,y+=6){M.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(o[y+0],o[y+1]),N.set(o[y+2],o[y+3]),O.set(o[y+4],o[y+5]),E.copy(M).add(_).add(v).divideScalar(3);let I=x(E);g(A,y+0,M,I),g(N,y+2,_,I),g(O,y+4,v,I)}}function g(M,_,v,E){E<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=E/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new dt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,r=[],s=[],o=[],a=new P,c=new ve;for(let f=0;f<=t;f++){let p=f/t;r[f]=this.getTangentAt(p,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(te(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(te(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends yn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){let i=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends Cs{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eu(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return n+t*s+e*o+i*a}}}var Ba=new P,xh=new eu,_h=new eu,yh=new eu,rl=class extends yn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new P){let i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Ba.subVectors(r[0],r[1]).add(r[0]),l=Ba);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ba.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),x<1e-4&&(x=g),xh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,g,x),_h.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,g,x),yh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,g,x)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),_h.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(xh.calc(c),_h.calc(c),yh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ud(n,t,e,i,r){let s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function n0(n,t){let e=1-n;return e*e*t}function i0(n,t){return 2*(1-n)*n*t}function r0(n,t){return n*n*t}function ho(n,t,e,i){return n0(n,t)+i0(n,e)+r0(n,i)}function s0(n,t){let e=1-n;return e*e*e*t}function o0(n,t){let e=1-n;return 3*e*e*n*t}function a0(n,t){return 3*(1-n)*n*n*t}function l0(n,t){return n*n*n*t}function uo(n,t,e,i,r){return s0(n,t)+o0(n,e)+a0(n,i)+l0(n,r)}var Ro=class extends yn{constructor(t=new dt,e=new dt,i=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new dt){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(uo(t,r.x,s.x,o.x,a.x),uo(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends yn{constructor(t=new P,e=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new P){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(uo(t,r.x,s.x,o.x,a.x),uo(t,r.y,s.y,o.y,a.y),uo(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends yn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends yn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends yn{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ho(t,r.x,s.x,o.x),ho(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends yn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ho(t,r.x,s.x,o.x),ho(t,r.y,s.y,o.y),ho(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Ud(a,c.x,l.x,h.x,u.x),Ud(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new dt().fromArray(r))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:rl,CubicBezierCurve:Ro,CubicBezierCurve3:sl,EllipseCurve:Cs,LineCurve:Io,LineCurve3:ol,QuadraticBezierCurve:Po,QuadraticBezierCurve3:al,SplineCurve:Lo}),ll=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new Eh[r.type]().fromJSON(r))}return this}},Do=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Io(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let s=new Po(this.currentPoint.clone(),new dt(t,e),new dt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){let a=new Ro(this.currentPoint.clone(),new dt(t,e),new dt(i,r),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Lo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,s,o,a,c),this}absellipse(t,e,i,r,s,o,a,c){let l=new Cs(t,e,i,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wi=class extends Do{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new Do().fromJSON(r))}return this}};function c0(n,t,e=2){let i=t&&t.length,r=i?t[0]*e:n.length,s=Uf(n,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=p0(n,t,s,e)),n.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<r;d+=e){let f=n[d],p=n[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Uo(s,o,e,a,c,l,0),o}function Uf(n,t,e,i,r){let s;if(r===T0(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=Nd(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Nd(o/i|0,n[o],n[o+1],s);return s&&Rs(s,s.next)&&(Fo(s),s=s.next),s}function Er(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Rs(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Uo(n,t,e,i,r,s,o){if(!n)return;!o&&s&&y0(n,i,r,s);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(s?u0(n,i,r,s):h0(n)){t.push(c.i,n.i,l.i),Fo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=d0(Er(n),t),Uo(n,t,e,i,r,s,2)):o===2&&f0(n,t,e,i,r,s):Uo(Er(n),t,e,i,r,s,1);break}}}function h0(n){let t=n.prev,e=n,i=n.next;if(Ee(t,e,i)>=0)return!1;let r=t.x,s=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(r,s,o),u=Math.min(a,c,l),d=Math.max(r,s,o),f=Math.max(a,c,l),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ao(r,a,s,c,o,l,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u0(n,t,e,i){let r=n.prev,s=n,o=n.next;if(Ee(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),g=Math.max(a,c,l),x=Math.max(h,u,d),m=Ah(f,p,t,e,i),M=Ah(g,x,t,e,i),_=n.prevZ,v=n.nextZ;for(;_&&_.z>=m&&v&&v.z<=M;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=x&&_!==r&&_!==o&&ao(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=g&&v.y>=p&&v.y<=x&&v!==r&&v!==o&&ao(a,h,c,u,l,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=x&&_!==r&&_!==o&&ao(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=x&&v!==r&&v!==o&&ao(a,h,c,u,l,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d0(n,t){let e=n;do{let i=e.prev,r=e.next.next;!Rs(i,r)&&Ff(i,e,e.next,r)&&No(i,r)&&No(r,i)&&(t.push(i.i,e.i,r.i),Fo(e),Fo(e.next),e=n=r),e=e.next}while(e!==n);return Er(e)}function f0(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M0(o,a)){let c=Of(o,a);o=Er(o,o.next),c=Er(c,c.next),Uo(o,t,e,i,r,s,0),Uo(c,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function p0(n,t,e,i){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*i,c=s<o-1?t[s+1]*i:n.length,l=Uf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(b0(l))}r.sort(m0);for(let s=0;s<r.length;s++)e=g0(r[s],e);return e}function m0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function g0(n,t){let e=x0(n,t);if(!e)return t;let i=Of(e,n);return Er(i,i.next),Er(e,e.next)}function x0(n,t){let e=t,i=n.x,r=n.y,s=-1/0,o;if(Rs(n,e))return e;do{if(Rs(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Nf(r<l?i:s,r,c,l,r<l?s:i,r,e.x,e.y)){let u=Math.abs(r-e.y)/(i-e.x);No(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _0(n,t){return Ee(n.prev,n,t.prev)<0&&Ee(t.next,n,n.next)<0}function y0(n,t,e,i){let r=n;do r.z===0&&(r.z=Ah(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,v0(r)}function v0(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Ah(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function b0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Nf(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function ao(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&Nf(n,t,e,i,r,s,o,a)}function M0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!w0(n,t)&&(No(n,t)&&No(t,n)&&S0(n,t)&&(Ee(n.prev,n,t.prev)||Ee(n,t.prev,t))||Rs(n,t)&&Ee(n.prev,n,n.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Rs(n,t){return n.x===t.x&&n.y===t.y}function Ff(n,t,e,i){let r=za(Ee(n,t,e)),s=za(Ee(n,t,i)),o=za(Ee(e,i,n)),a=za(Ee(e,i,t));return!!(r!==s&&o!==a||r===0&&ka(n,e,t)||s===0&&ka(n,i,t)||o===0&&ka(e,n,i)||a===0&&ka(e,t,i))}function ka(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function za(n){return n>0?1:n<0?-1:0}function w0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ff(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function No(n,t){return Ee(n.prev,n,n.next)<0?Ee(n,t,n.next)>=0&&Ee(n,n.prev,t)>=0:Ee(n,t,n.prev)<0||Ee(n,n.next,t)<0}function S0(n,t){let e=n,i=!1,r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Of(n,t){let e=Ch(n.i,n.x,n.y),i=Ch(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Nd(n,t,e,i){let r=Ch(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Fo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ch(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function T0(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Rh=class{static triangulate(t,e,i=2){return c0(t,e,i)}},vr=class n{static area(t){let e=t.length,i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],r=[],s=[];Fd(t),Od(i,t);let o=t.length;e.forEach(Fd);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Od(i,e[c]);let a=Rh.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Fd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Od(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var $i=class n extends Ae{constructor(t=new wi([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:E0,_,v=!1,E,A,N,O;m&&(_=m.getSpacedPoints(h),v=!0,d=!1,E=m.computeFrenetFrames(h,!1),A=new P,N=new P,O=new P),d||(x=0,f=0,p=0,g=0);let w=a.extractPoints(l),y=w.shape,I=w.holes;if(!vr.isClockWise(y)){y=y.reverse();for(let at=0,it=I.length;at<it;at++){let et=I[at];vr.isClockWise(et)&&(I[at]=et.reverse())}}function T(at){let et=10000000000000001e-36,st=at[0];for(let bt=1;bt<=at.length;bt++){let pt=bt%at.length,St=at[pt],$t=St.x-st.x,qt=St.y-st.y,R=$t*$t+qt*qt,b=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(st.x),Math.abs(st.y)),Y=et*b*b;if(R<=Y){at.splice(pt,1),bt--;continue}st=St}}T(y),I.forEach(T);let F=I.length,k=y;for(let at=0;at<F;at++){let it=I[at];y=y.concat(it)}function B(at,it,et){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(it,et)}let $=y.length;function H(at,it,et){let st,bt,pt,St=at.x-it.x,$t=at.y-it.y,qt=et.x-at.x,R=et.y-at.y,b=St*St+$t*$t,Y=St*R-$t*qt;if(Math.abs(Y)>Number.EPSILON){let Q=Math.sqrt(b),ut=Math.sqrt(qt*qt+R*R),nt=it.x-$t/Q,Bt=it.y+St/Q,wt=et.x-R/ut,Nt=et.y+qt/ut,Ft=((wt-nt)*R-(Nt-Bt)*qt)/(St*R-$t*qt);st=nt+St*Ft-at.x,bt=Bt+$t*Ft-at.y;let gt=st*st+bt*bt;if(gt<=2)return new dt(st,bt);pt=Math.sqrt(gt/2)}else{let Q=!1;St>Number.EPSILON?qt>Number.EPSILON&&(Q=!0):St<-Number.EPSILON?qt<-Number.EPSILON&&(Q=!0):Math.sign($t)===Math.sign(R)&&(Q=!0),Q?(st=-$t,bt=St,pt=Math.sqrt(b)):(st=St,bt=$t,pt=Math.sqrt(b/2))}return new dt(st/pt,bt/pt)}let tt=[];for(let at=0,it=k.length,et=it-1,st=at+1;at<it;at++,et++,st++)et===it&&(et=0),st===it&&(st=0),tt[at]=H(k[at],k[et],k[st]);let L=[],C,U=tt.concat();for(let at=0,it=F;at<it;at++){let et=I[at];C=[];for(let st=0,bt=et.length,pt=bt-1,St=st+1;st<bt;st++,pt++,St++)pt===bt&&(pt=0),St===bt&&(St=0),C[st]=H(et[st],et[pt],et[St]);L.push(C),U=U.concat(C)}let q;if(x===0)q=vr.triangulateShape(k,I);else{let at=[],it=[];for(let et=0;et<x;et++){let st=et/x,bt=f*Math.cos(st*Math.PI/2),pt=p*Math.sin(st*Math.PI/2)+g;for(let St=0,$t=k.length;St<$t;St++){let qt=B(k[St],tt[St],pt);ct(qt.x,qt.y,-bt),st===0&&at.push(qt)}for(let St=0,$t=F;St<$t;St++){let qt=I[St];C=L[St];let R=[];for(let b=0,Y=qt.length;b<Y;b++){let Q=B(qt[b],C[b],pt);ct(Q.x,Q.y,-bt),st===0&&R.push(Q)}st===0&&it.push(R)}}q=vr.triangulateShape(at,it)}let Mt=q.length,ft=p+g;for(let at=0;at<$;at++){let it=d?B(y[at],U[at],ft):y[at];v?(N.copy(E.normals[0]).multiplyScalar(it.x),A.copy(E.binormals[0]).multiplyScalar(it.y),O.copy(_[0]).add(N).add(A),ct(O.x,O.y,O.z)):ct(it.x,it.y,0)}for(let at=1;at<=h;at++)for(let it=0;it<$;it++){let et=d?B(y[it],U[it],ft):y[it];v?(N.copy(E.normals[at]).multiplyScalar(et.x),A.copy(E.binormals[at]).multiplyScalar(et.y),O.copy(_[at]).add(N).add(A),ct(O.x,O.y,O.z)):ct(et.x,et.y,u/h*at)}for(let at=x-1;at>=0;at--){let it=at/x,et=f*Math.cos(it*Math.PI/2),st=p*Math.sin(it*Math.PI/2)+g;for(let bt=0,pt=k.length;bt<pt;bt++){let St=B(k[bt],tt[bt],st);ct(St.x,St.y,u+et)}for(let bt=0,pt=I.length;bt<pt;bt++){let St=I[bt];C=L[bt];for(let $t=0,qt=St.length;$t<qt;$t++){let R=B(St[$t],C[$t],st);v?ct(R.x,R.y+_[h-1].y,_[h-1].x+et):ct(R.x,R.y,u+et)}}}G(),Z();function G(){let at=r.length/3;if(d){let it=0,et=$*it;for(let st=0;st<Mt;st++){let bt=q[st];ht(bt[2]+et,bt[1]+et,bt[0]+et)}it=h+x*2,et=$*it;for(let st=0;st<Mt;st++){let bt=q[st];ht(bt[0]+et,bt[1]+et,bt[2]+et)}}else{for(let it=0;it<Mt;it++){let et=q[it];ht(et[2],et[1],et[0])}for(let it=0;it<Mt;it++){let et=q[it];ht(et[0]+$*h,et[1]+$*h,et[2]+$*h)}}i.addGroup(at,r.length/3-at,0)}function Z(){let at=r.length/3,it=0;ot(k,it),it+=k.length;for(let et=0,st=I.length;et<st;et++){let bt=I[et];ot(bt,it),it+=bt.length}i.addGroup(at,r.length/3-at,1)}function ot(at,it){let et=at.length;for(;--et>=0;){let st=et,bt=et-1;bt<0&&(bt=at.length-1);for(let pt=0,St=h+x*2;pt<St;pt++){let $t=$*pt,qt=$*(pt+1),R=it+st+$t,b=it+bt+$t,Y=it+bt+qt,Q=it+st+qt;Ut(R,b,Y,Q)}}}function ct(at,it,et){c.push(at),c.push(it),c.push(et)}function ht(at,it,et){jt(at),jt(it),jt(et);let st=r.length/3,bt=M.generateTopUV(i,r,st-3,st-2,st-1);D(bt[0]),D(bt[1]),D(bt[2])}function Ut(at,it,et,st){jt(at),jt(it),jt(st),jt(it),jt(et),jt(st);let bt=r.length/3,pt=M.generateSideWallUV(i,r,bt-6,bt-3,bt-2,bt-1);D(pt[0]),D(pt[1]),D(pt[3]),D(pt[1]),D(pt[2]),D(pt[3])}function jt(at){r.push(c[at*3+0]),r.push(c[at*3+1]),r.push(c[at*3+2])}function D(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return A0(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];i.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Eh[r.type]().fromJSON(r)),new n(i,t.options)}},E0={generateTopUV:function(n,t,e,i,r){let s=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],h=t[r*3+1];return[new dt(s,o),new dt(a,c),new dt(l,h)]},generateSideWallUV:function(n,t,e,i,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[r*3],f=t[r*3+1],p=t[r*3+2],g=t[s*3],x=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-u),new dt(d,1-p),new dt(g,1-m)]:[new dt(a,1-c),new dt(h,1-u),new dt(f,1-p),new dt(x,1-m)]}};function A0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ar=class n extends nl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var qe=class n extends Ae{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,f=[],p=[],g=[],x=[];for(let m=0;m<h;m++){let M=m*d-o;for(let _=0;_<l;_++){let v=_*u-s;p.push(v,-M,0),g.push(0,0,1),x.push(_/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let _=M+l*m,v=M+l*(m+1),E=M+1+l*(m+1),A=M+1+l*m;f.push(_,v,A),f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(g,3)),this.setAttribute("uv",new oe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Oo=class n extends Ae{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/r,f=new P,p=new dt;for(let g=0;g<=r;g++){for(let x=0;x<=i;x++){let m=s+x/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let g=0;g<r;g++){let x=g*(i+1);for(let m=0;m<i;m++){let M=m+x,_=M,v=M+i+1,E=M+i+2,A=M+1;a.push(_,v,A),a.push(v,E,A)}}this.setIndex(a),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Bo=class n extends Ae{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,f=[],p=[],g=[],x=[];for(let m=0;m<=i;m++){let M=[],_=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let A=E/e;u.x=-t*Math.cos(r+A*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(r+A*s)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(A+v,1-_),M.push(l++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let _=h[m][M+1],v=h[m][M],E=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&f.push(_,v,A),(m!==i-1||c<Math.PI)&&f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(g,3)),this.setAttribute("uv",new oe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Is=class n extends Ae{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let p=0;p<=r;p++){let g=p/r*s,x=f/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(g),u.y=(t+e*Math.cos(x))*Math.sin(g),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=r;p++){let g=(r+1)*f+p-1,x=(r+1)*(f-1)+p-1,m=(r+1)*(f-1)+p,M=(r+1)*f+p;o.push(g,x,M),o.push(x,m,M)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xe=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cl=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var ko=class extends Wn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Va(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function C0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Cr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends Cr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:s=t,a=2*e-i;break;case Sh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case wh:o=t,c=2*i-e;break;case Sh:o=1,c=i+r[1]-r[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(r-e),g=p*p,x=g*p,m=-d*x+2*d*g-d*p,M=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*p+1,_=(-1-f)*x+(1.5+f)*g+.5*p,v=f*x-f*g;for(let E=0;E!==a;++E)s[E]=m*o[h+E]+M*o[l+E]+_*o[c+E]+v*o[u+E];return s}},dl=class extends Cr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},fl=class extends Cr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Va(e,this.TimeBufferType),this.values=Va(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Va(t.times,Array),values:Va(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case $a:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&C0(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ha,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let g=e[u+p];if(g!==e[d+p]||g!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=$a;var qi=class extends vn{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=fo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}};pl.prototype.ValueTypeName="color";var ml=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}};ml.prototype.ValueTypeName="number";var gl=class extends Cr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)An.slerpFlat(s,0,o,l-a,o,l,c);return s}},zo=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends vn{constructor(t,e,i){super(t,e,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=fo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}};xl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Bf=new _l,yl=class{constructor(t){this.manager=t!==void 0?t:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ls=class extends Ps{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vh=new ve,Bd=new P,kd=new P,vl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zd=new ve,oo=new P,bh=new P,Ih=class extends vl{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),oo.setFromMatrixPosition(t.matrixWorld),i.position.copy(oo),bh.copy(i.position),bh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(bh),i.updateMatrixWorld(),r.makeTranslation(-oo.x,-oo.y,-oo.z),zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,i.coordinateSystem,i.reversedDepth)}},ai=class extends Ps{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rr=class extends vo{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends vl{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Ph}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bl=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Vo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var nu="\\[\\]\\.:\\/",R0=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",I0="[^"+nu.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",iu),L0=/(WCOD+)?/.source.replace("WCOD",I0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),N0=new RegExp("^"+P0+L0+D0+U0+"$"),F0=["material","materials","bones","map"],Lh=class{constructor(t,e,i){let r=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(t){let e=N0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);F0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Lh;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tb=new Float32Array(1);var Vd=new ve,Ho=class{constructor(t,e,i=0,r=1/0){this.ray=new Gi(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(t,e=!0,i=[]){return Dh(t,this,i,e),i.sort(Hd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Dh(t[r],this,i,e);return i.sort(Hd),i}};function Hd(n,t){return n.distance-t.distance}function Dh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Dh(s[o],t,e,!0)}}var Ds=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Go=class extends To{constructor(t=10,e=10,i=4473924,r=8947848){i=new Gt(i),r=new Gt(r);let s=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=e;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);let g=d===s?i:r;g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3,g.toArray(l,f),f+=3}let h=new Ae;h.setAttribute("position",new oe(c,3)),h.setAttribute("color",new oe(l,3));let u=new Wn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Wo=class extends To{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ae;s.setIndex(new rn(i,1)),s.setAttribute("position",new oe(r,3)),super(s,new Wn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var Xo=class extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function ru(n,t,e,i){let r=O0(i);switch(e){case Xh:return n*t;case qh:return n*t/r.components*r.byteLength;case Fl:return n*t/r.components*r.byteLength;case Yh:return n*t*2/r.components*r.byteLength;case Ol:return n*t*2/r.components*r.byteLength;case $h:return n*t*3/r.components*r.byteLength;case Cn:return n*t*4/r.components*r.byteLength;case Bl:return n*t*4/r.components*r.byteLength;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ko:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:case Hl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Vl:return Math.max(n,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O0(n){switch(n){case Xn:case Vh:return{byteLength:1,components:1};case Us:case Hh:case Ns:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case ji:case Dl:case ci:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function lp(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function k0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let g=u[f];n.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:z0,alphahash_pars_fragment:V0,alphamap_fragment:H0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:$0,aomap_pars_fragment:q0,batching_pars_vertex:Y0,batching_vertex:Z0,begin_vertex:J0,beginnormal_vertex:K0,bsdfs:j0,iridescence_fragment:Q0,bumpmap_pars_fragment:tg,clipping_planes_fragment:eg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:rg,color_fragment:sg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:lg,common:cg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:dg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:_g,envmap_common_pars_fragment:yg,envmap_pars_fragment:vg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Lg,envmap_vertex:Mg,fog_vertex:wg,fog_pars_vertex:Sg,fog_fragment:Tg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Cg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Pg,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ug,lights_phong_fragment:Ng,lights_phong_pars_fragment:Fg,lights_physical_fragment:Og,lights_physical_pars_fragment:Bg,lights_fragment_begin:kg,lights_fragment_maps:zg,lights_fragment_end:Vg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Gg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:$g,map_pars_fragment:qg,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:jg,morphcolor_vertex:Qg,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:fx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:xx,dithering_pars_fragment:_x,roughnessmap_fragment:yx,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Mx,shadowmap_vertex:wx,shadowmask_pars_fragment:Sx,skinbase_vertex:Tx,skinning_pars_vertex:Ex,skinning_vertex:Ax,skinnormal_vertex:Cx,specularmap_fragment:Rx,specularmap_pars_fragment:Ix,tonemapping_fragment:Px,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Fx,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:kx,background_frag:zx,backgroundCube_vert:Vx,backgroundCube_frag:Hx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:$x,distanceRGBA_vert:qx,distanceRGBA_frag:Yx,equirect_vert:Zx,equirect_frag:Jx,linedashed_vert:Kx,linedashed_frag:jx,meshbasic_vert:Qx,meshbasic_frag:t_,meshlambert_vert:e_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:r_,meshnormal_vert:s_,meshnormal_frag:o_,meshphong_vert:a_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:h_,meshtoon_vert:u_,meshtoon_frag:d_,points_vert:f_,points_frag:p_,shadow_vert:m_,shadow_frag:g_,sprite_vert:x_,sprite_frag:__},At={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},hi={basic:{uniforms:Qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Qe([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Qe([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Qe([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Qe([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Qe([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Qe([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Qe([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Qe([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Qe([At.common,At.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Qe([At.lights,At.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};hi.physical={uniforms:Qe([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var fc={r:0,b:0,g:0},Ur=new Hn,y_=new ve;function v_(n,t,e,i,r,s,o){let a=new Gt(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function g(_){let v=!1,E=p(_);E===null?m(a,c):E&&E.isColor&&(m(E,1),v=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,v){let E=p(v);E&&(E.isCubeTexture||E.mapping===qo)?(h===void 0&&(h=new ie(new oi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Dr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ur.copy(v.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(Ur)),h.material.toneMapped=re.getTransfer(E.colorSpace)!==fe,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ie(new qe(2,2),new Gn({name:"BackgroundMaterial",uniforms:Dr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=re.getTransfer(E.colorSpace)!==fe,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(fc,tu(n)),i.buffers.color.setClear(fc.r,fc.g,fc.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:g,addToRenderList:x,dispose:M}}function b_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(y,I,z,T,F){let k=!1,B=u(T,z,I);s!==B&&(s=B,l(s.object)),k=f(y,T,z,F),k&&p(y,T,z,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(y,I,z,T),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,I,z){let T=z.wireframe===!0,F=i[y.id];F===void 0&&(F={},i[y.id]=F);let k=F[I.id];k===void 0&&(k={},F[I.id]=k);let B=k[T];return B===void 0&&(B=d(c()),k[T]=B),B}function d(y){let I=[],z=[],T=[];for(let F=0;F<e;F++)I[F]=0,z[F]=0,T[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:T,object:y,attributes:{},index:null}}function f(y,I,z,T){let F=s.attributes,k=I.attributes,B=0,$=z.getAttributes();for(let H in $)if($[H].location>=0){let L=F[H],C=k[H];if(C===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(C=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(C=y.instanceColor)),L===void 0||L.attribute!==C||C&&L.data!==C.data)return!0;B++}return s.attributesNum!==B||s.index!==T}function p(y,I,z,T){let F={},k=I.attributes,B=0,$=z.getAttributes();for(let H in $)if($[H].location>=0){let L=k[H];L===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(L=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(L=y.instanceColor));let C={};C.attribute=L,L&&L.data&&(C.data=L.data),F[H]=C,B++}s.attributes=F,s.attributesNum=B,s.index=T}function g(){let y=s.newAttributes;for(let I=0,z=y.length;I<z;I++)y[I]=0}function x(y){m(y,0)}function m(y,I){let z=s.newAttributes,T=s.enabledAttributes,F=s.attributeDivisors;z[y]=1,T[y]===0&&(n.enableVertexAttribArray(y),T[y]=1),F[y]!==I&&(n.vertexAttribDivisor(y,I),F[y]=I)}function M(){let y=s.newAttributes,I=s.enabledAttributes;for(let z=0,T=I.length;z<T;z++)I[z]!==y[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function _(y,I,z,T,F,k,B){B===!0?n.vertexAttribIPointer(y,I,z,F,k):n.vertexAttribPointer(y,I,z,T,F,k)}function v(y,I,z,T){g();let F=T.attributes,k=z.getAttributes(),B=I.defaultAttributeValues;for(let $ in k){let H=k[$];if(H.location>=0){let tt=F[$];if(tt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let L=tt.normalized,C=tt.itemSize,U=t.get(tt);if(U===void 0)continue;let q=U.buffer,Mt=U.type,ft=U.bytesPerElement,G=Mt===n.INT||Mt===n.UNSIGNED_INT||tt.gpuType===Dl;if(tt.isInterleavedBufferAttribute){let Z=tt.data,ot=Z.stride,ct=tt.offset;if(Z.isInstancedInterleavedBuffer){for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht,Z.meshPerAttribute);y.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ht=0;ht<H.locationSize;ht++)x(H.location+ht);n.bindBuffer(n.ARRAY_BUFFER,q);for(let ht=0;ht<H.locationSize;ht++)_(H.location+ht,C/H.locationSize,Mt,L,ot*ft,(ct+C/H.locationSize*ht)*ft,G)}else{if(tt.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z,tt.meshPerAttribute);y.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Z=0;Z<H.locationSize;Z++)x(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Z=0;Z<H.locationSize;Z++)_(H.location+Z,C/H.locationSize,Mt,L,C*ft,C/H.locationSize*Z*ft,G)}}else if(B!==void 0){let L=B[$];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(H.location,L);break;case 3:n.vertexAttrib3fv(H.location,L);break;case 4:n.vertexAttrib4fv(H.location,L);break;default:n.vertexAttrib1fv(H.location,L)}}}}M()}function E(){O();for(let y in i){let I=i[y];for(let z in I){let T=I[z];for(let F in T)h(T[F].object),delete T[F];delete I[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;let I=i[y.id];for(let z in I){let T=I[z];for(let F in T)h(T[F].object),delete T[F];delete I[z]}delete i[y.id]}function N(y){for(let I in i){let z=i[I];if(z[y.id]===void 0)continue;let T=z[y.id];for(let F in T)h(T[F].object),delete T[F];delete z[y.id]}}function O(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:x,disableUnusedAttributes:M}}function M_(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g]*d[g];e.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function w_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Cn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let O=N===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Xn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ci&&!O)}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function S_(n){let t=this,e=null,i=0,r=!1,s=!1,o=new ln,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!r||p===null||p.length===0||s&&!x)s?h(null):l();else{let M=s?0:i,_=M*4,v=m.clippingState||null;c.value=v,v=h(p,d,_,f);for(let E=0;E!==_;++E)v[E]=e[E];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let g=u!==null?u.length:0,x=null;if(g!==0){if(x=c.value,p!==!0||x===null){let m=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<m)&&(x=new Float32Array(m));for(let _=0,v=f;_!==g;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(x,v),x[v+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}function T_(n){let t=new WeakMap;function e(o,a){return a===Il?o.mapping=Pr:a===Pl&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Il||a===Pl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ja(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var zs=4,kf=[.125,.215,.35,.446,.526,.582],Or=20,su=new Rr,zf=new Gt,ou=null,au=0,lu=0,cu=!1,Fr=(1+Math.sqrt(5))/2,ks=1/Fr,Vf=[new P(-Fr,ks,0),new P(Fr,ks,0),new P(-ks,0,Fr),new P(ks,0,Fr),new P(0,Fr,-ks),new P(0,Fr,ks),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],E_=new P,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=E_}=s;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,au,lu),this._renderer.xr.enabled=cu,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ns,format:Cn,colorSpace:wr,depthBuffer:!1},r=Hf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(s)),this._blurMaterial=C_(s,t,e)}return r}_compileMaterial(t){let e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,su)}_sceneToCubeUV(t,e,i,r,s){let c=new Ge(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zf),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let g=new Wi({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new ie(new oi,g),m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(zf),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[_],s.y,s.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[_]));let E=this._cubeSize;pc(r,v*E,_>2?E:0,E,E),u.setRenderTarget(r),m&&u.render(x,c),u.render(t,c)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Pr||t.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;pc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,su)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vf[(r-s-1)%Vf.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ie(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Or-1),g=s/p,x=isFinite(s)?1+Math.floor(h*g):Or;x>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Or}`);let m=[],M=0;for(let N=0;N<Or;++N){let O=N/g,w=Math.exp(-O*O/2);m.push(w),N===0?M+=w:N<x&&(M+=2*w)}for(let N=0;N<m.length;N++)m[N]=m[N]/M;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;let v=this._sizeLods[r],E=3*v*(r>_-zs?r-_+zs:0),A=4*(this._cubeSize-v);pc(e,E,A,3*v,2*v),c.setRenderTarget(e),c.render(u,su)}};function A_(n){let t=[],e=[],i=[],r=n,s=n-zs+1+kf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-zs?c=kf[o-n+zs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,g=3,x=2,m=1,M=new Float32Array(g*p*f),_=new Float32Array(x*p*f),v=new Float32Array(m*p*f);for(let A=0;A<f;A++){let N=A%3*2/3-1,O=A>2?0:-1,w=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];M.set(w,g*p*A),_.set(d,x*p*A);let y=[A,A,A,A,A,A];v.set(y,m*p*A)}let E=new Ae;E.setAttribute("position",new rn(M,g)),E.setAttribute("uv",new rn(_,x)),E.setAttribute("faceIndex",new rn(v,m)),t.push(E),r>zs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Hf(n,t,e){let i=new ri(n,t,e);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function C_(n,t,e){let i=new Float32Array(Or),r=new P(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gf(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Wf(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Il||c===Pl,h=c===Pr||c===Lr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gc(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&r(f)?(e===null&&(e=new gc(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function I_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&bs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P_(n,t,e,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,p=u.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let _=0,v=M.length;_<v;_+=3){let E=M[_+0],A=M[_+1],N=M[_+2];d.push(E,A,A,N,N,E)}}else if(p!==void 0){let M=p.array;g=p.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let E=_+0,A=_+1,N=_+2;d.push(E,A,A,N,N,E)}}else return;let x=new(Qh(d)?yo:_o)(d,1);x.version=g;let m=s.get(u);m&&t.remove(m),s.set(u,x)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function L_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),e.update(f,i,1)}function l(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];e.update(x,i,1)}function u(d,f,p,g){if(p===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],g[m]);else{x.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*g[M];e.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function D_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function U_(n,t,e){let i=new WeakMap,r=new de;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let w=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),g===!0&&(_=3);let v=a.attributes.position.count*_,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*u),N=new xo(A,v,E,u);N.type=ci,N.needsUpdate=!0;let O=_*4;for(let y=0;y<u;y++){let I=x[y],z=m[y],T=M[y],F=v*E*4*y;for(let k=0;k<I.count;k++){let B=k*O;f===!0&&(r.fromBufferAttribute(I,k),A[F+B+0]=r.x,A[F+B+1]=r.y,A[F+B+2]=r.z,A[F+B+3]=0),p===!0&&(r.fromBufferAttribute(z,k),A[F+B+4]=r.x,A[F+B+5]=r.y,A[F+B+6]=r.z,A[F+B+7]=0),g===!0&&(r.fromBufferAttribute(T,k),A[F+B+8]=r.x,A[F+B+9]=r.y,A[F+B+10]=r.z,A[F+B+11]=T.itemSize===4?r.w:1)}}d={count:u,texture:N,size:new dt(v,E)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function N_(n,t,e,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var cp=new cn,Xf=new Eo(1,1),hp=new xo,up=new Ja,dp=new bo,$f=[],qf=[],Yf=new Float32Array(16),Zf=new Float32Array(9),Jf=new Float32Array(4);function Hs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=$f[r];if(s===void 0&&(s=new Float32Array(r),$f[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xc(n,t){let e=qf[t];e===void 0&&(e=new Int32Array(t),qf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function F_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function k_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function z_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),ke(e,i)}}function V_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;Zf.set(i),n.uniformMatrix3fv(this.addr,!1,Zf),ke(e,i)}}function H_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;Yf.set(i),n.uniformMatrix4fv(this.addr,!1,Yf),ke(e,i)}}function G_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function W_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function X_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function $_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function K_(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Xf.compareFunction=Jh,s=Xf):s=cp,e.setTexture2D(t||s,r)}function j_(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||up,r)}function Q_(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||dp,r)}function ty(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hp,r)}function ey(n){switch(n){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return k_;case 35674:return z_;case 35675:return V_;case 35676:return H_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return $_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ty}}function ny(n,t){n.uniform1fv(this.addr,t)}function iy(n,t){let e=Hs(t,this.size,2);n.uniform2fv(this.addr,e)}function ry(n,t){let e=Hs(t,this.size,3);n.uniform3fv(this.addr,e)}function sy(n,t){let e=Hs(t,this.size,4);n.uniform4fv(this.addr,e)}function oy(n,t){let e=Hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ay(n,t){let e=Hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ly(n,t){let e=Hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function cy(n,t){n.uniform1iv(this.addr,t)}function hy(n,t){n.uniform2iv(this.addr,t)}function uy(n,t){n.uniform3iv(this.addr,t)}function dy(n,t){n.uniform4iv(this.addr,t)}function fy(n,t){n.uniform1uiv(this.addr,t)}function py(n,t){n.uniform2uiv(this.addr,t)}function my(n,t){n.uniform3uiv(this.addr,t)}function gy(n,t){n.uniform4uiv(this.addr,t)}function xy(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||cp,s[o])}function _y(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||up,s[o])}function yy(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||dp,s[o])}function vy(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||hp,s[o])}function by(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return ry;case 35666:return sy;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return vy}}var uu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ey(e.type)}},du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=by(e.type)}},fu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Kf(n,t){n.seq.push(t),n.map[t.id]=t}function My(n,t,e){let i=n.name,r=i.length;for(hu.lastIndex=0;;){let s=hu.exec(i),o=hu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Kf(e,l===void 0?new uu(a,n,t):new du(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new fu(a),Kf(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);My(s,o,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function jf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var wy=37297,Sy=0;function Ty(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qf=new Kt;function Ey(n){re._getMatrix(Qf,re.workingColorSpace,n);let t=`mat3( ${Qf.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case po:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ty(n.getShaderSource(t),a)}else return s}function Ay(n,t){let e=Ey(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cy(n,t){let e;switch(t){case df:e="Linear";break;case ff:e="Reinhard";break;case pf:e="Cineon";break;case $o:e="ACESFilmic";break;case gf:e="AgX";break;case xf:e="Neutral";break;case mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new P;function Ry(){re.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function Py(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ly(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Qo(n){return n!==""}function ep(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function np(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(n){return n.replace(Dy,Ny)}var Uy=new Map;function Ny(n,t){let e=ee[t];if(e===void 0){let i=Uy.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pu(e)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(n){return n.replace(Fy,Oy)}function Oy(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function By(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function ky(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function Vy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kh:t="ENVMAP_BLENDING_MULTIPLY";break;case hf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function Hy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Gy(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=By(e),l=ky(e),h=zy(e),u=Vy(e),d=Hy(e),f=Iy(e),p=Py(s),g=r.createProgram(),x,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qo).join(`
`),m.length>0&&(m+=`
`)):(x=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),m=[rp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Ay("linearToOutputTexel",e.outputColorSpace),Ry(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),o=pu(o),o=ep(o,e),o=np(o,e),a=pu(a),a=ep(a,e),a=np(a,e),o=ip(o),a=ip(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+x+o,v=M+m+a,E=jf(r,r.VERTEX_SHADER,_),A=jf(r,r.FRAGMENT_SHADER,v);r.attachShader(g,E),r.attachShader(g,A),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function N(I){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(g)||"",T=r.getShaderInfoLog(E)||"",F=r.getShaderInfoLog(A)||"",k=z.trim(),B=T.trim(),$=F.trim(),H=!0,tt=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,A);else{let L=tp(r,E,"vertex"),C=tp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+L+`
`+C)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||$==="")&&(tt=!1);tt&&(I.diagnostics={runnable:H,programLog:k,vertexShader:{log:B,prefix:x},fragmentShader:{log:$,prefix:m}})}r.deleteShader(E),r.deleteShader(A),O=new Vs(r,g),w=Ly(r,g)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,wy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}var Wy=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gu(t),e.set(t,i)),i}},gu=class{constructor(t){this.id=Wy++,this.code=t,this.usedTimes=0}};function Xy(n,t,e,i,r,s,o){let a=new ws,c=new mu,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return l.add(w),w===0?"uv":`uv${w}`}function x(w,y,I,z,T){let F=z.fog,k=T.geometry,B=w.isMeshStandardMaterial?z.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),H=$&&$.mapping===qo?$.image.height:null,tt=p[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let L=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,C=L!==void 0?L.length:0,U=0;k.morphAttributes.position!==void 0&&(U=1),k.morphAttributes.normal!==void 0&&(U=2),k.morphAttributes.color!==void 0&&(U=3);let q,Mt,ft,G;if(tt){let ce=hi[tt];q=ce.vertexShader,Mt=ce.fragmentShader}else q=w.vertexShader,Mt=w.fragmentShader,c.update(w),ft=c.getVertexShaderID(w),G=c.getFragmentShaderID(w);let Z=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),ct=T.isInstancedMesh===!0,ht=T.isBatchedMesh===!0,Ut=!!w.map,jt=!!w.matcap,D=!!$,at=!!w.aoMap,it=!!w.lightMap,et=!!w.bumpMap,st=!!w.normalMap,bt=!!w.displacementMap,pt=!!w.emissiveMap,St=!!w.metalnessMap,$t=!!w.roughnessMap,qt=w.anisotropy>0,R=w.clearcoat>0,b=w.dispersion>0,Y=w.iridescence>0,Q=w.sheen>0,ut=w.transmission>0,nt=qt&&!!w.anisotropyMap,Bt=R&&!!w.clearcoatMap,wt=R&&!!w.clearcoatNormalMap,Nt=R&&!!w.clearcoatRoughnessMap,Ft=Y&&!!w.iridescenceMap,gt=Y&&!!w.iridescenceThicknessMap,It=Q&&!!w.sheenColorMap,Wt=Q&&!!w.sheenRoughnessMap,kt=!!w.specularMap,Ct=!!w.specularColorMap,Qt=!!w.specularIntensityMap,V=ut&&!!w.transmissionMap,vt=ut&&!!w.thicknessMap,Et=!!w.gradientMap,Lt=!!w.alphaMap,xt=w.alphaTest>0,lt=!!w.alphaHash,Ot=!!w.extensions,Zt=Ti;w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Zt=n.toneMapping);let ye={shaderID:tt,shaderType:w.type,shaderName:w.name,vertexShader:q,fragmentShader:Mt,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ht,batchingColor:ht&&T._colorsTexture!==null,instancing:ct,instancingColor:ct&&T.instanceColor!==null,instancingMorph:ct&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:wr,alphaToCoverage:!!w.alphaToCoverage,map:Ut,matcap:jt,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:H,aoMap:at,lightMap:it,bumpMap:et,normalMap:st,displacementMap:d&&bt,emissiveMap:pt,normalMapObjectSpace:st&&w.normalMapType===bf,normalMapTangentSpace:st&&w.normalMapType===Zh,metalnessMap:St,roughnessMap:$t,anisotropy:qt,anisotropyMap:nt,clearcoat:R,clearcoatMap:Bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Nt,dispersion:b,iridescence:Y,iridescenceMap:Ft,iridescenceThicknessMap:gt,sheen:Q,sheenColorMap:It,sheenRoughnessMap:Wt,specularMap:kt,specularColorMap:Ct,specularIntensityMap:Qt,transmission:ut,transmissionMap:V,thicknessMap:vt,gradientMap:Et,opaque:w.transparent===!1&&w.blending===br&&w.alphaToCoverage===!1,alphaMap:Lt,alphaTest:xt,alphaHash:lt,combine:w.combine,mapUv:Ut&&g(w.map.channel),aoMapUv:at&&g(w.aoMap.channel),lightMapUv:it&&g(w.lightMap.channel),bumpMapUv:et&&g(w.bumpMap.channel),normalMapUv:st&&g(w.normalMap.channel),displacementMapUv:bt&&g(w.displacementMap.channel),emissiveMapUv:pt&&g(w.emissiveMap.channel),metalnessMapUv:St&&g(w.metalnessMap.channel),roughnessMapUv:$t&&g(w.roughnessMap.channel),anisotropyMapUv:nt&&g(w.anisotropyMap.channel),clearcoatMapUv:Bt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&g(w.sheenRoughnessMap.channel),specularMapUv:kt&&g(w.specularMap.channel),specularColorMapUv:Ct&&g(w.specularColorMap.channel),specularIntensityMapUv:Qt&&g(w.specularIntensityMap.channel),transmissionMapUv:V&&g(w.transmissionMap.channel),thicknessMapUv:vt&&g(w.thicknessMap.channel),alphaMapUv:Lt&&g(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(st||qt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!k.attributes.uv&&(Ut||Lt),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ot,skinning:T.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:U,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ut&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:pt&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pe,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function m(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(M(y,w),_(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function _(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let y=p[w.type],I;if(y){let z=hi[y];I=Lf.clone(z.uniforms)}else I=w.uniforms;return I}function E(w,y){let I;for(let z=0,T=h.length;z<T;z++){let F=h[z];if(F.cacheKey===y){I=F,++I.usedTimes;break}}return I===void 0&&(I=new Gy(n,y,w,s),h.push(I)),I}function A(w){if(--w.usedTimes===0){let y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function N(w){c.remove(w)}function O(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:N,programs:h,dispose:O}}function $y(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function qy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function sp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function op(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,d,f,p,g,x){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:g,group:x},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=g,m.group=x),t++,m}function a(u,d,f,p,g,x){let m=o(u,d,f,p,g,x);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):e.push(m)}function c(u,d,f,p,g,x){let m=o(u,d,f,p,g,x);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||qy),i.length>1&&i.sort(d||sp),r.length>1&&r.sort(d||sp)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Yy(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new op,n.set(i,[o])):r>=s.length?(o=new op,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Jy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ky=0;function jy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Qy(n){let t=new Zy,e=Jy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new ve,o=new ve;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,p=0,g=0,x=0,m=0,M=0,_=0,v=0,E=0,A=0,N=0;l.sort(jy);for(let w=0,y=l.length;w<y;w++){let I=l[w],z=I.color,T=I.intensity,F=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*T,u+=z.g*T,d+=z.b*T;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],T);N++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,H=e.get(I);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=I.shadow.matrix,M++}i.directional[f]=B,f++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(z).multiplyScalar(T),B.distance=F,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[g]=B;let $=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,$.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[g]=$.matrix,I.castShadow){let H=e.get(I);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=k,v++}g++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(z).multiplyScalar(T),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=B,x++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let $=I.shadow,H=e.get(I);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=I.shadow.matrix,_++}i.point[p]=B,p++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(T),B.groundColor.copy(I.groundColor).multiplyScalar(T),i.hemi[m]=B,m++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let O=i.hash;(O.directionalLength!==f||O.pointLength!==p||O.spotLength!==g||O.rectAreaLength!==x||O.hemiLength!==m||O.numDirectionalShadows!==M||O.numPointShadows!==_||O.numSpotShadows!==v||O.numSpotMaps!==E||O.numLightProbes!==N)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=x,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,O.directionalLength=f,O.pointLength=p,O.spotLength=g,O.rectAreaLength=x,O.hemiLength=m,O.numDirectionalShadows=M,O.numPointShadows=_,O.numSpotShadows=v,O.numSpotMaps=E,O.numLightProbes=N,i.version=Ky++)}function c(l,h){let u=0,d=0,f=0,p=0,g=0,x=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let _=l[m];if(_.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),u++}else if(_.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),f++}else if(_.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){let v=i.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),g++}}}return{setup:a,setupView:c,state:i}}function ap(n){let t=new Qy(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function tv(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new ap(n),t.set(r,[a])):s>=o.length?(a=new ap(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iv(n,t,e){let i=new As,r=new dt,s=new dt,o=new de,a=new cl({depthPacking:vf}),c=new hl,l={},h=e.maxTextureSize,u={[Mi]:sn,[sn]:Mi,[Pe]:Pe},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:ev,fragmentShader:nv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ae;p.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ie(p,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let m=this.type;this.render=function(A,N,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let T=m!==li&&this.type===li,F=m===li&&this.type!==li;for(let k=0,B=A.length;k<B;k++){let $=A[k],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let tt=H.getFrameExtents();if(r.multiply(tt),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,H.mapSize.y=s.y)),H.map===null||T===!0||F===!0){let C=this.type!==li?{minFilter:En,magFilter:En}:{};H.map!==null&&H.map.dispose(),H.map=new ri(r.x,r.y,C),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let L=H.getViewportCount();for(let C=0;C<L;C++){let U=H.getViewport(C);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),z.viewport(o),H.updateMatrices($,C),i=H.getFrustum(),v(N,O,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===li&&M(H,O),H.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(w,y,I)};function M(A,N){let O=t.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ri(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(N,null,O,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(N,null,O,f,g,null)}function _(A,N,O,w){let y=null,I=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=O.isPointLight===!0?c:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let z=y.uuid,T=N.uuid,F=l[z];F===void 0&&(F={},l[z]=F);let k=F[T];k===void 0&&(k=y.clone(),F[T]=k,N.addEventListener("dispose",E)),y=k}if(y.visible=N.visible,y.wireframe=N.wireframe,w===li?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:u[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=n.properties.get(y);z.light=O}return y}function v(A,N,O,w,y){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let T=t.update(A),F=A.material;if(Array.isArray(F)){let k=T.groups;for(let B=0,$=k.length;B<$;B++){let H=k[B],tt=F[H.materialIndex];if(tt&&tt.visible){let L=_(A,tt,w,y);A.onBeforeShadow(n,A,N,O,T,L,H),n.renderBufferDirect(O,null,T,L,A,H),A.onAfterShadow(n,A,N,O,T,L,H)}}}else if(F.visible){let k=_(A,F,w,y);A.onBeforeShadow(n,A,N,O,T,k,null),n.renderBufferDirect(O,null,T,k,A,null),A.onAfterShadow(n,A,N,O,T,k,null)}}let z=A.children;for(let T=0,F=z.length;T<F;T++)v(z[T],N,O,w,y)}function E(A){A.target.removeEventListener("dispose",E);for(let O in l){let w=l[O],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}var rv={[wl]:Sl,[Tl]:Cl,[El]:Rl,[Mr]:Al,[Sl]:wl,[Cl]:Tl,[Rl]:El,[Al]:Mr};function sv(n,t){function e(){let V=!1,vt=new de,Et=null,Lt=new de(0,0,0,0);return{setMask:function(xt){Et!==xt&&!V&&(n.colorMask(xt,xt,xt,xt),Et=xt)},setLocked:function(xt){V=xt},setClear:function(xt,lt,Ot,Zt,ye){ye===!0&&(xt*=Zt,lt*=Zt,Ot*=Zt),vt.set(xt,lt,Ot,Zt),Lt.equals(vt)===!1&&(n.clearColor(xt,lt,Ot,Zt),Lt.copy(vt))},reset:function(){V=!1,Et=null,Lt.set(-1,0,0,0)}}}function i(){let V=!1,vt=!1,Et=null,Lt=null,xt=null;return{setReversed:function(lt){if(vt!==lt){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;let Zt=xt;xt=null,this.setClear(Zt)}},getReversed:function(){return vt},setTest:function(lt){lt?Z(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(lt){Et!==lt&&!V&&(n.depthMask(lt),Et=lt)},setFunc:function(lt){if(vt&&(lt=rv[lt]),Lt!==lt){switch(lt){case wl:n.depthFunc(n.NEVER);break;case Sl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case Al:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=lt}},setLocked:function(lt){V=lt},setClear:function(lt){xt!==lt&&(vt&&(lt=1-lt),n.clearDepth(lt),xt=lt)},reset:function(){V=!1,Et=null,Lt=null,xt=null,vt=!1}}}function r(){let V=!1,vt=null,Et=null,Lt=null,xt=null,lt=null,Ot=null,Zt=null,ye=null;return{setTest:function(ce){V||(ce?Z(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ce){vt!==ce&&!V&&(n.stencilMask(ce),vt=ce)},setFunc:function(ce,pi,ei){(Et!==ce||Lt!==pi||xt!==ei)&&(n.stencilFunc(ce,pi,ei),Et=ce,Lt=pi,xt=ei)},setOp:function(ce,pi,ei){(lt!==ce||Ot!==pi||Zt!==ei)&&(n.stencilOp(ce,pi,ei),lt=ce,Ot=pi,Zt=ei)},setLocked:function(ce){V=ce},setClear:function(ce){ye!==ce&&(n.clearStencil(ce),ye=ce)},reset:function(){V=!1,vt=null,Et=null,Lt=null,xt=null,lt=null,Ot=null,Zt=null,ye=null}}}let s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,m=null,M=null,_=null,v=null,E=null,A=null,N=new Gt(0,0,0),O=0,w=!1,y=null,I=null,z=null,T=null,F=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=$>=2);let tt=null,L={},C=n.getParameter(n.SCISSOR_BOX),U=n.getParameter(n.VIEWPORT),q=new de().fromArray(C),Mt=new de().fromArray(U);function ft(V,vt,Et,Lt){let xt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(V,lt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<Et;Ot++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(vt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return lt}let G={};G[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Mr),et(!1),st(Uh),Z(n.CULL_FACE),at(Si);function Z(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function ot(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function ct(V,vt){return u[V]!==vt?(n.bindFramebuffer(V,vt),u[V]=vt,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=vt),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ht(V,vt){let Et=f,Lt=!1;if(V){Et=d.get(vt),Et===void 0&&(Et=[],d.set(vt,Et));let xt=V.textures;if(Et.length!==xt.length||Et[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Ot=xt.length;lt<Ot;lt++)Et[lt]=n.COLOR_ATTACHMENT0+lt;Et.length=xt.length,Lt=!0}}else Et[0]!==n.BACK&&(Et[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(Et)}function Ut(V){return p!==V?(n.useProgram(V),p=V,!0):!1}let jt={[Hi]:n.FUNC_ADD,[$d]:n.FUNC_SUBTRACT,[qd]:n.FUNC_REVERSE_SUBTRACT};jt[Yd]=n.MIN,jt[Zd]=n.MAX;let D={[Jd]:n.ZERO,[Kd]:n.ONE,[jd]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[sf]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[ef]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[af]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[cf]:n.ONE_MINUS_CONSTANT_ALPHA};function at(V,vt,Et,Lt,xt,lt,Ot,Zt,ye,ce){if(V===Si){g===!0&&(ot(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),V!==Xd){if(V!==x||ce!==w){if((m!==Hi||v!==Hi)&&(n.blendEquation(n.FUNC_ADD),m=Hi,v=Hi),ce)switch(V){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fh:n.blendFunc(n.ONE,n.ONE);break;case Oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,_=null,E=null,A=null,N.set(0,0,0),O=0,x=V,w=ce}return}xt=xt||vt,lt=lt||Et,Ot=Ot||Lt,(vt!==m||xt!==v)&&(n.blendEquationSeparate(jt[vt],jt[xt]),m=vt,v=xt),(Et!==M||Lt!==_||lt!==E||Ot!==A)&&(n.blendFuncSeparate(D[Et],D[Lt],D[lt],D[Ot]),M=Et,_=Lt,E=lt,A=Ot),(Zt.equals(N)===!1||ye!==O)&&(n.blendColor(Zt.r,Zt.g,Zt.b,ye),N.copy(Zt),O=ye),x=V,w=!1}function it(V,vt){V.side===Pe?ot(n.CULL_FACE):Z(n.CULL_FACE);let Et=V.side===sn;vt&&(Et=!Et),et(Et),V.blending===br&&V.transparent===!1?at(Si):at(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);let Lt=V.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(V){y!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),y=V)}function st(V){V!==Gd?(Z(n.CULL_FACE),V!==I&&(V===Uh?n.cullFace(n.BACK):V===Wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),I=V}function bt(V){V!==z&&(B&&n.lineWidth(V),z=V)}function pt(V,vt,Et){V?(Z(n.POLYGON_OFFSET_FILL),(T!==vt||F!==Et)&&(n.polygonOffset(vt,Et),T=vt,F=Et)):ot(n.POLYGON_OFFSET_FILL)}function St(V){V?Z(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function $t(V){V===void 0&&(V=n.TEXTURE0+k-1),tt!==V&&(n.activeTexture(V),tt=V)}function qt(V,vt,Et){Et===void 0&&(tt===null?Et=n.TEXTURE0+k-1:Et=tt);let Lt=L[Et];Lt===void 0&&(Lt={type:void 0,texture:void 0},L[Et]=Lt),(Lt.type!==V||Lt.texture!==vt)&&(tt!==Et&&(n.activeTexture(Et),tt=Et),n.bindTexture(V,vt||G[V]),Lt.type=V,Lt.texture=vt)}function R(){let V=L[tt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(V){q.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),q.copy(V))}function Wt(V){Mt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function kt(V,vt){let Et=l.get(vt);Et===void 0&&(Et=new WeakMap,l.set(vt,Et));let Lt=Et.get(V);Lt===void 0&&(Lt=n.getUniformBlockIndex(vt,V.name),Et.set(V,Lt))}function Ct(V,vt){let Lt=l.get(vt).get(V);c.get(vt)!==Lt&&(n.uniformBlockBinding(vt,Lt,V.__bindingPointIndex),c.set(vt,Lt))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,L={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,m=null,M=null,_=null,v=null,E=null,A=null,N=new Gt(0,0,0),O=0,w=!1,y=null,I=null,z=null,T=null,F=null,q.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:ot,bindFramebuffer:ct,drawBuffers:ht,useProgram:Ut,setBlending:at,setMaterial:it,setFlipSided:et,setCullFace:st,setLineWidth:bt,setPolygonOffset:pt,setScissorTest:St,activeTexture:$t,bindTexture:qt,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:Ft,texImage3D:gt,updateUBOMapping:kt,uniformBlockBinding:Ct,texStorage2D:wt,texStorage3D:Nt,texSubImage2D:Q,texSubImage3D:ut,compressedTexSubImage2D:nt,compressedTexSubImage3D:Bt,scissor:It,viewport:Wt,reset:Qt}}function ov(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):go("canvas")}function g(R,b,Y){let Q=1,ut=qt(R);if((ut.width>Y||ut.height>Y)&&(Q=Y/Math.max(ut.width,ut.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let nt=Math.floor(Q*ut.width),Bt=Math.floor(Q*ut.height);u===void 0&&(u=p(nt,Bt));let wt=b?p(nt,Bt):u;return wt.width=nt,wt.height=Bt,wt.getContext("2d").drawImage(R,0,0,nt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+nt+"x"+Bt+")."),wt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),R;return R}function x(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,b,Y,Q,ut=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=b;if(b===n.RED&&(Y===n.FLOAT&&(nt=n.R32F),Y===n.HALF_FLOAT&&(nt=n.R16F),Y===n.UNSIGNED_BYTE&&(nt=n.R8)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(nt=n.R8UI),Y===n.UNSIGNED_SHORT&&(nt=n.R16UI),Y===n.UNSIGNED_INT&&(nt=n.R32UI),Y===n.BYTE&&(nt=n.R8I),Y===n.SHORT&&(nt=n.R16I),Y===n.INT&&(nt=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(nt=n.RG32F),Y===n.HALF_FLOAT&&(nt=n.RG16F),Y===n.UNSIGNED_BYTE&&(nt=n.RG8)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(nt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(nt=n.RG16UI),Y===n.UNSIGNED_INT&&(nt=n.RG32UI),Y===n.BYTE&&(nt=n.RG8I),Y===n.SHORT&&(nt=n.RG16I),Y===n.INT&&(nt=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),Y===n.UNSIGNED_INT&&(nt=n.RGB32UI),Y===n.BYTE&&(nt=n.RGB8I),Y===n.SHORT&&(nt=n.RGB16I),Y===n.INT&&(nt=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(nt=n.RGBA32UI),Y===n.BYTE&&(nt=n.RGBA8I),Y===n.SHORT&&(nt=n.RGBA16I),Y===n.INT&&(nt=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),b===n.RGBA){let Bt=ut?po:re.getTransfer(Q);Y===n.FLOAT&&(nt=n.RGBA32F),Y===n.HALF_FLOAT&&(nt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(nt=Bt===fe?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(R,b){let Y;return R?b===null||b===ji||b===Fs?Y=n.DEPTH24_STENCIL8:b===ci?Y=n.DEPTH32F_STENCIL8:b===Us&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===Fs?Y=n.DEPTH_COMPONENT24:b===ci?Y=n.DEPTH_COMPONENT32F:b===Us&&(Y=n.DEPTH_COMPONENT16),Y}function E(R,b){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==En&&R.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),O(b),b.isVideoTexture&&h.delete(b)}function N(R){let b=R.target;b.removeEventListener("dispose",N),y(b)}function O(R){let b=i.get(R);if(b.__webglInit===void 0)return;let Y=R.source,Q=d.get(Y);if(Q){let ut=Q[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&w(R),Object.keys(Q).length===0&&d.delete(Y)}i.remove(R)}function w(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let Y=R.source,Q=d.get(Y);delete Q[b.__cacheKey],o.memory.textures--}function y(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let ut=0;ut<b.__webglFramebuffer[Q].length;ut++)n.deleteFramebuffer(b.__webglFramebuffer[Q][ut]);else n.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=R.textures;for(let Q=0,ut=Y.length;Q<ut;Q++){let nt=i.get(Y[Q]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(Y[Q])}i.remove(R)}let I=0;function z(){I=0}function T(){let R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function F(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){let Y=i.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Y,R,b);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function B(R,b){let Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){G(Y,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function $(R,b){let Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){G(Y,R,b);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function H(R,b){let Y=i.get(R);if(R.version>0&&Y.__version!==R.version){Z(Y,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}let tt={[_s]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},L={[En]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[Yo]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},C={[Mf]:n.NEVER,[Cf]:n.ALWAYS,[wf]:n.LESS,[Jh]:n.LEQUAL,[Sf]:n.EQUAL,[Af]:n.GEQUAL,[Tf]:n.GREATER,[Ef]:n.NOTEQUAL};function U(R,b){if(b.type===ci&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===Ll||b.magFilter===Yo||b.magFilter===Ki||b.minFilter===zn||b.minFilter===Ll||b.minFilter===Yo||b.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,tt[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,tt[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,tt[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,L[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,C[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===En||b.minFilter!==Yo&&b.minFilter!==Ki||b.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function q(R,b){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let Q=b.source,ut=d.get(Q);ut===void 0&&(ut={},d.set(Q,ut));let nt=F(b);if(nt!==R.__cacheKey){ut[nt]===void 0&&(ut[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ut[nt].usedTimes++;let Bt=ut[R.__cacheKey];Bt!==void 0&&(ut[R.__cacheKey].usedTimes--,Bt.usedTimes===0&&w(b)),R.__cacheKey=nt,R.__webglTexture=ut[nt].texture}return Y}function Mt(R,b,Y){return Math.floor(Math.floor(R/Y)/b)}function ft(R,b,Y,Q){let nt=R.updateRanges;if(nt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,Q,b.data);else{nt.sort((gt,It)=>gt.start-It.start);let Bt=0;for(let gt=1;gt<nt.length;gt++){let It=nt[Bt],Wt=nt[gt],kt=It.start+It.count,Ct=Mt(Wt.start,b.width,4),Qt=Mt(It.start,b.width,4);Wt.start<=kt+1&&Ct===Qt&&Mt(Wt.start+Wt.count-1,b.width,4)===Ct?It.count=Math.max(It.count,Wt.start+Wt.count-It.start):(++Bt,nt[Bt]=Wt)}nt.length=Bt+1;let wt=n.getParameter(n.UNPACK_ROW_LENGTH),Nt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let gt=0,It=nt.length;gt<It;gt++){let Wt=nt[gt],kt=Math.floor(Wt.start/4),Ct=Math.ceil(Wt.count/4),Qt=kt%b.width,V=Math.floor(kt/b.width),vt=Ct,Et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Qt,V,vt,Et,Y,Q,b.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,wt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function G(R,b,Y){let Q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=n.TEXTURE_3D);let ut=q(R,b),nt=b.source;e.bindTexture(Q,R.__webglTexture,n.TEXTURE0+Y);let Bt=i.get(nt);if(nt.version!==Bt.__version||ut===!0){e.activeTexture(n.TEXTURE0+Y);let wt=re.getPrimaries(re.workingColorSpace),Nt=b.colorSpace===Ei?null:re.getPrimaries(b.colorSpace),Ft=b.colorSpace===Ei||wt===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let gt=g(b.image,!1,r.maxTextureSize);gt=$t(b,gt);let It=s.convert(b.format,b.colorSpace),Wt=s.convert(b.type),kt=_(b.internalFormat,It,Wt,b.colorSpace,b.isVideoTexture);U(Q,b);let Ct,Qt=b.mipmaps,V=b.isVideoTexture!==!0,vt=Bt.__version===void 0||ut===!0,Et=nt.dataReady,Lt=E(b,gt);if(b.isDepthTexture)kt=v(b.format===Os,b.type),vt&&(V?e.texStorage2D(n.TEXTURE_2D,1,kt,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,kt,gt.width,gt.height,0,It,Wt,null));else if(b.isDataTexture)if(Qt.length>0){V&&vt&&e.texStorage2D(n.TEXTURE_2D,Lt,kt,Qt[0].width,Qt[0].height);for(let xt=0,lt=Qt.length;xt<lt;xt++)Ct=Qt[xt],V?Et&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,It,Wt,Ct.data):e.texImage2D(n.TEXTURE_2D,xt,kt,Ct.width,Ct.height,0,It,Wt,Ct.data);b.generateMipmaps=!1}else V?(vt&&e.texStorage2D(n.TEXTURE_2D,Lt,kt,gt.width,gt.height),Et&&ft(b,gt,It,Wt)):e.texImage2D(n.TEXTURE_2D,0,kt,gt.width,gt.height,0,It,Wt,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,kt,Qt[0].width,Qt[0].height,gt.depth);for(let xt=0,lt=Qt.length;xt<lt;xt++)if(Ct=Qt[xt],b.format!==Cn)if(It!==null)if(V){if(Et)if(b.layerUpdates.size>0){let Ot=ru(Ct.width,Ct.height,b.format,b.type);for(let Zt of b.layerUpdates){let ye=Ct.data.subarray(Zt*Ot/Ct.data.BYTES_PER_ELEMENT,(Zt+1)*Ot/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,Zt,Ct.width,Ct.height,1,It,ye)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,gt.depth,It,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xt,kt,Ct.width,Ct.height,gt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,gt.depth,It,Wt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,xt,kt,Ct.width,Ct.height,gt.depth,0,It,Wt,Ct.data)}else{V&&vt&&e.texStorage2D(n.TEXTURE_2D,Lt,kt,Qt[0].width,Qt[0].height);for(let xt=0,lt=Qt.length;xt<lt;xt++)Ct=Qt[xt],b.format!==Cn?It!==null?V?Et&&e.compressedTexSubImage2D(n.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,xt,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Et&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,It,Wt,Ct.data):e.texImage2D(n.TEXTURE_2D,xt,kt,Ct.width,Ct.height,0,It,Wt,Ct.data)}else if(b.isDataArrayTexture)if(V){if(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,kt,gt.width,gt.height,gt.depth),Et)if(b.layerUpdates.size>0){let xt=ru(gt.width,gt.height,b.format,b.type);for(let lt of b.layerUpdates){let Ot=gt.data.subarray(lt*xt/gt.data.BYTES_PER_ELEMENT,(lt+1)*xt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,gt.width,gt.height,1,It,Wt,Ot)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,It,Wt,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,gt.width,gt.height,gt.depth,0,It,Wt,gt.data);else if(b.isData3DTexture)V?(vt&&e.texStorage3D(n.TEXTURE_3D,Lt,kt,gt.width,gt.height,gt.depth),Et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,It,Wt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,gt.width,gt.height,gt.depth,0,It,Wt,gt.data);else if(b.isFramebufferTexture){if(vt)if(V)e.texStorage2D(n.TEXTURE_2D,Lt,kt,gt.width,gt.height);else{let xt=gt.width,lt=gt.height;for(let Ot=0;Ot<Lt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,kt,xt,lt,0,It,Wt,null),xt>>=1,lt>>=1}}else if(Qt.length>0){if(V&&vt){let xt=qt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,Lt,kt,xt.width,xt.height)}for(let xt=0,lt=Qt.length;xt<lt;xt++)Ct=Qt[xt],V?Et&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,It,Wt,Ct):e.texImage2D(n.TEXTURE_2D,xt,kt,It,Wt,Ct);b.generateMipmaps=!1}else if(V){if(vt){let xt=qt(gt);e.texStorage2D(n.TEXTURE_2D,Lt,kt,xt.width,xt.height)}Et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,Wt,gt)}else e.texImage2D(n.TEXTURE_2D,0,kt,It,Wt,gt);x(b)&&m(Q),Bt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Z(R,b,Y){if(b.image.length!==6)return;let Q=q(R,b),ut=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Y);let nt=i.get(ut);if(ut.version!==nt.__version||Q===!0){e.activeTexture(n.TEXTURE0+Y);let Bt=re.getPrimaries(re.workingColorSpace),wt=b.colorSpace===Ei?null:re.getPrimaries(b.colorSpace),Nt=b.colorSpace===Ei||Bt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Ft=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let lt=0;lt<6;lt++)!Ft&&!gt?It[lt]=g(b.image[lt],!0,r.maxCubemapSize):It[lt]=gt?b.image[lt].image:b.image[lt],It[lt]=$t(b,It[lt]);let Wt=It[0],kt=s.convert(b.format,b.colorSpace),Ct=s.convert(b.type),Qt=_(b.internalFormat,kt,Ct,b.colorSpace),V=b.isVideoTexture!==!0,vt=nt.__version===void 0||Q===!0,Et=ut.dataReady,Lt=E(b,Wt);U(n.TEXTURE_CUBE_MAP,b);let xt;if(Ft){V&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,Qt,Wt.width,Wt.height);for(let lt=0;lt<6;lt++){xt=It[lt].mipmaps;for(let Ot=0;Ot<xt.length;Ot++){let Zt=xt[Ot];b.format!==Cn?kt!==null?V?Et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Zt.width,Zt.height,kt,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,Qt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Zt.width,Zt.height,kt,Ct,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,Qt,Zt.width,Zt.height,0,kt,Ct,Zt.data)}}}else{if(xt=b.mipmaps,V&&vt){xt.length>0&&Lt++;let lt=qt(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,Qt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(gt){V?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,It[lt].width,It[lt].height,kt,Ct,It[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Qt,It[lt].width,It[lt].height,0,kt,Ct,It[lt].data);for(let Ot=0;Ot<xt.length;Ot++){let ye=xt[Ot].image[lt].image;V?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,ye.width,ye.height,kt,Ct,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,Qt,ye.width,ye.height,0,kt,Ct,ye.data)}}else{V?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,kt,Ct,It[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Qt,kt,Ct,It[lt]);for(let Ot=0;Ot<xt.length;Ot++){let Zt=xt[Ot];V?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,kt,Ct,Zt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,Qt,kt,Ct,Zt.image[lt])}}}x(b)&&m(n.TEXTURE_CUBE_MAP),nt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ot(R,b,Y,Q,ut,nt){let Bt=s.convert(Y.format,Y.colorSpace),wt=s.convert(Y.type),Nt=_(Y.internalFormat,Bt,wt,Y.colorSpace),Ft=i.get(b),gt=i.get(Y);if(gt.__renderTarget=b,!Ft.__hasExternalTextures){let It=Math.max(1,b.width>>nt),Wt=Math.max(1,b.height>>nt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,nt,Nt,It,Wt,b.depth,0,Bt,wt,null):e.texImage2D(ut,nt,Nt,It,Wt,0,Bt,wt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),pt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ut,gt.__webglTexture,0,bt(b)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ut,gt.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(R,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let Q=b.depthTexture,ut=Q&&Q.isDepthTexture?Q.type:null,nt=v(b.stencilBuffer,ut),Bt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=bt(b);pt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,nt,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,nt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,nt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Bt,n.RENDERBUFFER,R)}else{let Q=b.textures;for(let ut=0;ut<Q.length;ut++){let nt=Q[ut],Bt=s.convert(nt.format,nt.colorSpace),wt=s.convert(nt.type),Nt=_(nt.internalFormat,Bt,wt,nt.colorSpace),Ft=bt(b);Y&&pt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Nt,b.width,b.height):pt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,Nt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Nt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);let ut=Q.__webglTexture,nt=bt(b);if(b.depthTexture.format===ys)pt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(b.depthTexture.format===Os)pt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Ut(R){let b=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",ut)};Q.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=Q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let Q=R.texture.mipmaps;Q&&Q.length>0?ht(b.__webglFramebuffer[0],R):ht(b.__webglFramebuffer,R)}else if(Y){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=n.createRenderbuffer(),ct(b.__webglDepthbuffer[Q],R,!1);else{let ut=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,nt)}}else{let Q=R.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ct(b.__webglDepthbuffer,R,!1);else{let ut=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,nt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(R,b,Y){let Q=i.get(R);b!==void 0&&ot(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ut(R)}function D(R){let b=R.texture,Y=i.get(R),Q=i.get(b);R.addEventListener("dispose",N);let ut=R.textures,nt=R.isWebGLCubeRenderTarget===!0,Bt=ut.length>1;if(Bt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=b.version,o.memory.textures++),nt){Y.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[wt]=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)Y.__webglFramebuffer[wt][Nt]=n.createFramebuffer()}else Y.__webglFramebuffer[wt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)Y.__webglFramebuffer[wt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Bt)for(let wt=0,Nt=ut.length;wt<Nt;wt++){let Ft=i.get(ut[wt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&pt(R)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let wt=0;wt<ut.length;wt++){let Nt=ut[wt];Y.__webglColorRenderbuffer[wt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[wt]);let Ft=s.convert(Nt.format,Nt.colorSpace),gt=s.convert(Nt.type),It=_(Nt.internalFormat,Ft,gt,Nt.colorSpace,R.isXRRenderTarget===!0),Wt=bt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt,It,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[wt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),U(n.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)ot(Y.__webglFramebuffer[wt][Nt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Nt);else ot(Y.__webglFramebuffer[wt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);x(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let wt=0,Nt=ut.length;wt<Nt;wt++){let Ft=ut[wt],gt=i.get(Ft),It=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(It=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(It,gt.__webglTexture),U(It,Ft),ot(Y.__webglFramebuffer,R,Ft,n.COLOR_ATTACHMENT0+wt,It,0),x(Ft)&&m(It)}e.unbindTexture()}else{let wt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(wt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,Q.__webglTexture),U(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)ot(Y.__webglFramebuffer[Nt],R,b,n.COLOR_ATTACHMENT0,wt,Nt);else ot(Y.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,wt,0);x(b)&&m(wt),e.unbindTexture()}R.depthBuffer&&Ut(R)}function at(R){let b=R.textures;for(let Y=0,Q=b.length;Y<Q;Y++){let ut=b[Y];if(x(ut)){let nt=M(R),Bt=i.get(ut).__webglTexture;e.bindTexture(nt,Bt),m(nt),e.unbindTexture()}}}let it=[],et=[];function st(R){if(R.samples>0){if(pt(R)===!1){let b=R.textures,Y=R.width,Q=R.height,ut=n.COLOR_BUFFER_BIT,nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Bt=i.get(R),wt=b.length>1;if(wt)for(let Ft=0;Ft<b.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);let Nt=R.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ft=0;Ft<b.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),wt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);let gt=i.get(b[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,ut,n.NEAREST),c===!0&&(it.length=0,et.length=0,it.push(n.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(nt),et.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),wt)for(let Ft=0;Ft<b.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);let gt=i.get(b[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function bt(R){return Math.min(r.maxSamples,R.samples)}function pt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function St(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function $t(R,b){let Y=R.colorSpace,Q=R.format,ut=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==wr&&Y!==Ei&&(re.getTransfer(Y)===fe?(Q!==Cn||ut!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=T,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=jt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=pt}function av(n,t){function e(i,r=Ei){let s,o=re.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Dl)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Ns)return n.HALF_FLOAT;if(i===Xh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Cn)return n.RGBA;if(i===ys)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Fl)return n.RED_INTEGER;if(i===Yh)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===Bl)return n.RGBA_INTEGER;if(i===Zo||i===Jo||i===Ko||i===jo)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===zl||i===Vl||i===Hl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Wl||i===Xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gl||i===Wl)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$l||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$l)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===ac||i===lc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===oc)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===hc||i===uc||i===dc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===cc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Gn({vertexShader:lv,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends ii{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,g=typeof XRWebGLBinding<"u",x=new xu,m={},M=e.getContextAttributes(),_=null,v=null,E=[],A=[],N=new dt,O=null,w=new Ge;w.viewport=new de;let y=new Ge;y.viewport=new de;let I=[w,y],z=new bl,T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=E[G];return Z===void 0&&(Z=new Ss,E[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=E[G];return Z===void 0&&(Z=new Ss,E[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=E[G];return Z===void 0&&(Z=new Ss,E[G]=Z),Z.getHandSpace()};function k(G){let Z=A.indexOf(G.inputSource);if(Z===-1)return;let ot=E[Z];ot!==void 0&&(ot.update(G.inputSource,G.frame,l||o),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let G=0;G<E.length;G++){let Z=A[G];Z!==null&&(A[G]=null,E[G].disconnect(Z))}T=null,F=null,x.reset();for(let G in m)delete m[G];t.setRenderTarget(_),f=null,d=null,u=null,r=null,v=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(N),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ct=null,ht=null;M.depth&&(ht=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=M.stencil?Os:ys,ct=M.stencil?Fs:ji);let Ut={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ut),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ri(d.textureWidth,d.textureHeight,{format:Cn,type:Xn,depthTexture:new Eo(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ri(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(G){for(let Z=0;Z<G.removed.length;Z++){let ot=G.removed[Z],ct=A.indexOf(ot);ct>=0&&(A[ct]=null,E[ct].disconnect(ot))}for(let Z=0;Z<G.added.length;Z++){let ot=G.added[Z],ct=A.indexOf(ot);if(ct===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=A.length){A.push(ot),ct=Ut;break}else if(A[Ut]===null){A[Ut]=ot,ct=Ut;break}if(ct===-1)break}let ht=E[ct];ht&&ht.connect(ot)}}let H=new P,tt=new P;function L(G,Z,ot){H.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(ot.matrixWorld);let ct=H.distanceTo(tt),ht=Z.projectionMatrix.elements,Ut=ot.projectionMatrix.elements,jt=ht[14]/(ht[10]-1),D=ht[14]/(ht[10]+1),at=(ht[9]+1)/ht[5],it=(ht[9]-1)/ht[5],et=(ht[8]-1)/ht[0],st=(Ut[8]+1)/Ut[0],bt=jt*et,pt=jt*st,St=ct/(-et+st),$t=St*-et;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX($t),G.translateZ(St),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ht[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let qt=jt+St,R=D+St,b=bt-$t,Y=pt+(ct-$t),Q=at*D/R*qt,ut=it*D/R*qt;G.projectionMatrix.makePerspective(b,Y,Q,ut,qt,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function C(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Z=G.near,ot=G.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(ot=x.depthFar)),z.near=y.near=w.near=Z,z.far=y.far=w.far=ot,(T!==z.near||F!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),T=z.near,F=z.far),z.layers.mask=G.layers.mask|6,w.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;let ct=G.parent,ht=z.cameras;C(z,ct);for(let Ut=0;Ut<ht.length;Ut++)C(ht[Ut],ct);ht.length===2?L(z,w,y):z.projectionMatrix.copy(w.projectionMatrix),U(G,z,ct)};function U(G,Z,ot){ot===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(G){return m[G]};let q=null;function Mt(G,Z){if(h=Z.getViewerPose(l||o),p=Z,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ct=!1;ot.length!==z.cameras.length&&(z.cameras.length=0,ct=!0);for(let D=0;D<ot.length;D++){let at=ot[D],it=null;if(f!==null)it=f.getViewport(at);else{let st=u.getViewSubImage(d,at);it=st.viewport,D===0&&(t.setRenderTargetTextures(v,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(v))}let et=I[D];et===void 0&&(et=new Ge,et.layers.enable(D),et.viewport=new de,I[D]=et),et.matrix.fromArray(at.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(at.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(it.x,it.y,it.width,it.height),D===0&&(z.matrix.copy(et.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ct===!0&&z.cameras.push(et)}let ht=r.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let D=u.getDepthInformation(ot[0]);D&&D.isValid&&D.texture&&x.init(D,r.renderState)}if(ht&&ht.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let D=0;D<ot.length;D++){let at=ot[D].camera;if(at){let it=m[at];it||(it=new Ao,m[at]=it);let et=u.getCameraImage(at);it.sourceTexture=et}}}}for(let ot=0;ot<E.length;ot++){let ct=A[ot],ht=E[ot];ct!==null&&ht!==void 0&&ht.update(ct,Z,l||o)}q&&q(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),p=null}let ft=new lp;ft.setAnimationLoop(Mt),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}},Nr=new Hn,hv=new ve;function uv(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,tu(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function r(x,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(x,m):m.isMeshToonMaterial?(s(x,m),u(x,m)):m.isMeshPhongMaterial?(s(x,m),h(x,m)):m.isMeshStandardMaterial?(s(x,m),d(x,m),m.isMeshPhysicalMaterial&&f(x,m,v)):m.isMeshMatcapMaterial?(s(x,m),p(x,m)):m.isMeshDepthMaterial?s(x,m):m.isMeshDistanceMaterial?(s(x,m),g(x,m)):m.isMeshNormalMaterial?s(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,M,_):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===sn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===sn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let M=t.get(m),_=M.envMap,v=M.envMapRotation;_&&(x.envMap.value=_,Nr.copy(v),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),x.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(Nr)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,M,_){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*M,x.scale.value=_*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function d(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function f(x,m,M){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function g(x,m){let M=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dv(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let v=_.program;i.uniformBlockBinding(M,v)}function l(M,_){let v=r[M.id];v===void 0&&(p(M),v=h(M),r[M.id]=v,M.addEventListener("dispose",x));let E=_.program;i.updateUBOMapping(M,E);let A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function h(M){let _=u();M.__bindingPointIndex=_;let v=n.createBuffer(),E=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=r[M.id],v=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,N=v.length;A<N;A++){let O=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,y=O.length;w<y;w++){let I=O[w];if(f(I,A,w,E)===!0){let z=I.__offset,T=Array.isArray(I.value)?I.value:[I.value],F=0;for(let k=0;k<T.length;k++){let B=T[k],$=g(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,z+F,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,_,v,E){let A=M.value,N=_+"_"+v;if(E[N]===void 0)return typeof A=="number"||typeof A=="boolean"?E[N]=A:E[N]=A.clone(),!0;{let O=E[N];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return E[N]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function p(M){let _=M.uniforms,v=0,E=16;for(let N=0,O=_.length;N<O;N++){let w=Array.isArray(_[N])?_[N]:[_[N]];for(let y=0,I=w.length;y<I;y++){let z=w[y],T=Array.isArray(z.value)?z.value:[z.value];for(let F=0,k=T.length;F<k;F++){let B=T[F],$=g(B),H=v%E,tt=H%$.boundary,L=H+tt;v+=tt,L!==0&&E-L<$.storage&&(v+=E-L),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=$.storage}}}let A=v%E;return A>0&&(v+=E-A),M.__size=v,M.__cache={},this}function g(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function x(M){let _=M.target;_.removeEventListener("dispose",x);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var ta=class{constructor(t={}){let{canvas:e=Rf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=He;let A=0,N=0,O=null,w=-1,y=null,I=new de,z=new de,T=null,F=new Gt(0),k=0,B=e.width,$=e.height,H=1,tt=null,L=null,C=new de(0,0,B,$),U=new de(0,0,B,$),q=!1,Mt=new As,ft=!1,G=!1,Z=new ve,ot=new P,ct=new de,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function jt(){return O===null?H:1}let D=i;function at(S,W){return e.getContext(S,W)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){let W="webgl2";if(D=at(W,S),D===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let it,et,st,bt,pt,St,$t,qt,R,b,Y,Q,ut,nt,Bt,wt,Nt,Ft,gt,It,Wt,kt,Ct,Qt;function V(){it=new I_(D),it.init(),kt=new av(D,it),et=new w_(D,it,t,kt),st=new sv(D,it),et.reversedDepthBuffer&&d&&st.buffers.depth.setReversed(!0),bt=new D_(D),pt=new $y,St=new ov(D,it,st,pt,et,kt,bt),$t=new T_(v),qt=new R_(v),R=new k0(D),Ct=new b_(D,R),b=new P_(D,R,bt,Ct),Y=new N_(D,b,R,bt),gt=new U_(D,et,St),wt=new S_(pt),Q=new Xy(v,$t,qt,it,et,Ct,wt),ut=new uv(v,pt),nt=new Yy,Bt=new tv(it),Ft=new v_(v,$t,qt,st,Y,f,c),Nt=new iv(v,Y,et),Qt=new dv(D,bt,et,st),It=new M_(D,it,bt),Wt=new L_(D,it,bt),bt.programs=Q.programs,v.capabilities=et,v.extensions=it,v.properties=pt,v.renderLists=nt,v.shadowMap=Nt,v.state=st,v.info=bt}V();let vt=new _u(v,D);this.xr=vt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(B,$,!1))},this.getSize=function(S){return S.set(B,$)},this.setSize=function(S,W,K=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,$=W,e.width=Math.floor(S*H),e.height=Math.floor(W*H),K===!0&&(e.style.width=S+"px",e.style.height=W+"px"),this.setViewport(0,0,S,W)},this.getDrawingBufferSize=function(S){return S.set(B*H,$*H).floor()},this.setDrawingBufferSize=function(S,W,K){B=S,$=W,H=K,e.width=Math.floor(S*K),e.height=Math.floor(W*K),this.setViewport(0,0,S,W)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(C)},this.setViewport=function(S,W,K,j){S.isVector4?C.set(S.x,S.y,S.z,S.w):C.set(S,W,K,j),st.viewport(I.copy(C).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,W,K,j){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,W,K,j),st.scissor(z.copy(U).multiplyScalar(H).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){st.setScissorTest(q=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){L=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(S=!0,W=!0,K=!0){let j=0;if(S){let X=!1;if(O!==null){let _t=O.texture.format;X=_t===Bl||_t===Ol||_t===Fl}if(X){let _t=O.texture.type,Rt=_t===Xn||_t===ji||_t===Us||_t===Fs||_t===Ul||_t===Nl,Dt=Ft.getClearColor(),Pt=Ft.getClearAlpha(),Ht=Dt.r,Xt=Dt.g,zt=Dt.b;Rt?(p[0]=Ht,p[1]=Xt,p[2]=zt,p[3]=Pt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ht,g[1]=Xt,g[2]=zt,g[3]=Pt,D.clearBufferiv(D.COLOR,0,g))}else j|=D.COLOR_BUFFER_BIT}W&&(j|=D.DEPTH_BUFFER_BIT),K&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ft.dispose(),nt.dispose(),Bt.dispose(),pt.dispose(),$t.dispose(),qt.dispose(),Y.dispose(),Ct.dispose(),Qt.dispose(),Q.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",ei),vt.removeEventListener("sessionend",rd),fr.stop()};function Et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=bt.autoReset,W=Nt.enabled,K=Nt.autoUpdate,j=Nt.needsUpdate,X=Nt.type;V(),bt.autoReset=S,Nt.enabled=W,Nt.autoUpdate=K,Nt.needsUpdate=j,Nt.type=X}function xt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){let W=S.target;W.removeEventListener("dispose",lt),Ot(W)}function Ot(S){Zt(S),pt.remove(S)}function Zt(S){let W=pt.get(S).programs;W!==void 0&&(W.forEach(function(K){Q.releaseProgram(K)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,W,K,j,X,_t){W===null&&(W=ht);let Rt=X.isMesh&&X.matrixWorld.determinant()<0,Dt=fm(S,W,K,j,X);st.setMaterial(j,Rt);let Pt=K.index,Ht=1;if(j.wireframe===!0){if(Pt=b.getWireframeAttribute(K),Pt===void 0)return;Ht=2}let Xt=K.drawRange,zt=K.attributes.position,ne=Xt.start*Ht,pe=(Xt.start+Xt.count)*Ht;_t!==null&&(ne=Math.max(ne,_t.start*Ht),pe=Math.min(pe,(_t.start+_t.count)*Ht)),Pt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Pt.count)):zt!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,zt.count));let Ie=pe-ne;if(Ie<0||Ie===1/0)return;Ct.setup(X,j,Dt,K,Pt);let be,_e=It;if(Pt!==null&&(be=R.get(Pt),_e=Wt,_e.setIndex(be)),X.isMesh)j.wireframe===!0?(st.setLineWidth(j.wireframeLinewidth*jt()),_e.setMode(D.LINES)):_e.setMode(D.TRIANGLES);else if(X.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),st.setLineWidth(Vt*jt()),X.isLineSegments?_e.setMode(D.LINES):X.isLineLoop?_e.setMode(D.LINE_LOOP):_e.setMode(D.LINE_STRIP)}else X.isPoints?_e.setMode(D.POINTS):X.isSprite&&_e.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))_e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Vt=X._multiDrawStarts,Se=X._multiDrawCounts,se=X._multiDrawCount,mn=Pt?R.get(Pt).bytesPerElement:1,ts=pt.get(j).currentProgram.getUniforms();for(let gn=0;gn<se;gn++)ts.setValue(D,"_gl_DrawID",gn),_e.render(Vt[gn]/mn,Se[gn])}else if(X.isInstancedMesh)_e.renderInstances(ne,Ie,X.count);else if(K.isInstancedBufferGeometry){let Vt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Se=Math.min(K.instanceCount,Vt);_e.renderInstances(ne,Ie,Se)}else _e.render(ne,Ie)};function ye(S,W,K){S.transparent===!0&&S.side===Pe&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,ma(S,W,K),S.side=Mi,S.needsUpdate=!0,ma(S,W,K),S.side=Pe):ma(S,W,K)}this.compile=function(S,W,K=null){K===null&&(K=S),m=Bt.get(K),m.init(W),_.push(m),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),S!==K&&S.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();let j=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _t=X.material;if(_t)if(Array.isArray(_t))for(let Rt=0;Rt<_t.length;Rt++){let Dt=_t[Rt];ye(Dt,K,X),j.add(Dt)}else ye(_t,K,X),j.add(_t)}),m=_.pop(),j},this.compileAsync=function(S,W,K=null){let j=this.compile(S,W,K);return new Promise(X=>{function _t(){if(j.forEach(function(Rt){pt.get(Rt).currentProgram.isReady()&&j.delete(Rt)}),j.size===0){X(S);return}setTimeout(_t,10)}it.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ce=null;function pi(S){ce&&ce(S)}function ei(){fr.stop()}function rd(){fr.start()}let fr=new lp;fr.setAnimationLoop(pi),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(S){ce=S,vt.setAnimationLoop(S),S===null?fr.stop():fr.start()},vt.addEventListener("sessionstart",ei),vt.addEventListener("sessionend",rd),this.render=function(S,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(W),W=vt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,W,O),m=Bt.get(S,_.length),m.init(W),_.push(m),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(Z,kn,W.reversedDepth),G=this.localClippingEnabled,ft=wt.init(this.clippingPlanes,G),x=nt.get(S,M.length),x.init(),M.push(x),vt.enabled===!0&&vt.isPresenting===!0){let _t=v.xr.getDepthSensingMesh();_t!==null&&$c(_t,W,-1/0,v.sortObjects)}$c(S,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(tt,L),Ut=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Ut&&Ft.addToRenderList(x,S),this.info.render.frame++,ft===!0&&wt.beginShadows();let K=m.state.shadowsArray;Nt.render(K,S,W),ft===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=x.opaque,X=x.transmissive;if(m.setupLights(),W.isArrayCamera){let _t=W.cameras;if(X.length>0)for(let Rt=0,Dt=_t.length;Rt<Dt;Rt++){let Pt=_t[Rt];od(j,X,S,Pt)}Ut&&Ft.render(S);for(let Rt=0,Dt=_t.length;Rt<Dt;Rt++){let Pt=_t[Rt];sd(x,S,Pt,Pt.viewport)}}else X.length>0&&od(j,X,S,W),Ut&&Ft.render(S),sd(x,S,W);O!==null&&N===0&&(St.updateMultisampleRenderTarget(O),St.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(v,S,W),Ct.resetDefaultState(),w=-1,y=null,_.pop(),_.length>0?(m=_[_.length-1],ft===!0&&wt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function $c(S,W,K,j){if(S.visible===!1)return;if(S.layers.test(W.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(W);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Mt.intersectsSprite(S)){j&&ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);let Rt=Y.update(S),Dt=S.material;Dt.visible&&x.push(S,Rt,Dt,K,ct.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Mt.intersectsObject(S))){let Rt=Y.update(S),Dt=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ct.copy(S.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ct.copy(Rt.boundingSphere.center)),ct.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(Dt)){let Pt=Rt.groups;for(let Ht=0,Xt=Pt.length;Ht<Xt;Ht++){let zt=Pt[Ht],ne=Dt[zt.materialIndex];ne&&ne.visible&&x.push(S,Rt,ne,K,ct.z,zt)}}else Dt.visible&&x.push(S,Rt,Dt,K,ct.z,null)}}let _t=S.children;for(let Rt=0,Dt=_t.length;Rt<Dt;Rt++)$c(_t[Rt],W,K,j)}function sd(S,W,K,j){let X=S.opaque,_t=S.transmissive,Rt=S.transparent;m.setupLightsView(K),ft===!0&&wt.setGlobalState(v.clippingPlanes,K),j&&st.viewport(I.copy(j)),X.length>0&&pa(X,W,K),_t.length>0&&pa(_t,W,K),Rt.length>0&&pa(Rt,W,K),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function od(S,W,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new ri(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ns:Xn,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let _t=m.state.transmissionRenderTarget[j.id],Rt=j.viewport||I;_t.setSize(Rt.z*v.transmissionResolutionScale,Rt.w*v.transmissionResolutionScale);let Dt=v.getRenderTarget(),Pt=v.getActiveCubeFace(),Ht=v.getActiveMipmapLevel();v.setRenderTarget(_t),v.getClearColor(F),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Ut&&Ft.render(K);let Xt=v.toneMapping;v.toneMapping=Ti;let zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ft===!0&&wt.setGlobalState(v.clippingPlanes,j),pa(S,K,j),St.updateMultisampleRenderTarget(_t),St.updateRenderTargetMipmap(_t),it.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let pe=0,Ie=W.length;pe<Ie;pe++){let be=W[pe],_e=be.object,Vt=be.geometry,Se=be.material,se=be.group;if(Se.side===Pe&&_e.layers.test(j.layers)){let mn=Se.side;Se.side=sn,Se.needsUpdate=!0,ad(_e,K,j,Vt,Se,se),Se.side=mn,Se.needsUpdate=!0,ne=!0}}ne===!0&&(St.updateMultisampleRenderTarget(_t),St.updateRenderTargetMipmap(_t))}v.setRenderTarget(Dt,Pt,Ht),v.setClearColor(F,k),zt!==void 0&&(j.viewport=zt),v.toneMapping=Xt}function pa(S,W,K){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,_t=S.length;X<_t;X++){let Rt=S[X],Dt=Rt.object,Pt=Rt.geometry,Ht=Rt.group,Xt=Rt.material;Xt.allowOverride===!0&&j!==null&&(Xt=j),Dt.layers.test(K.layers)&&ad(Dt,W,K,Pt,Xt,Ht)}}function ad(S,W,K,j,X,_t){S.onBeforeRender(v,W,K,j,X,_t),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,W,K,j,S,_t),X.transparent===!0&&X.side===Pe&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,v.renderBufferDirect(K,W,j,X,S,_t),X.side=Mi,X.needsUpdate=!0,v.renderBufferDirect(K,W,j,X,S,_t),X.side=Pe):v.renderBufferDirect(K,W,j,X,S,_t),S.onAfterRender(v,W,K,j,X,_t)}function ma(S,W,K){W.isScene!==!0&&(W=ht);let j=pt.get(S),X=m.state.lights,_t=m.state.shadowsArray,Rt=X.state.version,Dt=Q.getParameters(S,X.state,_t,W,K),Pt=Q.getProgramCacheKey(Dt),Ht=j.programs;j.environment=S.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(S.isMeshStandardMaterial?qt:$t).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?W.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",lt),Ht=new Map,j.programs=Ht);let Xt=Ht.get(Pt);if(Xt!==void 0){if(j.currentProgram===Xt&&j.lightsStateVersion===Rt)return cd(S,Dt),Xt}else Dt.uniforms=Q.getUniforms(S),S.onBeforeCompile(Dt,v),Xt=Q.acquireProgram(Dt,Pt),Ht.set(Pt,Xt),j.uniforms=Dt.uniforms;let zt=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(zt.clippingPlanes=wt.uniform),cd(S,Dt),j.needsLights=mm(S),j.lightsStateVersion=Rt,j.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Xt,j.uniformsList=null,Xt}function ld(S){if(S.uniformsList===null){let W=S.currentProgram.getUniforms();S.uniformsList=Vs.seqWithValue(W.seq,S.uniforms)}return S.uniformsList}function cd(S,W){let K=pt.get(S);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function fm(S,W,K,j,X){W.isScene!==!0&&(W=ht),St.resetTextureUnits();let _t=W.fog,Rt=j.isMeshStandardMaterial?W.environment:null,Dt=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wr,Pt=(j.isMeshStandardMaterial?qt:$t).get(j.envMap||Rt),Ht=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,pe=!!K.morphAttributes.color,Ie=Ti;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ie=v.toneMapping);let be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=be!==void 0?be.length:0,Vt=pt.get(j),Se=m.state.lights;if(ft===!0&&(G===!0||S!==y)){let en=S===y&&j.id===w;wt.setState(j,S,en)}let se=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Se.state.version||Vt.outputColorSpace!==Dt||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Pt||j.fog===!0&&Vt.fog!==_t||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==wt.numPlanes||Vt.numIntersection!==wt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==Xt||Vt.morphTargets!==zt||Vt.morphNormals!==ne||Vt.morphColors!==pe||Vt.toneMapping!==Ie||Vt.morphTargetsCount!==_e)&&(se=!0):(se=!0,Vt.__version=j.version);let mn=Vt.currentProgram;se===!0&&(mn=ma(j,W,X));let ts=!1,gn=!1,Ks=!1,Te=mn.getUniforms(),wn=Vt.uniforms;if(st.useProgram(mn.program)&&(ts=!0,gn=!0,Ks=!0),j.id!==w&&(w=j.id,gn=!0),ts||y!==S){st.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Te.setValue(D,"projectionMatrix",S.projectionMatrix),Te.setValue(D,"viewMatrix",S.matrixWorldInverse);let an=Te.map.cameraPosition;an!==void 0&&an.setValue(D,ot.setFromMatrixPosition(S.matrixWorld)),et.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Te.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,gn=!0,Ks=!0)}if(X.isSkinnedMesh){Te.setOptional(D,X,"bindMatrix"),Te.setOptional(D,X,"bindMatrixInverse");let en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Te.setValue(D,"boneTexture",en.boneTexture,St))}X.isBatchedMesh&&(Te.setOptional(D,X,"batchingTexture"),Te.setValue(D,"batchingTexture",X._matricesTexture,St),Te.setOptional(D,X,"batchingIdTexture"),Te.setValue(D,"batchingIdTexture",X._indirectTexture,St),Te.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Te.setValue(D,"batchingColorTexture",X._colorsTexture,St));let Sn=K.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&gt.update(X,K,mn),(gn||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Te.setValue(D,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(wn.envMap.value=Pt,wn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),gn&&(Te.setValue(D,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&pm(wn,Ks),_t&&j.fog===!0&&ut.refreshFogUniforms(wn,_t),ut.refreshMaterialUniforms(wn,j,H,$,m.state.transmissionRenderTarget[S.id]),Vs.upload(D,ld(Vt),wn,St)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vs.upload(D,ld(Vt),wn,St),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Te.setValue(D,"center",X.center),Te.setValue(D,"modelViewMatrix",X.modelViewMatrix),Te.setValue(D,"normalMatrix",X.normalMatrix),Te.setValue(D,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let en=j.uniformsGroups;for(let an=0,qc=en.length;an<qc;an++){let pr=en[an];Qt.update(pr,mn),Qt.bind(pr,mn)}}return mn}function pm(S,W){S.ambientLightColor.needsUpdate=W,S.lightProbe.needsUpdate=W,S.directionalLights.needsUpdate=W,S.directionalLightShadows.needsUpdate=W,S.pointLights.needsUpdate=W,S.pointLightShadows.needsUpdate=W,S.spotLights.needsUpdate=W,S.spotLightShadows.needsUpdate=W,S.rectAreaLights.needsUpdate=W,S.hemisphereLights.needsUpdate=W}function mm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,W,K){let j=pt.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),pt.get(S.texture).__webglTexture=W,pt.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,W){let K=pt.get(S);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};let gm=D.createFramebuffer();this.setRenderTarget=function(S,W=0,K=0){O=S,A=W,N=K;let j=!0,X=null,_t=!1,Rt=!1;if(S){let Pt=pt.get(S);if(Pt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Pt.__webglFramebuffer===void 0)St.setupRenderTarget(S);else if(Pt.__hasExternalTextures)St.rebindTextures(S,pt.get(S.texture).__webglTexture,pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let zt=S.depthTexture;if(Pt.__boundDepthTexture!==zt){if(zt!==null&&pt.has(zt)&&(S.width!==zt.image.width||S.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(S)}}let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Rt=!0);let Xt=pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?X=Xt[W][K]:X=Xt[W],_t=!0):S.samples>0&&St.useMultisampledRTT(S)===!1?X=pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[K]:X=Xt,I.copy(S.viewport),z.copy(S.scissor),T=S.scissorTest}else I.copy(C).multiplyScalar(H).floor(),z.copy(U).multiplyScalar(H).floor(),T=q;if(K!==0&&(X=gm),st.bindFramebuffer(D.FRAMEBUFFER,X)&&j&&st.drawBuffers(S,X),st.viewport(I),st.scissor(z),st.setScissorTest(T),_t){let Pt=pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,K)}else if(Rt){let Pt=W;for(let Ht=0;Ht<S.textures.length;Ht++){let Xt=pt.get(S.textures[Ht]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,K,Pt)}}else if(S!==null&&K!==0){let Pt=pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,K)}w=-1},this.readRenderTargetPixels=function(S,W,K,j,X,_t,Rt,Dt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){st.bindFramebuffer(D.FRAMEBUFFER,Pt);try{let Ht=S.textures[Dt],Xt=Ht.format,zt=Ht.type;if(!et.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=S.width-j&&K>=0&&K<=S.height-X&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt),D.readPixels(W,K,j,X,kt.convert(Xt),kt.convert(zt),_t))}finally{let Ht=O!==null?pt.get(O).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(S,W,K,j,X,_t,Rt,Dt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt)if(W>=0&&W<=S.width-j&&K>=0&&K<=S.height-X){st.bindFramebuffer(D.FRAMEBUFFER,Pt);let Ht=S.textures[Dt],Xt=Ht.format,zt=Ht.type;if(!et.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ne),D.bufferData(D.PIXEL_PACK_BUFFER,_t.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt),D.readPixels(W,K,j,X,kt.convert(Xt),kt.convert(zt),0);let pe=O!==null?pt.get(O).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,pe);let Ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await If(D,Ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_t),D.deleteBuffer(ne),D.deleteSync(Ie),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,W=null,K=0){let j=Math.pow(2,-K),X=Math.floor(S.image.width*j),_t=Math.floor(S.image.height*j),Rt=W!==null?W.x:0,Dt=W!==null?W.y:0;St.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Rt,Dt,X,_t),st.unbindTexture()};let xm=D.createFramebuffer(),_m=D.createFramebuffer();this.copyTextureToTexture=function(S,W,K=null,j=null,X=0,_t=null){_t===null&&(X!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=X,X=0):_t=0);let Rt,Dt,Pt,Ht,Xt,zt,ne,pe,Ie,be=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(K!==null)Rt=K.max.x-K.min.x,Dt=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,Xt=K.min.y,zt=K.isBox3?K.min.z:0;else{let Sn=Math.pow(2,-X);Rt=Math.floor(be.width*Sn),Dt=Math.floor(be.height*Sn),S.isDataArrayTexture?Pt=be.depth:S.isData3DTexture?Pt=Math.floor(be.depth*Sn):Pt=1,Ht=0,Xt=0,zt=0}j!==null?(ne=j.x,pe=j.y,Ie=j.z):(ne=0,pe=0,Ie=0);let _e=kt.convert(W.format),Vt=kt.convert(W.type),Se;W.isData3DTexture?(St.setTexture3D(W,0),Se=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(St.setTexture2DArray(W,0),Se=D.TEXTURE_2D_ARRAY):(St.setTexture2D(W,0),Se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);let se=D.getParameter(D.UNPACK_ROW_LENGTH),mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ts=D.getParameter(D.UNPACK_SKIP_PIXELS),gn=D.getParameter(D.UNPACK_SKIP_ROWS),Ks=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt);let Te=S.isDataArrayTexture||S.isData3DTexture,wn=W.isDataArrayTexture||W.isData3DTexture;if(S.isDepthTexture){let Sn=pt.get(S),en=pt.get(W),an=pt.get(Sn.__renderTarget),qc=pt.get(en.__renderTarget);st.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,qc.__webglFramebuffer);for(let pr=0;pr<Pt;pr++)Te&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(S).__webglTexture,X,zt+pr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(W).__webglTexture,_t,Ie+pr)),D.blitFramebuffer(Ht,Xt,Rt,Dt,ne,pe,Rt,Dt,D.DEPTH_BUFFER_BIT,D.NEAREST);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||pt.has(S)){let Sn=pt.get(S),en=pt.get(W);st.bindFramebuffer(D.READ_FRAMEBUFFER,xm),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,_m);for(let an=0;an<Pt;an++)Te?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,X,zt+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,X),wn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,_t,Ie+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,_t),X!==0?D.blitFramebuffer(Ht,Xt,Rt,Dt,ne,pe,Rt,Dt,D.COLOR_BUFFER_BIT,D.NEAREST):wn?D.copyTexSubImage3D(Se,_t,ne,pe,Ie+an,Ht,Xt,Rt,Dt):D.copyTexSubImage2D(Se,_t,ne,pe,Ht,Xt,Rt,Dt);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else wn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Se,_t,ne,pe,Ie,Rt,Dt,Pt,_e,Vt,be.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,_t,ne,pe,Ie,Rt,Dt,Pt,_e,be.data):D.texSubImage3D(Se,_t,ne,pe,Ie,Rt,Dt,Pt,_e,Vt,be):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_t,ne,pe,Rt,Dt,_e,Vt,be.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_t,ne,pe,be.width,be.height,_e,be.data):D.texSubImage2D(D.TEXTURE_2D,_t,ne,pe,Rt,Dt,_e,Vt,be);D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ts),D.pixelStorei(D.UNPACK_SKIP_ROWS,gn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ks),_t===0&&W.generateMipmaps&&D.generateMipmap(Se),st.unbindTexture()},this.initRenderTarget=function(S){pt.get(S).__webglFramebuffer===void 0&&St.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?St.setTextureCube(S,0):S.isData3DTexture?St.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?St.setTexture2DArray(S,0):St.setTexture2D(S,0),st.unbindTexture()},this.resetState=function(){A=0,N=0,O=null,st.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var fp={type:"change"},bu={type:"start"},mp={type:"end"},_c=new Gi,pp=new ln,fv=Math.cos(70*Bs.DEG2RAD),ze=new P,hn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vu=1e-6,yc=class extends Xo{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new An,this._lastTargetPosition=new P,this._quat=new An().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ds,this._sphericalDelta=new Ds,this._scale=1,this._panOffset=new P,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new P,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mv.bind(this),this._onPointerDown=pv.bind(this),this._onPointerUp=gv.bind(this),this._onContextMenu=wv.bind(this),this._onMouseWheel=yv.bind(this),this._onKeyDown=vv.bind(this),this._onTouchStart=bv.bind(this),this._onTouchMove=Mv.bind(this),this._onMouseDown=xv.bind(this),this._onMouseMove=_v.bind(this),this._interceptControlDown=Sv.bind(this),this._interceptControlUp=Tv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fp),this.update(),this.state=me.NONE}update(t=null){let e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ze.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<fv?this.object.lookAt(this.target):(pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(pp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vu||this._lastTargetPosition.distanceToSquared(this.target)>vu?(this.dispatchEvent(fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;ze.copy(r).sub(this.target);let s=ze.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mp),this.state=me.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bu)}function _v(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yv(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(mp))}function vv(n){this.enabled!==!1&&this._handleKeyDown(n)}function bv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bu)}function Mv(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function wv(n){this.enabled!==!1&&n.preventDefault()}function Sv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qi={format:"house-studio-3d",version:1,name:"My little house",preset:"my-little-house",items:[{id:"item-mu824cnw-109",type:"basin",x:-2.7,z:.30000000000000004,rot:3.141592653589793,w:.6,d:.43,h:.84,color:"#c6ac83",open:!1},{id:"item-mu824cnw-110",type:"toilet",x:-3.3000000000000003,z:-2,rot:0,w:.38,d:.66,h:.78,color:"#eeeeea",open:!1},{id:"item-mu824cnw-112",type:"outdoor",x:-.65,z:-2.91,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mu824cnw-113",type:"plant",x:-1.82,z:-2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-114",type:"plant",x:2.65,z:2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-117",type:"chair",x:1.1,z:-.8,rot:1.5707963267948966,w:.59,d:.59,h:1.05,color:"#425956",open:!1},{id:"item-mu824cnw-118",type:"wardrobe",x:-1.9000000000000001,z:-.5,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu825pvw-126",type:"wardrobe",x:-1.9000000000000001,z:.6000000000000001,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu8265dy-129",type:"desk160",x:1.8,z:-.8,rot:4.71238898038469,w:1.6,d:.75,h:.75,color:"#343b3b",open:!1},{id:"item-mu8276v5-130",type:"lamp",x:-3.3000000000000003,z:.30000000000000004,rot:0,w:.32,d:.32,h:1.55,color:"#ebdfc7",open:!1},{id:"item-mvlvr14r-44",type:"bed5",x:1.3,z:1.2000000000000002,rot:3.141592653589793,w:1.624,d:2.1,h:.88,color:"#d9d7c8"}],structure:{bounds:{left:-2.25,right:2.25,back:-2.375,front:2.375},bathroom:{x:-3,z:-.9,w:1.5,d:3},balcony:{depth:1},openings:[{id:"front-door",kind:"door",side:"back",at:1.1,w:2,h:2,sill:0},{id:"right-window",kind:"window",side:"right",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"left-window",kind:"window",side:"left",at:1.7000000000000002,w:1,h:1.1,sill:1},{id:"rear-window",kind:"window",side:"back",at:-1,w:1,h:1.1,sill:1},{id:"bath-window",kind:"window",side:"bath-left",at:-.95,w:.6,h:.45,sill:2.1},{id:"door-mu81p2c9",kind:"door",side:"front",at:-1.55,w:.8,h:2,sill:0},{id:"door-mu8209r5",kind:"door",side:"left",at:-1.55,w:.8,h:2,sill:0}],partitions:[],colors:{wall:"#eeeae0",floor:"#c5bfb4",foundation:"#b2b4a7",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#454d48",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#9a8262",window:"#9dbab6",frame:"#38433f",trim:"#d8d3c8",garden:"#9ba990"}}};var gp={format:"house-studio-3d",version:1,name:"My two-floor room",preset:"my-two-floor-room",items:[{id:"item-mvo3qu8g-38",type:"coatRack",x:-1.5,z:-1.1,rot:0,w:.52,d:.52,h:1.78,color:"#b68a5e",open:!1},{id:"item-mvo3qy9x-39",type:"timberWardrobe",x:1.1,z:-1.8,rot:0,w:1.25,d:.57,h:2.03,color:"#aa6936",open:!1},{id:"item-mvo3rpax-43",type:"desk140",x:.4,z:1,rot:3.141592653589793,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3rvv4-44",type:"desk140",x:1.5,z:-.1,rot:4.71238898038469,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3t2sa-45",type:"wireChair",x:.4,z:.4,rot:0,w:.48,d:.52,h:.95,color:"#252723",open:!1},{id:"item-mvo3t9yz-46",type:"leaningShelf",x:-1.6,z:-1.8,rot:1.5707963267948966,w:.85,d:.36,h:1.76,color:"#d4c29f",open:!1},{id:"item-mvo54hs7-52",type:"outdoor",x:-.6000000000000001,z:-2,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mvo55a79-53",type:"rug",x:-.6000000000000001,z:-1.7000000000000002,rot:0,w:1.5,d:1.2,h:.015,color:"#c9c4aa",open:!1},{id:"item-mvo57ira-55",type:"roundTable",x:1.5,z:1,rot:0,w:.7,d:.7,h:.75,color:"#c29b68",open:!1}],structure:{bounds:{left:-2,right:2,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.75,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},balcony:{enabled:!1,depth:1},openings:[{id:"door-mvo3qijq",kind:"door",side:"front",at:-.8,w:.8,h:2,sill:0},{id:"window-mvo3scen",kind:"window",side:"back",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"window-mvo3sgtc",kind:"window",side:"right",at:-1.2000000000000002,w:1,h:1.1,sill:1},{id:"window-mvo3soe3",kind:"window",side:"right",at:-.2,w:1,h:1.1,sill:1},{id:"window-mvo3su11",kind:"window",side:"right",at:.8,w:1,h:1.1,sill:1}],partitions:[],colors:{wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#eeede6",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#b59973",window:"#9dbab6",frame:"#6c7a70",trim:"#d8d3c8",garden:"#9ba990"},wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},room:{kind:"custom-room",height:2.8,estimated:!1},finishes:{floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},wallVisibility:{front:"low",back:"full",left:"low",right:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"}},activeFloorId:"floor-1",floors:[{id:"floor-1",name:"Ground floor",items:[{id:"item-mvo3qu8g-38",type:"coatRack",x:-1.5,z:-1.1,rot:0,w:.52,d:.52,h:1.78,color:"#b68a5e",open:!1},{id:"item-mvo3qy9x-39",type:"timberWardrobe",x:1.1,z:-1.8,rot:0,w:1.25,d:.57,h:2.03,color:"#aa6936",open:!1},{id:"item-mvo3rpax-43",type:"desk140",x:.4,z:1,rot:3.141592653589793,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3rvv4-44",type:"desk140",x:1.5,z:-.1,rot:4.71238898038469,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3t2sa-45",type:"wireChair",x:.4,z:.4,rot:0,w:.48,d:.52,h:.95,color:"#252723",open:!1},{id:"item-mvo3t9yz-46",type:"leaningShelf",x:-1.6,z:-1.8,rot:1.5707963267948966,w:.85,d:.36,h:1.76,color:"#d4c29f",open:!1},{id:"item-mvo54hs7-52",type:"outdoor",x:-.6000000000000001,z:-2,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mvo55a79-53",type:"rug",x:-.6000000000000001,z:-1.7000000000000002,rot:0,w:1.5,d:1.2,h:.015,color:"#c9c4aa",open:!1},{id:"item-mvo57ira-55",type:"roundTable",x:1.5,z:1,rot:0,w:.7,d:.7,h:.75,color:"#c29b68",open:!1}],structure:{bounds:{left:-2,right:2,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.75,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},balcony:{enabled:!1,depth:1},openings:[{id:"door-mvo3qijq",kind:"door",side:"front",at:-.8,w:.8,h:2,sill:0},{id:"window-mvo3scen",kind:"window",side:"back",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"window-mvo3sgtc",kind:"window",side:"right",at:-1.2000000000000002,w:1,h:1.1,sill:1},{id:"window-mvo3soe3",kind:"window",side:"right",at:-.2,w:1,h:1.1,sill:1},{id:"window-mvo3su11",kind:"window",side:"right",at:.8,w:1,h:1.1,sill:1}],partitions:[],colors:{wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#eeede6",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#b59973",window:"#9dbab6",frame:"#6c7a70",trim:"#d8d3c8",garden:"#9ba990"},wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},room:{kind:"custom-room",height:2.8,estimated:!1},finishes:{floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},wallVisibility:{front:"low",back:"full",left:"low",right:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"}}},{id:"floor-mvo5043k-2",name:"Floor 2",items:[{id:"item-mvo537g7-49",type:"cabinet",x:-.1,z:-1.5,rot:1.5707963267948966,w:1.2,d:.38,h:.64,color:"#c6ac83",open:!1},{id:"item-mvo53c20-50",type:"cabinet",x:-.1,z:-.30000000000000004,rot:1.5707963267948966,w:1.2,d:.38,h:.64,color:"#c6ac83",open:!1},{id:"item-mvo53lwm-51",type:"rug",x:-1.1,z:.2,rot:0,w:1.5,d:1.2,h:.015,color:"#c9c4aa",open:!1},{id:"item-mvo55mj6-54",type:"timberBed",x:-1.1,z:-1.1,rot:0,w:1.6,d:2.13,h:.94,color:"#748dcb",open:!1}],structure:{bounds:{left:-2,right:2,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.75,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},balcony:{enabled:!1,depth:1},openings:[{id:"window-mvo52ysr",kind:"window",side:"back",at:-1.2000000000000002,w:1,h:1.1,sill:1}],partitions:[],colors:{wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#eeede6",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#b59973",window:"#9dbab6",frame:"#6c7a70",trim:"#d8d3c8",garden:"#9ba990"},wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},room:{kind:"custom-room",height:2.8,estimated:!1},finishes:{floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},wallVisibility:{front:"low",back:"full",left:"low",right:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"}}}],stairs:[{id:"stairs-mvo5043k-0",from:"floor-1",to:"floor-mvo5043k-2",style:"wood-ladder",x:.2,z:1.8,w:.68,run:.8,rot:4.71238898038469,color:"#b18b61"}]};var xp={format:"house-studio-3d",version:1,name:"My room \xB7 video model",preset:"video-room",items:[{id:"video-bed",type:"timberBed",x:.45,z:-1.13,rot:0,w:1.6,d:2.13,h:.94,color:"#748dcb"},{id:"video-desk",type:"timberDesk",x:-.9,z:-1.1,rot:0,w:1,d:.58,h:.75,color:"#985d35"},{id:"video-chair",type:"wireChair",x:-.86,z:-.33,rot:Math.PI,w:.48,d:.52,h:.95,color:"#252723"},{id:"video-wardrobe",type:"timberWardrobe",x:-1.57,z:.62,rot:Math.PI/2,w:1.25,d:.57,h:2.03,color:"#aa6936"},{id:"video-shelf",type:"leaningShelf",x:1.66,z:.12,rot:-Math.PI/2,w:.85,d:.36,h:1.76,color:"#d4c29f"},{id:"video-narrow-shelf",type:"leaningShelf",x:1.25,z:.33,rot:0,w:.36,d:.3,h:1.6,color:"#d4c29f"},{id:"video-basket",type:"laundryBasket",x:-.2,z:1.05,rot:0,w:.47,d:.38,h:.4,color:"#c3a4ad"}],structure:{bounds:{left:-1.95,right:1.95,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.7,z:-.8,w:1.5,d:3,side:"left",start:-2.3,end:.7,depth:1.5},balcony:{enabled:!1,depth:1},room:{kind:"video-bedroom",estimated:!0,height:2.48,stairWidth:.88,stairRun:1.65,stairDrop:1.8,ladderRun:.88},openings:[{id:"video-back-window",kind:"window",side:"back",at:0,w:2.9,h:.66,sill:1.12,style:"horizontal"},{id:"video-high-window",kind:"window",side:"back",at:-1.02,w:.58,h:.52,sill:1.88,style:"high"},{id:"video-bed-window",kind:"window",side:"right",at:-1.05,w:1.36,h:1.35,sill:.77,style:"curtained"},{id:"video-stair-window",kind:"window",side:"right",at:1.37,w:.83,h:1.35,sill:.59,style:"curtained"},{id:"video-entry",kind:"door",side:"front",at:.4,w:.8,h:2.1,sill:0,style:"open"}],partitions:[],wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},wallVisibility:{front:"hidden",left:"low",right:"full",back:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"},finishes:{floor:{material:"wood",scale:.65,rotation:90},bathFloor:{material:"tiles",scale:.3,rotation:0}},colors:{...Qi.structure.colors,wall:"#d3ddcc",floor:"#ba773b",foundation:"#68472f",frame:"#684a37",window:"#e5e9de",trim:"#573e2e",roof:"#87a755",panel:"#4a382b",curtain:"#292744"}}};function Br(n){let t=n.bounds,e=n.room;return{left:t.right-e.stairWidth,right:t.right,back:t.front-e.stairRun,front:t.front}}function vc(n){let t=n.bounds,e=n.room;return{x:t.right-e.stairWidth-.37,z:t.front-.12-e.ladderRun/2,w:.65,d:e.ladderRun+.12}}function _p(n){let t=n.bounds,e=Br(n);return[{left:t.left,right:e.left,back:t.back,front:t.front},{left:e.left,right:t.right,back:t.back,front:e.back}].filter(i=>i.right-i.left>.01&&i.front-i.back>.01)}var Ue=["front","back","left","right"],$n=[...Ue,...Ue.map(n=>"bath-"+n)],Ev={front:"back",back:"front",left:"right",right:"left"},tr={front:"Front",back:"Back",left:"Left",right:"Right"},Ci=[{id:"marble",name:"Veined marble",detail:"Soft, flowing veins",scale:.8,roughness:.24},{id:"stone",name:"Natural stone",detail:"Layered mineral texture",scale:.6,roughness:.82},{id:"wood",name:"Wood planks",detail:"Long grain & board joints",scale:1.2,roughness:.64},{id:"herringbone",name:"Herringbone wood",detail:"Interlocking parquet",scale:1.2,roughness:.64},{id:"matte",name:"Matt porcelain",detail:"Soft, unpolished tiles",scale:.6,roughness:.98},{id:"concrete",name:"Microcement",detail:"Continuous, fine texture",scale:1.5,roughness:.96},{id:"terrazzo",name:"Terrazzo",detail:"Fine stone chips",scale:.6,roughness:.48},{id:"tiles",name:"Ceramic tiles",detail:"Classic square grout grid",scale:.3,roughness:.32}],Av=Object.fromEntries($n.map(n=>[n,n==="back"||n==="bath-back"?"full":"low"]));function ae(n,t){let e=n.bathroom,i=t.startsWith("bath-")?{left:e.x-e.w/2,right:e.x+e.w/2,back:e.z-e.d/2,front:e.z+e.d/2}:n.bounds,r=t.replace("bath-","");return r==="front"||r==="back"?{axis:"x",start:i.left,end:i.right,fixed:r==="front"?i.front:i.back,side:t}:{axis:"z",start:i.back,end:i.front,fixed:r==="left"?i.left:i.right,side:t}}function er(n){return n.bathroom.side?"bath-"+Ev[n.bathroom.side]:null}function nr(n){return $n.filter(t=>(n.bathroom.enabled!==!1||!t.startsWith("bath-"))&&t!==er(n)).map(t=>ae(n,t))}function un(n,t){let e=ae(n,t),i=[e.start,...(n.wallSplits?.[t]||[]).filter(r=>r>e.start+.05&&r<e.end-.05),e.end].sort((r,s)=>r-s);return i.slice(1).map((r,s)=>({...e,id:`segment-${t}-${s}`,index:s,start:i[s],end:r}))}function bc(n,t){return Ue.flatMap(e=>un(n,e)).find(e=>e.id===t)}function ea(n){let t=n.bathroom,e=n.bounds;if(!Ue.includes(t.side)){t.side=Ue.reduce((a,c)=>{let l={left:Math.abs(t.x+t.w/2-e.left),right:Math.abs(t.x-t.w/2-e.right),front:Math.abs(t.z-t.d/2-e.front),back:Math.abs(t.z+t.d/2-e.back)};return l[c]<l[a]?c:a},"left");let o=t.side==="left"||t.side==="right";t.start=o?t.z-t.d/2:t.x-t.w/2,t.end=t.start+(o?t.d:t.w),t.depth=o?t.w:t.d}let i=ae(n,t.side),r=Math.min(i.end-i.start,Math.max(.8,t.end-t.start));t.start=Math.min(i.end-r,Math.max(i.start,t.start)),t.end=t.start+r;let s=(t.start+t.end)/2;return i.axis==="z"?(t.w=t.depth,t.d=r,t.x=i.fixed+(t.side==="left"?-1:1)*t.depth/2,t.z=s):(t.w=r,t.d=t.depth,t.x=s,t.z=i.fixed+(t.side==="back"?-1:1)*t.depth/2),t}function kr(n){let t=JSON.parse(JSON.stringify(n));ea(t),t.wallSplits=Object.fromEntries(Ue.map(s=>[s,[...new Set(t.wallSplits?.[s]||[])].sort((o,a)=>o-a)])),t.segmentColors||(t.segmentColors={}),t.finishes||(t.finishes={});for(let s of["floor","bathFloor"])t.finishes[s]={material:s==="floor"?"marble":"tiles",scale:s==="floor"?.8:.3,rotation:0,...t.finishes[s]};t.wallVisibility={...Av,...t.wallVisibility};let e=t.bathroom,i=ae(t,e.side);if(e.enabled===!1)return t;for(let s of[e.start,e.end])s>i.start+.05&&s<i.end-.05&&!t.wallSplits[e.side].some(o=>Math.abs(o-s)<.03)&&t.wallSplits[e.side].push(s);t.wallSplits[e.side].sort((s,o)=>s-o);let r=er(t);for(let s of t.openings.filter(o=>o.side===r))t.openings.some(o=>o.side===e.side&&o.kind===s.kind&&Math.abs(o.at-s.at)<.1)||t.openings.push({...s,side:e.side});return t.openings=t.openings.filter(s=>s.side!==r),t}function yp(n,t,e){var a;if(!Ue.includes(t)||!Number.isFinite(e))throw new Error("Choose an exterior wall and a split position.");let i=ae(n,t);if(e<i.start+.25||e>i.end-.25)throw new Error("Leave at least 25 cm at either end of the wall.");if(n.wallSplits||(n.wallSplits={}),(a=n.wallSplits)[t]||(a[t]=[]),n.wallSplits[t].length>=12)throw new Error("This wall already has 12 split points.");if(n.wallSplits[t].some(c=>Math.abs(c-e)<.05))throw new Error("There is already a split here.");let r=un(n,t).find(c=>e>c.start&&e<c.end);if(!r||e-r.start<.25||r.end-e<.25)throw new Error("Leave at least 25 cm in each wall section.");let s=un(n,t),o={...n.segmentColors};n.wallSplits[t].push(e),n.wallSplits[t].sort((c,l)=>c-l),n.segmentColors||(n.segmentColors={});for(let c of un(n,t)){let l=s.find(h=>(c.start+c.end)/2>=h.start&&(c.start+c.end)/2<=h.end);o[l?.id]&&(n.segmentColors[c.id]=o[l.id])}return un(n,t).find(c=>Math.abs(c.start-e)<.001)}function Mu(n,t,e,i,r=n.bathroom.depth||1.5){let s=ae(n,t);if(!Ue.includes(t)||![e,i,r].every(Number.isFinite)||e<s.start-.001||i>s.end+.001||i-e<.8||r<.8||r>4)throw new Error("Choose at least 80 cm of wall and an extension depth from 0.8 to 4 m.");let o={...n.bathroom};n.bathroom={...o,enabled:!0,side:t,start:e,end:i,depth:r},ea(n);let a=n.bathroom;if(Math.max(Math.abs(a.x-a.w/2),Math.abs(a.x+a.w/2),Math.abs(a.z-a.d/2),Math.abs(a.z+a.d/2))>6)throw n.bathroom=o,new Error("The extension must stay within the 12 m planning area.");for(let l of n.openings.filter(h=>h.side.startsWith("bath-")))l.side="bath-"+t,l.at=(e+i)/2,l.w=Math.min(l.w,i-e-.3);if(n.openings=n.openings.filter(l=>l.id!=="bath-access-auto"||l.side===t),!n.openings.some(l=>l.kind==="door"&&l.side===t&&l.at-l.w/2>=e+.05&&l.at+l.w/2<=i-.05)){let l=Math.min(.8,i-e-.2),h=n.openings.filter(f=>f.side===t),d=[(e+i)/2,...Array.from({length:Math.ceil((i-e)*10)},(f,p)=>e+.1+l/2+p*.1)].find(f=>f-l/2>=e+.05&&f+l/2<=i-.05&&!h.some(p=>Math.abs(p.at-f)<(p.w+l)/2+.05));d!==void 0&&n.openings.push({id:"bath-access-auto",kind:"door",side:t,at:d,w:l,h:2,sill:0})}let c=kr(n);return Object.assign(n,c),n.bathroom}function wu(n){let t=[];for(let i of n.openings){let r=ae(n,i.side);(i.at-i.w/2<r.start+.02||i.at+i.w/2>r.end-.02)&&t.push(`${i.id}: opening extends beyond its wall.`)}let e=n.bathroom;return e.enabled!==!1&&e.side&&!n.openings.some(i=>i.side===e.side&&i.kind==="door"&&i.at-i.w/2>=e.start&&i.at+i.w/2<=e.end)&&t.push("Add a door within the bathroom wall section to connect the rooms."),t}var Vr=4,Zn=[{id:"timber",name:"Wooden stairs",detail:"Classic steps with a handrail",w:.9,run:2.6,shape:"straight",color:"#b18b61"},{id:"open",name:"Open timber stairs",detail:"Light, open steps on two rails",w:.9,run:2.6,shape:"open",color:"#b18b61"},{id:"floating",name:"Floating stairs",detail:"Minimal treads on a central beam",w:.9,run:2.5,shape:"floating",color:"#d0b28b"},{id:"turn",name:"L-shaped stairs",detail:"Two short flights and a corner landing",w:1.8,run:1.8,shape:"turn",color:"#ae8660"},{id:"spiral",name:"Spiral stairs",detail:"Curved steps around a central pole",w:1.6,run:1.6,shape:"spiral",color:"#566862"},{id:"wood-ladder",name:"Wooden loft ladder",detail:"Simple timber rails and rungs",w:.68,run:.8,shape:"ladder",color:"#b18b61"},{id:"metal-ladder",name:"Metal loft ladder",detail:"Slim metal rails and round rungs",w:.62,run:.65,shape:"ladder",color:"#526461"},{id:"space-saver",name:"Space-saving stairs",detail:"Steep, alternating paddle steps",w:.75,run:1.45,shape:"paddle",color:"#b18b61"}],qn=n=>JSON.parse(JSON.stringify(n));function wc(n=4,t=4,e=2.8){let i=qn(Qi.structure);return i.bounds={left:-n/2,right:n/2,back:-t/2,front:t/2},i.bathroom={enabled:!1,x:-2.7,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},i.balcony={enabled:!1,depth:1},i.openings=[],i.partitions=[],i.wallSplits={},i.segmentColors={},i.room={kind:"custom-room",height:e,estimated:!1},i.colors={...i.colors,wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",roof:"#eeede6",frame:"#6c7a70",door:"#b59973"},i.finishes={floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},i.wallVisibility={front:"low",back:"full",left:"low",right:"full"},kr(i)}function Su(n=4,t=4,e=2.8){let i=wc(n,t,e);return{format:"house-studio-3d",version:1,name:"My new room",preset:"custom",items:[],structure:i,activeFloorId:"floor-1",floors:[{id:"floor-1",name:"Ground floor",items:[],structure:qn(i)}],stairs:[]}}function bp(n,t,e){if(!Number.isFinite(e)||e<2||e>10)throw new Error("Use a room size from 2 to 10 metres.");let i=n.bounds,r=t==="width",s=r?"left":"back",o=r?"right":"front",a=(i[s]+i[o])/2,c=i[o]-i[s],l=i[s];if(a-e/2<-6||a+e/2>6)throw new Error("Keep the room inside the planning area.");i[s]=a-e/2,i[o]=a+e/2;for(let h of n.openings.filter(u=>r?["front","back"].includes(u.side):["left","right"].includes(u.side)))h.w=Math.min(h.w,e-.3),h.at=i[s]+(h.at-l)/c*e,h.at=Math.max(i[s]+h.w/2+.1,Math.min(i[o]-h.w/2-.1,h.at));for(let h of r?["front","back"]:["left","right"])n.wallSplits?.[h]&&(n.wallSplits[h]=n.wallSplits[h].map(u=>i[s]+(u-l)/c*e));return n}function Rn(n){return n.floors?.length?n.floors.map(t=>t.id===n.activeFloorId?{...t,items:n.items,structure:n.structure}:t):[{id:"floor-1",name:"Ground floor",items:n.items,structure:n.structure}]}function bn(n){return n.floors&&(n.floors=Rn(n).map(qn)),n}function Sc(n){return n.floors||(n.activeFloorId="floor-1",n.floors=Rn(n).map(qn),n.stairs=[]),bn(n)}function Tc(n,t){bn(n);let e=n.floors?.find(i=>i.id===t);if(!e)throw new Error("Choose an existing floor.");return n.activeFloorId=t,n.items=qn(e.items),n.structure=qn(e.structure),n}function ir(n){return n.structure.room?.height||3}function Gs(n){let t=0;return Rn(n).map(e=>{let i={...e,elevation:t};return t+=ir(e)+.2,i})}function Yn(n,t=0){let e=Math.abs(Math.sin(n.rot))>.5,i=(e?n.run:n.w)+t*2,r=(e?n.w:n.run)+t*2;return{left:n.x-i/2,right:n.x+i/2,back:n.z-r/2,front:n.z+r/2}}var Ec=n=>n.style==="turn"&&n.turn==="left"?-1:1;function zr(n,t){return n.left<t.right-.005&&n.right>t.left+.005&&n.back<t.front-.005&&n.front>t.back+.005}function vp(n,t,e=.14){return n.left>=t.left+e&&n.right<=t.right-e&&n.back>=t.back+e&&n.front<=t.front-e}function Mc(n){let t=Math.abs(Math.cos(n.rot||0)),e=Math.abs(Math.sin(n.rot||0)),i=n.w*t+n.d*e,r=n.w*e+n.d*t;return{left:n.x-i/2,right:n.x+i/2,back:n.z-r/2,front:n.z+r/2}}function rr(n,t=!1){let e=t&&n.style==="turn",i=e?.5:n.w,r=e?n.run*.46:.5,s=e?(n.w/2+.25)*Ec(n):0,o=e?-n.run/2+r/2:(t?-1:1)*(n.run/2+.25),a=Math.cos(n.rot),c=Math.sin(n.rot);return Mc({x:n.x+s*a+o*c,z:n.z-s*c+o*a,w:i,d:r,rot:n.rot})}function sr(n,t,{furniture:e=!0}={}){let i=Rn(n),r=i.find(a=>a.id===t.from),s=i.find(a=>a.id===t.to),o=Yn(t);if(!r||!s||i.indexOf(s)!==i.indexOf(r)+1)return"Connect two neighbouring floors.";for(let a of[r,s]){if(!vp(o,a.structure.bounds))return"Move the connection inside both rooms, away from the walls.";let c=rr(t,a===s),l=[o,c];if(!vp(c,a.structure.bounds))return"Leave at least 50 cm of clear landing space at both ends.";if(a.structure.partitions.some(h=>l.some(u=>zr(u,Mc(h)))))return"This connection or its landing overlaps an interior wall. Move it to a clear space.";if(e&&a.items.some(h=>h.type!=="rug"&&l.some(u=>zr(u,Mc(h)))))return"This connection or its landing overlaps furniture. Move it or clear a space first.";if(a.structure.openings.filter(h=>h.kind==="door").some(h=>{let u=ae(a.structure,h.side),d=u.axis==="x"?{x:h.at,z:u.fixed,w:h.w,d:.75,rot:0}:{x:u.fixed,z:h.at,w:.75,d:h.w,rot:0};return zr(o,Mc(d))}))return"Keep the door entrance clear when placing stairs.";if((n.stairs||[]).some(h=>h.id!==t.id&&(h.from===a.id||h.to===a.id)&&(zr(c,Yn(h,.08))||zr(o,rr(h,h.to===a.id)))))return"Leave a clear landing between the two floor connections."}return(n.stairs||[]).some(a=>a.id!==t.id&&[a.from,a.to].some(c=>c===t.from||c===t.to)&&zr(o,Yn(a,.12)))?"Leave a landing between the two floor connections.":null}function na(n,t,e,i="timber",r={}){let s=Zn.find(l=>l.id===i);if(!s)throw new Error("Choose a stair or ladder style.");let o=Rn(n).find(l=>l.id===t),a=o.structure.bounds,c={id:"stairs-"+Date.now().toString(36)+"-"+(n.stairs?.length||0),from:t,to:e,style:i,x:0,z:0,rot:0,w:s.w,run:s.run,color:s.color,...i==="turn"?{turn:"right"}:{},...r.dimensions||{}};for(let l of r.rotations||[0,Math.PI/2,Math.PI,Math.PI*1.5]){c.rot=l;let h=Yn(c),u=(h.right-h.left)/2,d=(h.front-h.back)/2,f=[(a.back+a.front)/2],p=[(a.left+a.right)/2];for(let g=a.back+d+.2;g<=a.front-d-.19;g+=.1)f.push(g);for(let g=a.right-u-.2;g>=a.left+u+.19;g-=.1)p.unshift(g);for(let g of f)for(let x of p)if(c.x=Math.round(x*100)/100,c.z=Math.round(g*100)/100,!sr(n,c))return c}throw new Error("Make some clear floor space for this style, or choose a smaller ladder.")}function Mp(n,t="timber",e=!1,i="right"){if(Sc(n),n.floors.length>=Vr)throw new Error("This project can have up to four floors.");let r=n.floors.at(-1),s=r.structure.bounds,o=n.floors.length,a="floor-"+Date.now().toString(36)+"-"+(o+1);for(let h of n.floors)h.structure.room?.kind!=="custom-room"&&(h.structure.room={kind:"custom-room",height:ir(h),estimated:!1});n.structure=qn(n.floors.find(h=>h.id===n.activeFloorId).structure);let c=wc(s.right-s.left,s.front-s.back,ir(r));c.bounds=qn(s),c.colors=qn(r.structure.colors),c.finishes=qn(r.structure.finishes),e&&(c.partitions=qn(r.structure.partitions)),n.floors.push({id:a,name:`Floor ${o+1}`,items:[],structure:c});let l;try{l=na({...n,structure:n.floors.find(h=>h.id===n.activeFloorId).structure},r.id,a,t,{dimensions:t==="turn"?{turn:i}:{}})}catch(h){throw n.floors.pop(),h}return n.stairs.push(l),Tc(n,a),n.preset="custom",l}function wp(n){if(Sc(n),n.floors.length<2)throw new Error("Keep at least one floor.");let t=n.floors.at(-1).id;return n.floors.pop(),n.stairs=n.stairs.filter(e=>e.from!==t&&e.to!==t),Tc(n,n.floors.at(-1).id),n}function Tu(n,t=[]){let e=[{...n}];for(let i of t){let r=[];for(let s of e){if(!zr(s,i)){r.push(s);continue}let o=Math.max(s.left,i.left),a=Math.min(s.right,i.right),c=Math.max(s.back,i.back),l=Math.min(s.front,i.front);r.push({left:s.left,right:o,back:s.back,front:s.front},{left:a,right:s.right,back:s.back,front:s.front},{left:o,right:a,back:s.back,front:c},{left:o,right:a,back:l,front:s.front})}e=r.filter(s=>s.right-s.left>.003&&s.front-s.back>.003)}return e}var yt=.38;var Rc=[{type:"bed3",name:"3 ft single bed",cat:"Sleep",w:.9144+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed35",name:"3.5 ft single bed",cat:"Sleep",w:1.0668+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed5",name:"5 ft queen bed",cat:"Sleep",w:1.524+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"bed6",name:"6 ft king bed",cat:"Sleep",w:1.8288+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"loft35",name:"3.5 ft loft bed",cat:"Sleep",w:1.17,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"loft5",name:"5 ft loft bed",cat:"Sleep",w:1.63,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"sofabed",name:"Convertible sofa bed",cat:"Sleep",w:1.55,d:.88,h:.84,kind:"sofabed",color:"#a7b7a0"},{type:"nightstand",name:"Bedside table",cat:"Storage",w:.4,d:.38,h:.48,kind:"nightstand",color:"#c6ac83"},{type:"desk140",name:"140 cm work desk",cat:"Work",w:1.4,d:.65,h:.75,kind:"desk",color:"#c6ac83"},{type:"desk160",name:"160 cm gaming desk",cat:"Work",w:1.6,d:.75,h:.75,kind:"gaming",color:"#343b3b"},{type:"chair",name:"Office chair",cat:"Work",w:.59,d:.59,h:1.05,kind:"chair",color:"#425956"},{type:"shelf",name:"Open bookshelf",cat:"Storage",w:.75,d:.32,h:1.65,kind:"shelf",color:"#c6ac83"},{type:"wardrobe",name:"Sliding wardrobe",cat:"Storage",w:1.1,d:.55,h:2.15,kind:"wardrobe",color:"#e7e6dc"},{type:"cabinet",name:"Low cabinet",cat:"Storage",w:1.2,d:.38,h:.64,kind:"cabinet",color:"#c6ac83"},{type:"sofa",name:"Two-seat sofa",cat:"Living",w:1.5,d:.78,h:.8,kind:"sofa",color:"#a7b7a0"},{type:"coffee",name:"Low coffee table",cat:"Living",w:.75,d:.45,h:.38,kind:"coffee",color:"#c6ac83"},{type:"tv",name:"TV & media cabinet",cat:"Living",w:1.2,d:.35,h:1.25,kind:"tv",color:"#c6ac83"},{type:"table",name:"Compact dining table",cat:"Living",w:.8,d:.7,h:.75,kind:"table",color:"#c6ac83"},{type:"stool",name:"Oak stool",cat:"Living",w:.35,d:.35,h:.46,kind:"stool",color:"#c6ac83"},{type:"fridge",name:"Compact refrigerator",cat:"Kitchen",w:.55,d:.52,h:1.2,kind:"fridge",color:"#e5e8e4"},{type:"pantry",name:"Mini pantry & sink",cat:"Kitchen",w:1.2,d:.58,h:.88,kind:"pantry",color:"#e7e6dc"},{type:"basin",name:"Vanity & basin",cat:"Bath",w:.6,d:.43,h:.84,kind:"basin",color:"#c6ac83"},{type:"toilet",name:"Toilet",cat:"Bath",w:.38,d:.66,h:.78,kind:"toilet",color:"#eeeeea"},{type:"shower",name:"Glass shower",cat:"Bath",w:1.2,d:.8,h:2.15,kind:"shower",color:"#b9cfcc"},{type:"plant",name:"Potted plant",cat:"Garden",w:.35,d:.35,h:.9,kind:"plant",color:"#bac8ae"},{type:"tallplant",name:"Tall indoor plant",cat:"Garden",w:.48,d:.48,h:1.5,kind:"plant",color:"#526d53"},{type:"outdoor",name:"Balcony bench",cat:"Garden",w:1.15,d:.45,h:.75,kind:"outdoor",color:"#bda178"},{type:"rug",name:"Woven area rug",cat:"Decor",w:1.5,d:1.2,h:.015,kind:"rug",color:"#c9c4aa"},{type:"lamp",name:"Floor lamp",cat:"Decor",w:.32,d:.32,h:1.55,kind:"lamp",color:"#ebdfc7"},{type:"timberBed",name:"Timber spindle bed",cat:"Sleep",w:1.6,d:2.13,h:.94,kind:"bed",roomModel:"bed",color:"#748dcb"},{type:"timberDesk",name:"Wooden bedroom desk",cat:"Work",w:1,d:.58,h:.75,kind:"desk",roomModel:"desk",color:"#985d35"},{type:"wireChair",name:"Black woven chair",cat:"Work",w:.48,d:.52,h:.95,kind:"chair",roomModel:"chair",color:"#252723"},{type:"timberWardrobe",name:"Timber double wardrobe",cat:"Storage",w:1.25,d:.57,h:2.03,kind:"wardrobe",roomModel:"wardrobe",color:"#aa6936"},{type:"leaningShelf",name:"Leaning storage shelves",cat:"Storage",w:.85,d:.36,h:1.76,kind:"shelf",roomModel:"shelf",color:"#d4c29f"},{type:"laundryBasket",name:"Woven laundry basket",cat:"Decor",w:.47,d:.38,h:.4,kind:"basket",roomModel:"basket",color:"#c3a4ad"},{type:"coatRack",name:"Tree clothes rack",keywords:"cloth rack coat hanger",cat:"Decor",w:.52,d:.52,h:1.78,kind:"coatRack",color:"#b68a5e"},{type:"roundTable",name:"Round wooden table",keywords:"circle desk dining",cat:"Work",w:1.1,d:1.1,h:.75,kind:"roundTable",color:"#c29b68"}],Ce=Object.fromEntries(Rc.map(n=>[n.type,n])),Cv=0,ra=()=>`item-${Date.now().toString(36)}-${++Cv}`;function Cu(n,t,e,i=0,r={}){let s=Ce[n];return{id:ra(),type:n,x:t,z:e,rot:i,w:s.w,d:s.d,h:s.h,color:s.color,open:!1,...r}}var Hr=[{id:"my-little-house",name:"My little house",subtitle:"Your supplied room",image:"assets/default-layout.svg",description:"A work nook, queen bed & attached bathroom."},{id:"my-two-floor-room",name:"My two-floor room",subtitle:"Your saved layout \xB7 2 floors",image:"assets/two-floor-layout.svg",description:"Your furnished two-floor room, ready to make your own."}];function Ru(n){if(n==="my-little-house")return Mn(Qi);if(n==="my-two-floor-room")return Mn(gp);if(n==="video-room")return Mn(xp);throw new Error("Unknown room layout.")}var In=[];function on(n,t,e,i){In.push({x:n,z:t,w:e,d:i,rot:0})}on(-1.625,2.3,1.25,.15);on(1.625,2.3,1.25,.15);on((-2.25+1.25)/2,-2.3,3.5,.15);on(2.15,-2.3,.2,.15);on(2.175,0,.15,4.75);on(-2.175,(-2.375-.35)/2,.15,2.025);on(-2.175,(.45+2.375)/2,.15,1.925);on(-3.675,-.875,.15,3);on(-3,-2.3,1.5,.15);on(-3,.55,1.5,.15);on(-.5,-3.33,3.5,.07);on(2.15,-3.33,.2,.07);on(-2.21,-2.875,.07,1);on(2.21,-2.875,.07,1);on(.5,2.3,1,.045);var Eu=[{name:"Front door",x:0,z:2.19,w:2,d:.75,rot:0},{name:"Rear door",x:1.65,z:-2.18,w:.8,d:.7,rot:0},{name:"Bathroom door",x:-2.16,z:.05,w:.85,d:.8,rot:0}],Le=null,Iu={holes:[],connections:[]};function or(n,t={holes:[],connections:[]}){Iu=t,Le=n,In.length=0,Eu.length=0;let e=o=>{let a=ae(n,o),c=a.axis==="x",{start:l,end:h,fixed:u}=a,d=n.openings.filter(p=>p.side===o&&p.kind==="door").map(p=>({a:Math.max(l,p.at-p.w/2),b:Math.min(h,p.at+p.w/2)})).filter(p=>p.b>p.a).sort((p,g)=>p.a-g.a),f=l;for(let p of[...d,{a:h,b:h}]){if(p.a-f>.01){let g=(f+p.a)/2;In.push(c?{x:g,z:u,w:p.a-f,d:.15,rot:0}:{x:u,z:g,w:.15,d:p.a-f,rot:0})}f=Math.max(f,p.b)}for(let p of n.openings.filter(g=>g.side===o&&g.kind==="door"))Eu.push({name:p.id,x:c?p.at:u,z:c?u:p.at,w:c?p.w:.72,d:c?.72:p.w,rot:0})};for(let o of nr(n))e(o.side);let i=n.openings.find(o=>o.id==="front-door"&&o.kind==="door"&&o.w>=1.3);if(i){let o=ae(n,i.side);In.push(o.axis==="x"?{x:i.at+i.w/4,z:o.fixed,w:i.w/2,d:.05,rot:0}:{x:o.fixed,z:i.at+i.w/4,w:.05,d:i.w/2,rot:0})}let r=n.bounds,s=n.balcony.depth;if(n.balcony.enabled!==!1){In.push({x:(r.left+r.right)/2-.52,z:r.back-s+.04,w:r.right-r.left-1.05,d:.07,rot:0});for(let o of[r.left,r.right])In.push({x:o,z:r.back-s/2,w:.07,d:s,rot:0})}if(n.room?.kind==="video-bedroom"){let o=Br(n),a=vc(n);In.push({x:(o.left+o.right)/2,z:(o.back+o.front)/2,w:o.right-o.left,d:o.front-o.back,rot:0},{...a,rot:0})}for(let o of[...t.holes||[],...t.connections||[]])In.push({x:(o.left+o.right)/2,z:(o.back+o.front)/2,w:o.right-o.left,d:o.front-o.back,rot:0});for(let o of n.partitions)In.push({x:o.x,z:o.z,w:o.w,d:o.d,rot:o.rot||0})}function Jn(n,t,e){let i=Math.cos(n.rot||0),r=Math.sin(n.rot||0);return{x:n.x+t*i+e*r,z:n.z-t*r+e*i}}function Rv(n,t,e){let i=Math.cos(n.rot||0),r=Math.sin(n.rot||0),s=t-n.x,o=e-n.z;return{x:s*i-o*r,z:s*r+o*i}}function Ac(n,t,e=0){let i=[n.rot||0,(n.rot||0)+Math.PI/2,t.rot||0,(t.rot||0)+Math.PI/2],r=a=>[[-a.w/2,-a.d/2],[a.w/2,-a.d/2],[a.w/2,a.d/2],[-a.w/2,a.d/2]].map(c=>Jn(a,...c)),s=r(n),o=r(t);return i.every(a=>{let c=Math.cos(a),l=-Math.sin(a),h=s.map(d=>d.x*c+d.z*l),u=o.map(d=>d.x*c+d.z*l);return Math.max(...h)+e>Math.min(...u)+.008&&Math.max(...u)+e>Math.min(...h)+.008})}function Cc(n,t=!1,e=1.7){let i=Ce[n.type]?.kind;if(!i||i==="rug")return[];if(i==="loft"){let r=n.w/Ce[n.type].w,s=n.d/Ce[n.type].d,a=[[-n.w/2+.045*r,-n.d/2+.045*s],[n.w/2-.045*r,-n.d/2+.045*s],[-n.w/2+.045*r,n.d/2-.045*s],[n.w/2-.045*r,n.d/2-.045*s]].map(([c,l])=>({...Jn(n,c,l),w:.09*r,d:.09*s,rot:n.rot}));return a.push({...Jn(n,n.w/2-.23*r,n.d/2+.2*s),w:.42*r,d:.46*s,rot:n.rot}),t&&e>n.h*(1.53/2.25)&&a.push({...n}),a}if(i==="sofabed"&&n.open){let r=n.d/Ce[n.type].d;return[{...n,...Jn(n,0,.52*r),d:n.d+1.04*r}]}return t&&i==="shower"?[]:[n]}function Ic(n,t){let e=[],i=Cc(n);if(i.some(r=>In.some(s=>Ac(r,s)))&&e.push("Overlaps a wall or balcony railing."),i.some(r=>t.some(s=>s.id!==n.id&&Cc(s).some(o=>Ac(r,o))))&&e.push("Overlaps another object."),i.some(r=>Eu.some(s=>Ac(r,s)))&&e.push("Occupies a door clearance zone."),i.some(r=>(Iu.landings||[]).some(s=>Ac(r,{x:(s.left+s.right)/2,z:(s.back+s.front)/2,w:s.right-s.left,d:s.front-s.back,rot:0})))&&e.push("Occupies a stair landing. Leave this space clear."),Ce[n.type].kind==="loft"&&e.push(`Loft: mattress about ${(n.h*1.88/2.25).toFixed(2)} m high. Check ceiling, guardrails & ladder.`),(Math.abs(n.x)>6||Math.abs(n.z)>6)&&e.push("Outside the illustrated garden area."),Le?.room?.kind==="custom-room"){let r=Le.bounds;i.some(s=>s.x-s.w/2<r.left||s.x+s.w/2>r.right||s.z-s.d/2<r.back||s.z+s.d/2>r.front)&&e.push("Part of this item is outside the room."),n.h>Le.room.height&&e.push("This item is taller than the ceiling.")}return e}var Pu=n=>.3*n/1.7;function ia(n,t,e,i=.3){return e.some(r=>{let s=Rv(r,n,t),o=Math.max(Math.abs(s.x)-r.w/2,0),a=Math.max(Math.abs(s.z)-r.d/2,0);return o*o+a*a<i*i})}function Lu(n,t=1.7){return[...In,...n.flatMap(e=>Cc(e,!0,t))]}function Ye(n,t){if(Le){let e=Le.bounds,i=Le.bathroom,r=Le.balcony.depth;if((Iu.holes||[]).some(s=>n>=s.left&&n<=s.right&&t>=s.back&&t<=s.front))return yt;if(Le.room?.kind==="video-bedroom"){let s=Br(Le);if(n>=s.left&&n<=s.right&&t>=s.back&&t<=s.front)return yt-Le.room.stairDrop*(t-s.back)/(s.front-s.back)}return n>=e.left&&n<=e.right&&t>=e.back-(Le.balcony.enabled===!1?0:r)&&t<=e.front||i.enabled!==!1&&n>=i.x-i.w/2&&n<=i.x+i.w/2&&t>=i.z-i.d/2&&t<=i.z+i.d/2?yt:Math.abs(n-(e.left+e.right)/2)<1&&t>=e.front&&t<e.front+.825?Math.max(.02,yt*(1-(t-e.front)/.825)):n>e.right-1.15&&n<e.right-.05&&t<e.back-r&&t>e.back-r-.825?Math.max(.02,yt*(1-(e.back-r-t)/.825)):.025}return n>=-2.25&&n<=2.25&&t>=-3.375&&t<=2.375||n>=-3.75&&n<-2.25&&t>=-2.375&&t<=.625?yt:Math.abs(n)<1.3&&t>=2.375&&t<3.2?Math.max(.02,yt*(1-(t-2.375)/.825)):n>1.13&&n<2.16&&t<-3.375&&t>-4.2?Math.max(.02,yt*(1-(-t-3.375)/.825)):.025}function Iv(n,t){return Math.abs(Ye(n.x,n.z)-Ye(t.x,t.z))<.14}var Au=class{constructor(){this.v=[]}push(t){let e=this.v,i=e.push(t)-1;for(;i;){let r=i-1>>1;if(e[r].f<=t.f)break;e[i]=e[r],i=r}e[i]=t}pop(){let t=this.v,e=t[0],i=t.pop();if(t.length){let r=0;for(;r*2+1<t.length;){let s=r*2+1;if(s+1<t.length&&t[s+1].f<t[s].f&&s++,t[s].f>=i.f)break;t[r]=t[s],r=s}t[r]=i}return e}};function Pc(n,t,e,i=1.7){if(![n.x,n.z,t.x,t.z].every(v=>Number.isFinite(v)&&Math.abs(v)<=6))return null;let r=.1,s=-6,o=6,a=121,c=Lu(e,i),l=Pu(i),h=(v,E)=>Math.round((E-s)/r)*a+Math.round((v-s)/r),u=v=>({x:s+v%a*r,z:s+Math.floor(v/a)*r}),d=h(n.x,n.z),f=h(t.x,t.z);if(d<0||d>=a*a||f<0||f>=a*a||ia(t.x,t.z,c,l))return null;let p=new Int8Array(a*a);p.fill(-1);function g(v){if(v<0||v>=a*a)return!1;if(p[v]<0){let E=u(v);p[v]=ia(E.x,E.z,c,l)?1:0}return!p[v]}if(!g(d)||!g(f))return null;let x=new Float32Array(a*a);x.fill(1/0),x[d]=0;let m=new Int32Array(a*a);m.fill(-1);let M=new Uint8Array(a*a),_=new Au;for(_.push({i:d,f:0});_.v.length;){let v=_.pop().i;if(M[v])continue;if(M[v]=1,v===f){let O=[t];for(let w=f;w!==d;w=m[w])O.push(u(w));return O.push(n),O.reverse()}let E=u(v),A=v%a,N=Math.floor(v/a);for(let[O,w]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let y=A+O,I=N+w;if(y<0||y>=a||I<0||I>=a)continue;let z=I*a+y;if(M[z]||!g(z)||O&&w&&(!g(N*a+y)||!g(I*a+A)))continue;let T=u(z);if(!Iv(E,T))continue;let F=x[v]+Math.hypot(O,w);F>=x[z]||(x[z]=F,m[z]=v,_.push({i:z,f:F+Math.hypot(T.x-t.x,T.z-t.z)/r}))}}return null}function Du(n,t){if(Le){let e=Le.bounds,i=Le.bathroom;if(n==="bathroom")return i.enabled===!1?[]:[{x:i.x,z:i.z,pose:"stand",label:"In the bathroom"}];if(n==="balcony")return Le.balcony.enabled===!1?[]:[{x:e.right-.6,z:e.back-Le.balcony.depth/2,pose:"stand",label:"Taking a balcony break"}];if(n==="entrance"&&Le.room?.kind==="video-bedroom"){let r=Br(Le);return[{x:r.left-.45,z:r.back+.22,pose:"stand",label:"At the stair landing"}]}if(n==="entrance"){let r=Le.openings.find(s=>s.kind==="door"&&s.side==="front")||Le.openings.find(s=>s.id==="front-door");if(r){let s=ae(Le,r.side),o={front:-1,back:1,left:1,right:-1}[r.side];return[{x:s.axis==="x"?r.at:s.fixed+o*.4,z:s.axis==="x"?s.fixed+o*.4:r.at,pose:"stand",label:"At the entrance"}]}return[]}}if(n==="bathroom")return[{x:-2.64,z:.05,pose:"stand",label:"In the bathroom"}];if(n==="balcony")return[{x:1.55,z:-2.88,pose:"stand",label:"Taking a balcony break"}];if(n==="entrance")return[{x:-.5,z:2.02,pose:"stand",label:"At the front door"}];if(n==="bed"){let e=t.find(r=>["bed","loft","sofabed"].includes(Ce[r.type].kind));if(!e)return[];if(Ce[e.type].kind==="loft")return[{...Jn(e,e.w/2-.23*e.w/Ce[e.type].w,e.d/2+.83*e.d/Ce[e.type].d),pose:"sleep",item:e,label:"Climbing to bed"}];let i=Cc(e)[0];return[[-i.w/2-.42,.15],[i.w/2+.42,.15],[0,i.d/2+.42]].map(r=>({...Jn(i,...r),pose:"sleep",item:e,label:"Resting on the bed"}))}if(n==="desk"){let e=t.find(s=>["desk","gaming","roundTable"].includes(Ce[s.type].kind));if(!e)return[];let r=t.filter(s=>Ce[s.type].kind==="chair").sort((s,o)=>Math.hypot(s.x-e.x,s.z-e.z)-Math.hypot(o.x-e.x,o.z-e.z))[0];return r&&Math.hypot(r.x-e.x,r.z-e.z)<1.8?[[-.72,0],[.72,0],[0,.72],[0,-.72]].map(s=>({...Jn(r,...s),pose:"sit",item:r,label:"Working at the desk"})):[{...Jn(e,0,e.d/2+.45),pose:"stand",label:"At the desk (add a chair to sit)"}]}return[]}function Mn(n,t=!1){if(!n||n.format!=="house-studio-3d"||n.version!==1||!Array.isArray(n.items)||n.items.length>180)throw new Error("Not a supported House Studio layout (maximum 180 items).");let e=new Set,i=n.items.map(o=>{if(!o||!Ce[o.type]||typeof o.id!="string"||o.id.length>100||e.has(o.id))throw new Error("Invalid or duplicate furniture ID.");e.add(o.id);for(let a of["x","z","rot","w","d","h"])if(typeof o[a]!="number"||!Number.isFinite(o[a]))throw new Error("Furniture dimensions must be finite numbers.");if(Math.abs(o.x)>6||Math.abs(o.z)>6||o.w<.1||o.w>4||o.d<.1||o.d>4||o.h<.01||o.h>3||Math.abs(o.rot)>100)throw new Error("Furniture dimensions or positions are outside the supported range.");if(o.type==="roundTable"&&Math.abs(o.w-o.d)>.001)throw new Error("A round table needs equal width and depth. Change its diameter.");if(!/^#[0-9a-f]{6}$/i.test(o.color))throw new Error("Invalid furniture colour.");return{id:o.id,type:o.type,x:o.x,z:o.z,rot:o.rot,w:o.w,d:o.d,h:o.h,color:o.color,open:!!o.open}}),r;if(n.structure!==void 0){let o=n.structure;if(!o||typeof o!="object"||!o.bounds||!o.bathroom||!o.balcony||!o.colors||!Array.isArray(o.openings)||!Array.isArray(o.partitions)||o.openings.length>40||o.partitions.length>30)throw new Error("Invalid structural layout.");for(let[h,u]of[[o.bounds,["left","right","back","front"]],[o.bathroom,["x","z","w","d"]],[o.balcony,["depth"]]])for(let d of u)if(!Number.isFinite(h[d])||Math.abs(h[d])>6)throw new Error("Invalid structural dimensions.");if(o.bounds.right-o.bounds.left<2||o.bounds.front-o.bounds.back<2||o.bathroom.w<.8||o.bathroom.d<.8||o.balcony.depth<.5||o.balcony.depth>3)throw new Error("Structural dimensions are too small or out of range.");let a=["wall","floor","foundation","bathWall","bathFloor","roof","bathRoof","balcony","rail","door","window","frame","trim","garden"];for(let h of a)if(!/^#[0-9a-f]{6}$/i.test(o.colors[h]||""))throw new Error("Invalid structural color.");let c=new Set;for(let h of o.openings){if(!h||typeof h.id!="string"||h.id.length>60||c.has(h.id)||!["door","window"].includes(h.kind)||!["front","back","left","right","bath-front","bath-back","bath-left","bath-right"].includes(h.side)||!["at","w","h","sill"].every(u=>Number.isFinite(h[u]))||Math.abs(h.at)>6||h.w<.4||h.w>3||h.h<.3||h.h>2.7||h.sill<0||h.sill+h.h>3)throw new Error("Invalid door or window.");c.add(h.id)}for(let h of o.partitions){if(!h||typeof h.id!="string"||h.id.length>60||c.has(h.id)||!["x","z","w","d","h","rot"].every(u=>Number.isFinite(h[u]))||Math.abs(h.x)>6||Math.abs(h.z)>6||h.w<.1||h.d<.1||h.h<.3||h.h>3||h.w>6||h.d>6||!/^#[0-9a-f]{6}$/i.test(h.color))throw new Error("Invalid partition.");c.add(h.id)}for(let[h,u]of Object.entries(o.colors))if(!/^#[0-9a-f]{6}$/i.test(u))throw new Error("Invalid structural color.");if(o.bathroom.side!==void 0&&(!Ue.includes(o.bathroom.side)||!["start","end","depth"].every(h=>Number.isFinite(o.bathroom[h]))||o.bathroom.end-o.bathroom.start<.8||o.bathroom.depth<.8||o.bathroom.depth>4))throw new Error("Invalid bathroom attachment.");if(o.wallSplits!==void 0){if(!o.wallSplits||typeof o.wallSplits!="object"||Array.isArray(o.wallSplits))throw new Error("Invalid wall splits.");for(let[h,u]of Object.entries(o.wallSplits))if(!Ue.includes(h)||!Array.isArray(u)||u.length>12||u.some(d=>!Number.isFinite(d)||Math.abs(d)>6))throw new Error("Invalid wall splits.")}if(o.segmentColors!==void 0){if(!o.segmentColors||typeof o.segmentColors!="object"||Array.isArray(o.segmentColors))throw new Error("Invalid segment colors.");for(let[h,u]of Object.entries(o.segmentColors))if(!/^segment-(front|back|left|right)-\d{1,2}$/.test(h)||!/^#[0-9a-f]{6}$/i.test(u))throw new Error("Invalid wall section color.")}if(o.finishes!==void 0){if(!o.finishes||typeof o.finishes!="object"||Array.isArray(o.finishes))throw new Error("Invalid floor finishes.");for(let[h,u]of Object.entries(o.finishes))if(!["floor","bathFloor"].includes(h)||!u||!Ci.some(d=>d.id===u.material)||!Number.isFinite(u.scale)||u.scale<.15||u.scale>3||!Number.isFinite(u.rotation)||Math.abs(u.rotation)>360)throw new Error("Invalid floor finish.")}if(o.wallVisibility!==void 0){if(!o.wallVisibility||typeof o.wallVisibility!="object"||Array.isArray(o.wallVisibility))throw new Error("Invalid wall visibility.");for(let[h,u]of Object.entries(o.wallVisibility))if(![...$n,...o.partitions.map(d=>d.id)].includes(h)||!["full","low","hidden"].includes(u))throw new Error("Invalid wall visibility.")}for(let h of[o.bathroom,o.balcony])if(h.enabled!==void 0&&typeof h.enabled!="boolean")throw new Error("Invalid room component visibility.");if(o.room!==void 0){let h=o.room,u=o.bounds.right-o.bounds.left,d=o.bounds.front-o.bounds.back;if(!h||!["video-bedroom","custom-room"].includes(h.kind)||typeof h.estimated!="boolean"||!Number.isFinite(h.height)||h.height<2||h.height>3)throw new Error("Use a ceiling height from 2 to 3 metres.");if(h.kind==="video-bedroom"&&(!["stairWidth","stairRun","stairDrop","ladderRun"].every(f=>Number.isFinite(h[f]))||h.stairWidth<.6||h.stairWidth>Math.min(2,u-.8)||h.stairRun<.8||h.stairRun>d-.8||h.stairDrop<.6||h.stairDrop>3||h.ladderRun<.5||h.ladderRun>1.5))throw new Error("Check the stair and ladder dimensions.")}if(o.room&&o.openings.some(h=>h.sill+h.h>o.room.height+.001))throw new Error("Lower the existing window or door opening before reducing the ceiling below it.");r=kr(o);let l=r.bathroom;if(l.enabled!==!1&&Math.max(Math.abs(l.x-l.w/2),Math.abs(l.x+l.w/2),Math.abs(l.z-l.d/2),Math.abs(l.z+l.d/2))>6)throw new Error("The attached bathroom must stay within the 12 m planning area.");if(Object.values(r.wallSplits).some(h=>h.length>12))throw new Error("Maximum 12 split points per exterior wall.")}let s={format:"house-studio-3d",version:1,name:typeof n.name=="string"?n.name.slice(0,60):"Imported layout",preset:Hr.some(o=>o.id===n.preset)?n.preset:"custom",items:i,...r?{structure:r}:{}};if(n.floors!==void 0){if(t||!Array.isArray(n.floors)||n.floors.length<1||n.floors.length>Vr||!r)throw new Error("Use one to four floors.");let o=new Set;if(s.activeFloorId=n.activeFloorId,s.floors=n.floors.map(c=>{if(!c||typeof c.id!="string"||!/^floor-[a-z0-9-]{1,50}$/.test(c.id)||o.has(c.id)||typeof c.name!="string"||!c.name.trim())throw new Error("Invalid floor name or ID.");o.add(c.id);let l=Mn({format:s.format,version:1,name:c.name,items:c.id===n.activeFloorId?i:c.items,structure:c.id===n.activeFloorId?r:c.structure},!0);if(!l.structure)throw new Error("Every floor needs a room.");return{id:c.id,name:c.name.slice(0,40),items:l.items,structure:l.structure}}),!o.has(s.activeFloorId))throw new Error("Choose an existing floor.");if(!Array.isArray(n.stairs)||n.stairs.length>12)throw new Error("Invalid floor connections.");let a=new Set;s.stairs=n.stairs.map(c=>{if(!c||typeof c.id!="string"||!/^stairs-[a-z0-9-]{1,60}$/.test(c.id)||a.has(c.id)||c.turn!==void 0&&!["left","right"].includes(c.turn)||!Zn.some(l=>l.id===c.style)||!["x","z","w","run","rot"].every(l=>Number.isFinite(c[l]))||Math.abs(c.x)>6||Math.abs(c.z)>6||c.w<.5||c.w>3||c.run<.4||c.run>5||Math.abs(c.rot)>Math.PI*2+.001||Math.abs(c.rot/(Math.PI/2)-Math.round(c.rot/(Math.PI/2)))>.001||!/^#[0-9a-f]{6}$/i.test(c.color))throw new Error("Invalid stair or ladder dimensions.");return a.add(c.id),{id:c.id,from:c.from,to:c.to,style:c.style,x:c.x,z:c.z,w:c.w,run:c.run,rot:c.rot,color:c.color,...c.style==="turn"||c.turn!==void 0?{turn:c.turn||"right"}:{}}});for(let c of s.stairs){let l=sr(s,c,{furniture:!1});if(l)throw new Error(l)}for(let c=1;c<s.floors.length;c++)if(!s.stairs.some(l=>l.from===s.floors[c-1].id&&l.to===s.floors[c].id))throw new Error("Each upper floor needs stairs or a ladder.")}return s}var sa=new P;function Pn(n,t,e,i,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;sa.copy(t),sa[i]=0,sa.normalize();let l=.5*o/(o+a),h=1-sa.angleTo(n)/c;return Math.sign(sa[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Lc=class n extends oi{constructor(t=1,e=1,i=1,r=2,s=.1){let o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new P,l=new P,h=new P(t,e,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,g=new P,x=.5/o;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*s,u[m+1]=h.y*Math.sign(c.y)+l.y*s,u[m+2]=h.z*Math.sign(c.z)+l.z*s,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[M+0]=Pn(g,l,"z","y",s,i),f[M+1]=1-Pn(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),f[M+0]=1-Pn(g,l,"z","y",s,i),f[M+1]=1-Pn(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),f[M+0]=1-Pn(g,l,"x","z",s,t),f[M+1]=Pn(g,l,"z","x",s,i);break;case 3:g.set(0,-1,0),f[M+0]=1-Pn(g,l,"x","z",s,t),f[M+1]=1-Pn(g,l,"z","x",s,i);break;case 4:g.set(0,0,1),f[M+0]=1-Pn(g,l,"x","y",s,t),f[M+1]=1-Pn(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),f[M+0]=Pn(g,l,"x","y",s,t),f[M+1]=1-Pn(g,l,"y","x",s,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};function Sp(n,t,e,i){let{box:r,cylinder:s,rod:o,mat:a}=i,c=e.w,l=e.d,h=e.h,u=t.color,d="#854d2d",f="#282c26",p=(g,x,m,M,_,v,E,A=0)=>r(n,g,x,m,M,_,v,E,A);if(e.roomModel==="bed"){for(let M of[-c/2+.055,c/2-.055])for(let _ of[-l/2+.055,l/2-.055])p(.1,_<0?h:.8,.1,M,(_<0?h:.8)/2,_,d,.012);for(let[M,_]of[[-l/2+.04,h-.06],[l/2-.04,.76]]){p(c,.1,.08,0,_,M,d,.014),p(c-.1,.09,.07,0,.33,M,d,.009);for(let v=-c/2+.17;v<c/2-.1;v+=.13)p(.038,_-.42,.035,v,(_+.36)/2,M,d,.008)}for(let M of[-c/2+.035,c/2-.035])p(.065,.18,l-.1,M,.34,0,d,.012);p(c-.09,.22,l-.15,0,.46,0,u,.048);for(let M=0;M<12;M++)for(let _=0;_<9;_++){let v=-c/2+.14+_*(c-.28)/8,E=-l/2+.14+M*(l-.28)/11;s(n,.018,.018,.002,v,.572,E,"#d7e0e8",8)}for(let M of[-c*.23,c*.23])p(c*.4,.12,.43,M,.61,-l/2+.35,"#e8e4db",.05);let g=new qe(c*.8,l*.65,14,18),x=g.attributes.position;for(let M=0;M<x.count;M++){let _=x.getX(M),v=x.getY(M);x.setZ(M,.016+Math.sin(_*16+v*7)*.016+Math.sin(v*11)*.018)}g.computeVertexNormals();let m=new ie(g,new Xe({color:new Gt(u).lerp(new Gt("#d4eaf1"),.7),roughness:1,side:Pe}));m.rotation.x=-Math.PI/2,m.position.set(.07,.582,.2),m.receiveShadow=!0,n.add(m)}else if(e.roomModel==="desk"){for(let g of[-c/2+.05,c/2-.05])for(let x of[-l/2+.05,l/2-.05])p(.055,h-.06,.055,g,(h-.06)/2,x,u,.006);p(c,.065,l,0,h-.03,0,u,.012),p(c-.1,.13,.03,0,h-.13,-l/2+.06,u);for(let[g,x,m,M]of[[.16,.05,"#e5dfd5",3],[-.08,-.08,"#45565a",3],[.31,-.07,"#b5d2e0",2]])for(let _=0;_<M;_++)p(.25,.027,.21,g+_%2*.015,h+.014+_*.027,x,m,.012);for(let[g,x,m,M]of[[-.37,.027,.17,"#e8ded4"],[-.29,.022,.12,"#d8d4a4"],[-.2,.024,.1,"#3a4b45"]])s(n,x,x,m,g,h+m/2,-.17,M,10),s(n,x*.55,x*.55,.02,g,h+m+.01,-.17,"#d5bd57",8)}else if(e.roomModel==="chair"){p(c-.04,.035,l-.07,0,.43,0,u,.015);for(let g of[-c/2+.035,c/2-.035])for(let x of[-l/2+.035,l/2-.035])o(n,[g,0,x],[g*.83,.44,x*.82],.013,u);for(let g of[-c/2+.025,c/2-.025])o(n,[g,.4,-l/2+.05],[g,.91,-l/2-.025],.015,u);p(c-.02,.026,.025,0,.91,-l/2-.025,u,.008);for(let g=-c/2+.045;g<c/2-.02;g+=.04)o(n,[g,.47,-l/2+.035],[g,.89,-l/2-.025],.0045,u);for(let g=.49;g<.9;g+=.045)p(c-.04,.007,.009,0,g,-l/2+.035-(g-.47)*.14,u)}else if(e.roomModel==="wardrobe"){p(c,h,l,0,h/2,0,u,.012);for(let g of[-c*.246,c*.246])p(c*.48,h-.23,.035,g,h/2+.025,l/2+.008,new Gt(u).multiplyScalar(1.03).getStyle(),.006),p(.016,.24,.035,g+(g<0?.19:-.19),h*.52,l/2+.045,f,.006);for(let g=-c/2+.03;g<c/2;g+=.045)p(.002,h-.26,.003,g,h/2+.02,l/2+.029,"#915b31");for(let g of[.13,.27])p(c-.08,.12,.025,0,g,l/2+.025,u,.004),p(.22,.014,.035,0,g+.02,l/2+.05,"#b9b9ae",.006);for(let[g,x]of[[-.32,"#252c30"],[-.12,"#bcb8ac"]]){p(.24,.47,.055,g,1.21,l/2+.12,x,.035);let m=p(.09,.36,.055,g-.16,1.29,l/2+.12,x,.02);m.rotation.z=-.22}}else if(e.roomModel==="shelf"){let g="#e3decb";for(let m of[-c/2+.025,c/2-.025])o(n,[m,0,l/2-.015],[m,h,-l/2+.03],.021,g),o(n,[m,0,-l/2+.03],[m,h,-l/2+.03],.021,g);let x=["#4b615b","#b9aa83","#c7b8a1","#525879","#9c7652","#d6d4c8"];for(let m=0;m<5;m++){let M=.08+m*(h-.13)/4,_=l*(1-m*.08);if(p(c,.025,_,0,M,-l/2+_/2,u,.006),(m===0||m===1)&&(p(c*.35,.18,_*.7,-c*.2,M+.105,-.015,"#c2b294",.008),p(c*.35,.018,.025,-c*.2,M+.18,_*.35,"#aa926c")),m===2||m===3)for(let v=0;v<Math.max(2,Math.floor(c*13));v++){let E=-c/2+.07+v*.055;if(E>c/2-.04)break;p(.038,.12+v%3*.025,_*.65,E,M+.08,-.015,x[(v+m)%6],.003)}m===4&&(s(n,.035,.035,.12,-c*.25,M+.072,-.01,"#9fbd66",10),p(.08,.09,.065,c*.2,M+.055,0,"#dccb9f",.014),s(n,.024,.024,.032,c*.2,M+.115,0,"#bd684c",8))}}else if(e.roomModel==="basket"){p(c,.035,l,0,.025,0,u,.016);for(let g of[-c/2,c/2]){p(.025,.035,l,g,h-.025,0,u,.008);for(let x=-l/2+.035;x<l/2;x+=.045)p(.018,h-.06,.018,g,h/2,x,u,.005);for(let x=.08;x<h;x+=.05)p(.022,.015,l,g,x,0,u,.004)}for(let g of[-l/2,l/2]){p(c,.035,.025,0,h-.025,g,u,.008);for(let x=-c/2+.035;x<c/2;x+=.045)p(.018,h-.06,.018,x,h/2,g,u,.005);for(let x=.08;x<h;x+=.05)p(c,.015,.022,0,x,g,u,.004)}}}var Uu=new Map,Nu=new Map;function tn(n,t=.75,e=0){let i=`${n}:${t}:${e}`;if(!Uu.has(i)){let r=new Xe({color:n,roughness:t,metalness:e});r.userData.shared=!0,Uu.set(i,r)}return Uu.get(i)}var Gr=new Xe({color:"#9dbab6",transparent:!0,opacity:.27,roughness:.15,metalness:.2,depthWrite:!1,side:Pe});Gr.userData.shared=!0;function mt(n,t,e,i,r,s,o,a="#fff",c=0){let l=`${t.toFixed(4)},${e.toFixed(4)},${i.toFixed(4)},${c}`;if(!Nu.has(l)){let u=c?new Lc(t,e,i,2,Math.min(c,t/3,e/3,i/3)):new oi(t,e,i);u.userData.shared=!0,Nu.set(l,u)}let h=new ie(Nu.get(l),typeof a=="string"?tn(a):a);return h.position.set(r,s,o),h.castShadow=!0,h.receiveShadow=!0,n.add(h),h}function ge(n,t,e,i,r,s,o,a,c=16){let l=new ie(new Co(t,e,i,c),typeof a=="string"?tn(a):a);return l.position.set(r,s,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Fu(n,t,e,i,r,s,o=[1,1,1]){let a=new ie(new Ar(t,1),tn(s));return a.position.set(e,i,r),a.scale.set(...o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function ui(n,t,e,i,r){let s=new P(...t),o=new P(...e),a=ge(n,i,i,s.distanceTo(o),0,0,0,r,8);return a.position.copy(s).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new P(0,1,0),o.sub(s).normalize()),a}function Dc(n,t,e,i,r="#b59a72",s=.05){for(let o of[-t/2+.055,t/2-.055])for(let a of[-e/2+.055,e/2-.055])mt(n,s,i,s,o,i/2,a,r,.009)}function oa(n){let t=Ce[n.type],e=t.kind,i=new Tt,r=t.w,s=t.d,o=t.h,a=n.color,c="#bda17a",l="#37433f",h="#ecebdc";if(i.userData.itemId=n.id,e==="coatRack"){ge(i,.255,.255,.035,0,.022,0,a,48),ge(i,.025,.034,o-.04,0,o/2,0,a,20);for(let d=0;d<7;d++){let f=d*2.4,p=.9+d*.115,g=Math.cos(f)*.225,x=Math.sin(f)*.225;ui(i,[0,p,0],[g,p+.19,x],.017,a),ge(i,.02,.02,.025,g,p+.2,x,a,12)}let u=new ie(new Is(.155,.012,8,32),tn(a));u.rotation.x=Math.PI/2,u.position.y=.61,i.add(u),ge(i,.155,.155,.018,0,.6,0,a,32)}else if(e==="roundTable"){let u=n.w/2,d=Math.min(.52,n.w*.74),f=.75;ge(i,u,u,.045,0,f-.0225,0,a,64);for(let p=-u+.045;p<u-.025;p+=.105){let g=2*Math.sqrt(Math.max(0,u*u-p*p))-.02;g>0&&mt(i,g,.0012,.003,0,f+.001,p,"#a1825c")}for(let p of[-d*.38,d*.38])for(let g of[-d*.38,d*.38])mt(i,.045,.675,.045,p,.36,g,a,.008);mt(i,d+.07,.045,.055,0,.065,0,a,.012),mt(i,.055,.045,d+.07,0,.09,0,a,.012);for(let p of[-d*.38,d*.38])mt(i,d*.8,.045,.045,0,.2,p,a,.008)}else if(t.roomModel)Sp(i,n,t,{box:mt,cylinder:ge,rod:ui,mat:tn});else if(e==="bed"||e==="loft"){let u=e==="loft",d=u?1.88:.55,f=d-.25;if(u){for(let g of[-r/2+.045,r/2-.045])for(let x of[-s/2+.045,s/2-.045])mt(i,.09,2.25,.09,g,1.125,x,a,.008);mt(i,r,.09,.07,0,2.2,-s/2,a);for(let g of[-r/2,r/2])mt(i,.065,.07,s,g,2.2,0,a),mt(i,.04,.07,s,g,2.04,0,a);mt(i,r-.44,.07,.07,-.22,2.2,s/2,a);for(let g=.16;g<1.9;g+=.25)mt(i,.34,.04,.08,r/2-.23,g,s/2+.19,a);for(let g of[r/2-.41,r/2-.05])ui(i,[g,.02,s/2+.4],[g,1.94,s/2+.02],.025,a)}else Dc(i,r,s,.22,c,.075),mt(i,r,o,.085,0,o/2,-s/2+.03,c,.03),mt(i,r-.1,.35,.05,0,o-.22,-s/2+.081,a,.05);mt(i,r,.16,s,0,f-.02,0,c,.035),mt(i,r-.1,.22,s-.12,0,d-.11,.01,h,.065),mt(i,r-.13,.042,s*.6,0,d+.014,s*.13,a,.025),mt(i,r-.13,.028,.24,0,d+.034,s*.09,new Xe({color:a,roughness:1}),.015);let p=r>1.4?2:1;for(let g=0;g<p;g++)mt(i,(r-.23)/p,.11,.39,(g-(p-1)/2)*(r-.12)/p,d+.045,-s/2+.34,"#f5f3e8",.055);if(!u)for(let g of[-r*.24,r*.24])mt(i,r*.42,.15,.018,g,.275,s/2+.006,c,.015),mt(i,.11,.012,.012,g,.3,s/2+.02,l)}else if(e==="sofa"||e==="sofabed"||e==="outdoor"){let u=e==="outdoor";Dc(i,r,s,.19,l,.045),mt(i,r-.03,.2,s,0,.27,0,u?c:a,.055),mt(i,r,.49,.15,0,.57,-s/2+.075,a,.06);for(let d of[-r/2+.075,r/2-.075])mt(i,.15,.38,s,d,.45,0,a,.04);for(let d of[-r*.22,r*.22])mt(i,r*.42,.13,s-.23,d,.42,.045,u?"#d9d7c4":a,.055);if(!u)for(let d of[-r*.22,r*.22]){let f=mt(i,r*.38,.3,.14,d,.63,-s/2+.19,a,.055);f.rotation.x=-.12}if(e==="sofabed"&&n.open){for(let d of[-r/2+.09,r/2-.09])mt(i,.045,.21,.045,d,.105,s/2+.96,l);mt(i,r-.14,.28,1.04,0,.29,s/2+.52,a,.05),mt(i,r-.19,.03,1,0,.443,s/2+.5,"#e7e4d7",.02)}}else if(["desk","gaming","table","coffee","stool","outdoor"].includes(e)){let u=e==="gaming";if(Dc(i,r,s,o-.055,u?l:c,u?.055:.045),mt(i,r,.06,s,0,o-.03,0,a,.015),e==="desk"||u){mt(i,.23,.014,.16,0,o+.014,-s*.12,l,.005),mt(i,.04,.19,.04,0,o+.105,-s*.21,l),mt(i,.58,.35,.025,0,o+.32,-s*.23,l,.008);let d=new Xe({color:u?"#315251":"#829f99",emissive:u?"#407787":"#51786c",emissiveIntensity:.3,roughness:.3});mt(i,.546,.313,.005,0,o+.32,-s*.23+.017,d,.003),mt(i,.38,.015,.13,-.06,o+.014,.11,"#454e49",.008);for(let f=0;f<8;f++)mt(i,.032,.004,.08,-.21+f*.043,o+.024,.1,"#bac7bb",.003);if(mt(i,.06,.025,.09,.23,o+.02,.13,l,.012),u){mt(i,.2,.45,.43,r/2-.2,.29,-.04,l,.018);for(let f of[.2,.37]){let p=ge(i,.064,.064,.01,r/2-.2,f,.185,"#66bdbc");p.rotation.x=Math.PI/2}}else ge(i,.036,.03,.085,-r/2+.14,o+.044,.07,"#e5e7df")}}else if(e==="chair"){ge(i,.035,.035,.35,0,.2,0,l);for(let u=0;u<5;u++){let d=u*Math.PI*2/5;ui(i,[0,.09,0],[Math.sin(d)*.25,.065,Math.cos(d)*.25],.018,l),Fu(i,.033,Math.sin(d)*.25,.04,Math.cos(d)*.25,l)}mt(i,.46,.085,.45,0,.47,0,a,.055),mt(i,.46,.52,.065,0,.77,-.2,a,.045);for(let u of[-.25,.25])mt(i,.028,.18,.03,u,.53,0,l),mt(i,.06,.035,.25,u,.63,.01,l,.012)}else if(["wardrobe","shelf","cabinet","nightstand","tv","pantry","basin"].includes(e)){let u=e==="tv"?.48:e==="pantry"?.83:e==="basin"?.66:o,d=e==="shelf";Dc(i,r,s,.1,l,.035),mt(i,r,.045,s,0,.11,0,a,.008),mt(i,r,.045,s,0,u-.02,0,a,.008);for(let f of[-r/2+.017,r/2-.017])mt(i,.035,u-.14,s,f,u/2+.03,0,a,.005);if(mt(i,r-.03,u-.1,.025,0,u/2+.025,-s/2+.012,a),d)for(let f=.45;f<u-.1;f+=.39){mt(i,r-.05,.027,s,0,f,0,a);for(let p=0;p<5;p++)mt(i,.055,.18+p%3*.045,.16,-r*.32+p*.073,f+.1+p%3*.022,0,["#879d8c","#d6c7a7","#b4bbb2","#dedbd0","#657b79"][p])}else{let f=r>.8?2:1;for(let p=0;p<f;p++){let g=(p-(f-1)/2)*(r/f);mt(i,r/f-.027,u-.17,.025,g,u/2+.02,s/2-.012,a,.008),mt(i,.013,e==="wardrobe"?.38:.08,.018,g+r/f*.31,u/2+.05,s/2+.01,l,.004)}}if(e==="tv"&&(mt(i,.32,.02,.17,0,.5,0,l),mt(i,.045,.13,.04,0,.56,0,l),mt(i,1.07,.6,.045,0,.91,0,l,.012),mt(i,1.01,.54,.007,0,.91,.028,"#4a6664",.009)),e==="pantry"||e==="basin"){mt(i,r+.03,.05,s+.02,0,u+.02,0,"#f1efe5",.013);let f=e==="basin"?r-.12:.39,p=e==="basin"?0:-r*.22;if(mt(i,f,.045,s-.12,p,u+.05,0,"#748d88",.018),mt(i,f-.055,.008,s-.17,p,u+.075,0,"#bbd1c9",.015),ui(i,[p,u+.07,-s*.28],[p,u+.24,-s*.28],.015,l),ui(i,[p,u+.24,-s*.28],[p,u+.24,-s*.08],.015,l),e==="pantry"){mt(i,.39,.018,s-.13,r*.26,u+.058,0,l,.01);for(let g of[-.1,.1])ge(i,.07,.07,.003,r*.26,u+.069,g,"#63756d")}}}else if(e==="fridge")mt(i,r,o,s,0,o/2,0,a,.035),mt(i,r-.028,o*.72,.035,0,o*.39,s/2,a,.014),mt(i,r-.028,o*.23,.035,0,o*.89,s/2,a,.014),mt(i,.015,.2,.023,-r*.36,o*.61,s/2+.028,l,.005);else if(e==="toilet"){mt(i,.34,.5,.17,0,.45,-s/2+.075,a,.035),mt(i,.34,.055,.19,0,.73,-s/2+.075,"#f5f4f0",.015);let u=Fu(i,.23,0,.34,.075,a,[.82,.47,1.14]);ge(i,.1,.13,.27,0,.16,.01,a);let d=new ie(new Is(.145,.031,7,24),tn("#f4f3ed"));d.rotation.x=Math.PI/2,d.scale.y=1.3,d.position.set(0,.435,.076),i.add(d),mt(i,.035,.008,.06,.09,.762,-s/2+.07,"#a4b0ab",.003)}else if(e==="shower"){mt(i,r,.035,s,0,.019,0,"#d5dcd4",.008),mt(i,.09,.003,.09,0,.04,0,l),mt(i,.018,o,s,-r/2,.035+o/2,0,Gr),mt(i,.018,o,s,r/2,.035+o/2,0,Gr),mt(i,r*.46,o,.018,-r*.27,.035+o/2,s/2,Gr);for(let u of[-r/2,r/2])mt(i,.022,o,.022,u,o/2,s/2,l);ui(i,[r*.23,1.1,-s/2+.04],[r*.23,2.03,-s/2+.04],.013,l),ui(i,[r*.23,2.03,-s/2+.04],[r*.23,2.03,-s/2+.23],.013,l),ge(i,.1,.1,.018,r*.23,2.01,-s/2+.23,l),mt(i,.16,.025,.05,r*.23,1.07,-s/2+.08,l,.01)}else if(e==="plant"){ge(i,r*.34,r*.27,o*.28,0,o*.14,0,a),ge(i,r*.29,r*.29,.02,0,o*.283,0,"#5b5742"),ui(i,[0,o*.28,0],[.02,o*.84,0],.009,"#786c42");for(let u=0;u<9;u++){let d=u*2.4,f=o*(.36+u*.06);ui(i,[0,f-.04,0],[Math.sin(d)*r*.28,f+.08,Math.cos(d)*r*.28],.007,"#7a8957");let p=Fu(i,r*.25,Math.sin(d)*r*.33,f+.085,Math.cos(d)*r*.33,["#507454","#6f8b59","#869b69"][u%3],[.65,.45,1.6]);p.rotation.y=-d}}else if(e==="rug"){mt(i,r,.012,s,0,.01,0,a,.004);for(let u of[-s/2+.07,s/2-.07])mt(i,r-.05,.002,.025,0,.017,u,"#ebe6d2");for(let u=0;u<30;u++)mt(i,.002,.001,s-.04,-r/2+.02+u*(r-.04)/29,.017,0,"#d8d3be")}else e==="lamp"&&(ge(i,.14,.15,.035,0,.02,0,l),ge(i,.014,.014,o-.2,0,(o-.2)/2,0,l),ge(i,.11,.17,.27,0,o-.16,0,a),ge(i,.15,.15,.009,0,o-.295,0,"#fff3cc"));return i.scale.set(e==="roundTable"?1:n.w/r,n.h/o,e==="roundTable"?1:n.d/s),i.position.set(n.x,Ye(n.x,n.z)+.015,n.z),i.rotation.y=n.rot,i}function Tp(n){let t=new Tt,e=new Tt;t.add(e),n.add(t);let i=mt(e,.24,.28,.24,0,1.56,0,"#d9b999",.013),r=mt(e,.35,.57,.23,0,1.12,0,"#e0a76b",.014),s=[],o=[];for(let a of[-1,1]){let c=new Tt;c.position.set(a*.235,1.37,0),mt(c,.12,.56,.16,0,-.265,0,"#d9b999",.012),e.add(c),s.push(c);let l=new Tt;l.position.set(a*.1,.835,0),mt(l,.16,.835,.19,0,-.4175,0,"#405b55",.012),e.add(l),o.push(l)}return t.position.set(0,yt+.015,1.4),{root:t,body:e,head:i,torso:r,arms:s,legs:o,reset(){e.rotation.set(0,0,0),e.position.set(0,0,0);for(let a of[...s,...o])a.rotation.set(0,0,0)}}}function aa(n){n.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),t.material&&!t.material.userData.shared&&t.material.dispose()})}var Ep={house:"m3 10 9-7 9 7v11H3Z M9 21v-8h6v8",orbit:"M21 12a9 9 0 1 1-9-9 M15 3h6v6 M7 12h10 M12 7v10",chair:"M6 12V4h12v8 M4 12h16v5H4Z M6 17v4 M18 17v4",person:"M10 3h4v4h-4z M8 10h8v6H8z M5 10v6 M19 10v6 M9 16v6 M15 16v6",save:"M4 3h13l4 4v14H3V3Z M7 3v7h10V3 M7 21v-7h10v7",expand:"M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5",collapse:"M3 8h5V3 M16 3v5h5 M21 16h-5v5 M8 21v-5H3",help:"M9 8a3 3 0 0 1 6 0c0 3-3 2-3 5 M12 17h.01 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M18 18l1 1 M5 19l1-1 M18 6l1-1",sunset:"M3 17h18 M4 21h16 M7 17a5 5 0 0 1 10 0 M12 3v6 M9 6l3 3 3-3 M3 10l2 2 M21 10l-2 2",moon:"M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z",arrow:"M4 12h16 M14 6l6 6-6 6",search:"M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0 M15 15l6 6",bed:"M3 18V7 M21 18V9 M3 14h18 M3 9h6v5 M9 9h12 M3 18v3 M21 18v3",monitor:"M3 4h18v13H3Z M12 17v4 M8 21h8",bath:"M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z M5 12V5a2 2 0 0 1 4 0 M6 20v2 M18 20v2",leaf:"M20 3C6 3 3 9 5 16s15 5 15-13Z M5 21l10-11",door:"M5 21V3h14v18 M2 21h20 M14 12h.1",route:"M6 6h10a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h10 M5 3h3v6H5Z M17 19h3v4h-3z",reset:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",download:"M12 3v12 M7 10l5 5 5-5 M4 16v5h16v-5",upload:"M12 16V3 M7 8l5-5 5 5 M4 16v5h16v-5",roof:"m2 12 10-9 10 9 M5 11v10h14V11",walls:"M3 4h18v16H3Z M3 9h18 M3 15h18 M9 4v5 M15 9v6 M8 15v5",ruler:"m3 17 14-14 4 4L7 21Z M7 13l2 2 M11 9l2 2 M15 5l2 2",dimensions:"M4 7V3h16v4 M4 17v4h16v-4 M8 12h8 M4 10v4 M20 10v4",cube:"m12 3 9 5v9l-9 5-9-5V8Z M3 8l9 5 9-5 M12 13v9",plan:"M3 3h18v18H3Z M3 12h9V3 M12 21v-5",focus:"M3 8V3h5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5 M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",undo:"M3 10h11a6 6 0 0 1 0 12 M8 5l-5 5 5 5",redo:"M21 10H10a6 6 0 0 0 0 12 M16 5l5 5-5 5",play:"m8 4 12 8-12 8Z",pause:"M7 4v16 M17 4v16",camera:"M3 7h4l2-3h6l2 3h4v14H3Z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0",close:"M6 6l12 12 M18 6 6 18",copy:"M8 8h13v13H8Z M16 8V3H3v13h5",trash:"M3 6h18 M6 6l1 15h10l1-15 M9 6V3h6v3 M10 10v7 M14 10v7",rotate:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",check:"m5 12 4 4 10-10"},Ri=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Ep[n]||Ep.cube}"/></svg>`;function Ap(n=document){n.querySelectorAll("[data-icon]").forEach(t=>{t.innerHTML=Ri(t.dataset.icon)})}var Ou=new Map;function Pv(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296)}function Uc(n,t,e=19){let i=Math.floor(n),r=Math.floor(t),s=n-i,o=t-r,a=s*s*(3-2*s),c=o*o*(3-2*o),l=(d,f)=>((Math.imul(d+e,374761393)^Math.imul(f-e,668265263))>>>0)/4294967296,h=l(i,r)*(1-a)+l(i+1,r)*a,u=l(i,r+1)*(1-a)+l(i+1,r+1)*a;return h*(1-c)+u*c}function Cp(n,t){return Uc(n/151,t/151)*.53+Uc(n/68,t/68,71)*.27+Uc(n/29,t/29,137)*.14+Uc(n/11,t/11,251)*.06}function Rp(n){if(Ou.has(n))return Ou.get(n);let t=document.createElement("canvas"),e=512;t.width=t.height=e;let i=t.getContext("2d"),r=Pv(271+Ci.findIndex(c=>c.id===n)*7919),s=(c,l=1)=>`rgba(${c},${c},${c},${l})`;i.fillStyle="#f7f7f7",i.fillRect(0,0,e,e);let o=i.getImageData(0,0,e,e);for(let c=0;c<e;c++)for(let l=0;l<e;l++){let h=Math.sin(l*.021+Math.sin(c*.013)*2)+Math.sin(c*.031-l*.014)+Math.cos((l+c)*.014),u=n==="marble"||n==="stone"?Cp(l,c):.5,d=n==="stone"?212+u*42:n==="concrete"?238+h*2:n==="marble"?234+u*24:246,f=n==="concrete"||n==="stone"?9:3,p=Math.max(0,Math.min(255,d+(r()-.5)*f)),g=(c*e+l)*4;o.data[g]=o.data[g+1]=o.data[g+2]=p,o.data[g+3]=255}if(i.putImageData(o,0,0),n==="marble"||n==="stone")for(let c=0;c<(n==="marble"?9:5);c++){let l=r()*e*1.8-e*.4,h=r()*7,u=r()*.9-.45,d=Array.from({length:65},(f,p)=>{let g=p*e/64;return[l+u*g+(Cp(g+h*101,h*79)-.5)*170+Math.sin(g*.07+h)*2,g]});for(let[f,p]of[[18,.018],[5,.065],[.7,.24]])i.beginPath(),d.forEach(([g,x],m)=>m?i.lineTo(g,x):i.moveTo(g,x)),i.strokeStyle=s(n==="marble"?116:150,p),i.lineWidth=f,i.stroke();if(c%2===0){let[f,p]=d[20];i.beginPath(),i.moveTo(f,p),i.bezierCurveTo(f-12,p+40,f-70,p+50,f-87,p+115),i.lineWidth=.6,i.strokeStyle=s(130,.18),i.stroke()}}let a=(c,l,h,u,d)=>{i.save(),i.beginPath(),i.rect(c,l,h,u),i.clip(),i.fillStyle=s(217+Math.floor(d*30)),i.fillRect(c,l,h,u);for(let f=0;f<32;f++){let p=l+f*u/30;i.beginPath();for(let g=0;g<=h;g+=8){let x=p+Math.sin(g*.025+d*8+f*.3)*u*.027;g?i.lineTo(c+g,x):i.moveTo(c+g,x)}i.strokeStyle=s(120,.05+f%4*.012),i.lineWidth=.45+f%3*.35,i.stroke()}i.strokeStyle=s(95,.24),i.lineWidth=1.8,i.strokeRect(c,l,h,u),i.restore()};if(n==="wood")for(let c=0;c<4;c++){let l=c%2?e*.38:0;for(let h=-1;h<2;h++)a(h*e+l,c*e/4,e,e/4,r())}if(n==="herringbone"){i.save(),i.translate(e/2,e/2),i.rotate(Math.PI/4);let c=e/8;for(let l=-12;l<12;l++)for(let h=-12;h<12;h++)((l-h)%6+6)%6===0&&a(l*c,h*c,3*c,c,r()),((l-h)%6+6)%6===3&&(i.save(),i.translate((l+1)*c,h*c),i.rotate(Math.PI/2),a(0,0,3*c,c,r()),i.restore());i.restore()}if(n==="terrazzo")for(let c=0;c<850;c++){let l=r()*e,h=r()*e,u=1.3+r()*5;i.beginPath();for(let d=0;d<5;d++){let f=d/5*Math.PI*2,p=u*(.5+r()*.5);d?i.lineTo(l+Math.cos(f)*p,h+Math.sin(f)*p):i.moveTo(l+Math.cos(f)*p,h+Math.sin(f)*p)}i.closePath(),i.fillStyle=s(125+Math.floor(r()*125),.45),i.fill()}return["marble","stone","tiles","matte"].includes(n)&&(i.strokeStyle=s(n==="tiles"?130:170,.45),i.lineWidth=n==="tiles"?5:2.3,i.strokeRect(0,0,e,e),i.strokeStyle="rgba(255,255,255,.45)",i.lineWidth=1,i.strokeRect(3,3,e-6,e-6)),Ou.set(n,t),t}function Ws(n,t,e,i,r=null){let s=Ci.find(p=>p.id===n.material)||Ci[0],o=new Tr(Rp(s.id));o.wrapS=o.wrapT=_s,o.repeat.set(e/n.scale,i/n.scale),o.center.set(.5,.5),o.rotation=n.rotation*Math.PI/180,o.colorSpace=He,o.anisotropy=4;let a=Math.cos(o.rotation),c=Math.sin(o.rotation),l=a*e/n.scale,h=-c*i/n.scale,u=c*e/n.scale,d=a*i/n.scale;if(o.matrixAutoUpdate=!1,o.matrix.set(l,h,.5-(l+h)/2,u,d,.5-(u+d)/2,0,0,1),r){let p=n.scale;o.matrix.set(a*e/p,c*i/p,(a*(r.x-e/2)-c*(r.z+i/2))/p,c*e/p,-a*i/p,(c*(r.x-e/2)+a*(r.z+i/2))/p,0,0,1)}let f=new Xe({color:t,map:o,roughness:s.roughness,metalness:0});return f.userData.floorTexture=!0,f}function Ip(n,t){let e=Rp(n),i=document.createElement("canvas");i.width=i.height=96;let r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,96,96),r.globalCompositeOperation="multiply";let s=["marble","stone","matte","tiles"].includes(n)?2:1;for(let o=0;o<s;o++)for(let a=0;a<s;a++)r.drawImage(e,a*96/s,o*96/s,96/s,96/s);return i.toDataURL()}function Pp(n,t){or(t);let e=new Tt,i=new Tt,r=new Tt,s=new Tt,o=new Tt,a=new Tt,c=new Tt;n.add(e,i,r,s,o,a,c);let l=t.colors,h=t.bounds,u=t.room,d=u.height,f=Br(t),p=vc(t),g={},x={},m={},M=[],_=(C,U)=>(C.userData.structureId=U,C),v=(C,U,q,Mt,ft,G,Z,ot,ct,ht=0)=>_(mt(C,U,q,Mt,ft,G,Z,ot,ht),ct),E=(C,U,q,Mt,ft,G)=>{let Z=new P(...U),ot=new P(...q),ct=v(C,Mt,Z.distanceTo(ot),Mt,0,0,0,ft,G,.005);return ct.position.copy(Z).add(ot).multiplyScalar(.5),ct.quaternion.setFromUnitVectors(new P(0,1,0),ot.sub(Z).normalize()),ct};function A(C,U="floor",q="floor"){let Mt=C.right-C.left,ft=C.front-C.back,G=(C.left+C.right)/2,Z=(C.back+C.front)/2;v(e,Mt,.14,ft,G,yt-.075,Z,l.foundation,q);let ot=Ws(t.finishes[U],l[U],Mt,ft,{x:G,z:Z}),ct=_(new ie(new qe(Mt,ft),ot),q);ct.rotation.x=-Math.PI/2,ct.position.set(G,yt+.008,Z),ct.receiveShadow=!0,e.add(ct)}for(let C of _p(t))A(C);if(t.bathroom.enabled!==!1){let C=t.bathroom;A({left:C.x-C.w/2,right:C.x+C.w/2,back:C.z-C.d/2,front:C.z+C.d/2},"bathFloor","bathroom"),v(s,C.w,.1,C.d,C.x,yt+d+.05,C.z,l.bathRoof,"bath-roof")}function N(C,U,q,Mt,ft,G){let Z=[U.start,U.end,...q.flatMap(ct=>[Math.max(U.start,ct.at-ct.w/2),Math.min(U.end,ct.at+ct.w/2)])].filter(ct=>ct>=U.start&&ct<=U.end).sort((ct,ht)=>ct-ht),ot=U.axis==="x";for(let ct=1;ct<Z.length;ct++){let ht=Z[ct-1],Ut=Z[ct],jt=(ht+Ut)/2;if(Ut-ht<.003)continue;let D=q.find(it=>jt>it.at-it.w/2&&jt<it.at+it.w/2),at=D?[[0,Math.min(Mt,D.sill)],[D.sill+D.h,Mt]]:[[0,Mt]];for(let[it,et]of at)if(!(et<=it)&&(v(C,ot?Ut-ht:.14,et-it,ot?.14:Ut-ht,ot?jt:U.fixed,yt+(it+et)/2,ot?U.fixed:jt,G,ft),U.side==="back"&&it<1.1)){let st=Math.min(et,1.1),bt=U.fixed+.082;v(C,Ut-ht,st-it,.024,jt,yt+(it+st)/2,bt,l.panel,ft);for(let pt=ht+.025;pt<Ut-.01;pt+=.055)v(C,.006,st-it,.006,pt,yt+(it+st)/2,bt+.014,"#30271f",ft);st===1.1&&v(C,Ut-ht,.045,.04,jt,yt+1.1,bt+.005,l.trim,ft)}}}for(let C of nr(t)){let U=new Tt,q=new Tt;i.add(U),r.add(q),g[C.side]={full:U,low:q};let Mt=t.openings.filter(G=>G.side===C.side),ft=C.side.startsWith("bath-");for(let G of ft?[{...C,id:C.side+"-wall"}]:un(t,C.side)){let Z=t.segmentColors[G.id]||(ft?l.bathWall:t.colors[C.side+"Wall"]||l.wall);N(U,G,Mt,d,G.id,Z),N(q,G,Mt,.64,G.id,Z)}}function O(C){let U=nr(t).find(ft=>ft.side===C.side);if(!U)return;let q=new Tt;q.position.set(U.axis==="x"?C.at:U.fixed,yt+C.sill,U.axis==="x"?U.fixed:C.at),U.axis==="z"&&(q.rotation.y=-Math.PI/2),_(q,C.id),a.add(q),x[C.id]=q;let Mt=C.color||l.frame;if(C.style!=="open"){for(let ft of[-C.w/2,C.w/2])v(q,.05,C.h,.09,ft,C.h/2,0,Mt,C.id);for(let ft of[0,C.h])v(q,C.w+.05,.05,.09,0,ft,0,Mt,C.id)}if(C.kind==="window"){v(q,C.w-.07,C.h-.07,.018,0,C.h/2,0,new Xe({color:C.style==="horizontal"?new Gt(l.window).multiplyScalar(.3):l.window,transparent:!0,opacity:C.style==="horizontal"?.9:.23,roughness:.4,side:Pe,depthWrite:!1}),C.id);let ft=C.style==="horizontal"?4:2;for(let G=1;G<ft;G++)v(q,.024,C.h-.04,.055,-C.w/2+C.w*G/ft,C.h/2,.015,Mt,C.id);if(C.style==="curtained"){v(q,C.w,.024,.055,0,C.h*.48,.015,Mt,C.id);let G=C.sill+C.h-.18,Z=C.h+.15,ot=U.side==="right"?.12:U.side==="left"?-.12:.12,ct=ge(q,.016,.016,C.w+.72,0,Z+.03,ot,"#ad8e53",10);ct.rotation.z=Math.PI/2,_(ct,C.id);for(let ht of[-1,1])for(let Ut=0;Ut<7;Ut++){let jt=ht*(C.w/2+.035)+ht*Ut*.042,D=.045+Math.sin(Ut/6*Math.PI*3)*.022;v(q,.053,G,.035,jt,Z-G/2,ot+D,l.curtain,C.id,.012);let at=ge(q,.024,.024,.012,jt,Z-.025,ot+D,"#b6a16d",8);at.rotation.x=Math.PI/2,_(at,C.id)}}}else if(C.style!=="open"){let ft=new Tt;ft.position.x=-C.w/2+.04,q.add(ft),v(ft,C.w-.08,C.h-.06,.035,C.w/2-.04,C.h/2,0,l.door,C.id),m[C.id]=ft}}for(let C of t.openings)O(C);for(let C of t.partitions){let U=new Tt,q=new Tt;i.add(U),r.add(q),g[C.id]={full:U,low:q};for(let[Mt,ft]of[[U,C.h],[q,Math.min(.64,C.h)]]){let G=v(Mt,C.w,ft,C.d,C.x,yt+ft/2,C.z,C.color,C.id);G.rotation.y=C.rot||0}}let w=9,y=(f.front-f.back)/w,I=u.stairDrop/w,z=(f.left+f.right)/2;for(let C=0;C<w;C++){let U=yt-C*I,q=f.back+(C+.5)*y;v(e,f.right-f.left-.07,.055,y+.025,z,U-.035,q,"#755031","stairwell",.004),v(e,f.right-f.left-.07,I,.035,z,U-I/2,f.back+(C+1)*y,"#62442d","stairwell")}for(let C of[f.left+.055,f.right-.055])E(e,[C,yt-.12,f.back],[C,yt-u.stairDrop-.12,f.front],.075,"#62442d","stairwell");E(e,[f.left+.035,yt+.88,f.back],[f.left+.035,yt-u.stairDrop+.88,f.front],.055,"#8a5734","stairwell");for(let C=0;C<=w;C+=2){let U=f.back+C*y,q=yt-C*I;E(e,[f.left+.035,q,U],[f.left+.035,q+.86,U],.035,"#825332","stairwell")}v(e,.055,.92,.055,f.left+.035,yt+.46,f.back,"#8a5734","stairwell");let T=p.z-p.d/2+.06,F=h.front-.12;for(let C of[p.x-.29,p.x+.29])E(e,[C,yt+.02,T],[C,yt+d+.04,F],.055,l.roof,"loft"),v(e,.055,.53,.055,C,yt+d+.28,F,l.roof,"loft");for(let C=1;C<=8;C++){let U=C/9;v(e,.55,.035,.095,p.x,yt+U*d,T+U*(F-T),l.roof,"loft",.004)}for(let[C,U]of[["back",h.back+.05],["front",h.front-.05]]){let q=v(e,h.right-h.left,.15,.1,(h.left+h.right)/2,yt+d-.055,U,l.roof,"loft");q.userData.wallSide=C}for(let[C,U]of[["left",h.left+.05],["right",h.right-.05]]){let q=v(e,.1,.15,h.front-h.back,U,yt+d-.055,(h.back+h.front)/2,l.roof,"loft");q.userData.wallSide=C}for(let C=h.left+.48;C<h.right-.1;C+=.48){let U=Math.abs(C-p.x)<.45,q=U?h.front-1.05:h.front;v(s,.065,.14,q-h.back,C,yt+d-.055,(h.back+q)/2,l.roof,"loft")}let k=p.x-.43,B=p.x+.43,$=h.front-1.05;for(let C of[{left:h.left,right:h.right,back:h.back,front:$},{left:h.left,right:k,back:$,front:h.front},{left:B,right:h.right,back:$,front:h.front}])C.right>C.left&&v(s,C.right-C.left,.055,C.front-C.back,(C.left+C.right)/2,yt+d+.04,(C.back+C.front)/2,"#e1e3da","loft");v(s,.07,.12,1.05,k,yt+d-.02,h.front-.525,l.roof,"loft"),v(s,.07,.12,1.05,B,yt+d-.02,h.front-.525,l.roof,"loft");let H=v(s,h.right-h.left,.06,h.front-h.back,(h.left+h.right)/2,yt+d+1.15,(h.back+h.front)/2,"#e4e2dc","loft");H.rotation.z=-.1;let tt=new ai("#fff0ce",0,7,2);tt.position.set(-.3,yt+d-.25,-.2),c.add(tt),M.push(tt);let L=new ie(new qe(200,200),tn("#e7ede3"));return L.rotation.x=-Math.PI/2,L.position.y=yt-u.stairDrop-.32,L.receiveShadow=!0,n.add(L),{structure:e,full:i,cut:r,roof:s,garden:o,doors:a,lightsGroup:c,lights:M,base:L,openingMeshes:x,doorLeaves:m,wallGroups:g,front:new Tt,rear:new Tt,bath:new Tt,frontLeaf:new Tt,rearPivot:new Tt,bathLeaf:new Tt}}function Bu(n,t){let e=new Tt,i=Zn.find(u=>u.id===n.style),r=n.w,s=n.run,o=n.color,a=n.style==="metal-ladder"?"#53635d":"#52615a";e.userData.structureId="connection:"+n.id,e.userData.connectionId=n.id;let c=(u,d,f,p,g,x,m=o)=>mt(e,u,d,f,p,g,x,m,.006),l=(u,d,f=.035,p=o)=>{let g=new P(...u),x=new P(...d),m=c(f,g.distanceTo(x),f,0,0,0,p);return m.position.copy(g).add(x).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new P(0,1,0),x.sub(g).normalize()),m},h=Math.max(10,Math.ceil(t/.19));if(i.shape==="ladder"){for(let u of[-r/2+.025,r/2-.025])l([u,0,s/2-.05],[u,t+.08,-s/2+.05],.045),l([u,t,-s/2+.05],[u,t+.65,-s/2+.05],.04);for(let u=1;u<h;u++){let d=u/h,f=d*t,p=s/2-.05-d*(s-.1);if(n.style==="metal-ladder"){let g=ge(e,.018,.018,r-.05,0,f,p,o,12);g.rotation.z=Math.PI/2}else c(r-.05,.032,.1,0,f,p)}}else if(i.shape==="spiral"){let u=Math.min(r,s)/2,d=Math.max(18,h),f=Math.PI*3;ge(e,.045,.045,t+.95,0,(t+.95)/2,0,a,16);for(let p=0;p<d;p++){let g=Math.PI/2+f*p/(d-1),x=(p+1)/d*t,m=new wi,M=f/(d-1)*.51,_=g-M,v=g+M;m.moveTo(.07*Math.cos(_),.07*Math.sin(_)),m.lineTo(u*Math.cos(_),u*Math.sin(_)),m.absarc(0,0,u,_,v,!1),m.lineTo(.07*Math.cos(v),.07*Math.sin(v)),m.closePath();let E=new ie(new $i(m,{depth:.055,bevelEnabled:!1}),tn(o));E.rotation.x=Math.PI/2,E.position.y=x,E.castShadow=!0,E.receiveShadow=!0,e.add(E);let A=(u-.04)*Math.cos(g),N=(u-.04)*Math.sin(g);if(l([A,x,N],[A,x+.86,N],.018,a),p){let O=g-f/(d-1),w=p/d*t;l([(u-.04)*Math.cos(O),w+.86,(u-.04)*Math.sin(O)],[A,x+.86,N],.025,a)}}}else if(i.shape==="turn"){let u=Math.min(r,s)*.46,d=Math.ceil(h/2),f=s-u,p=r-u;for(let g=0;g<d;g++)c(u,.065,f/d+.015,-r/2+u/2,(g+1)/d*t/2,s/2-(g+.5)/d*f);c(u,.07,u,-r/2+u/2,t/2,-s/2+u/2);for(let g=0;g<d;g++)c(p/d+.015,.065,u,-r/2+u+(g+.5)/d*p,t/2+(g+1)/d*t/2,-s/2+u/2);l([-r/2+.04,0,s/2],[-r/2+.04,t/2,-s/2+u],.07,a),l([-r/2+u,t/2,-s/2+.04],[r/2,t,-s/2+.04],.07,a),l([-r/2+.04,.86,s/2],[-r/2+.04,t/2+.86,-s/2+u/2],.035,a),l([-r/2+.04,t/2+.86,-s/2+u/2],[r/2,t+.86,-s/2+u/2],.035,a)}else{for(let d=0;d<h;d++){let f=(d+.5)/h,p=(d+1)/h*t,g=s/2-f*s,x=i.shape==="paddle",m=x?r*.64:r-.06,M=x?(d%2?1:-1)*r*.17:0;c(m,.06,x?s/h*1.6:s/h+.018,M,p,g),i.shape==="straight"&&c(r-.06,t/h,.025,0,p-t/h/2,g-s/h/2)}let u=i.shape==="floating"?[0]:[-r/2+.08,r/2-.08];for(let d of u)l([d,-.07,s/2],[d,t-.07,-s/2],i.shape==="floating"?.12:.075,a);for(let d of[-r/2+.035,r/2-.035]){l([d,.88,s/2],[d,t+.88,-s/2],.035,a);for(let f=0;f<=h;f+=2){let p=f/h;l([d,p*t,s/2-p*s],[d,p*t+.86,s/2-p*s],.022,a)}}}return e.scale.x=Ec(n),e.position.set(n.x,0,n.z),e.rotation.y=n.rot,e}function Lp(n,t){let e=new Tt,i=n.w,r=n.run;e.userData.structureId="connection:"+n.id;for(let s of[-i/2-.025,i/2+.025].filter(o=>n.style!=="turn"||o<0)){mt(e,.035,.035,r,s,t+.9,0,"#6e7d6b");for(let o=-r/2;o<=r/2+.001;o+=.32)mt(e,.025,.9,.025,s,t+.45,o,"#6e7d6b")}if(n.style==="turn"){mt(e,i,.035,.035,0,t+.9,-r/2,"#6e7d6b");for(let s=-i/2;s<=i/2+.001;s+=.3)mt(e,.025,.9,.025,s,t+.45,-r/2,"#6e7d6b")}mt(e,i,.035,.035,0,t+.9,r/2,"#6e7d6b");for(let s=-i/2;s<=i/2+.001;s+=.3)mt(e,.025,.9,.025,s,t+.45,r/2,"#6e7d6b");return e.scale.x=Ec(n),e.position.set(n.x,0,n.z),e.rotation.y=n.rot,e}function Dp(n,t,e={}){let i=e.incoming||[],r=e.outgoing||[],s=i.map(y=>Yn(y));or(t,{holes:s,connections:r.map(y=>Yn(y)),landings:[...i.map(y=>rr(y,!0)),...r.map(y=>rr(y,!1))]});let o=new Tt,a=new Tt,c=new Tt,l=new Tt,h=new Tt,u=new Tt,d=new Tt;n.add(o,a,c,l,h,u,d);let f=t.bounds,p=t.colors,g=t.room.height,x={},m={},M={},_=[],v=(y,I)=>(y.userData.structureId=I,y),E=(y,I,z,T,F,k,B,$,H)=>v(mt(y,I,z,T,F,k,B,$),H);function A(y,I="floor",z="floor"){let T=y.right-y.left,F=y.front-y.back,k=(y.left+y.right)/2,B=(y.back+y.front)/2;E(o,T,.18,F,k,yt-.09,B,p.foundation,z);let $=v(new ie(new qe(T,F),Ws(t.finishes[I],p[I],T,F,{x:k,z:B})),z);$.rotation.x=-Math.PI/2,$.position.set(k,yt+.008,B),$.receiveShadow=!0,o.add($)}for(let y of Tu(f,s))A(y);if(t.bathroom.enabled!==!1){let y=t.bathroom;A({left:y.x-y.w/2,right:y.x+y.w/2,back:y.z-y.d/2,front:y.z+y.d/2},"bathFloor","bathroom"),E(l,y.w,.12,y.d,y.x,yt+g+.06,y.z,p.bathRoof,"bath-roof")}if(t.balcony.enabled!==!1){let y=t.balcony.depth;A({left:f.left,right:f.right,back:f.back-y,front:f.back})}function N(y,I,z,T,F,k){let B=[I.start,I.end,...z.flatMap($=>[Math.max(I.start,$.at-$.w/2),Math.min(I.end,$.at+$.w/2)])].filter($=>$>=I.start&&$<=I.end).sort(($,H)=>$-H);for(let $=1;$<B.length;$++){let H=B[$-1],tt=B[$],L=(H+tt)/2;if(tt-H<.002)continue;let C=z.find(U=>L>U.at-U.w/2&&L<U.at+U.w/2);for(let[U,q]of C?[[0,Math.min(C.sill,T)],[C.sill+C.h,T]]:[[0,T]])q>U&&E(y,I.axis==="x"?tt-H:.15,q-U,I.axis==="x"?.15:tt-H,I.axis==="x"?L:I.fixed,yt+(q+U)/2,I.axis==="x"?I.fixed:L,F,k)}}for(let y of nr(t)){let I=new Tt,z=new Tt;a.add(I),c.add(z),x[y.side]={full:I,low:z};let T=y.side.startsWith("bath-"),F=t.openings.filter(k=>k.side===y.side);for(let k of T?[{...y,id:y.side+"-wall"}]:un(t,y.side)){let B=t.segmentColors[k.id]||(T?p.bathWall:p[y.side+"Wall"]||p.wall);N(I,k,F,g,B,k.id),N(z,k,F,.64,B,k.id)}}for(let y of t.partitions){let I=new Tt,z=new Tt;a.add(I),c.add(z),x[y.id]={full:I,low:z};for(let[T,F]of[[I,y.h],[z,Math.min(.64,y.h)]]){let k=E(T,y.w,F,y.d,y.x,yt+F/2,y.z,y.color,y.id);k.rotation.y=y.rot}}for(let y of t.openings){let I=nr(t).find(T=>T.side===y.side);if(!I)continue;let z=v(new Tt,y.id);z.position.set(I.axis==="x"?y.at:I.fixed,yt+y.sill,I.axis==="x"?I.fixed:y.at),I.axis==="z"&&(z.rotation.y=-Math.PI/2),u.add(z),m[y.id]=z;for(let T of[-y.w/2,y.w/2])E(z,.055,y.h,.1,T,y.h/2,0,p.frame,y.id);for(let T of[0,y.h])E(z,y.w+.05,.055,.1,0,T,0,p.frame,y.id);if(y.kind==="window")E(z,y.w-.06,y.h-.06,.02,0,y.h/2,0,new Xe({color:y.color||p.window,transparent:!0,opacity:.3,depthWrite:!1,side:Pe}),y.id),E(z,.025,y.h,.06,0,y.h/2,0,p.frame,y.id);else{let T=new Tt;T.position.x=-y.w/2+.04,z.add(T),E(T,y.w-.08,y.h-.07,.035,y.w/2-.04,y.h/2,0,y.color||p.door,y.id),E(T,.025,.13,.07,y.w-.18,y.h*.52,.045,p.frame,y.id),M[y.id]=T}}for(let y of Tu(f,r.map(I=>Yn(I))))E(l,y.right-y.left,.1,y.front-y.back,(y.left+y.right)/2,yt+g+.05,(y.back+y.front)/2,p.roof,"ceiling");for(let y of r){let I=Bu(y,y.rise);I.position.y=yt,o.add(I)}for(let y of i){if(e.showIncoming!==!1){let I=Bu(y,y.rise);I.position.y=yt-y.rise,o.add(I)}o.add(Lp(y,yt))}let O=new ai("#fff1d7",0,9,2);O.position.set((f.left+f.right)/2,yt+g-.2,(f.back+f.front)/2),d.add(O),_.push(O);let w=new ie(new qe(200,200),tn("#e7ede3"));return w.rotation.x=-Math.PI/2,w.position.y=-.15,w.receiveShadow=!0,n.add(w),{structure:o,full:a,cut:c,roof:l,garden:h,doors:u,lightsGroup:d,lights:_,base:w,wallGroups:x,openingMeshes:m,doorLeaves:M}}var Lv=kr(Qi.structure);var Wr=()=>JSON.parse(JSON.stringify(Lv));function Nc(n,t,e={}){if(t.room?.kind==="custom-room")return Dp(n,t,e);if(t.room?.kind==="video-bedroom")return Pp(n,t);or(t);let i=new Tt,r=new Tt,s=new Tt,o=new Tt,a=new Tt,c=new Tt,l=new Tt;n.add(i,r,s,o,a,c,l);let h=t.bounds,u=t.bathroom,d=t.colors,f=h.right-h.left,p=h.front-h.back,g=(h.left+h.right)/2,x=(h.front+h.back)/2,m=.15;function M(L,C){return L.userData.structureId=C,L}function _(L,C,U,q,Mt,ft,G,Z,ot,ct=0){let ht=mt(L,C,U,q,Mt,ft,G,Z,ct);return ot&&M(ht,ot),ht}let v={};function E(L,C,U,q,Mt,ft){let G=Ws(t.finishes[Mt],d[Mt],L,C),Z=new ie(new qe(L,C),G);Z.rotation.x=-Math.PI/2,Z.position.set(U,yt+.008,q),Z.receiveShadow=!0,M(Z,ft),i.add(Z)}_(i,f,.36,p,g,.18,x,d.foundation,"floor",.025),E(f-.15,p-.15,g,x,"floor","floor"),_(i,u.w,.36,u.d,u.x,.18,u.z,d.foundation,"bathroom"),E(u.w-.15,u.d-.15,u.x,u.z,"bathFloor","bathroom");let A=h.back-t.balcony.depth/2;_(i,f,.12,t.balcony.depth,g,yt-.07,A,d.balcony,"balcony",.008);for(let L=h.back-t.balcony.depth+.07;L<h.back;L+=.17)_(i,f-.08,.004,.009,g,yt-.007,L,d.rail,"balcony");let N=h.back-t.balcony.depth+.055;for(let L=h.left+.1;L<h.right-.05;L+=.23)L>h.right-1.1&&L<h.right-.17||_(i,.035,.82,.035,L,yt+.42,N,d.rail,"balcony");_(i,f-.9,.055,.07,g-.43,yt+.86,N,d.rail,"balcony");for(let L of[h.left+.04,h.right-.04]){_(i,.05,.08,t.balcony.depth,L,yt+.86,A,d.rail,"balcony");for(let C=N+.1;C<h.back-.05;C+=.23)_(i,.04,.8,.04,L,yt+.42,C,d.rail,"balcony")}let O=[];for(let[L,C]of[[g-.9,x-.6],[g+.9,x+.8],[u.x,u.z],[g,A]]){ge(l,.065,.065,.05,L,yt+2.77,C,"#f5e8d3");let U=new ai("#ffdfaa",0,5,2);U.position.set(L,yt+2.5,C),l.add(U),O.push(U)}let w={},y={};function I(L,C,U,q,Mt,ft,G,Z,ot){let ct=[U,q,...ft.flatMap(ht=>[Math.max(U,ht.at-ht.w/2),Math.min(q,ht.at+ht.w/2)])].filter(ht=>ht>=U&&ht<=q).sort((ht,Ut)=>ht-Ut);for(let ht=1;ht<ct.length;ht++){let Ut=ct[ht-1],jt=ct[ht];if(jt-Ut<.002)continue;let D=(Ut+jt)/2,at=ft.find(et=>D>et.at-et.w/2&&D<et.at+et.w/2),it=at?[[0,at.sill],[at.sill+at.h,Z]]:[[0,Z]];for(let[et,st]of it){if(st-et<.002)continue;let bt=C==="x"?jt-Ut:m,pt=C==="x"?m:jt-Ut,St=C==="x"?D:Mt,$t=C==="x"?Mt:D;_(L,bt,st-et,pt,St,yt+(st+et)/2,$t,G,ot)}}}function z(L){let C=ae(t,L.side),U=C.axis==="x",q=U?[L.at,C.fixed]:[C.fixed,L.at],Mt=q[0],ft=q[1],G=new Tt;G.position.set(Mt,yt+L.sill,ft),U||(G.rotation.y=-Math.PI/2),c.add(G),G.userData.structureId=L.id,w[L.id]=G;let Z=d.frame,ot=L.color||(L.kind==="window"?d.window:d.door);for(let ct of[-L.w/2,L.w/2])_(G,.055,L.h,.1,ct,L.h/2,0,Z,L.id);for(let ct of[0,L.h])_(G,L.w+.06,.055,.1,0,ct,0,Z,L.id);if(L.kind==="window")_(G,L.w-.06,L.h-.08,.024,0,L.h/2,0,new Xe({color:ot,transparent:!0,opacity:.32,depthWrite:!1,side:Pe}),L.id),_(G,.027,L.h,.09,0,L.h/2,0,Z,L.id);else if(L.id==="front-door"&&L.w>=1.3){let ct=L.w/2-.04,ht=new Tt;G.add(ht),_(ht,ct,L.h-.08,.029,-L.w/4,L.h/2,0,L.color?ot:Gr,L.id),_(ht,.025,L.h-.05,.05,-L.w/2+.035,L.h/2,0,Z,L.id),_(ht,.025,.16,.05,-.06,L.h*.51,.045,Z,L.id),_(G,ct,L.h-.08,.029,L.w/4,L.h/2,-.015,L.color?ot:Gr,L.id),_(G,.028,L.h-.05,.05,L.w/2-.04,L.h/2,0,Z,L.id),y[L.id]=ht}else{let ct=new Tt;ct.position.x=-L.w/2+.04,G.add(ct),_(ct,L.w-.08,L.h-.08,.032,L.w/2-.04,L.h/2,0,ot,L.id),_(ct,.022,.13,.08,L.w-.2,L.h*.51,.05,Z,L.id),y[L.id]=ct}}for(let L of $n.filter(C=>C!==er(t))){let C=ae(t,L),U=t.openings.filter(Z=>Z.side===L&&Z.at+Z.w/2>C.start&&Z.at-Z.w/2<C.end),q=L.startsWith("bath-"),Mt=q?2.74:3,ft=new Tt,G=new Tt;r.add(ft),s.add(G),v[L]={full:ft,low:G};for(let Z of q?[{...C,id:L+"-wall"}]:un(t,L)){let ot=Z.id,ct=t.segmentColors?.[ot]||(q?d.bathWall:d[L+"Wall"]||d.wall);I(ft,C.axis,Z.start,Z.end,C.fixed,U,ct,Mt,ot);let ht=U.filter(Ut=>Ut.kind==="door").map(Ut=>({...Ut,h:.65,sill:0}));I(G,C.axis,Z.start,Z.end,C.fixed,ht,ct,.64,ot)}}for(let L of t.openings)z(L);for(let L of t.partitions){let C=new Tt,U=new Tt;r.add(C),s.add(U),v[L.id]={full:C,low:U};let q=_(C,L.w,L.h,L.d,L.x,yt+L.h/2,L.z,L.color||d.wall,L.id),Mt=_(U,L.w,Math.min(.65,L.h),L.d,L.x,yt+Math.min(.65,L.h)/2,L.z,L.color||d.wall,L.id);q.rotation.y=Mt.rotation.y=L.rot||0}let T=.84,F=f/2+.35,k=Math.atan2(T,f/2),B=p+.65;for(let L of[-1,1]){let C=_(o,Math.hypot(F,T),.13,B,g+L*F/2,yt+3+T/2,x,d.roof,"roof");C.rotation.z=-L*k}for(let L of[h.back,h.front]){let C=new wi;C.moveTo(h.left,0),C.lineTo(h.right,0),C.lineTo(g,T),C.closePath();let U=new ie(new $i(C,{depth:.13,bevelEnabled:!1}),tn(d.wall));U.position.set(0,yt+3,L-.065),U.castShadow=!0,M(U,"roof"),o.add(U)}_(o,u.w+.3,.11,u.d+.4,u.x,yt+2.86,u.z,d.bathRoof,"bath-roof");let $=_(o,f,.1,t.balcony.depth+.2,g,yt+2.8,A,d.roof,"roof");$.rotation.x=-.07;let H=new Tt;H.position.set(g,yt,h.front),c.add(H);for(let L=0;L<3;L++){let C=3-L;_(i,1.85,.126*C,.29,g,.063*C,h.front+.19+L*.27,d.foundation,"floor"),_(i,.9,.126*C,.29,h.right-.5,.063*C,N-.22-L*.27,d.balcony,"balcony")}_(a,13,.12,13,-.2,-.08,0,d.garden,"garden",.07);for(let L=h.front+1;L<6;L+=.5)_(a,1.2,.03,.31,g,.02,L,"#d6d7c8","garden",.01);for(let[L,C]of[[-5,-3.8],[5,-4],[5,3.6],[-4.9,4]]){let U=ge(a,.07,.13,1.4,L,.7,C,"#807556",9),q=new ie(new Ar(.75,1),tn("#71885e"));q.position.set(L,1.75,C),a.add(q),U.userData.structureId="garden"}let tt=new ie(new qe(200,200),tn("#e7ede3"));return tt.rotation.x=-Math.PI/2,tt.position.y=-.15,tt.receiveShadow=!0,n.add(tt),{structure:i,full:r,cut:s,roof:o,garden:a,doors:c,lightsGroup:l,lights:O,base:tt,openingMeshes:w,doorLeaves:y,wallGroups:v,front:w["front-door"]||new Tt,rear:w["rear-door"]||new Tt,bath:w["bath-inner"]||new Tt,frontLeaf:y["front-door"]||new Tt,rearPivot:y["rear-door"]||new Tt,bathLeaf:y["bath-inner"]||new Tt}}function ku(n,t){for(let e of["structure","full","cut","roof","garden","doors","lightsGroup"])n.remove(t[e]),t[e].traverse(i=>{i.geometry&&!i.geometry.userData.shared&&i.geometry.dispose(),i.material&&!i.material.userData.shared&&(i.material.userData.floorTexture&&i.material.map?.dispose(),i.material.dispose())});n.remove(t.base),t.base.geometry.dispose()}function Up(n){let{$:t,$$:e,escapeHTML:i}=n,r="floor",s=null,o=null,a=null,c=0,l=new Xi(new Ae,new Wn({color:"#3e886b",depthTest:!1}));l.renderOrder=20,l.visible=!1,n.scene.add(l);let h={wall:"General walls",floor:"Main floor",foundation:"Foundation",bathWall:"Bathroom walls",bathFloor:"Bathroom floor",roof:"Roof / beams",bathRoof:"Bathroom roof",balcony:"Balcony deck",rail:"Balcony rails",door:"Doors",window:"Window glass",frame:"Frames",trim:"Wall trim",garden:"Garden",panel:"Timber panels",curtain:"Curtains"},u=()=>n.getState(),d=()=>u().structure,f=(T,F,k,B=-6,$=6,H=.05)=>`<label class="field-label">${F}<input type="number" data-build-field="${T}" min="${B}" max="${$}" step="${H}" value="${Number(k).toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}"></label>`,p=(T,F,k)=>`<label class="field-label">${F}<input type="color" data-build-color="${T}" value="${k}"></label>`,g=(T,F,k="secondary")=>`<button id="${T}" class="btn ${k} wide">${F}</button>`;function x(T){if(T.startsWith("connection:")){n.selectConnection?.(T.slice(11));return}r=T,_(),z()}function m(T){l.geometry.dispose(),l.geometry=new Ae().setFromPoints(T.map(F=>new P(F.x,F.y??yt+.035,F.z))),l.visible=!0}function M(T){let F=T.axis==="x",k={x:F?T.start:T.fixed,z:F?T.fixed:T.start},B={x:F?T.end:T.fixed,z:F?T.fixed:T.end};m([k,B,{...B,y:yt+3.02},{...k,y:yt+3.02},k])}function _(){s=null,o=null,l.visible=!1,n.controls.enabled=!0,n.renderer.domElement.style.cursor="",t("#buildToolHint").hidden=!0,t("#splitWallTool").classList.remove("active"),t("#addPartition").classList.remove("active")}function v(T){_(),s=T,t("#buildToolHint").hidden=!1,t("#buildToolText").textContent=T==="split"?"Click a point on an outside wall to split it.":"Click the start and end of your new wall.",t("#"+(T==="split"?"splitWallTool":"addPartition")).classList.add("active"),n.renderer.domElement.style.cursor="crosshair",T==="draw"&&n.view("top")}function E(T){for(;T;){if(!T.visible)return!1;T=T.parent}return!0}function A(T){n.ray(T);let F=n.getHouse();for(let k of n.raycaster.intersectObjects([F.structure,F.full,F.cut,F.doors,F.roof,F.garden],!0)){if(!E(k.object))continue;let B=k.object;for(;B;){if(B.userData.structureId)return{id:B.userData.structureId,point:k.point};B=B.parent}}return null}function N(T){let F=n.pointAt(T);if(!F)return null;let k=n.getSnap()?.1:.01,B=Math.round(F.x/k)*k,$=Math.round(F.z/k)*k,H=d().bounds;for(let tt of["left","right"])Math.abs(B-H[tt])<.13&&(B=H[tt]);for(let tt of["front","back"])Math.abs($-H[tt])<.13&&($=H[tt]);return{x:Math.max(-6,Math.min(6,B)),z:Math.max(-6,Math.min(6,$))}}function O(T){let F=d(),k=A(T),B=k&&bc(F,k.id),$=B?.side||(k?.id.endsWith("-wall")?k.id.replace("-wall",""):null);if(Ue.includes($)){let L=ae(F,$);return{side:$,at:k.point[L.axis]}}let H=n.pointAt(T);if(!H)return null;let tt=Ue.map(L=>{let C=ae(F,L);return{side:L,at:H[C.axis],distance:Math.abs((C.axis==="x"?H.z:H.x)-C.fixed),v:C}}).filter(L=>L.at>=L.v.start&&L.at<=L.v.end).sort((L,C)=>L.distance-C.distance);return tt[0]?.distance<.32?tt[0]:null}function w(T,F,k=!0){try{let B=n.getSnap()?.1:.01,$=k?Math.round(F/B)*B:F,H;n.edit(L=>H=yp(L,T,$))&&(r=H.id,_(),z(),n.toast("Wall split. Select either section to edit or extend it."))}catch(B){n.toast(B.message)}}function y(T){let F=d(),k=F.finishes[T];return`<div class="finish-heading"><h3>Floor finish</h3><span>Pattern + color</span></div><div class="finish-grid">${Ci.map(B=>`<button class="finish-card ${k.material===B.id?"active":""}" data-floor-material="${B.id}" title="${B.detail}" aria-pressed="${k.material===B.id}"><img alt="" src="${Ip(B.id,F.colors[T])}"><span>${B.name}</span></button>`).join("")}</div>${p("colors."+T,"Floor color \xB7 pattern stays",F.colors[T])}<div class="row">${f("finish.scale",k.material==="wood"||k.material==="herringbone"?"Pattern size \xB7 m":"Tile / pattern size \xB7 m",k.scale,.15,3,.05)}<label class="field-label">Pattern direction<select data-build-field="finish.rotation">${[0,45,90,135,180,270].map(B=>`<option value="${B}" ${k.rotation===B?"selected":""}>${B}\xB0</option>`).join("")}</select></label></div><p class="small-note">Color changes tint the same texture. Size and direction change the pattern independently.</p>`}function I(T){let F=T.end-T.start;return`<div class="editor-divider"></div><h3>Split this wall</h3><p class="small-note">Split by a distance from this section\u2019s start, or use the Split wall tool in the scene.</p><label class="field-label">Distance from start \xB7 m<input id="splitDistance" type="number" min=".25" max="${Math.max(.25,F-.25)}" step=".05" value="${(F/2).toFixed(2)}"></label>${g("splitSelected","Split into two sections")}<div class="editor-divider"></div><h3>Bathroom extension</h3><p class="small-note">Extend this wall section out from the main room. It stays attached as the house changes. The existing bathroom and fixtures follow the new section.</p><label class="field-label">Outward depth \xB7 m<input id="extensionDepth" type="number" min=".8" max="4" step=".1" value="${d().bathroom.depth}"></label>${g("extendBathroom","Extend section as bathroom","primary")}`}function z(){let T=d(),F=T.bounds,k=T.bathroom,B=T.openings.find(U=>U.id===r)||T.partitions.find(U=>U.id===r),$=bc(T,r),H=(U,q,Mt=!1)=>`<button data-build-select="${i(U)}" class="${r===U?"active ":""}${Mt?"segment-row":""}"><span>${i(q)}</span><small>${r===U?"EDITING":"\u2192"}</small></button>`;t("#buildList").innerHTML=H("floor","Room size & floor finish")+Ue.map(U=>H(U+"-wall",tr[U]+" wall")+(un(T,U).length>1?un(T,U).map(q=>H(q.id,`Section ${q.index+1} \xB7 ${(q.end-q.start).toFixed(2)} m`,!0)).join(""):"")).join("")+(k.enabled===!1?"":H("bathroom","Attached bathroom"))+(T.balcony.enabled===!1?"":H("balcony","Balcony"))+(T.room?.kind==="video-bedroom"?H("loft","Green loft frame & ceiling")+H("stairwell","Stair opening"):T.room?H("ceiling","Ceiling"):H("roof","Main roof")+H("bath-roof","Bathroom roof")+H("garden","Garden / surroundings"))+T.openings.map(U=>H(U.id,`${U.kind==="door"?"Door":"Window"} \xB7 ${U.side}`)).join("")+T.partitions.map((U,q)=>H(U.id,`Interior wall ${q+1}`)).join(""),e("[data-build-select]").forEach(U=>U.onclick=()=>x(U.dataset.buildSelect)),t("#buildPalette").innerHTML=Object.entries(h).filter(([U])=>T.colors[U]&&!(k.enabled===!1&&["bathWall","bathFloor","bathRoof"].includes(U))&&!(T.balcony.enabled===!1&&["balcony","rail"].includes(U))&&!(T.room&&U==="garden")).map(([U,q])=>`<label><input type="color" value="${T.colors[U]}" data-palette="${U}"><span>${q}</span></label>`).join(""),e("[data-palette]").forEach(U=>U.onchange=()=>n.edit(q=>q.colors[U.dataset.palette]=U.value));let tt="",L="",C=null;if(r==="floor")tt="Room size & floor",C="floor",L=`<h3>How big is your room?</h3><div class="row">${f("footprint.width","Width \xB7 m",F.right-F.left,2,10,.1)}${f("footprint.depth","Length \xB7 m",F.front-F.back,2,10,.1)}</div>${T.room?f("room.height","Ceiling height \xB7 m",T.room.height,2,3,.05):""}${T.room?.kind==="video-bedroom"?'<label class="measured-check"><input id="dimensionsConfirmed" type="checkbox" '+(T.room.estimated?"":"checked")+"> I have entered measured dimensions</label>":""}<p class="small-note">Use metres. Furniture stays where you put it when you resize the room.</p><details class="advanced-fields"><summary>Advanced wall positions</summary><div class="row">${f("bounds.left","Left X",F.left,-5,2)}${f("bounds.right","Right X",F.right,-2,5)}</div><div class="row">${f("bounds.back","Back Z",F.back,-5,2)}${f("bounds.front","Front Z",F.front,-2,5)}</div></details><div class="editor-divider"></div>`+y("floor");else if($||Ue.some(U=>r===U+"-wall")){let U=$?.side||r.replace("-wall",""),q=$||ae(T,U);tt=tr[U]+($?` wall \xB7 section ${$.index+1}`:" wall"),L=`<p class="small-note">${(q.end-q.start).toFixed(2)} m along the ${tr[U].toLowerCase()} wall${$?". This section has its own color and can become the bathroom extension.":". Move the wall to resize the house."}</p>`,$||(L+=f("bounds."+U,"Wall position \xB7 "+(q.axis==="x"?"Z":"X"),F[U],-5,5)),L+=p($?"segment.color":"colors."+U+"Wall",$?"This section color":"This wall color",T.segmentColors[$?.id]||T.colors[U+"Wall"]||T.colors.wall)+I(q),s||M(q)}else if(r==="bathroom"){tt="Attached bathroom",C="bathFloor";let U=ae(T,k.side);L=`<p class="attachment-note">Attached to the ${tr[k.side].toLowerCase()} wall \xB7 ${(k.end-k.start).toFixed(2)} m section</p><p class="small-note">Resize the section and outward depth here. To attach it elsewhere, split an exterior wall and choose a section.</p><div class="row">${f("bathroom.start","Section start \xB7 "+U.axis.toUpperCase(),k.start,U.start,U.end-.8)}${f("bathroom.end","Section end \xB7 "+U.axis.toUpperCase(),k.end,U.start+.8,U.end)}</div>${f("bathroom.depth","Outward depth \xB7 m",k.depth,.8,4,.1)}${p("colors.bathWall","Bathroom walls",T.colors.bathWall)}<div class="editor-divider"></div>${y("bathFloor")}`}else if(r.startsWith("bath-")&&r.endsWith("-wall"))tt="Bathroom "+r.replace("bath-","").replace("-wall","")+" wall",L=p("colors.bathWall","Bathroom walls",T.colors.bathWall)+g("editBathFloor","Edit bathroom floor");else if(r==="loft"&&T.room?.kind==="video-bedroom")tt="Green loft frame",L='<p class="attachment-note">Beams, ladder and hatch from the video. Switch Ceiling on to see the overhead infill.</p>'+f("room.height","Ceiling / loft height \xB7 m",T.room.height,2,3,.05)+f("room.ladderRun","Ladder horizontal run \xB7 m",T.room.ladderRun,.5,1.5,.05)+p("colors.roof","Green frame color",T.colors.roof);else if(r==="stairwell"&&T.room?.kind==="video-bedroom")tt="Stair opening",L='<p class="small-note">The opening and descending steps are estimated from the video. The person stops at the landing; stair climbing is not simulated.</p>'+f("room.stairWidth","Opening width \xB7 m",T.room.stairWidth,.6,2,.05)+f("room.stairRun","Opening length \xB7 m",T.room.stairRun,.8,4,.05)+f("room.stairDrop","Visible stair drop \xB7 m",T.room.stairDrop,.6,3,.05);else if(r==="ceiling"&&T.room)tt="Ceiling",L=f("room.height","Ceiling height \xB7 m",T.room.height,2,3,.05)+p("colors.roof","Ceiling color",T.colors.roof)+'<p class="small-note">Turn Ceiling on above the scene to see it. Openings follow your stairs automatically.</p>';else if(r==="balcony")tt="Back balcony",L=f("balcony.depth","Depth",T.balcony.depth,.5,3)+p("colors.balcony","Deck color",T.colors.balcony)+p("colors.rail","Rail color",T.colors.rail);else if(r==="roof"||r==="bath-roof"){tt=r==="roof"?"Main roof":"Bathroom roof";let U=r==="roof"?"roof":"bathRoof";L=p("colors."+U,"Roof color",T.colors[U])}else if(r==="garden")tt="Garden",L=p("colors.garden","Ground color",T.colors.garden);else if(B?.kind){let U=ae(T,B.side);tt=B.kind==="door"?"Door":"Window",L=`<label class="field-label">Wall<select data-build-field="opening.side">${$n.filter(q=>(k.enabled!==!1||!q.startsWith("bath-"))&&q!==er(T)).map(q=>`<option value="${q}" ${B.side===q?"selected":""}>${q}</option>`).join("")}</select></label><div class="row">${f("opening.at",U.axis.toUpperCase()+" position",B.at)}${f("opening.w","Width",B.w,.4,3)}</div><div class="row">${f("opening.h","Height",B.h,.3,(B.side.startsWith("bath-"),2.7))}${f("opening.sill","Sill height",B.sill,0,2.5)}</div>${p("opening.color","Individual color",B.color||T.colors[B.kind])}${g("deleteStructure","Delete "+B.kind)}`}else if(B)tt="Interior wall",L=`<div class="row">${f("partition.x","Center X",B.x)}${f("partition.z","Center Z",B.z)}</div><div class="row">${f("partition.w","Length",B.w,.1,6)}${f("partition.d","Thickness",B.d,.1,6)}</div><div class="row">${f("partition.h","Height",B.h,.3,3)}${f("partition.deg","Rotation \xB0",(B.rot||0)*180/Math.PI,-360,360,15)}</div>${p("partition.color","Wall color",B.color)}${g("deleteStructure","Delete wall")}`;else return r="floor",z();!$&&!Ue.some(U=>r===U+"-wall")&&!s&&(l.visible=!1),t("#buildInspectorTitle").textContent=tt,t("#buildInspector").innerHTML=L+wu(T).map(U=>`<p class="warning">${i(U)}</p>`).join(""),e("[data-build-field]").forEach(U=>U.onchange=()=>{let[q,Mt]=U.dataset.buildField.split("."),ft=U.tagName==="SELECT"&&q==="opening"?U.value:Number(U.value);if(typeof ft=="number"&&(!Number.isFinite(ft)||U.min!==""&&ft<Number(U.min)||U.max!==""&&ft>Number(U.max))){n.toast("Check the allowed dimension range."),z();return}n.edit(G=>{if(q==="footprint"){bp(G,Mt,ft);return}if(q==="bathroom"){let ot=G.bathroom;Mu(G,ot.side,Mt==="start"?ft:ot.start,Mt==="end"?ft:ot.end,Mt==="depth"?ft:ot.depth);return}let Z=q==="finish"?G.finishes[C]:q==="opening"?G.openings.find(ot=>ot.id===r):q==="partition"?G.partitions.find(ot=>ot.id===r):G[q];if(Z){if(Mt==="deg"?Z.rot=ft*Math.PI/180:Z[Mt]=ft,q==="room"&&Mt==="height")for(let ot of G.partitions)ot.h=Math.min(ot.h,ft);if(q==="opening"&&Mt==="side"){let ot=ae(G,ft);Z.at=Math.min(ot.end-Z.w/2-.1,Math.max(ot.start+Z.w/2+.1,Z.at))}}})}),e("[data-build-color]").forEach(U=>U.onchange=()=>{let[q,Mt]=U.dataset.buildColor.split(".");n.edit(ft=>{q==="segment"?ft.segmentColors[r]=U.value:q==="opening"?ft.openings.find(G=>G.id===r).color=U.value:q==="partition"?ft.partitions.find(G=>G.id===r).color=U.value:ft.colors[Mt]=U.value})}),e("[data-floor-material]").forEach(U=>U.onclick=()=>n.edit(q=>{let Mt=Ci.find(ft=>ft.id===U.dataset.floorMaterial);q.finishes[C].material=Mt.id,q.finishes[C].scale=Mt.scale})),t("#splitSelected")&&(t("#splitSelected").onclick=()=>{let U=$||ae(T,r.replace("-wall","")),q=Number(t("#splitDistance").value);if(!Number.isFinite(q)||q<.25||q>U.end-U.start-.25){n.toast("Leave at least 25 cm in each section.");return}w(U.side,U.start+q,!1)}),t("#extendBathroom")&&(t("#extendBathroom").onclick=()=>{let U=$||ae(T,r.replace("-wall","")),q=Number(t("#extensionDepth").value);n.edit(Mt=>Mu(Mt,U.side,U.start,U.end,q))&&(r="bathroom",z(),n.toast("Bathroom extended from that section. Its shared wall stays connected."))}),t("#dimensionsConfirmed")&&(t("#dimensionsConfirmed").onchange=U=>n.edit(q=>q.room.estimated=!U.target.checked)),t("#editBathFloor")&&(t("#editBathFloor").onclick=()=>x("bathroom")),t("#deleteStructure")&&(t("#deleteStructure").onclick=()=>{n.edit(U=>{U.openings=U.openings.filter(q=>q.id!==r),U.partitions=U.partitions.filter(q=>q.id!==r),delete U.wallVisibility[r]}),r="floor",z()})}t("#splitWallTool").onclick=()=>v("split"),t("#addPartition").onclick=()=>v("draw"),t("#cancelBuildTool").onclick=_;for(let T of["Door","Window"])t("#add"+T).onclick=()=>{let F=d();if(F.openings.length>=40){n.toast("Maximum 40 openings.");return}let k=bc(F,r),B=k?.side||(Ue.includes(r.replace("-wall",""))?r.replace("-wall",""):T==="Window"?"back":"front"),$=k||ae(F,B),H=`${T.toLowerCase()}-${Date.now().toString(36)}`,tt=T==="Door"?.8:1,L=[($.start+$.end)/2];for(let U=$.start+tt/2+.15;U<=$.end-tt/2-.14;U+=.1)L.push(U);let C=L.find(U=>!F.openings.some(q=>q.side===B&&Math.abs(q.at-U)<(q.w+tt)/2+.15));if(C===void 0){n.toast("This wall is full. Select another wall to add an opening.");return}n.edit(U=>U.openings.push({id:H,kind:T.toLowerCase(),side:B,at:C,w:tt,h:T==="Door"?2:1.1,sill:T==="Door"?0:Math.min(1,(U.room?.height||3)-1.1)}))&&x(H)};return t("#resetStructure").onclick=()=>{n.edit(T=>{let F=n.cloneStructure();for(let k of Object.keys(T))delete T[k];Object.assign(T,F)}),x("floor"),n.toast("Structure reset. Undo is available.")},n.renderer.domElement.addEventListener("pointerdown",T=>{if(n.getMode()!=="build"||T.button!==0||n.getMeasure())return;if(s){T.stopImmediatePropagation(),T.preventDefault(),n.controls.enabled=!1,n.renderer.domElement.setPointerCapture(T.pointerId);return}let F=A(T);if(!F)return;x(F.id);let k=n.pointAt(T),B=d();if(!k)return;let $=B.openings.find(L=>L.id===r)||B.partitions.find(L=>L.id===r),H=Ue.find(L=>r===L+"-wall");if(!$&&!H)return;let tt=$&&!$.kind?$:k;a={id:r,pointer:T.pointerId,x:T.clientX,y:T.clientY,offsetX:tt.x-k.x,offsetZ:tt.z-k.z,before:JSON.stringify(u()),started:!1},n.controls.enabled=!1,n.renderer.domElement.setPointerCapture(T.pointerId)},!0),n.renderer.domElement.addEventListener("pointermove",T=>{if(n.getMode()!=="build")return;if(s==="draw"&&o){let k=N(T);k&&(m([o,k]),t("#buildToolText").textContent=`Wall length ${Math.hypot(k.x-o.x,k.z-o.z).toFixed(2)} m \xB7 click to finish`)}if(s==="split"){let k=O(T);if(k){let B=ae(d(),k.side),$=n.getSnap()?.1:.01,H=Math.round(k.at/$)*$;m([{x:B.axis==="x"?H:B.fixed,z:B.axis==="x"?B.fixed:H},{x:B.axis==="x"?H:B.fixed,z:B.axis==="x"?B.fixed:H,y:yt+3.12}])}}if(!a||T.pointerId!==a.pointer)return;if(!a.started){if(Math.hypot(T.clientX-a.x,T.clientY-a.y)<5)return;n.checkpoint(),a.started=!0}let F=n.pointAt(T);F&&(n.moveStructure(a.id,F.x+a.offsetX,F.z+a.offsetZ),performance.now()-c>85&&(n.rebuildStructure(),c=performance.now()))}),n.renderer.domElement.addEventListener("pointerup",T=>{if(n.getMode()==="build"){if(s){if(T.stopImmediatePropagation(),T.preventDefault(),n.controls.enabled=!0,s==="split"){let F=O(T);F?w(F.side,F.at):n.toast("Click an exterior wall, or enter a precise split in its inspector.")}else{let F=N(T);if(!F)return;if(!o)o=F,t("#buildToolText").textContent="Start set. Click the end of the new wall.";else{let k=Math.hypot(F.x-o.x,F.z-o.z);if(k<.25||k>6){n.toast("Draw a wall between 0.25 and 6 m long.");return}let B=o,$=ra();n.edit(H=>H.partitions.push({id:$,x:(B.x+F.x)/2,z:(B.z+F.z)/2,w:k,d:.15,h:H.room?.height||3,rot:-Math.atan2(F.z-B.z,F.x-B.x),color:H.colors.wall}))&&x($)}}return}a&&T.pointerId===a.pointer&&(a.started&&(u().preset="custom",n.finishDrag(a.before)),a=null,n.controls.enabled=!0)}},!0),n.renderer.domElement.addEventListener("pointercancel",()=>{a?.started&&n.finishDrag(a.before,!0),a=null,n.controls.enabled=!0}),window.addEventListener("keydown",T=>{T.key==="Escape"&&s&&(_(),z())}),{render:z,cancelTool:_,select:x}}function Np(n,t="right"){let e=Zn.find(r=>r.id===n),i="";if(e.shape==="spiral")i='<ellipse cx="58" cy="60" rx="27" ry="10"/><path d="M58 15v54M35 55q45-12 3-20q38-13 2-20M39 20l37 6M37 36l39 7M35 53l41 7"/>';else if(e.shape==="ladder")i='<path d="M38 70 53 14M62 70 77 14M42 58h24M45 46h24M48 34h24M51 22h24"/>';else if(e.shape==="turn")i='<path d="M25 70V40h27V20h39M25 61h27M25 51h27M52 40h14V20M66 40h13V20M79 40h12V20"/>';else{for(let r=0;r<6;r++){let s=27+r*7,o=67-r*8;i+=`<path d="M${s} ${o}h28v5h-28z"/>`}e.shape!=="floating"&&(i+='<path d="M26 54 63 12M53 58 91 17"/>'),e.shape==="paddle"&&(i+='<path d="M42 61 65 14"/>')}return`<svg viewBox="0 0 116 82" aria-hidden="true"><g transform="${n==="turn"&&t==="left"?"translate(116 0) scale(-1 1)":""}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</g></svg>`}function Fp(n){let{$:t,$$:e,escapeHTML:i}=n,r="timber",s="right",o=null,a=(u,d,f,p,g,x=.1)=>`<label class="field-label">${d}<input data-stair-field="${u}" type="number" min="${p}" max="${g}" step="${x}" value="${Number(f).toFixed(2)}"></label>`;function c(u){o=u,n.currentFloor(),h(),t("#connectionEditor").scrollIntoView?.({block:"nearest",behavior:"smooth"})}function l(u,d){n.editProject(f=>{let p=f.stairs.find(x=>x.id===u);d(p);let g=sr(f,p);if(g)throw new Error(g)})}function h(){let u=n.getState(),d=Rn(u),f=u.activeFloorId||d[0].id;t("#floorTabs").innerHTML=d.map((_,v)=>`<button data-floor="${_.id}" class="${_.id===f&&!n.isOverview()?"active":""}" aria-pressed="${_.id===f&&!n.isOverview()}"><span>${v+1}</span>${i(_.name)}</button>`).join(""),e("[data-floor]").forEach(_=>_.onclick=()=>n.switchFloor(_.dataset.floor)),t("#wholeHouseBtn").hidden=d.length<2,t("#wholeHouseBtn").classList.toggle("active",n.isOverview()),t("#wholeHouseBtn").textContent=n.isOverview()?"\u2190 Edit this floor":"View whole house",t("#floorCount").textContent=`${d.length} / ${Vr} FLOORS`,t("#stairStyles").innerHTML=Zn.map(_=>`<button class="stair-card ${_.id===r?"active":""}" data-stair-style="${_.id}" aria-pressed="${_.id===r}" title="${i(_.detail)}">${Np(_.id,s)}<b>${_.name}</b><small>${_.w.toFixed(2)} \xD7 ${_.run.toFixed(2)} m</small></button>`).join(""),e("[data-stair-style]").forEach(_=>_.onclick=()=>{r=_.dataset.stairStyle,h()}),t("#newStairTurn").hidden=r!=="turn",e("[data-new-stair-turn]").forEach(_=>{_.classList.toggle("active",_.dataset.newStairTurn===s),_.setAttribute("aria-pressed",String(_.dataset.newStairTurn===s)),_.onclick=()=>{s=_.dataset.newStairTurn,h()}}),t("#addFloorBtn").disabled=d.length>=Vr,t("#addFloorBtn").textContent=d.length>=Vr?"Four floors added":`+ Add floor ${d.length+1} with this style`,t("#floorName").value=d.find(_=>_.id===f)?.name||"Ground floor";let p=(u.stairs||[]).filter(_=>_.from===f||_.to===f);p.some(_=>_.id===o)||(o=p[0]?.id||null),t("#connectionsList").innerHTML=p.map(_=>{let v=d.find(A=>A.id===_.from),E=d.find(A=>A.id===_.to);return`<button data-connection="${_.id}" class="${_.id===o?"active":""}"><b>${i(Zn.find(A=>A.id===_.style).name)}${_.style==="turn"?" \xB7 turns "+(_.turn||"right"):""}</b><small>${i(v.name)} \u2192 ${i(E.name)}</small></button>`}).join(""),e("[data-connection]").forEach(_=>_.onclick=()=>c(_.dataset.connection));let g=p.find(_=>_.id===o);if(t("#connectionEditor").hidden=!g,t("#removeFloorBtn").hidden=d.length<2,!g)return;let x=Gs(u),m=x.find(_=>_.id===g.from),M=x.find(_=>_.id===g.to);t("#connectionEditor").innerHTML=`<h3>Move & resize connection</h3><p class="small-note">An opening is cut in the upper floor automatically. Rotate or move the connection to fit your layout.</p><label class="field-label">Style<select id="connectionStyle">${Zn.map(_=>`<option value="${_.id}" ${g.style===_.id?"selected":""}>${_.name}</option>`).join("")}</select></label>${g.style==="turn"?`<fieldset class="stair-turn-choice"><legend>Turn as you go upstairs</legend><div>${["left","right"].map(_=>`<button class="${(g.turn||"right")===_?"active":""}" data-connection-turn="${_}" aria-pressed="${(g.turn||"right")===_}">${Np("turn",_)}<span>Turn ${_}</span></button>`).join("")}</div><p class="small-note">Mirror the L shape. Use Direction below to rotate the whole staircase.</p></fieldset>`:""}<div class="row">${a("x","Left / right \xB7 m",g.x,-5.5,5.5)}${a("z","Back / front \xB7 m",g.z,-5.5,5.5)}</div><div class="row">${a("w","Width \xB7 m",g.w,.5,3,.05)}${a("run","Floor space \xB7 m",g.run,.4,5,.05)}</div><label class="field-label">Direction<select id="connectionRotation">${[0,90,180,270].map(_=>`<option value="${_}" ${Math.round(g.rot*180/Math.PI)%360===_?"selected":""}>${_}\xB0</option>`).join("")}</select></label><label class="field-label">Color<input type="color" id="connectionColor" value="${g.color}"></label><div class="stair-nudge" aria-label="Move connection 10 centimetres"><button data-stair-nudge="0,-0.1" aria-label="Move toward back">\u2191</button><button data-stair-nudge="-0.1,0" aria-label="Move left">\u2190</button><span>Move 10 cm</span><button data-stair-nudge="0.1,0" aria-label="Move right">\u2192</button><button data-stair-nudge="0,0.1" aria-label="Move toward front">\u2193</button></div><p class="small-note">Connects ${i(m.name)} to ${i(M.name)} \xB7 ${(M.elevation-m.elevation).toFixed(2)} m rise. Switch floors to furnish each room. Blocky explores the selected floor.</p>`,e("[data-stair-field]").forEach(_=>_.onchange=()=>{let v=Number(_.value);if(!Number.isFinite(v)){n.toast("Enter a size in metres."),h();return}l(g.id,E=>E[_.dataset.stairField]=v)}),t("#connectionStyle").onchange=_=>{let v=Zn.find(E=>E.id===_.target.value);n.editProject(E=>{let A=E.stairs.find(N=>N.id===g.id);if(Object.assign(A,{style:v.id,w:v.w,run:v.run,color:v.color,...v.id==="turn"?{turn:A.turn||s}:{}}),sr(E,A)){let N=na({...E,stairs:E.stairs.filter(O=>O.id!==A.id)},A.from,A.to,v.id,{dimensions:A.turn?{turn:A.turn}:{}});Object.assign(A,N,{id:g.id})}})},t("#connectionRotation").onchange=_=>n.editProject(v=>{let E=v.stairs.find(A=>A.id===g.id);if(E.rot=Number(_.target.value)*Math.PI/180,sr(v,E)){let A=na({...v,stairs:v.stairs.filter(N=>N.id!==E.id)},E.from,E.to,E.style,{rotations:[E.rot],dimensions:{w:E.w,run:E.run,color:E.color,...E.turn?{turn:E.turn}:{}}});Object.assign(E,A,{id:g.id})}}),e("[data-connection-turn]").forEach(_=>_.onclick=()=>n.editProject(v=>{let E=v.stairs.find(A=>A.id===g.id);if(E.turn=_.dataset.connectionTurn,sr(v,E)){let A=na({...v,stairs:v.stairs.filter(N=>N.id!==E.id)},E.from,E.to,E.style,{rotations:[E.rot],dimensions:{w:E.w,run:E.run,color:E.color,turn:E.turn}});Object.assign(E,A,{id:g.id})}})),t("#connectionColor").onchange=_=>l(g.id,v=>v.color=_.target.value),e("[data-stair-nudge]").forEach(_=>_.onclick=()=>{let[v,E]=_.dataset.stairNudge.split(",").map(Number);l(g.id,A=>{A.x=Math.round((A.x+v)*100)/100,A.z=Math.round((A.z+E)*100)/100})})}return t("#addFloorBtn").onclick=()=>{let u;n.editProject(f=>{u=Mp(f,r,t("#copyFloorWalls").checked,s)})&&(o=u.id,n.switchFloor(n.getState().activeFloorId),n.toast("New floor added. Use the floor tabs to move between rooms."),h())},t("#removeFloorBtn").onclick=()=>n.editProject(u=>wp(u)),t("#floorName").onchange=u=>{let d=u.target.value.trim();if(!d){h();return}n.editProject(f=>{let p=f.activeFloorId||"floor-1";f.floors.find(g=>g.id===p).name=d.slice(0,40)})},t("#wholeHouseBtn").onclick=()=>n.toggleOverview(),{render:h,selectConnection:c}}var J=n=>document.querySelector(n),De=n=>[...document.querySelectorAll(n)],$r=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);Ap();var Op;function le(n){J("#toast").textContent=n,J("#toast").classList.add("show"),clearTimeout(Op),Op=setTimeout(()=>J("#toast").classList.remove("show"),4200)}var Dv=!0;function Hp(n,t){try{return JSON.parse(localStorage.getItem(n))??t}catch{return t}}function Hu(n,t){try{return localStorage.setItem(n,JSON.stringify(t)),!0}catch{return Dv=!1,J("#saveStatus").textContent="Export JSON to save",!1}}var rt=Mn(Su()),Gp=!0;try{let n=Hp("house-studio-autosave-v1",null);n&&(rt=Mn(n),Gp=!1)}catch{}rt.structure||(rt.structure=Wr());var Je="explore",Ne=null,Li=!0,we="cutaway",dn=!1,Oc="day",Ii=!1,Wp=!1,ca=!1,hr=[],ha=[],ur=new Map,Ln=null,Kn=null,di=null,Xp="iso",Jt=!1,jr=null,Xr=[],Oe=new Ts;Oe.background=new Gt("#e7ede3");Oe.fog=new Mo("#e7ede3",26,65);var Bc=J("#canvasHost"),Re;try{Re=new ta({antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch(n){throw J("#loading").innerHTML="<b>3D rendering is unavailable.</b><small>Use Chrome or Edge with hardware acceleration enabled.</small><small>Your saved layouts have not been changed.</small>",n}Re.setPixelRatio(Math.min(devicePixelRatio,1.65));Re.shadowMap.enabled=!0;Re.shadowMap.type=Ml;Re.toneMapping=$o;Re.toneMappingExposure=1.12;Re.outputColorSpace=He;Bc.append(Re.domElement);Re.domElement.setAttribute("aria-label","House scene. Use mouse to orbit and zoom; select furniture in Decorate.");var qr=new Ge(39,1,.05,180),Pi=new Rr(-7,7,7,-7,.05,100),Ze=qr;qr.position.set(8.2,9.4,12.7);var xe=new yc(Ze,Re.domElement);xe.target.set(-.58,.65,-.15);xe.enableDamping=!0;xe.dampingFactor=.1;xe.minDistance=2;xe.maxDistance=28;xe.maxPolarAngle=Math.PI*.485;xe.enablePan=!0;xe.zoomToCursor=!0;var $p=new Ls("#f5faf1","#828d70",2.2);Oe.add($p);var jn=new Ir("#fff3d8",3.2);jn.position.set(-6,10,8);jn.castShadow=!0;jn.shadow.mapSize.set(2048,2048);Object.assign(jn.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40});jn.shadow.normalBias=.035;jn.shadow.bias=-1e-4;jn.shadow.radius=4;Oe.add(jn);var qp=new Ir("#dcebea",.55);qp.position.set(6,4,-4);Oe.add(qp);function kc(n=rt.activeFloorId||"floor-1",t=!0){let e=Rn(rt),i=(rt.stairs||[]).map(r=>({...r,rise:ir(e.find(s=>s.id===r.from))+.2}));return{incoming:i.filter(r=>r.to===n),outgoing:i.filter(r=>r.from===n),showIncoming:t}}var fn=Nc(Oe,rt.structure,kc()),Ys=new Tt;Oe.add(Ys);var he=Tp(Oe);he.root.visible=!1;var da=new Tt;da.visible=!1;Oe.add(da);var Yp=()=>JSON.stringify([rt.structure,rt.activeFloorId,rt.stairs,Rn(rt).map(n=>ir(n))]),Bp=Yp(),dr=new Go(12,120,"#9baea0","#c4cfc0");dr.position.y=yt+.008;dr.material.transparent=!0;dr.material.opacity=.18;dr.visible=!1;Oe.add(dr);var qs=new Wo(new Vn,4947297);Oe.add(qs);qs.visible=!1;var cr=new Tt,Qn=new Tt,$s=new Tt,Zs=new Tt;Oe.add(cr,Qn,$s,Zs);Qn.visible=!1;Zs.visible=!1;var Yt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},fa=()=>({x:he.root.position.x,z:he.root.position.z}),Yr=1.7;function Gu(){for(let n of ur.values())Ys.remove(n),aa(n);ur.clear();for(let n of rt.items){let t=oa(n);ur.set(n.id,t),Ys.add(t)}Ui(),Xu()}function Zp(){let n=Yp();n!==Bp&&(Bp=n,ku(Oe,fn),fn=Nc(Oe,rt.structure,kc()),Un(),Zu(),fn.garden.visible=!Jt&&J("#gardenToggle").checked,fn.base.material.color.set(Oe.background),im(),Xc())}function Wu(){bn(rt),Hu("house-studio-autosave-v1",rt)&&(J("#saveStatus").textContent="Saved on this device")}function pn(){bn(rt),hr.push(JSON.stringify(rt)),hr.length>45&&hr.shift(),ha=[],zc()}function zc(){J("#undoBtn").disabled=!hr.length,J("#redoBtn").disabled=!ha.length}function $e(n=!0){rt.structure||(rt.structure=Wr()),bn(rt),Zp(),n?Gu():(Ui(),Xu()),Jt?jp():Xr.length&&qu(),Un(),Xc(),jr?.render(),Wu(),zc(),Ne&&Js(),J("#pathResults").innerHTML="",ti(!1)}function Jp(){hr.length&&(bn(rt),ha.push(JSON.stringify(rt)),rt=JSON.parse(hr.pop()),rt.structure||(rt.structure=Wr()),Ne=null,Jt=!1,$e(),le("Change undone."))}function Vu(){ha.length&&(bn(rt),hr.push(JSON.stringify(rt)),rt=JSON.parse(ha.pop()),rt.structure||(rt.structure=Wr()),Ne=null,Jt=!1,$e(),le("Change restored."))}function Xu(){let n=rt.structure,t=n.room?.kind==="video-bedroom",e=n.room?.kind==="custom-room",i=t&&n.room.estimated;J("#layoutLabel").textContent=rt.name,J("#sceneSubline").textContent=e?`${Rn(rt).find(r=>r.id===rt.activeFloorId)?.name||"Ground floor"} \xB7 ${rt.items.length} ${rt.items.length===1?"item":"items"}`:Hr.find(r=>r.id===rt.preset)?.description||(t?"Your room. Your arrangement.":"Your furniture. Your arrangement."),J("#mainDimensions").textContent=`${(n.bounds.right-n.bounds.left).toFixed(2)} \xD7 ${(n.bounds.front-n.bounds.back).toFixed(2)}`,J("#primaryDimensionLabel").textContent=n.room?"room \xB7 metres":"main house \xB7 metres",J("#houseFactsTitle").textContent=n.room?"This room":"The house",J("#bathDimensions").textContent=n.room?`${n.room.height.toFixed(2)} m`:`${n.bathroom.w.toFixed(2)} \xD7 ${n.bathroom.d.toFixed(2)}`,J("#secondaryDimensionLabel").textContent=n.room?i?"ceiling \xB7 estimated":"ceiling height":"bath extension \xB7 metres",J("#balconyDimensions").textContent=n.balcony.enabled===!1?"Not in this room":`${(n.bounds.right-n.bounds.left).toFixed(2)} \xD7 ${n.balcony.depth.toFixed(2)} m`,J("#roofWallHeight").textContent=n.room?`${n.room.height.toFixed(2)} m${t?" \xB7 loft ceiling":""}`:"3.84 / 3.00 m",J("#bathroomFact").textContent=n.bathroom.enabled===!1?"None added":"Attached extension",J("#roomEstimate").hidden=!i,J("#roomEstimate").textContent="Estimated from your video \xB7 enter measured room sizes in Build",J("#gardenToggle").disabled=!!n.room,J("#standardAssumptions").hidden=!!n.room,J("#videoAssumptions").hidden=!t,J("#designerReferences").hidden=!!n.room,J("#customAssumptions").hidden=!e;for(let r of["bathroom","balcony"])J(`[data-action="${r}"]`).disabled=r==="bathroom"?n.bathroom.enabled===!1:n.balcony.enabled===!1;J('[data-action="entrance"]').lastChild.textContent=t?"Stair landing":"Front door",De("[data-preset]").forEach(r=>r.classList.toggle("active",r.dataset.preset===rt.preset))}function Kp(n){Hr.some(t=>t.id===n)&&(pn(),Jt=!1,rt=Ru(n),Ne=null,$e(),ju(),Di("iso"),Yu(Oc),le(n==="my-two-floor-room"?"Your two-floor layout loaded. Use the floor tabs to explore it.":"Your supplied room restored. Undo is available."))}function $u(n){Jt&&Qr(),Kr.cancelTool(),Je=n,document.body.classList.remove("mode-explore","mode-build","mode-decorate","mode-simulate"),document.body.classList.add("mode-"+n),De("[data-mode]").forEach(t=>t.classList.toggle("active",t.dataset.mode===n));for(let t of["explore","build","decorate","simulate"])J("#"+t+"Panel").hidden=t!==n;dr.visible=n==="decorate"&&Li,Zs.visible=n==="decorate",he.root.visible=n==="simulate",n!=="decorate"&&(Ne=null,Js(),Ui()),n==="build"&&(dn=!1,Un(),Xc()),n==="decorate"&&(dn=!1,Un(),Ju()),n==="simulate"?(dn=!1,Un(),Jr()):ti(!1),J("#inputHint").textContent=n==="build"?"Choose a room size \xB7 click a wall to edit \xB7 draw a divider in Plan":n==="decorate"?"Click + to add \xB7 drag to move \xB7 select an item to resize":n==="simulate"?"Click the floor to walk \xB7 Drag empty space to orbit \xB7 Scroll to zoom":"Drag to look around \xB7 Scroll to zoom \xB7 Choose Build when you are ready"}function Uv(n){try{let t=JSON.parse(JSON.stringify(bn(rt)));Sc(t),n(t),bn(t);let e=Mn(t);return pn(),rt=e,Jt=!1,Ne=null,Kr.cancelTool(),$e(),!0}catch(t){return le(t.message),jr?.render(),!1}}function Nv(n){if(Kr.cancelTool(),!rt.floors&&n==="floor-1"){Qr();return}Tc(rt,n),Jt=!1,Ne=null,$e(),ju(),Di("iso"),Kr.select("floor")}function Qr(){Jt=!1,qu(),Un(),Xu(),Ui(),jr?.render(),Di("iso")}function qu(){for(let n of Xr)ku(n.group,n.house),n.furniture.traverse(t=>{t.userData.itemId&&aa(t)}),da.remove(n.group);Xr=[]}function jp(){qu(),bn(rt);for(let t of Gs(rt)){let e=new Tt;e.position.y=t.elevation,da.add(e);let i=Nc(e,t.structure,kc(t.id,!1));i.base.visible=!1,i.garden.visible=!1;let r=new Tt;e.add(r);for(let s of t.items)r.add(oa(s));Xr.push({group:e,house:i,furniture:r,floor:t})}let n=kc();or(rt.structure,{holes:n.incoming.map(t=>Yn(t)),connections:n.outgoing.map(t=>Yn(t)),landings:[...n.incoming.map(t=>rr(t,!0)),...n.outgoing.map(t=>rr(t,!1))]})}function Fv(){if(Jt){Qr();return}Kr.cancelTool(),Ne=null,ti(!1),Jt=!0,jp(),Un(),Ui(),jr?.render(),Di("iso")}function Vc(){let n=Bc.clientWidth,t=Bc.clientHeight;if(!n||!t)return;Re.setSize(n,t),qr.aspect=n/t,qr.updateProjectionMatrix();let e=rt.structure.bounds,i=Math.max(e.right-e.left,e.front-e.back),r=Gs(rt),s=Jt?r.at(-1).elevation+ir(r.at(-1)):0,o=Jt?Math.max(i*.75,s*.65):rt.structure.room?i*.72:6.15;Pi.left=-o*n/t,Pi.right=o*n/t,Pi.top=o,Pi.bottom=-o,Pi.updateProjectionMatrix()}new ResizeObserver(Vc).observe(Bc);function Di(n){ca=!1,Xp=n,De("[data-view]").forEach(a=>a.classList.toggle("active",a.dataset.view===n)),J("#cameraTourBtn").innerHTML=Ri("play");let t=!!rt.structure.room,e=rt.structure.bounds,i=Math.max(e.right-e.left,e.front-e.back),r=Gs(rt),s=Jt?r.at(-1).elevation+ir(r.at(-1)):0,o=new P(t?(e.left+e.right)/2:-.6,Jt?s*.46:t?.85:.6,t?(e.back+e.front)/2:-.18);if(n==="top")Ze=Pi,Ze.position.set(o.x,Math.max(18,s+12),o.z+.001),Ze.up.set(0,0,-1),Ze.lookAt(o),xe.object=Ze,xe.target.copy(o),xe.enableRotate=!1,Pi.zoom=1,Pi.updateProjectionMatrix(),dn=!1,we="hidden",J("#wallSelect").value=we,Un(),di=null;else{Ze=qr,xe.object=Ze,xe.enableRotate=!0,Ze.up.set(0,1,0);let a={iso:Jt?[i*.95,s+i*.65,i*1.8]:t?[i*.36,i*1.4,i*1.9]:[8.2,9.4,12.7],front:Jt?[0,s*.6,i*3]:t?[0,2.5,i*2.4]:[0,2.5,12],back:Jt?[0,s*.6,-i*3]:[0,3,-12]};di={from:Ze.position.clone(),to:new P(...a[n]),targetFrom:xe.target.clone(),targetTo:o,t:0},n==="front"||n==="back"?(we="full",dn=!0):(we="cutaway",dn=!1),Un()}Vc(),xe.maxDistance=Jt?55:28,xe.update()}function kp(n,t,e){n.full.visible=n.cut.visible=!0;let i=t.wallVisibility;n.structure.traverse(r=>{r.userData.wallSide&&(r.visible=we==="full"||we==="cutaway"&&i[r.userData.wallSide]==="full")});for(let[r,s]of Object.entries(n.wallGroups)){let o=we==="full"?"full":we==="hidden"?"hidden":i[r]||"low";s.full.visible=o==="full",s.low.visible=o==="low"}n.roof.visible=e,n.doors.visible=we!=="hidden";for(let r of t.openings){let s=we==="full"?"full":we==="hidden"?"hidden":i[r.side]||"low";n.openingMeshes[r.id]&&(n.openingMeshes[r.id].visible=s!=="hidden")}n.lightsGroup.visible=we==="full"}function Un(){kp(fn,rt.structure,dn);for(let n of["structure","full","cut","roof","garden","doors","lightsGroup"])fn[n].visible=fn[n].visible&&!Jt;fn.structure.visible=!Jt,fn.garden.visible=!Jt&&J("#gardenToggle").checked&&!rt.structure.room,Ys.visible=!Jt,da.visible=Jt;for(let n=0;n<Xr.length;n++){let t=Xr[n];kp(t.house,t.floor.structure,dn&&n===Xr.length-1)}dr.visible=!Jt&&Je==="decorate"&&Li,he.root.visible=!Jt&&Je==="simulate",qs.visible=!Jt&&!!Ne&&Je==="decorate",Qn.visible=Qn.visible&&!Jt,Zs.visible=!Jt&&Je==="decorate",J("#overviewBanner").hidden=!Jt,J("#roofBtn span").textContent=rt.structure.room?dn?"Ceiling on":"Ceiling off":dn?"Roof on":"Roof off",J("#roofBtn").classList.toggle("active",dn),J("#viewLabel").textContent=Jt?"WHOLE HOUSE":Xp==="top"?"FLOOR PLAN":we==="full"?"EXTERIOR":we==="hidden"?"OPEN PLAN":"CUTAWAY",Jt&&(J("#sceneSubline").textContent=`${Rn(rt).length} floors \xB7 choose a floor to edit`),J("#wallSelect").value=we,Ov()}function Ov(){let n=rt.structure,t=[...$n.filter(e=>(n.bathroom.enabled!==!1||!e.startsWith("bath-"))&&e!==er(n)).map(e=>({key:e,label:e.startsWith("bath-")?"Bath \xB7 "+tr[e.slice(5)]:tr[e]+" wall"})),...n.partitions.map((e,i)=>({key:e.id,label:"Interior wall "+(i+1)}))];J("#wallVisibilityRows").innerHTML=t.map(({key:e,label:i})=>{let r=we==="full"?"full":we==="hidden"?"hidden":n.wallVisibility[e]||"low";return`<label>${i}<select data-wall-visibility="${$r(e)}" aria-label="${$r(i)} visibility">${[["full","Keep full"],["low","Low wall"],["hidden","Hide"]].map(([s,o])=>`<option value="${s}" ${r===s?"selected":""}>${o}</option>`).join("")}</select></label>`}).join(""),De("[data-wall-visibility]").forEach(e=>e.onchange=()=>{let i=we,r=e.value,s=e.dataset.wallVisibility;we="cutaway",nd(o=>{if(i!=="cutaway")for(let a of t)o.wallVisibility[a.key]=i==="full"?"full":"hidden";o.wallVisibility[s]=r})})}function Yu(n){Oc=n;let e={...{day:{bg:"#e7ede3",sun:"#fff3dc",intensity:3.2,hemi:2.2,pos:[-6,10,8],exposure:1.12},sunset:{bg:"#decbb4",sun:"#ffb56c",intensity:3,hemi:1.35,pos:[-9,3.4,5],exposure:1.12},night:{bg:"#1a2e32",sun:"#b9cee3",intensity:.6,hemi:.55,pos:[5,8,-7],exposure:1.15}}[n],...rt.structure.room&&n==="day"?{pos:[6,9,-2],sun:"#fff4dc",hemi:2.35}:{}};Oe.background.set(e.bg),Oe.fog.color.set(e.bg),fn.base.material.color.set(e.bg),jn.color.set(e.sun),jn.intensity=e.intensity,jn.position.set(...e.pos),$p.intensity=e.hemi,Re.toneMappingExposure=e.exposure,document.body.classList.toggle("night",n==="night"),De("[data-light]").forEach(i=>i.classList.toggle("active",i.dataset.light===n)),Zu()}function Zu(){fn.lights.forEach(n=>n.intensity=J("#lightsToggle").checked?Oc==="night"?7:Oc==="sunset"?4:1.3:0)}var zu=new Map,ar;function Bv(n){if(zu.has(n))return zu.get(n);try{ar||(ar=new ta({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),ar.setSize(240,170),ar.setPixelRatio(1),ar.toneMapping=$o,ar.toneMappingExposure=1.25);let t=new Ts;t.background=new Gt("#edf1e9"),t.add(new Ls("#fff8e9","#b0b7a1",2.7));let e=new Ir("#fff5de",3);e.position.set(-3,5,4),t.add(e);let i=Cu(n,0,0),r=oa(i);r.position.set(0,0,0),t.add(r);let s=new Vn().setFromObject(r),o=s.getCenter(new P),a=s.getSize(new P),c=Math.max(a.x,a.y,a.z),l=new Ge(37,240/170,.01,100);l.position.copy(o).add(new P(1.5,1.25,1.8).multiplyScalar(c*.83)),l.lookAt(o),ar.render(t,l);let h=ar.domElement.toDataURL();return zu.set(n,h),aa(r),h}catch{return""}}function kv(){J("#presetCards").innerHTML=Hr.map(n=>`<button class="preset-card ${rt.preset===n.id?"active":""}" data-preset="${n.id}"><img alt="Floor plan of ${$r(n.name)}" src="${n.image}"><span><b>${n.name}</b><small>${n.subtitle}</small></span></button>`).join(""),De("[data-preset]").forEach(n=>n.onclick=()=>Kp(n.dataset.preset))}var Fc="All",zv=["All",...new Set(Rc.map(n=>n.cat))];function Ju(){let n=J("#searchInput").value.toLowerCase(),t=Rc.filter(e=>(Fc==="All"||e.cat===Fc)&&(e.name+" "+(e.keywords||"")).toLowerCase().includes(n));J("#catalogCount").textContent=`${t.length} ITEMS`,J("#categoryTabs").innerHTML=zv.map(e=>`<button class="${e===Fc?"active":""}" data-category="${e}">${e}</button>`).join(""),J("#catalog").innerHTML=t.map(e=>`<button class="catalog-item" data-add="${e.type}"><img alt="" src="${Bv(e.type)}"><span class="add-symbol">+</span><b>${e.name}</b><small>${e.w.toFixed(2)} \xD7 ${e.d.toFixed(2)} m</small></button>`).join("")||'<p class="empty-copy">No matching furniture.</p>',De("[data-add]").forEach(e=>e.onclick=()=>Vv(e.dataset.add)),De("[data-category]").forEach(e=>e.onclick=()=>{Fc=e.dataset.category,Ju()})}function Vv(n){if(Jt&&Qr(),rt.items.length>=180){le("This floor has reached the 180-item limit.");return}pn();let t=rt.structure.bounds,e=Cu(n,0,0),i=!1,r=[];for(let s=t.front-.35;s>t.back+.2;s-=.25)for(let o=t.left+.3;o<t.right-.2;o+=.25)r.push({x:o,z:s});for(let s of r)if(e.x=Math.round(s.x*100)/100,e.z=Math.round(s.z*100)/100,!Ic(e,rt.items).some(o=>!o.startsWith("Loft:"))){i=!0;break}i?le(`${Ce[n].name} added. Drag it to move, or use the size controls.`):(e.x=(t.left+t.right)/2,e.z=(t.back+t.front)/2,le("Room is full. Move or resize items to make space.")),rt.items.push(e),rt.preset="custom",Ne=e.id,$e()}function fi(){return rt.items.find(n=>n.id===Ne)}function Ui(){let n=ur.get(Ne);qs.visible=!Jt&&!!n&&Je==="decorate",n&&(n.updateMatrixWorld(!0),qs.box.setFromObject(n),qs.material.color.set(Ic(fi(),rt.items).some(t=>t.startsWith("Overlaps"))?"#d06c51":"#3f7c59")),J("#inspector").hidden=!n||Je!=="decorate"}function Hc(n){Ne=n,Ui(),Js()}function lr(n){let t=fi();t&&(pn(),n(t),rt.preset="custom",$e())}function Js(){let n=fi(),t=J("#inspector");if(t.hidden=!n||Je!=="decorate",!n)return;let e=Ce[n.type],i=Ic(n,rt.items),r=n.type==="roundTable";t.innerHTML=`<div class="inspector-head"><div><span class="eyebrow">SELECTED OBJECT</span><h3>${e.name}</h3></div><button id="closeInspector" class="icon-btn" aria-label="Deselect">${Ri("close")}</button></div><div class="row"><label class="field-label">Left / right \xB7 m<input id="objectX" type="number" min="-6" max="6" step=".1" value="${n.x.toFixed(2)}"></label><label class="field-label">Back / front \xB7 m<input id="objectZ" type="number" min="-6" max="6" step=".1" value="${n.z.toFixed(2)}"></label></div>${r?`<label class="field-label round-diameter-label">Round tabletop <span id="diameterReadout">${n.w.toFixed(2)} m across</span><input id="roundDiameter" type="range" min=".45" max="4" step=".05" value="${n.w}"></label><div class="row"><label class="field-label">Diameter \xB7 m<input id="tableDiameter" type="number" min=".45" max="4" step=".05" value="${n.w.toFixed(2)}"></label><label class="field-label">Height \xB7 m<input id="objectH" type="number" min=".1" max="3" step=".05" value="${n.h.toFixed(2)}"></label></div><p class="small-note">Drag to make the circular top smaller or bigger. The base and height stay proportionate.</p>`:`<div class="row"><label class="field-label">Width<input id="objectW" type="number" min=".1" max="4" step=".05" value="${n.w.toFixed(2)}"></label><label class="field-label">Depth<input id="objectD" type="number" min=".1" max="4" step=".05" value="${n.d.toFixed(2)}"></label><label class="field-label">Height<input id="objectH" type="number" min=".01" max="3" step=".05" value="${n.h.toFixed(2)}"></label></div>`}<label class="field-label">Rotation \xB7 degrees<input id="objectRotation" type="number" step="15" value="${Math.round(n.rot*180/Math.PI)}"></label><div class="swatches">${["#d9d7c8","#c6ac83","#a7b7a0","#425956","#343b3b","#d7a681","#eeeeea"].map(s=>`<button class="${n.color===s?"active":""}" style="background:${s}" data-color="${s}" title="Colour ${s}" aria-label="Colour ${s}"></button>`).join("")}<input id="customColor" type="color" value="${n.color}" aria-label="Custom colour" style="width:27px;height:27px;border:0;padding:0"></div>${e.kind==="sofabed"?`<button id="sofaToggle" class="btn wide secondary">${n.open?"Fold into sofa":"Unfold into bed"}</button>`:""}<div class="button-row"><button id="rotateObject" class="btn secondary" title="Rotate 90 degrees">${Ri("rotate")}90\xB0</button><button id="duplicateObject" class="icon-btn" title="Duplicate" aria-label="Duplicate">${Ri("copy")}</button><button id="deleteObject" class="icon-btn danger" title="Delete" aria-label="Delete">${Ri("trash")}</button></div>${i.length?i.map(s=>`<p class="warning">${s}</p>`).join(""):'<p class="good">\u2713 No object or wall overlap detected.</p>'}<p>Dimensions include the model frame. Resize to match your actual furniture. Arrow keys nudge by ${Li?"10":"2"} cm.</p>`,J("#closeInspector").onclick=()=>Hc(null);for(let[s,o,a,c]of[["objectX","x",-6,6],["objectZ","z",-6,6],["objectW","w",.1,4],["objectD","d",.1,4],["objectH","h",.01,3]])J("#"+s)&&(J("#"+s).onchange=l=>{let h=Number(l.target.value);if(!Number.isFinite(h)||h<a||h>c){le(`Use a value from ${a} to ${c}.`),Js();return}lr(u=>u[o]=h)});if(J("#objectRotation").onchange=s=>{let o=Number(s.target.value);Number.isFinite(o)&&lr(a=>a.rot=(o%360+360)%360*Math.PI/180)},De("[data-color]").forEach(s=>s.onclick=()=>lr(o=>o.color=s.dataset.color)),J("#customColor").onchange=s=>lr(o=>o.color=s.target.value),J("#rotateObject").onclick=()=>Qp(),J("#duplicateObject").onclick=Hv,J("#deleteObject").onclick=tm,J("#sofaToggle")&&(J("#sofaToggle").onclick=()=>lr(s=>s.open=!s.open)),r){J("#tableDiameter").onchange=o=>{let a=Number(o.target.value);if(!Number.isFinite(a)||a<.45||a>4){le("Use a diameter from 0.45 to 4 metres."),Js();return}lr(c=>c.w=c.d=a)};let s=!1;J("#roundDiameter").oninput=o=>{s||(pn(),s=!0);let a=Number(o.target.value);n.w=n.d=a;let c=ur.get(n.id);Ys.remove(c),aa(c);let l=oa(n);ur.set(n.id,l),Ys.add(l),Ui(),J("#diameterReadout").textContent=a.toFixed(2)+" m across",J("#tableDiameter").value=a.toFixed(2)},J("#roundDiameter").onchange=()=>{s=!1,rt.preset="custom",$e(!1)}}}function Qp(){lr(n=>n.rot=(n.rot+Math.PI/2)%(Math.PI*2))}function Hv(){if(!fi()||rt.items.length>=180)return;pn();let n={...fi(),id:ra(),x:Math.min(6,fi().x+.35),z:Math.min(6,fi().z+.35)};rt.items.push(n),Ne=n.id,$e(),le("Duplicated. Move the new item into place.")}function tm(){Ne&&(pn(),rt.items=rt.items.filter(n=>n.id!==Ne),Ne=null,$e(),le("Object removed. Undo is available."))}var Gc=new Ho,zp=new dt,Gv=new ln(new P(0,1,0),-yt),Wv=new P;function Ku(n){let t=Re.domElement.getBoundingClientRect();zp.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),Gc.setFromCamera(zp,Ze)}function Wc(n){return Ku(n),Gc.ray.intersectPlane(Gv,Wv)?.clone()}function em(n){Ku(n);let t=Gc.intersectObjects([...ur.values()],!0);for(let e of t){let i=e.object;for(;i&&!i.userData.itemId;)i=i.parent;if(i)return i.userData.itemId}return null}Re.domElement.addEventListener("pointerdown",n=>{if(!(n.button!==0||Jt)&&(Kn={x:n.clientX,y:n.clientY,id:n.pointerId},!Jt&&Je==="decorate"&&!Ii)){let t=em(n);if(t){Hc(t);let e=Wc(n),i=fi();e&&(Ln={id:t,dx:i.x-e.x,dz:i.z-e.z,started:!1},xe.enabled=!1,Re.domElement.setPointerCapture(n.pointerId));return}}},!0);Re.domElement.addEventListener("pointermove",n=>{if(!Ln||!Kn||Math.hypot(n.clientX-Kn.x,n.clientY-Kn.y)<4&&!Ln.started)return;Ln.started||(pn(),Ln.started=!0,ti(!1));let t=Wc(n),e=fi();if(!t||!e)return;let i=Li?.1:.01;e.x=Math.max(-6,Math.min(6,Math.round((t.x+Ln.dx)/i)*i)),e.z=Math.max(-6,Math.min(6,Math.round((t.z+Ln.dz)/i)*i)),ur.get(e.id).position.set(e.x,Ye(e.x,e.z)+.015,e.z),Ui()});Re.domElement.addEventListener("pointerup",n=>{if(n.button!==0||Jt)return;let t=Kn&&Math.hypot(n.clientX-Kn.x,n.clientY-Kn.y)>5;if(Ln){Ln.started&&(rt.preset="custom",$e(!1)),Ln=null,xe.enabled=!0,Kn=null;return}if(!t&&Kn){let e=Wc(n);Ii&&e?Xv(e):Je==="simulate"&&e?qv({x:e.x,z:e.z}):Je==="decorate"&&Hc(em(n))}Kn=null});Re.domElement.addEventListener("pointercancel",()=>{Ln?.started&&$e(!1),Ln=null,xe.enabled=!0,Kn=null});window.addEventListener("keydown",n=>{if(!(/INPUT|TEXTAREA|SELECT/.test(n.target.tagName)||document.querySelector("dialog[open]"))){if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"){n.preventDefault(),n.shiftKey?Vu():Jp();return}if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="y"){n.preventDefault(),Vu();return}if(n.key==="Escape"){Hc(null),document.body.classList.contains("presentation")&&ed(!1),Ii&&rm();return}if(!(Je!=="decorate"||!fi())&&(n.key.toLowerCase()==="r"&&Qp(),(n.key==="Delete"||n.key==="Backspace")&&(n.preventDefault(),tm()),n.key.startsWith("Arrow"))){n.preventDefault();let t=Li?.1:.02;lr(e=>{n.key==="ArrowLeft"&&(e.x=Math.max(-6,e.x-t)),n.key==="ArrowRight"&&(e.x=Math.min(6,e.x+t)),n.key==="ArrowUp"&&(e.z=Math.max(-6,e.z-t)),n.key==="ArrowDown"&&(e.z=Math.min(6,e.z+t))})}}});function Zr(n){for(;n.children.length;){let t=n.children[0];n.remove(t),t.userData.disposable&&(t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose())}}function ua(n,t,e="#58845e",i=!1){let r=new Ae().setFromPoints(t.map(a=>new P(...a))),s=i?new ko({color:e,dashSize:.1,gapSize:.07,depthTest:!1}):new Wn({color:e,depthTest:!1}),o=new Xi(r,s);return o.userData.disposable=!0,o.renderOrder=10,i&&o.computeLineDistances(),n.add(o),o}function nm(n,t,e,i,r,s=1){let o=document.createElement("canvas");o.width=512,o.height=128;let a=o.getContext("2d");a.fillStyle="#f9fcf5",a.beginPath(),a.roundRect(3,5,506,116,22),a.fill(),a.fillStyle="#294b3d",a.font="500 49px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,65);let c=new Tr(o);c.colorSpace=He;let l=new So(new Es({map:c,depthTest:!1,transparent:!0}));return l.position.set(e,i,r),l.scale.set(1.2*s,.3*s,1),l.renderOrder=20,l.userData.disposable=!0,n.add(l),l}function la(n,t,e){ua(Qn,[n,t]);for(let i of[n,t])ua(Qn,[[i[0]-.06,i[1],i[2]-.06],[i[0]+.06,i[1],i[2]+.06]]);nm(Qn,e,(n[0]+t[0])/2,.5,(n[2]+t[2])/2,.85)}function im(){Zr(Qn),Zr(Zs);let n=rt.structure,t=n.bounds,e=n.bathroom;la([t.left,.43,t.front+.88],[t.right,.43,t.front+.88],`${(t.right-t.left).toFixed(2)} m`),la([t.right+.7,.43,t.back],[t.right+.7,.43,t.front],`${(t.front-t.back).toFixed(2)} m`),e.enabled!==!1&&(la([e.x-e.w/2-.36,.43,e.z-e.d/2],[e.x-e.w/2-.36,.43,e.z+e.d/2],`${e.d.toFixed(2)} m`),la([e.x-e.w/2,.43,e.z+e.d/2+.28],[e.x+e.w/2,.43,e.z+e.d/2+.28],`${e.w.toFixed(2)} m`)),n.balcony.enabled!==!1&&la([t.left,.43,t.back-n.balcony.depth-.35],[t.right,.43,t.back-n.balcony.depth-.35],`${(t.right-t.left).toFixed(2)} m balcony`);for(let i of n.openings.filter(r=>r.kind==="door")){let r=ae(n,i.side),s=r.axis==="x"?i.at:r.fixed,o=r.axis==="x"?r.fixed:i.at,a=r.axis==="x"?i.w:.58,c=r.axis==="x"?.58:i.w;ua(Zs,[[s-a/2,yt+.019,o-c/2],[s+a/2,yt+.019,o-c/2],[s+a/2,yt+.019,o+c/2],[s-a/2,yt+.019,o+c/2],[s-a/2,yt+.019,o-c/2]],"#bb9561",!0)}}var Xs=[];function rm(){Jt&&Qr(),Ii=!Ii,J("#measureBtn").classList.toggle("active",Ii),J("#measureReadout").hidden=!Ii,Xs=[],Zr($s),J("#measureReadout").textContent="Click two points on the floor.",Re.domElement.style.cursor=Ii?"crosshair":""}function Xv(n){Xs.length===2&&(Xs=[],Zr($s)),n.y=yt+.035,Xs.push(n);let t=new ie(new Bo(.035,12,8),new Wi({color:"#285747",depthTest:!1}));if(t.position.copy(n),t.userData.disposable=!0,$s.add(t),Xs.length===2){let[e,i]=Xs,r=e.distanceTo(i);ua($s,[e.toArray(),i.toArray()],"#285747"),nm($s,r.toFixed(2)+" m",(e.x+i.x)/2,.52,(e.z+i.z)/2),J("#measureReadout").textContent=`${r.toFixed(2)} m floor distance \xB7 click to start again`}}im();function Dn(n,t){J("#personStatus").textContent=n,J("#personDetail").textContent=t||"Click the floor to walk somewhere."}function ti(n=!0){let t=Yt.action;t?.item&&Yt.phase!=="walking"&&Yt.phase!=="idle"&&he.root.position.set(t.x,Ye(t.x,t.z)+.015,t.z),Yt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},Zr(cr),he.reset();let e=fa();he.root.position.y=Ye(e.x,e.z)+.015,(n||Je==="simulate")&&(Jr(),Dn("Ready to explore"))}function ju(){ti(!1),he.root.position.set(0,yt+.015,rt.structure.room?.kind==="video-bedroom"?.45:1.3),he.root.rotation.y=0,Jr(),Dn("Ready to explore")}function Jr(){let n=fa(),t=Lu(rt.items,Yr),e=Pu(Yr),i=rt.structure,r=i.bounds,s=!!i.room,o=l=>l.x>r.left+e&&l.x<r.right-e&&l.z>r.back+e&&l.z<r.front-e&&Ye(l.x,l.z)>=yt-.03;if(!ia(n.x,n.z,t,e)&&(!s||o(n)))return;let a=s?[{x:0,z:.45},{x:r.left+.9,z:r.front-.6}]:[{x:0,z:1.3},{x:0,z:2},{x:0,z:3.5}];for(let l=s?r.back+.4:-2;l<(s?r.front-.3:2);l+=.2)for(let h=s?r.left+.4:-2;h<(s?r.right-.3:2);h+=.2)a.push({x:h,z:l});let c=a.find(l=>(!s||o(l))&&!ia(l.x,l.z,t,e));c&&he.root.position.set(c.x,Ye(c.x,c.z)+.015,c.z)}function $v(n){if(Zr(cr),cr.visible=J("#pathToggle").checked,!n?.length)return;ua(cr,n.map(i=>[i.x,Ye(i.x,i.z)+.035,i.z]),"#397b5e",!0);let t=n[n.length-1],e=new ie(new Oo(.12,.16,32),new Wi({color:"#4d8d68",side:Pe,depthTest:!1}));e.rotation.x=-Math.PI/2,e.position.set(t.x,Ye(t.x,t.z)+.04,t.z),e.userData.disposable=!0,cr.add(e)}function sm(n,t=null,e=!1){let i=Yt.routine,r=Yt.routineIndex;he.reset(),Yt={path:n,index:0,action:t,phase:"walking",elapsed:0,transition:null,routine:e&&i,routineIndex:r,wait:0},$v(n),Dn("Walking\u2026",t?.label||"Finding a little breathing room.")}function qv(n){ti(!1),Jr();let t=Pc(fa(),n,rt.items,Yr);if(!t){le("No walkable route there. Try a clear floor area or move the blocking furniture."),Dn("That spot is blocked","Try another spot, or make more room.");return}sm(t)}function Qu(n,t=!1){if(n==="tour"){ti(!1),Yt.routine=!0,Yt.routineIndex=0,Qu("desk",!0);return}if(t?(he.reset(),Jr()):ti(!1),n==="bed"){let s=rt.items.find(o=>Ce[o.type].kind==="sofabed");s&&!s.open&&!rt.items.some(o=>["bed","loft"].includes(Ce[o.type].kind))&&(pn(),s.open=!0,Gu(),Wu(),zc())}let e=Du(n,rt.items);if(!e.length){le(`Add ${n==="bed"?"a bed":"a desk"} first.`),Dn("Destination not available"),Yt.routine=!1;return}let i=null,r=null;for(let s of e){let o=Pc(fa(),s,rt.items,Yr);o&&(!r||o.length<r.length)&&(i=s,r=o)}if(!r){le("Route blocked. Move furniture, resize it, or check the door clearances."),Dn("Cannot reach "+n,"The walking route is blocked."),Yt.routine=!1;return}sm(r,i,t)}function Yv(){Yt.phase="rest",Yt.elapsed=0,Yt.path=[],Zr(cr);let n=Yt.action;if(!n){Dn("Arrived");return}if(n.pose==="sleep"&&n.item){let t=rt.items.find(s=>s.id===n.item.id);if(!t){ti();return}let e=Ce[t.type].kind,i=Jn(t,0,e==="sofabed"?.65*t.d/Ce[t.type].d:0),r=e==="loft"?t.h*1.88/2.25:e==="sofabed"?t.h*.45/.84:t.h*.55/Ce[t.type].h;Yt.phase="settle",Yt.transition={from:he.root.position.clone(),to:new P(i.x,Ye(i.x,i.z)+r+.1,i.z),yaw:t.rot,pose:"sleep",loft:e==="loft",duration:e==="loft"?2.8:1.1},Dn(e==="loft"?"Climbing up\u2026":"Getting comfortable\u2026","A simplified pose transition; not an ergonomic test.")}else if(n.pose==="sit"&&n.item){let t=n.item;Yt.phase="settle",Yt.transition={from:he.root.position.clone(),to:new P(t.x,Ye(t.x,t.z)+.015,t.z),yaw:t.rot,pose:"sit",duration:.85},Dn("Taking a seat\u2026")}else Dn(n.label),Yt.wait=0}function Zv(n,t){let e=he.root;if(e.scale.setScalar(Yr/1.7),Yt.phase==="walking"){let o=n*.92;for(;o>0&&Yt.index<Yt.path.length;){let a=Yt.path[Yt.index],c=a.x-e.position.x,l=a.z-e.position.z,h=Math.hypot(c,l);if(h<.001){Yt.index++;continue}e.rotation.y=Math.atan2(c,l);let u=Math.min(o,h);e.position.x+=c/h*u,e.position.z+=l/h*u,o-=u,u>=h-1e-4&&Yt.index++}e.position.y=Ye(e.position.x,e.position.z)+.015,he.legs[0].rotation.x=Math.sin(t*9)*.32,he.legs[1].rotation.x=-Math.sin(t*9)*.32,he.arms[0].rotation.x=-Math.sin(t*9)*.31,he.arms[1].rotation.x=Math.sin(t*9)*.31,he.body.position.y=Math.abs(Math.sin(t*9))*.018,Yt.index>=Yt.path.length&&(he.reset(),Yv())}else if(Yt.phase==="settle"){let o=Yt.transition;Yt.elapsed+=n;let a=Math.min(1,Yt.elapsed/o.duration),c=a*a*(3-2*a);if(e.rotation.y=o.yaw,e.position.lerpVectors(o.from,o.to,c),o.pose==="sleep"){let l=o.loft?Math.max(0,(a-.65)/.35):c;he.body.rotation.x=-Math.PI/2*l,he.body.position.z=.72*l,he.body.position.y=0}else{he.body.position.y=-.32*c;for(let l of he.legs)l.rotation.x=-Math.PI/2*c;for(let l of he.arms)l.rotation.x=-.6*c}a===1&&(Yt.phase="rest",Yt.wait=0,Dn(o.pose==="sleep"?"Resting on the bed":"Working at the desk",o.pose==="sleep"?"Stop / stand up to get moving again.":"Taking a seat, six-block style."))}else if(Yt.phase==="rest"&&Yt.routine&&(Yt.wait+=n,Yt.wait>3)){let o=rt.structure.room?["desk","bed","entrance"]:["desk","bathroom","balcony","bed","entrance"];Yt.routineIndex=(Yt.routineIndex+1)%o.length;let a=Yt.action;a&&(he.reset(),e.position.set(a.x,Ye(a.x,a.z)+.015,a.z)),Qu(o[Yt.routineIndex],!0)}let i=e.position.x,r=e.position.z,s=Math.min(1,n*5);for(let o of rt.structure.openings.filter(a=>a.kind==="door")){let a=fn.doorLeaves[o.id];if(!a)continue;let c=ae(rt.structure,o.side),l=i-(c.axis==="x"?o.at:c.fixed),h=r-(c.axis==="x"?c.fixed:o.at),u=Math.hypot(l,h)<1.2;o.id==="front-door"&&o.w>=1.3?a.position.x=Bs.lerp(a.position.x,u?o.w/2-.06:0,s):a.rotation.y=Bs.lerp(a.rotation.y,u?-1.4:0,s)}if(Wp&&Je==="simulate"&&Ze===qr){let a=new P(i,1,r).sub(xe.target).multiplyScalar(n*2.1);xe.target.add(a),Ze.position.add(a)}}function Jv(){Jr();let n=fa(),t=["bed","desk","bathroom","balcony","entrance"].map(e=>{let i=Du(e,rt.items),r=i.some(s=>Pc(n,s,rt.items,Yr));return{name:e,pass:r,exists:!!i.length}});return J("#pathResults").innerHTML=t.map(e=>`<div><span>${e.name[0].toUpperCase()+e.name.slice(1)}</span><b class="${e.pass?"pass":"fail"}">${e.pass?"\u2713 Reachable":e.exists?"Blocked":"Not placed"}</b></div>`).join(""),le("Access checked from Blocky\u2019s current position."),t}function om(){bn(rt);let n=new Blob([JSON.stringify(rt,null,2)],{type:"application/json"});am(n,"House-Studio-Layout.json"),le("Layout exported. Keep this file as your portable backup.")}function am(n,t){let e=URL.createObjectURL(n),i=document.createElement("a");i.href=e,i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}function lm(){let n=Hp("house-studio-layouts-v1",[]);return Array.isArray(n)?n:[]}function td(){let n=lm();J("#savedLayouts").innerHTML=n.length?n.map((t,e)=>`<div class="saved-layout"><button data-load="${e}">${$r(t.name)}<small>${t.items?.length||0} objects</small></button><button class="icon-btn" data-remove-save="${e}" title="Delete saved copy" aria-label="Delete ${$r(t.name)}">${Ri("trash")}</button></div>`).join(""):'<div class="empty-copy">No named copies yet.</div>',De("[data-load]").forEach(t=>t.onclick=()=>{try{let e=Mn(n[Number(t.dataset.load)]);e.structure||(e.structure=Wr()),pn(),rt=e,Jt=!1,Ne=null,$e(),J("#layoutsDialog").close(),le("Saved layout loaded.")}catch(e){le(e.message)}}),De("[data-remove-save]").forEach(t=>t.onclick=()=>{confirm("Remove this named copy? Your current layout stays unchanged.")&&(n.splice(Number(t.dataset.removeSave),1),Hu("house-studio-layouts-v1",n),td())})}function ed(n){document.body.classList.toggle("presentation",n),J("#exitPresent").hidden=!n,Ne=null,Ui(),J("#sidebar").classList.remove("mobile-open"),Vc()}function Kv(){Re.render(Oe,Ze),Re.domElement.toBlob(n=>{n&&am(n,"House-Studio-View.png")}),le("Scene image saved.")}De("[data-mode]").forEach(n=>n.onclick=()=>$u(n.dataset.mode));De("[data-light]").forEach(n=>n.onclick=()=>Yu(n.dataset.light));De("[data-view]").forEach(n=>n.onclick=()=>Di(n.dataset.view));De("[data-action]").forEach(n=>n.onclick=()=>Qu(n.dataset.action));J("#roofBtn").onclick=()=>{dn=!dn,dn&&we==="hidden"&&(we="full",J("#wallSelect").value=we),Un()};J("#wallSelect").onchange=n=>{we=n.target.value,Un()};J("#fitBtn").onclick=()=>Di("iso");J("#lightsToggle").onchange=Zu;J("#gardenToggle").onchange=n=>fn.garden.visible=n.target.checked;J("#measureBtn").onclick=rm;J("#dimensionBtn").onclick=()=>{Qn.visible=!Qn.visible,J("#dimensionBtn").classList.toggle("active",Qn.visible)};J("#undoBtn").onclick=Jp;J("#redoBtn").onclick=Vu;J("#snapToggle").onchange=n=>{Li=n.target.checked,dr.visible=Je==="decorate"&&Li,Js()};J("#searchInput").oninput=Ju;J("#heightInput").oninput=n=>{Yr=Number(n.target.value)/100,J("#heightLabel").textContent=n.target.value+" cm",ti()};J("#followToggle").onchange=n=>Wp=n.target.checked;J("#pathToggle").onchange=n=>cr.visible=n.target.checked;J("#stopPerson").onclick=()=>{let n=Yt.action;n?.item&&Yt.phase!=="walking"&&he.root.position.set(n.x,Ye(n.x,n.z)+.015,n.z),ti()};J("#resetPerson").onclick=ju;J("#checkPaths").onclick=Jv;J("#cameraTourBtn").onclick=()=>{Ze===Pi&&Di("iso"),ca=!ca,J("#cameraTourBtn").innerHTML=Ri(ca?"pause":"play")};J("#screenshotBtn").onclick=Kv;J("#helpBtn").onclick=()=>J("#helpDialog").showModal();J("#referenceBtn").onclick=()=>{J("#helpDialog details").open=!rt.structure.room,J("#helpDialog").showModal()};De("[data-close]").forEach(n=>n.onclick=()=>n.closest("dialog").close());De("dialog").forEach(n=>n.addEventListener("click",t=>{if(t.target===n){let e=n.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&n.close()}}));J("#saveBtn").onclick=()=>{td(),J("#layoutsDialog").showModal()};J("#saveLayoutForm").onsubmit=n=>{n.preventDefault();let t=J("#layoutName").value.trim();if(!t)return;let e=lm();if(e.length>=25){le("Export or remove a saved copy before adding more (limit 25).");return}bn(rt);let i=JSON.parse(JSON.stringify({...rt,name:t}));e.push(i),Hu("house-studio-layouts-v1",e)?(td(),le("Named copy saved.")):le("Browser storage is full or unavailable. Export JSON instead.")};J("#exportBtn").onclick=om;J("#downloadLayoutBtn").onclick=om;J("#importBtn").onclick=()=>J("#importFile").click();J("#importFile").onchange=async n=>{let t=n.target.files[0];if(n.target.value="",!!t){if(t.size>2e6){le("Layout file is too large (maximum 2 MB).");return}try{let e=Mn(JSON.parse(await t.text()));pn(),rt=e,Jt=!1,Ne=null,$e(),J("#layoutsDialog").close(),le("Layout imported.")}catch(e){le("Import stopped: "+e.message)}}};J("#presentBtn").onclick=()=>ed(!0);J("#exitPresent").onclick=()=>ed(!1);J("#mobilePanelBtn").onclick=()=>J("#sidebar").classList.toggle("mobile-open");function cm(n,t){let e={front:0,back:Math.PI,left:-Math.PI/2,right:Math.PI/2},i=(e[t.side]||0)-(e[n.side]||0),r=Math.abs(Math.sin(i))>.5;for(let s of rt.items)if(s.x>=n.x-n.w/2&&s.x<=n.x+n.w/2&&s.z>=n.z-n.d/2&&s.z<=n.z+n.d/2){let o=Jn({x:0,z:0,rot:i},s.x-n.x,s.z-n.z);s.x=t.x+o.x*t.w/(r?n.d:n.w),s.z=t.z+o.z*t.d/(r?n.w:n.d),s.rot=((s.rot+i)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)}}function hm(n,t){let e=n.bathroom,i=t.bathroom;if(e.side===i.side)for(let r of t.openings){if(!r.side.startsWith("bath-"))continue;let s=n.openings.find(a=>a.id===r.id&&a.side===r.side);if(!s)continue;let o=ae(t,r.side);r.at=o.axis==="x"?i.x+(s.at-e.x)*i.w/e.w:i.z+(s.at-e.z)*i.d/e.d}}function nd(n){let t=rt.structure,e=JSON.parse(JSON.stringify(t));try{n(e),ea(e),JSON.stringify(t.bathroom)!==JSON.stringify(e.bathroom)&&hm(t,e);let i=Mn({...rt,structure:e}).structure;return pn(),rt.structure=i,JSON.stringify(t.bathroom)!==JSON.stringify(i.bathroom)&&cm(t.bathroom,i.bathroom),rt.preset="custom",$e(),!0}catch(i){return le(i.message),Xc(),!1}}function jv(n,t,e){let i=JSON.parse(JSON.stringify(rt.structure)),r=rt.structure,s=Li?.1:.01,o=d=>Math.round(Math.max(-5.5,Math.min(5.5,d))/s)*s,a=r.openings.find(d=>d.id===n);if(a){let d=ae(r,a.side),f=d.start+a.w/2+.1,p=d.end-a.w/2-.1;a.at=Math.max(f,Math.min(p,o(d.axis==="x"?t:e)));return}let c=r.partitions.find(d=>d.id===n);if(c){c.x=o(t),c.z=o(e);return}let l=Ue.find(d=>n===d+"-wall");if(!l)return;let h=r.bounds,u=o(l==="left"||l==="right"?t:e);h[l]=l==="left"?Math.min(u,h.right-2):l==="right"?Math.max(u,h.left+2):l==="back"?Math.min(u,h.front-2):Math.max(u,h.back+2),ea(r),hm(i,r),cm(i.bathroom,r.bathroom)}function Xc(){Kr.render()}function Qv(n,t=!1){try{if(t)throw new Error("Wall move cancelled.");rt=Mn(rt)}catch(e){rt=JSON.parse(n),hr.pop(),le(e.message)}$e()}var Kr=Up({$:J,$$:De,escapeHTML:$r,scene:Oe,renderer:Re,controls:xe,ray:Ku,raycaster:Gc,pointAt:Wc,cloneStructure:()=>rt.structure.room?.kind==="custom-room"?wc(rt.structure.bounds.right-rt.structure.bounds.left,rt.structure.bounds.front-rt.structure.bounds.back,rt.structure.room.height):rt.structure.room?Ru("video-room").structure:Wr(),toast:le,view:Di,edit:nd,checkpoint:pn,commit:$e,finishDrag:Qv,rebuildStructure:Zp,moveStructure:jv,getState:()=>rt,getHouse:()=>fn,selectConnection:n=>jr.selectConnection(n),getMode:()=>Jt?"overview":Je,getMeasure:()=>Ii,getSnap:()=>Li});De("[data-keep-wall]").forEach(n=>n.onclick=()=>{we="cutaway",nd(t=>{for(let e of $n)t.wallVisibility[e]=e===n.dataset.keepWall||e==="bath-"+n.dataset.keepWall?"full":"hidden";for(let e of t.partitions)t.wallVisibility[e.id]="low"})});if(document.modelContext?.registerTool){let n=new AbortController;window.addEventListener("pagehide",()=>n.abort(),{once:!0});for(let t of[{name:"read_house_layout",description:"Read the current house layout and furniture dimensions in metres.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>JSON.parse(JSON.stringify(rt))},{name:"load_house_preset",description:"Replace furniture with a starting preset, keeping the change available in undo.",inputSchema:{type:"object",properties:{preset:{type:"string",enum:Hr.map(e=>e.id)}},required:["preset"],additionalProperties:!1},execute:e=>{if(!e||!Hr.some(i=>i.id===e.preset))throw new Error("Unknown preset.");return Kp(e.preset),{name:rt.name,objects:rt.items.length}}}])try{Promise.resolve(document.modelContext.registerTool(t,{signal:n.signal})).catch(()=>{})}catch{}}function um(){J("#newRoomDialog").showModal()}J("#newRoomBtn").onclick=um;function id(){let n=Number(J("#newRoomWidth").value),t=Number(J("#newRoomDepth").value);J("#sizeWidthPreview").textContent=(n||0).toFixed(1)+" m",J("#sizeDepthPreview").textContent=(t||0).toFixed(1)+" m",J(".room-size-diagram > div").style.aspectRatio=`${Math.max(2,n)}/${Math.max(2,t)}`,De("[data-room-size]").forEach(e=>e.classList.toggle("active",e.dataset.roomSize===`${n},${t}`))}De("[data-room-size]").forEach(n=>n.onclick=()=>{let[t,e]=n.dataset.roomSize.split(",");J("#newRoomWidth").value=t,J("#newRoomDepth").value=e,id()});J("#newRoomWidth").oninput=id;J("#newRoomDepth").oninput=id;J("#newRoomForm").onsubmit=n=>{n.preventDefault();try{let t=Number(J("#newRoomWidth").value),e=Number(J("#newRoomDepth").value),i=Number(J("#newRoomHeight").value);if(![t,e,i].every(Number.isFinite)||t<2||t>10||e<2||e>10||i<2||i>3)throw new Error("Use a width and length from 2 to 10 m, and a ceiling from 2 to 3 m.");let r=Mn({...Su(t,e,i),name:J("#newRoomName").value.trim()||"My new room"});pn(),rt=r,Jt=!1,Ne=null,$e(),J("#newRoomDialog").close(),$u("build"),Kr.select("floor"),Di("iso"),le("Your empty room is ready. Add a door or window, then choose Decorate.")}catch(t){le(t.message)}};J("#manageFloorsBtn").onclick=J("#goToFloors").onclick=()=>{$u("build"),J("#floorManager").scrollIntoView({block:"start",behavior:"smooth"})};J("#editCurrentFloor").onclick=Qr;jr=Fp({$:J,$$:De,escapeHTML:$r,getState:()=>rt,isOverview:()=>Jt,editProject:Uv,switchFloor:Nv,currentFloor:Qr,toggleOverview:Fv,toast:le});Gu();kv();jr.render();Un();Yu("day");zc();Vc();rt.structure.room&&(qr.position.set(1.4,5.8,7.9),xe.target.set(0,.85,-.12));xe.update();Wu();var Vp=new Vo;function dm(){requestAnimationFrame(dm);let n=Math.min(Vp.getDelta(),.05),t=Vp.elapsedTime;if(di){di.t+=n;let e=Math.min(1,di.t/.65),i=e*e*(3-2*e);Ze.position.lerpVectors(di.from,di.to,i),xe.target.lerpVectors(di.targetFrom,di.targetTo,i),e===1&&(di=null)}xe.autoRotate=ca,xe.autoRotateSpeed=.6,xe.update(n),Je==="simulate"&&Zv(n,t),Re.render(Oe,Ze)}dm();J("#loading").hidden=!0;Gp&&um();window.addEventListener("error",n=>{console.error(n.error),le("Something went wrong. Export your layout, then reload the page.")});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
