(()=>{var Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,Uh=1,qd=2;var Nh=1,Ml=2,ai=3,Mi=0,sn=1,Se=2,Ti=0,br=1,Oh=2,zh=3,kh=4,Yd=5,Wi=100,Zd=101,Jd=102,Kd=103,jd=104,Qd=200,tf=201,ef=202,nf=203,Ga=204,Wa=205,rf=206,sf=207,of=208,af=209,lf=210,cf=211,hf=212,uf=213,df=214,wl=0,Sl=1,Tl=2,Mr=3,El=4,Al=5,Cl=6,Rl=7,Bh=0,ff=1,pf=2,Ei=0,mf=1,gf=2,xf=3,Yo=4,_f=5,yf=6,vf=7;var Vh=300,Dr=301,Lr=302,Il=303,Pl=304,Zo=306,ys=1e3,Gi=1001,Xa=1002,An=1003,bf=1004;var Jo=1005;var Bn=1006,Dl=1007;var ji=1008;var Xn=1009,Hh=1010,Gh=1011,Us=1012,Ll=1013,Qi=1014,li=1015,Ns=1016,Fl=1017,Ul=1018,Os=1020,Wh=35902,Xh=35899,$h=1021,qh=1022,Rn=1023,vs=1026,zs=1027,Yh=1028,Nl=1029,Zh=1030,Ol=1031;var zl=1033,Ko=33776,jo=33777,Qo=33778,ta=33779,kl=35840,Bl=35841,Vl=35842,Hl=35843,Gl=36196,Wl=37492,Xl=37496,$l=37808,ql=37809,Yl=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,rc=37820,sc=37821,oc=36492,ac=36494,lc=36495,cc=36283,hc=36284,uc=36285,dc=36286;var go=2300,$a=2301,Ha=2302,wh=2400,Sh=2401,Th=2402;var Mf=3200,wf=3201;var Jh=0,Sf=1,Ai="",Ge="srgb",wr="srgb-linear",xo="linear",fe="srgb";var yr=7680;var Eh=519,Tf=512,Ef=513,Af=514,Kh=515,Cf=516,Rf=517,If=518,Pf=519,qa=35044;var jh="300 es",kn=2e3,_o=2001;var ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=1234567,uo=Math.PI/180,bs=180/Math.PI;function ei(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function Qh(n,t){return(n%t+t)%t}function wm(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Sm(n,t,e){return n!==t?(e-n)/(t-n):0}function fo(n,t,e){return(1-e)*n+e*t}function Tm(n,t,e,i){return fo(n,t,1-Math.exp(-e*i))}function Em(n,t=1){return t-Math.abs(Qh(n,t*2)-t)}function Am(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Cm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Rm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Im(n,t){return n+Math.random()*(t-n)}function Pm(n){return n*(.5-Math.random())}function Dm(n){n!==void 0&&(fd=n);let t=fd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lm(n){return n*uo}function Fm(n){return n*bs}function Um(n){return(n&n-1)===0&&n!==0}function Nm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Om(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zm(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ks={DEG2RAD:uo,RAD2DEG:bs,generateUUID:ei,clamp:te,euclideanModulo:Qh,mapLinear:wm,inverseLerp:Sm,lerp:fo,damp:Tm,pingpong:Em,smoothstep:Am,smootherstep:Cm,randInt:Rm,randFloat:Im,randFloatSpread:Pm,seededRandom:Dm,degToRad:Lm,radToDeg:Fm,isPowerOfTwo:Um,ceilPowerOfTwo:Nm,floorPowerOfTwo:Om,setQuaternionFromProperEuler:zm,normalize:ue,denormalize:zn},mt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==f||h!==g){let x=1-a,p=l*d+c*f+h*g+u*m,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let P=Math.sqrt(_),C=Math.atan2(P,p*M);x=Math.sin(x*C)/P,a=Math.sin(a*C)/P}let y=a*M;if(l=l*x+d*y,c=c*x+f*y,h=h*x+g*y,u=u*x+m*y,x===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zc.copy(this).projectOnVector(t),this.sub(Zc)}reflect(t){return this.sub(Zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new L,pd=new Cn,jt=class n{constructor(t,e,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],m=r[0],x=r[3],p=r[6],M=r[1],_=r[4],y=r[7],P=r[2],C=r[5],U=r[8];return s[0]=o*m+a*M+l*P,s[3]=o*x+a*_+l*C,s[6]=o*p+a*y+l*U,s[1]=c*m+h*M+u*P,s[4]=c*x+h*_+u*C,s[7]=c*p+h*y+u*U,s[2]=d*m+f*M+g*P,s[5]=d*x+f*_+g*C,s[8]=d*p+f*y+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(r*c-h*i)*m,t[2]=(a*i-r*o)*m,t[3]=d*m,t[4]=(h*e-r*l)*m,t[5]=(r*s-a*e)*m,t[6]=f*m,t[7]=(i*l-c*e)*m,t[8]=(o*e-i*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jc.makeScale(t,e)),this}rotate(t){return this.premultiply(Jc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jc=new jt;function tu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Df(){let n=yo("canvas");return n.style.display="block",n}var md={};function Ms(n){n in md||(md[n]=!0,console.warn(n))}function Lf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var gd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){let n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===fe&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:t,whitePoint:i,transfer:xo,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var re=km();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ns,Ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ns===void 0&&(ns=yo("canvas")),ns.width=t.width,ns.height=t.height;let r=ns.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bm=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kc(r[o].image)):s.push(Kc(r[o]))}else s=Kc(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function Kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vm=0,jc=new L,cn=class n extends ni{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Gi,r=Gi,s=Bn,o=ji,a=Rn,l=Xn,c=n.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ei(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Vh;cn.DEFAULT_ANISOTROPY=1;var de=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],m=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(f+1)/2,P=(p+1)/2,C=(h+d)/4,U=(u+m)/4,O=(g+x)/4;return _>y&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=U/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=U/s,r=O/s),this.set(i,r,s,e),this}let M=Math.sqrt((x-g)*(x-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(x-g)/M,this.y=(u-m)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends ni{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let r={width:t,height:e,depth:i.depth},s=new cn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Za{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vo=class extends cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),xa.subVectors(this.max,eo),is.subVectors(t.a,eo),rs.subVectors(t.b,eo),ss.subVectors(t.c,eo),Oi.subVectors(rs,is),zi.subVectors(ss,rs),mr.subVectors(is,ss);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-mr.z,mr.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,mr.z,0,-mr.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-mr.y,mr.x,0];return!Qc(e,is,rs,ss,xa)||(e=[1,0,0,0,1,0,0,0,1],!Qc(e,is,rs,ss,xa))?!1:(_a.crossVectors(Oi,zi),e=[_a.x,_a.y,_a.z],Qc(e,is,rs,ss,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mi=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,ga=new Vn,is=new L,rs=new L,ss=new L,Oi=new L,zi=new L,mr=new L,eo=new L,xa=new L,_a=new L,gr=new L;function Qc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gr.fromArray(n,s);let a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=t.dot(gr),c=e.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hm=new Vn,no=new L,th=new L,Sr=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(th)),this.expandByPoint(no.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gi=new L,eh=new L,ya=new L,ki=new L,nh=new L,va=new L,ih=new L,Xi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){eh.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(eh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ya),a=ki.dot(this.direction),l=-ki.dot(ya),c=ki.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(eh).addScaledVector(ya,d),f}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,r,s){nh.subVectors(e,t),va.subVectors(i,t),ih.crossVectors(nh,va);let o=this.direction.dot(ih),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,t);let l=a*this.direction.dot(va.crossVectors(ki,va));if(l<0)return null;let c=a*this.direction.dot(nh.cross(ki));if(c<0||l+c>o)return null;let h=-a*ki.dot(ih);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,r,s,o,a,l,c,h,u,d,f,g,m,x){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,h,u,d,f,g,m,x)}set(t,e,i,r,s,o,a,l,c,h,u,d,f,g,m,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=m,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/os.setFromMatrixColumn(t,0).length(),s=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-m*c,e[9]=-a*l,e[2]=m-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d+m*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-m*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gm,t,Wm)}lookAt(t,e,i){let r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),ba.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=ba.x,r[8]=xn.x,r[1]=Bi.y,r[5]=ba.y,r[9]=xn.y,r[2]=Bi.z,r[6]=ba.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],m=i[6],x=i[10],p=i[14],M=i[3],_=i[7],y=i[11],P=i[15],C=r[0],U=r[4],O=r[8],T=r[12],w=r[1],S=r[5],z=r[9],H=r[13],X=r[2],K=r[6],Z=r[10],at=r[14],q=r[3],D=r[7],A=r[11],v=r[15];return s[0]=o*C+a*w+l*X+c*q,s[4]=o*U+a*S+l*K+c*D,s[8]=o*O+a*z+l*Z+c*A,s[12]=o*T+a*H+l*at+c*v,s[1]=h*C+u*w+d*X+f*q,s[5]=h*U+u*S+d*K+f*D,s[9]=h*O+u*z+d*Z+f*A,s[13]=h*T+u*H+d*at+f*v,s[2]=g*C+m*w+x*X+p*q,s[6]=g*U+m*S+x*K+p*D,s[10]=g*O+m*z+x*Z+p*A,s[14]=g*T+m*H+x*at+p*v,s[3]=M*C+_*w+y*X+P*q,s[7]=M*U+_*S+y*K+P*D,s[11]=M*O+_*z+y*Z+P*A,s[15]=M*T+_*H+y*at+P*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],m=t[7],x=t[11],p=t[15];return g*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*f-i*l*f)+m*(+e*l*f-e*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+x*(+e*c*u-e*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-r*a*h-e*l*u+e*a*d+r*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],m=t[13],x=t[14],p=t[15],M=u*x*c-m*d*c+m*l*f-a*x*f-u*l*p+a*d*p,_=g*d*c-h*x*c-g*l*f+o*x*f+h*l*p-o*d*p,y=h*m*c-g*u*c+g*a*f-o*m*f-h*a*p+o*u*p,P=g*u*l-h*m*l-g*a*d+o*m*d+h*a*x-o*u*x,C=e*M+i*_+r*y+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=M*U,t[1]=(m*d*s-u*x*s-m*r*f+i*x*f+u*r*p-i*d*p)*U,t[2]=(a*x*s-m*l*s+m*r*c-i*x*c-a*r*p+i*l*p)*U,t[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*f-i*l*f)*U,t[4]=_*U,t[5]=(h*x*s-g*d*s+g*r*f-e*x*f-h*r*p+e*d*p)*U,t[6]=(g*l*s-o*x*s-g*r*c+e*x*c+o*r*p-e*l*p)*U,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*f+e*l*f)*U,t[8]=y*U,t[9]=(g*u*s-h*m*s-g*i*f+e*m*f+h*i*p-e*u*p)*U,t[10]=(o*m*s-g*a*s+g*i*c-e*m*c-o*i*p+e*a*p)*U,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*f-e*a*f)*U,t[12]=P*U,t[13]=(h*m*r-g*u*r+g*i*d-e*m*d-h*i*x+e*u*x)*U,t[14]=(g*a*r-o*m*r-g*i*l+e*m*l+o*i*x-e*a*x)*U,t[15]=(o*u*r-h*a*r+h*i*l-e*u*l-o*i*d+e*a*d)*U,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,m=o*h,x=o*u,p=a*u,M=l*c,_=l*h,y=l*u,P=i.x,C=i.y,U=i.z;return r[0]=(1-(m+p))*P,r[1]=(f+y)*P,r[2]=(g-_)*P,r[3]=0,r[4]=(f-y)*C,r[5]=(1-(d+p))*C,r[6]=(x+M)*C,r[7]=0,r[8]=(g+_)*U,r[9]=(x-M)*U,r[10]=(1-(d+m))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=os.set(r[0],r[1],r[2]).length(),o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Nn.copy(this);let c=1/s,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=kn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),f=(i+r)/(i-r),g,m;if(l)g=s/(o-s),m=o*s/(o-s);else if(a===kn)g=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===_o)g=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=kn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-r),d=-(e+t)/(e-t),f=-(i+r)/(i-r),g,m;if(l)g=1/(o-s),m=o/(o-s);else if(a===kn)g=-2/(o-s),m=-(o+s)/(o-s);else if(a===_o)g=-1/(o-s),m=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},os=new L,Nn=new ve,Gm=new L(0,0,0),Wm=new L(1,1,1),Bi=new L,ba=new L,xn=new L,_d=new ve,yd=new Cn,Hn=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _d.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_d,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yd.setFromEuler(this),this.setFromQuaternion(yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xm=0,vd=new L,as=new Cn,xi=new ve,Ma=new L,io=new L,$m=new L,qm=new Cn,bd=new L(1,0,0),Md=new L(0,1,0),wd=new L(0,0,1),Sd={type:"added"},Ym={type:"removed"},ls={type:"childadded",child:null},rh={type:"childremoved",child:null},Xe=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new Hn,i=new Cn,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(bd,t)}rotateY(t){return this.rotateOnAxis(Md,t)}rotateZ(t){return this.rotateOnAxis(wd,t)}translateOnAxis(t,e){return vd.copy(t).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bd,t)}translateY(t){return this.translateOnAxis(Md,t)}translateZ(t){return this.translateOnAxis(wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(io,Ma,this.up):xi.lookAt(Ma,io,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(xi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sd),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ym),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sd),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,$m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};Xe.DEFAULT_UP=new L(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new L,_i=new L,sh=new L,yi=new L,cs=new L,hs=new L,Td=new L,oh=new L,ah=new L,lh=new L,ch=new de,hh=new de,uh=new de,vi=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),On.subVectors(t,e),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){On.subVectors(r,e),_i.subVectors(i,e),sh.subVectors(t,e);let o=On.dot(On),a=On.dot(_i),l=On.dot(sh),c=_i.dot(_i),h=_i.dot(sh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ch.setScalar(0),hh.setScalar(0),uh.setScalar(0),ch.fromBufferAttribute(t,e),hh.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ch,s.x),o.addScaledVector(hh,s.y),o.addScaledVector(uh,s.z),o}static isFrontFacing(t,e,i,r){return On.subVectors(i,e),_i.subVectors(t,e),On.cross(_i).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),On.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;cs.subVectors(r,i),hs.subVectors(s,i),oh.subVectors(t,i);let l=cs.dot(oh),c=hs.dot(oh);if(l<=0&&c<=0)return e.copy(i);ah.subVectors(t,r);let h=cs.dot(ah),u=hs.dot(ah);if(h>=0&&u<=h)return e.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(cs,o);lh.subVectors(t,s);let f=cs.dot(lh),g=hs.dot(lh);if(g>=0&&f<=g)return e.copy(s);let m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(hs,a);let x=h*g-f*u;if(x<=0&&u-h>=0&&f-g>=0)return Td.subVectors(s,r),a=(u-h)/(u-h+(f-g)),e.copy(r).addScaledVector(Td,a);let p=1/(x+m+d);return o=m*p,a=d*p,e.copy(i).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function dh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=Qh(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=dh(o,s,t+1/3),this.g=dh(o,s,t),this.b=dh(o,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=Ge){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=Ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return re.workingToColorSpace(je.copy(this),t),Math.round(te(je.r*255,0,255))*65536+Math.round(te(je.g*255,0,255))*256+Math.round(te(je.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(je.copy(this),e);let i=je.r,r=je.g,s=je.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ge){re.workingToColorSpace(je.copy(this),t);let e=je.r,i=je.g,r=je.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(wa);let i=fo(Vi.h,wa.h,e),r=fo(Vi.s,wa.s,e),s=fo(Vi.l,wa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Wt;Wt.NAMES=Ff;var Zm=0,ri=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=br,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$i=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new L,Sa=new mt,Jm=0,rn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}};var bo=class extends rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Mo=class extends rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends rn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Km=0,En=new ve,fh=new Xe,us=new L,_n=new Vn,ro=new Vn,He=new L,we=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?Mo:bo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(_n.min,ro.min),_n.expandByPoint(He),He.addVectors(_n.max,ro.max),_n.expandByPoint(He)):(_n.expandByPoint(ro.min),_n.expandByPoint(ro.max))}_n.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),He.add(us)),r=Math.max(r,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new L,l[O]=new L;let c=new L,h=new L,u=new L,d=new mt,f=new mt,g=new mt,m=new L,x=new L;function p(O,T,w){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(s,O),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[O].add(m),a[T].add(m),a[w].add(m),l[O].add(x),l[T].add(x),l[w].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let O=0,T=M.length;O<T;++O){let w=M[O],S=w.start,z=w.count;for(let H=S,X=S+z;H<X;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let _=new L,y=new L,P=new L,C=new L;function U(O){P.fromBufferAttribute(r,O),C.copy(P);let T=a[O];_.copy(T),_.sub(P.multiplyScalar(P.dot(T))).normalize(),y.crossVectors(C,T);let S=y.dot(l[O])<0?-1:1;o.setXYZW(O,_.x,_.y,_.z,S)}for(let O=0,T=M.length;O<T;++O){let w=M[O],S=w.start,z=w.count;for(let H=S,X=S+z;H<X;H+=3)U(t.getX(H+0)),U(t.getX(H+1)),U(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),m=t.getX(d+1),x=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ed=new ve,xr=new Xi,Ta=new Sr,Ad=new L,Ea=new L,Aa=new L,Ca=new L,ph=new L,Ra=new L,Cd=new L,Ia=new L,ie=class extends Xe{constructor(t=new we,e=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(ph.fromBufferAttribute(u,t),o?Ra.addScaledVector(ph,h):Ra.addScaledVector(ph.sub(e),h))}e.add(Ra)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),xr.copy(t.ray).recast(t.near),!(Ta.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ta,Ad)===null||xr.origin.distanceToSquared(Ad)>(t.far-t.near)**2))&&(Ed.copy(s).invert(),xr.copy(t.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xr)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){let x=d[g],p=o[x.materialIndex],M=Math.max(x.start,f.start),_=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let y=M,P=_;y<P;y+=3){let C=a.getX(y),U=a.getX(y+1),O=a.getX(y+2);r=Pa(this,p,t,i,c,h,u,C,U,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let x=g,p=m;x<p;x+=3){let M=a.getX(x),_=a.getX(x+1),y=a.getX(x+2);r=Pa(this,o,t,i,c,h,u,M,_,y),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){let x=d[g],p=o[x.materialIndex],M=Math.max(x.start,f.start),_=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let y=M,P=_;y<P;y+=3){let C=y,U=y+1,O=y+2;r=Pa(this,p,t,i,c,h,u,C,U,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let x=g,p=m;x<p;x+=3){let M=x,_=x+1,y=x+2;r=Pa(this,o,t,i,c,h,u,M,_,y),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function jm(n,t,e,i,r,s,o,a){let l;if(t.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Mi,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ia);return c<e.near||c>e.far?null:{distance:c,point:Ia.clone(),object:n}}function Pa(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ea),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ca);let h=jm(n,t,e,i,Ea,Aa,Ca,Cd);if(h){let u=new L;vi.getBarycoord(Cd,Ea,Aa,Ca,u),r&&(h.uv=vi.getInterpolatedAttribute(r,a,l,c,u,new mt)),s&&(h.uv1=vi.getInterpolatedAttribute(s,a,l,c,u,new mt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};vi.getNormal(Ea,Aa,Ca,d.normal),h.face=d,h.barycoord=u}return h}var si=class n extends we{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(m,x,p,M,_,y,P,C,U,O,T){let w=y/U,S=P/O,z=y/2,H=P/2,X=C/2,K=U+1,Z=O+1,at=0,q=0,D=new L;for(let A=0;A<Z;A++){let v=A*S-H;for(let N=0;N<K;N++){let Y=N*w-z;D[m]=Y*M,D[x]=v*_,D[p]=X,c.push(D.x,D.y,D.z),D[m]=0,D[x]=0,D[p]=C>0?1:-1,h.push(D.x,D.y,D.z),u.push(N/U),u.push(1-A/O),at+=1}}for(let A=0;A<O;A++)for(let v=0;v<U;v++){let N=d+v+K*A,Y=d+v+K*(A+1),ht=d+(v+1)+K*(A+1),dt=d+(v+1)+K*A;l.push(N,Y,dt),l.push(Y,ht,dt),q+=6}a.addGroup(f,q,T),f+=q,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Qe(n){let t={};for(let e=0;e<n.length;e++){let i=Fr(n[e]);for(let r in i)t[r]=i[r]}return t}function Qm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function eu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Uf={clone:Fr,merge:Qe},t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},wo=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new L,Rd=new mt,Id=new mt,We=class extends wo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,Rd,Id),e.subVectors(Id,Rd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,Ka=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new We(ds,fs,t,e);r.layers=this.layers,this.add(r);let s=new We(ds,fs,t,e);s.layers=this.layers,this.add(s);let o=new We(ds,fs,t,e);o.layers=this.layers,this.add(o);let a=new We(ds,fs,t,e);a.layers=this.layers,this.add(a);let l=new We(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new We(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=m,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},So=class extends cn{constructor(t=[],e=Dr,i,r,s,o,a,l,c,h){super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ja=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new So(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new si(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Ti});s.uniforms.tEquirect.value=e;let o=new ie(r,s),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Bn),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},St=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},n0={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let x=e.getJointPose(m,i),p=this._getHandJoint(c,m);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var To=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Es=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new L,Eo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),r=ue(r,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},As=class extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,so=new L,ms=new L,gs=new L,xs=new mt,oo=new mt,Nf=new ve,Da=new L,ao=new L,La=new L,Pd=new mt,mh=new mt,Dd=new mt,Ao=class extends Xe{constructor(t=new As){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qa(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Eo(i,3,0,!1)),ps.setAttribute("uv",new Eo(i,2,3,!1))}this.geometry=ps,this.material=t,this.center=new mt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Fa(Da.set(-.5,-.5,0),gs,o,ms,r,s),Fa(ao.set(.5,-.5,0),gs,o,ms,r,s),Fa(La.set(.5,.5,0),gs,o,ms,r,s),Pd.set(0,0),mh.set(1,0),Dd.set(1,1);let a=t.ray.intersectTriangle(Da,ao,La,!1,so);if(a===null&&(Fa(ao.set(-.5,.5,0),gs,o,ms,r,s),mh.set(0,1),a=t.ray.intersectTriangle(Da,La,ao,!1,so),a===null))return;let l=t.ray.origin.distanceTo(so);l<t.near||l>t.far||e.push({distance:l,point:so.clone(),uv:vi.getInterpolation(so,Da,ao,La,Pd,mh,Dd,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fa(n,t,e,i,r,s){xs.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(oo.x=s*xs.x-r*xs.y,oo.y=r*xs.x+s*xs.y):oo.copy(xs),n.copy(t),n.x+=oo.x,n.y+=oo.y,n.applyMatrix4(Nf)}var gh=new L,i0=new L,r0=new jt,ln=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=gh.subVectors(i,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(gh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||r0.getNormalMatrix(t),r=this.coplanarPoint(gh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new Sr,s0=new mt(.5,.5),Ua=new L,Cs=class{constructor(t=new ln,e=new ln,i=new ln,r=new ln,s=new ln,o=new ln){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],m=s[9],x=s[10],p=s[11],M=s[12],_=s[13],y=s[14],P=s[15];if(r[0].setComponents(c-o,f-h,p-g,P-M).normalize(),r[1].setComponents(c+o,f+h,p+g,P+M).normalize(),r[2].setComponents(c+a,f+u,p+m,P+_).normalize(),r[3].setComponents(c-a,f-u,p-m,P-_).normalize(),i)r[4].setComponents(l,d,x,y).normalize(),r[5].setComponents(c-l,f-d,p-x,P-y).normalize();else if(r[4].setComponents(c-l,f-d,p-x,P-y).normalize(),e===kn)r[5].setComponents(c+l,f+d,p+x,P+y).normalize();else if(e===_o)r[5].setComponents(l,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);let e=s0.distanceTo(t.center);return _r.radius=.7071067811865476+e,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ua.x=r.normal.x>0?t.max.x:t.min.x,Ua.y=r.normal.y>0?t.max.y:t.min.y,Ua.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wn=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tl=new L,el=new L,Ld=new ve,lo=new Xi,Na=new Sr,xh=new L,Fd=new L,wi=class extends Xe{constructor(t=new we,e=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)tl.fromBufferAttribute(e,r-1),el.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=tl.distanceTo(el);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,t.ray.intersectsSphere(Na)===!1)return;Ld.copy(r).invert(),lo.copy(t.ray).applyMatrix4(Ld);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let m=f,x=g-1;m<x;m+=c){let p=h.getX(m),M=h.getX(m+1),_=Oa(this,t,lo,l,p,M,m);_&&e.push(_)}if(this.isLineLoop){let m=h.getX(g-1),x=h.getX(f),p=Oa(this,t,lo,l,m,x,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let m=f,x=g-1;m<x;m+=c){let p=Oa(this,t,lo,l,m,m+1,m);p&&e.push(p)}if(this.isLineLoop){let m=Oa(this,t,lo,l,g-1,f,g-1);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Oa(n,t,e,i,r,s,o){let a=n.geometry.attributes.position;if(tl.fromBufferAttribute(a,r),el.fromBufferAttribute(a,s),e.distanceSqToSegment(tl,el,xh,Fd)>i)return;xh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(xh);if(!(c<t.near||c>t.far))return{distance:c,point:Fd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ud=new L,Nd=new L,Co=class extends wi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ud.fromBufferAttribute(e,r),Nd.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ud.distanceTo(Nd);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tr=class extends cn{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ro=class extends cn{constructor(t,e,i=Qi,r,s,o,a=An,l=An,c,h=vs,u=1){if(h!==vs&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Io=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Po=class n extends we{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,m=[],x=i/2,p=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function M(){let y=new L,P=new L,C=0,U=(e-t)/i;for(let O=0;O<=s;O++){let T=[],w=O/s,S=w*(e-t)+t;for(let z=0;z<=r;z++){let H=z/r,X=H*l+a,K=Math.sin(X),Z=Math.cos(X);P.x=S*K,P.y=-w*i+x,P.z=S*Z,u.push(P.x,P.y,P.z),y.set(K,U,Z).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-w),T.push(g++)}m.push(T)}for(let O=0;O<r;O++)for(let T=0;T<s;T++){let w=m[T][O],S=m[T+1][O],z=m[T+1][O+1],H=m[T][O+1];(t>0||T!==0)&&(h.push(w,S,H),C+=3),(e>0||T!==s-1)&&(h.push(S,z,H),C+=3)}c.addGroup(p,C,0),p+=C}function _(y){let P=g,C=new mt,U=new L,O=0,T=y===!0?t:e,w=y===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,x*w,0),d.push(0,w,0),f.push(.5,.5),g++;let S=g;for(let z=0;z<=r;z++){let X=z/r*l+a,K=Math.cos(X),Z=Math.sin(X);U.x=T*Z,U.y=x*w,U.z=T*K,u.push(U.x,U.y,U.z),d.push(0,w,0),C.x=K*.5+.5,C.y=Z*.5*w+.5,f.push(C.x,C.y),g++}for(let z=0;z<r;z++){let H=P+z,X=S+z;y===!0?h.push(X,X+1,H):h.push(X+1,X,H),O+=3}c.addGroup(p,O,y===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nl=class n extends we{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};let s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new L,y=new L,P=new L;for(let C=0;C<e.length;C+=3)f(e[C+0],_),f(e[C+1],y),f(e[C+2],P),l(_,y,P,M)}function l(M,_,y,P){let C=P+1,U=[];for(let O=0;O<=C;O++){U[O]=[];let T=M.clone().lerp(y,O/C),w=_.clone().lerp(y,O/C),S=C-O;for(let z=0;z<=S;z++)z===0&&O===C?U[O][z]=T:U[O][z]=T.clone().lerp(w,z/S)}for(let O=0;O<C;O++)for(let T=0;T<2*(C-O)-1;T++){let w=Math.floor(T/2);T%2===0?(d(U[O][w+1]),d(U[O+1][w]),d(U[O][w])):(d(U[O][w+1]),d(U[O+1][w+1]),d(U[O+1][w]))}}function c(M){let _=new L;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(M),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){let M=new L;for(let _=0;_<s.length;_+=3){M.x=s[_+0],M.y=s[_+1],M.z=s[_+2];let y=x(M)/2/Math.PI+.5,P=p(M)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let _=o[M+0],y=o[M+2],P=o[M+4],C=Math.max(_,y,P),U=Math.min(_,y,P);C>.9&&U<.1&&(_<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,_){let y=M*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let M=new L,_=new L,y=new L,P=new L,C=new mt,U=new mt,O=new mt;for(let T=0,w=0;T<s.length;T+=9,w+=6){M.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),C.set(o[w+0],o[w+1]),U.set(o[w+2],o[w+3]),O.set(o[w+4],o[w+5]),P.copy(M).add(_).add(y).divideScalar(3);let S=x(P);m(C,w+0,M,S),m(U,w+2,_,S),m(O,w+4,y,S)}}function m(M,_,y,P){P<0&&M.x===1&&(o[_]=M.x-1),y.x===0&&y.z===0&&(o[_]=P/2/Math.PI+.5)}function x(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new mt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new L,r=[],s=[],o=[],a=new L,l=new ve;for(let f=0;f<=t;f++){let g=f/t;r[f]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(te(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(te(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends yn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let i=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends Rs{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return n+t*s+e*o+i*a}}}var za=new L,_h=new nu,yh=new nu,vh=new nu,rl=class extends yn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new L){let i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(za.subVectors(r[0],r[1]).add(r[0]),c=za);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(za.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),x<1e-4&&(x=m),_h.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,x),yh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,x),vh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,x)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),yh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(_h.calc(l),yh.calc(l),vh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Od(n,t,e,i,r){let s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function o0(n,t){let e=1-n;return e*e*t}function a0(n,t){return 2*(1-n)*n*t}function l0(n,t){return n*n*t}function po(n,t,e,i){return o0(n,t)+a0(n,e)+l0(n,i)}function c0(n,t){let e=1-n;return e*e*e*t}function h0(n,t){let e=1-n;return 3*e*e*n*t}function u0(n,t){return 3*(1-n)*n*n*t}function d0(n,t){return n*n*n*t}function mo(n,t,e,i,r){return c0(n,t)+h0(n,e)+u0(n,i)+d0(n,r)}var Do=class extends yn{constructor(t=new mt,e=new mt,i=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new mt){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(mo(t,r.x,s.x,o.x,a.x),mo(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends yn{constructor(t=new L,e=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new L){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(mo(t,r.x,s.x,o.x,a.x),mo(t,r.y,s.y,o.y,a.y),mo(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends yn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends yn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends yn{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(po(t,r.x,s.x,o.x),po(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends yn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(po(t,r.x,s.x,o.x),po(t,r.y,s.y,o.y),po(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Od(a,l.x,c.x,h.x,u.x),Od(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new mt().fromArray(r))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:rl,CubicBezierCurve:Do,CubicBezierCurve3:sl,EllipseCurve:Rs,LineCurve:Lo,LineCurve3:ol,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:al,SplineCurve:Uo}),ll=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new Ah[r.type]().fromJSON(r))}return this}},No=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Lo(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let s=new Fo(this.currentPoint.clone(),new mt(t,e),new mt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){let a=new Do(this.currentPoint.clone(),new mt(t,e),new mt(i,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Uo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){let c=new Rs(t,e,i,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Si=class extends No{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new No().fromJSON(r))}return this}};function f0(n,t,e=2){let i=t&&t.length,r=i?t[0]*e:n.length,s=Of(n,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=_0(n,t,s,e)),n.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<r;d+=e){let f=n[d],g=n[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Oo(s,o,e,a,l,c,0),o}function Of(n,t,e,i,r){let s;if(r===R0(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=zd(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=zd(o/i|0,n[o],n[o+1],s);return s&&Is(s,s.next)&&(ko(s),s=s.next),s}function Er(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Is(e,e.next)||Ce(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Oo(n,t,e,i,r,s,o){if(!n)return;!o&&s&&w0(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?m0(n,i,r,s):p0(n)){t.push(l.i,n.i,c.i),ko(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=g0(Er(n),t),Oo(n,t,e,i,r,s,2)):o===2&&x0(n,t,e,i,r,s):Oo(Er(n),t,e,i,r,s,1);break}}}function p0(n){let t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;let r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(r,s,o),u=Math.min(a,l,c),d=Math.max(r,s,o),f=Math.max(a,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ho(r,a,s,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function m0(n,t,e,i){let r=n.prev,s=n,o=n.next;if(Ce(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),m=Math.max(a,l,c),x=Math.max(h,u,d),p=Ch(f,g,t,e,i),M=Ch(m,x,t,e,i),_=n.prevZ,y=n.nextZ;for(;_&&_.z>=p&&y&&y.z<=M;){if(_.x>=f&&_.x<=m&&_.y>=g&&_.y<=x&&_!==r&&_!==o&&ho(a,h,l,u,c,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=m&&y.y>=g&&y.y<=x&&y!==r&&y!==o&&ho(a,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=m&&_.y>=g&&_.y<=x&&_!==r&&_!==o&&ho(a,h,l,u,c,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=m&&y.y>=g&&y.y<=x&&y!==r&&y!==o&&ho(a,h,l,u,c,d,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function g0(n,t){let e=n;do{let i=e.prev,r=e.next.next;!Is(i,r)&&kf(i,e,e.next,r)&&zo(i,r)&&zo(r,i)&&(t.push(i.i,e.i,r.i),ko(e),ko(e.next),e=n=r),e=e.next}while(e!==n);return Er(e)}function x0(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&E0(o,a)){let l=Bf(o,a);o=Er(o,o.next),l=Er(l,l.next),Oo(o,t,e,i,r,s,0),Oo(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function _0(n,t,e,i){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=Of(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(T0(c))}r.sort(y0);for(let s=0;s<r.length;s++)e=v0(r[s],e);return e}function y0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function v0(n,t){let e=b0(n,t);if(!e)return t;let i=Bf(e,n);return Er(i,i.next),Er(e,e.next)}function b0(n,t){let e=t,i=n.x,r=n.y,s=-1/0,o;if(Is(n,e))return e;do{if(Is(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&zf(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){let u=Math.abs(r-e.y)/(i-e.x);zo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&M0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function M0(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function w0(n,t,e,i){let r=n;do r.z===0&&(r.z=Ch(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,S0(r)}function S0(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Ch(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function T0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function zf(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function ho(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&zf(n,t,e,i,r,s,o,a)}function E0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!A0(n,t)&&(zo(n,t)&&zo(t,n)&&C0(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||Is(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Is(n,t){return n.x===t.x&&n.y===t.y}function kf(n,t,e,i){let r=Ba(Ce(n,t,e)),s=Ba(Ce(n,t,i)),o=Ba(Ce(e,i,n)),a=Ba(Ce(e,i,t));return!!(r!==s&&o!==a||r===0&&ka(n,e,t)||s===0&&ka(n,i,t)||o===0&&ka(e,n,i)||a===0&&ka(e,t,i))}function ka(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ba(n){return n>0?1:n<0?-1:0}function A0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&kf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function zo(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function C0(n,t){let e=n,i=!1,r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Bf(n,t){let e=Rh(n.i,n.x,n.y),i=Rh(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function zd(n,t,e,i){let r=Rh(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Ih=class{static triangulate(t,e,i=2){return f0(t,e,i)}},vr=class n{static area(t){let e=t.length,i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],r=[],s=[];kd(t),Bd(i,t);let o=t.length;e.forEach(kd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Bd(i,e[l]);let a=Ih.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function kd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var qi=class n extends we{constructor(t=new Si([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:I0,_,y=!1,P,C,U,O;p&&(_=p.getSpacedPoints(h),y=!0,d=!1,P=p.computeFrenetFrames(h,!1),C=new L,U=new L,O=new L),d||(x=0,f=0,g=0,m=0);let T=a.extractPoints(c),w=T.shape,S=T.holes;if(!vr.isClockWise(w)){w=w.reverse();for(let ot=0,tt=S.length;ot<tt;ot++){let J=S[ot];vr.isClockWise(J)&&(S[ot]=J.reverse())}}function H(ot){let J=10000000000000001e-36,rt=ot[0];for(let wt=1;wt<=ot.length;wt++){let gt=wt%ot.length,Et=ot[gt],qt=Et.x-rt.x,Yt=Et.y-rt.y,R=qt*qt+Yt*Yt,b=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(rt.x),Math.abs(rt.y)),$=J*b*b;if(R<=$){ot.splice(gt,1),wt--;continue}rt=Et}}H(w),S.forEach(H);let X=S.length,K=w;for(let ot=0;ot<X;ot++){let tt=S[ot];w=w.concat(tt)}function Z(ot,tt,J){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(tt,J)}let at=w.length;function q(ot,tt,J){let rt,wt,gt,Et=ot.x-tt.x,qt=ot.y-tt.y,Yt=J.x-ot.x,R=J.y-ot.y,b=Et*Et+qt*qt,$=Et*R-qt*Yt;if(Math.abs($)>Number.EPSILON){let st=Math.sqrt(b),pt=Math.sqrt(Yt*Yt+R*R),lt=tt.x-qt/st,kt=tt.y+Et/st,Tt=J.x-R/pt,Nt=J.y+Yt/pt,Ot=((Tt-lt)*R-(Nt-kt)*Yt)/(Et*R-qt*Yt);rt=lt+Et*Ot-ot.x,wt=kt+qt*Ot-ot.y;let yt=rt*rt+wt*wt;if(yt<=2)return new mt(rt,wt);gt=Math.sqrt(yt/2)}else{let st=!1;Et>Number.EPSILON?Yt>Number.EPSILON&&(st=!0):Et<-Number.EPSILON?Yt<-Number.EPSILON&&(st=!0):Math.sign(qt)===Math.sign(R)&&(st=!0),st?(rt=-qt,wt=Et,gt=Math.sqrt(b)):(rt=Et,wt=qt,gt=Math.sqrt(b/2))}return new mt(rt/gt,wt/gt)}let D=[];for(let ot=0,tt=K.length,J=tt-1,rt=ot+1;ot<tt;ot++,J++,rt++)J===tt&&(J=0),rt===tt&&(rt=0),D[ot]=q(K[ot],K[J],K[rt]);let A=[],v,N=D.concat();for(let ot=0,tt=X;ot<tt;ot++){let J=S[ot];v=[];for(let rt=0,wt=J.length,gt=wt-1,Et=rt+1;rt<wt;rt++,gt++,Et++)gt===wt&&(gt=0),Et===wt&&(Et=0),v[rt]=q(J[rt],J[gt],J[Et]);A.push(v),N=N.concat(v)}let Y;if(x===0)Y=vr.triangulateShape(K,S);else{let ot=[],tt=[];for(let J=0;J<x;J++){let rt=J/x,wt=f*Math.cos(rt*Math.PI/2),gt=g*Math.sin(rt*Math.PI/2)+m;for(let Et=0,qt=K.length;Et<qt;Et++){let Yt=Z(K[Et],D[Et],gt);ut(Yt.x,Yt.y,-wt),rt===0&&ot.push(Yt)}for(let Et=0,qt=X;Et<qt;Et++){let Yt=S[Et];v=A[Et];let R=[];for(let b=0,$=Yt.length;b<$;b++){let st=Z(Yt[b],v[b],gt);ut(st.x,st.y,-wt),rt===0&&R.push(st)}rt===0&&tt.push(R)}}Y=vr.triangulateShape(ot,tt)}let ht=Y.length,dt=g+m;for(let ot=0;ot<at;ot++){let tt=d?Z(w[ot],N[ot],dt):w[ot];y?(U.copy(P.normals[0]).multiplyScalar(tt.x),C.copy(P.binormals[0]).multiplyScalar(tt.y),O.copy(_[0]).add(U).add(C),ut(O.x,O.y,O.z)):ut(tt.x,tt.y,0)}for(let ot=1;ot<=h;ot++)for(let tt=0;tt<at;tt++){let J=d?Z(w[tt],N[tt],dt):w[tt];y?(U.copy(P.normals[ot]).multiplyScalar(J.x),C.copy(P.binormals[ot]).multiplyScalar(J.y),O.copy(_[ot]).add(U).add(C),ut(O.x,O.y,O.z)):ut(J.x,J.y,u/h*ot)}for(let ot=x-1;ot>=0;ot--){let tt=ot/x,J=f*Math.cos(tt*Math.PI/2),rt=g*Math.sin(tt*Math.PI/2)+m;for(let wt=0,gt=K.length;wt<gt;wt++){let Et=Z(K[wt],D[wt],rt);ut(Et.x,Et.y,u+J)}for(let wt=0,gt=S.length;wt<gt;wt++){let Et=S[wt];v=A[wt];for(let qt=0,Yt=Et.length;qt<Yt;qt++){let R=Z(Et[qt],v[qt],rt);y?ut(R.x,R.y+_[h-1].y,_[h-1].x+J):ut(R.x,R.y,u+J)}}}k(),V();function k(){let ot=r.length/3;if(d){let tt=0,J=at*tt;for(let rt=0;rt<ht;rt++){let wt=Y[rt];F(wt[2]+J,wt[1]+J,wt[0]+J)}tt=h+x*2,J=at*tt;for(let rt=0;rt<ht;rt++){let wt=Y[rt];F(wt[0]+J,wt[1]+J,wt[2]+J)}}else{for(let tt=0;tt<ht;tt++){let J=Y[tt];F(J[2],J[1],J[0])}for(let tt=0;tt<ht;tt++){let J=Y[tt];F(J[0]+at*h,J[1]+at*h,J[2]+at*h)}}i.addGroup(ot,r.length/3-ot,0)}function V(){let ot=r.length/3,tt=0;nt(K,tt),tt+=K.length;for(let J=0,rt=S.length;J<rt;J++){let wt=S[J];nt(wt,tt),tt+=wt.length}i.addGroup(ot,r.length/3-ot,1)}function nt(ot,tt){let J=ot.length;for(;--J>=0;){let rt=J,wt=J-1;wt<0&&(wt=ot.length-1);for(let gt=0,Et=h+x*2;gt<Et;gt++){let qt=at*gt,Yt=at*(gt+1),R=tt+rt+qt,b=tt+wt+qt,$=tt+wt+Yt,st=tt+rt+Yt;it(R,b,$,st)}}}function ut(ot,tt,J){l.push(ot),l.push(tt),l.push(J)}function F(ot,tt,J){Dt(ot),Dt(tt),Dt(J);let rt=r.length/3,wt=M.generateTopUV(i,r,rt-3,rt-2,rt-1);I(wt[0]),I(wt[1]),I(wt[2])}function it(ot,tt,J,rt){Dt(ot),Dt(tt),Dt(rt),Dt(tt),Dt(J),Dt(rt);let wt=r.length/3,gt=M.generateSideWallUV(i,r,wt-6,wt-3,wt-2,wt-1);I(gt[0]),I(gt[1]),I(gt[3]),I(gt[1]),I(gt[2]),I(gt[3])}function Dt(ot){r.push(l[ot*3+0]),r.push(l[ot*3+1]),r.push(l[ot*3+2])}function I(ot){s.push(ot.x),s.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return P0(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];i.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ah[r.type]().fromJSON(r)),new n(i,t.options)}},I0={generateTopUV:function(n,t,e,i,r){let s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],h=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(n,t,e,i,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[r*3],f=t[r*3+1],g=t[r*3+2],m=t[s*3],x=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(d,1-g),new mt(m,1-p)]:[new mt(a,1-l),new mt(h,1-u),new mt(f,1-g),new mt(x,1-p)]}};function P0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ar=class n extends nl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var qe=class n extends we{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],m=[],x=[];for(let p=0;p<h;p++){let M=p*d-o;for(let _=0;_<c;_++){let y=_*u-s;g.push(y,-M,0),m.push(0,0,1),x.push(_/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let _=M+c*p,y=M+c*(p+1),P=M+1+c*(p+1),C=M+1+c*p;f.push(_,y,C),f.push(y,P,C)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(m,3)),this.setAttribute("uv",new oe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Bo=class n extends we{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/r,f=new L,g=new mt;for(let m=0;m<=r;m++){for(let x=0;x<=i;x++){let p=s+x/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let m=0;m<r;m++){let x=m*(i+1);for(let p=0;p<i;p++){let M=p+x,_=M,y=M+i+1,P=M+i+2,C=M+1;a.push(_,y,C),a.push(y,P,C)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Vo=class n extends we{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],m=[],x=[];for(let p=0;p<=i;p++){let M=[],_=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){let C=P/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),x.push(C+y,1-_),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let _=h[p][M+1],y=h[p][M],P=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&f.push(_,y,C),(p!==i-1||l<Math.PI)&&f.push(y,P,C)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(m,3)),this.setAttribute("uv",new oe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ps=class n extends we{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let m=g/r*s,x=f/i*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(m),u.y=(t+e*Math.cos(x))*Math.sin(m),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let m=(r+1)*f+g-1,x=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,M=(r+1)*f+g;o.push(m,x,M),o.push(x,p,M)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Oe=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cl=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Cr=class extends Wn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Va(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function D0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Rr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends Rr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:s=t,a=2*e-i;break;case Th:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:o=t,l=2*i-e;break;case Th:o=1,l=i+r[1]-r[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(r-e),m=g*g,x=m*g,p=-d*x+2*d*m-d*g,M=(1+d)*x+(-1.5-2*d)*m+(-.5+d)*g+1,_=(-1-f)*x+(1.5+f)*m+.5*g,y=f*x-f*m;for(let P=0;P!==a;++P)s[P]=p*o[h+P]+M*o[c+P]+_*o[l+P]+y*o[u+P];return s}},dl=class extends Rr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},fl=class extends Rr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Va(e,this.TimeBufferType),this.values=Va(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Va(t.times,Array),values:Va(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case $a:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&D0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ha,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let m=e[u+g];if(m!==e[d+g]||m!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=$a;var Yi=class extends vn{constructor(t,e,i){super(t,e,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=go;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}};pl.prototype.ValueTypeName="color";var ml=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}};ml.prototype.ValueTypeName="number";var gl=class extends Rr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ho=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends vn{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=go;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends vn{constructor(t,e,i,r){super(t,e,i,r)}};xl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vf=new _l,yl=class{constructor(t){this.manager=t!==void 0?t:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ls=class extends Ds{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bh=new ve,Vd=new L,Hd=new L,vl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vd),Hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hd),e.updateMatrixWorld(),bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Gd=new ve,co=new L,Mh=new L,Ph=class extends vl{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),co.setFromMatrixPosition(t.matrixWorld),i.position.copy(co),Mh.copy(i.position),Mh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Mh),i.updateMatrixWorld(),r.makeTranslation(-co.x,-co.y,-co.z),Gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd,i.coordinateSystem,i.reversedDepth)}},oi=class extends Ds{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ir=class extends wo{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dh=class extends vl{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bl=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Go=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var iu="\\[\\]\\.:\\/",L0=new RegExp("["+iu+"]","g"),ru="[^"+iu+"]",F0="[^"+iu.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",ru),N0=/(WCOD+)?/.source.replace("WCOD",F0),O0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),k0=new RegExp("^"+U0+N0+O0+z0+"$"),B0=["material","materials","bones","map"],Lh=class{constructor(t,e,i){let r=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(t){let e=k0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);B0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Lh;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lb=new Float32Array(1);var Wd=new ve,Wo=class{constructor(t,e,i=0,r=1/0){this.ray=new Xi(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wd),this}intersectObject(t,e=!0,i=[]){return Fh(t,this,i,e),i.sort(Xd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Fh(t[r],this,i,e);return i.sort(Xd),i}};function Xd(n,t){return n.distance-t.distance}function Fh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Fh(s[o],t,e,!0)}}var Fs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xo=class extends Co{constructor(t=10,e=10,i=4473924,r=8947848){i=new Wt(i),r=new Wt(r);let s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let m=d===s?i:r;m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3}let h=new we;h.setAttribute("position",new oe(l,3)),h.setAttribute("color",new oe(c,3));let u=new Wn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var $o=class extends Co{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new we;s.setIndex(new rn(i,1)),s.setAttribute("position",new oe(r,3)),super(s,new Wn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var qo=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function su(n,t,e,i){let r=V0(i);switch(e){case $h:return n*t;case Yh:return n*t/r.components*r.byteLength;case Nl:return n*t/r.components*r.byteLength;case Zh:return n*t*2/r.components*r.byteLength;case Ol:return n*t*2/r.components*r.byteLength;case qh:return n*t*3/r.components*r.byteLength;case Rn:return n*t*4/r.components*r.byteLength;case zl:return n*t*4/r.components*r.byteLength;case Ko:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Hl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Vl:return Math.max(n,8)*Math.max(t,8)/2;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V0(n){switch(n){case Xn:case Hh:return{byteLength:1,components:1};case Us:case Gh:case Ns:return{byteLength:2,components:1};case Fl:case Ul:return{byteLength:2,components:4};case Qi:case Ll:case li:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function up(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function G0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],m=u[f];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++d,u[d]=m)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let m=u[f];n.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,rg=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fg=`#define PI 3.141592653589793
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
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Kx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,x_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:$0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:K0,batching_pars_vertex:j0,batching_vertex:Q0,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:rg,clipping_planes_fragment:sg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:ag,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:dg,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:_g,emissivemap_pars_fragment:yg,colorspace_fragment:vg,colorspace_pars_fragment:bg,envmap_fragment:Mg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Sg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Ng,envmap_vertex:Eg,fog_vertex:Ag,fog_pars_vertex:Cg,fog_fragment:Rg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Fg,lights_pars_begin:Ug,lights_toon_fragment:Og,lights_toon_pars_fragment:zg,lights_phong_fragment:kg,lights_phong_pars_fragment:Bg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Kg,map_particle_fragment:jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:tx,metalnessmap_pars_fragment:ex,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:rx,morphtarget_pars_vertex:sx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:xx,packing:_x,premultiplied_alpha_fragment:yx,project_vertex:vx,dithering_fragment:bx,dithering_pars_fragment:Mx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Ax,shadowmask_pars_fragment:Cx,skinbase_vertex:Rx,skinning_pars_vertex:Ix,skinning_vertex:Px,skinnormal_vertex:Dx,specularmap_fragment:Lx,specularmap_pars_fragment:Fx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Nx,transmission_fragment:Ox,transmission_pars_fragment:zx,uv_pars_fragment:kx,uv_pars_vertex:Bx,uv_vertex:Vx,worldpos_vertex:Hx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:$x,cube_vert:qx,cube_frag:Yx,depth_vert:Zx,depth_frag:Jx,distanceRGBA_vert:Kx,distanceRGBA_frag:jx,equirect_vert:Qx,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:x_,points_frag:__,shadow_vert:y_,shadow_frag:v_,sprite_vert:b_,sprite_frag:M_},Ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ci={basic:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Qe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Qe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Qe([Ct.points,Ct.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Qe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Qe([Ct.common,Ct.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Qe([Ct.sprite,Ct.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Qe([Ct.common,Ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Qe([Ct.lights,Ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ci.physical={uniforms:Qe([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var fc={r:0,b:0,g:0},Ur=new Hn,w_=new ve;function S_(n,t,e,i,r,s,o){let a=new Wt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function m(_){let y=!1,P=g(_);P===null?p(a,l):P&&P.isColor&&(p(P,1),y=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,y){let P=g(y);P&&(P.isCubeTexture||P.mapping===Zo)?(h===void 0&&(h=new ie(new si(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Fr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ur.copy(y.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(Ur)),h.material.toneMapped=re.getTransfer(P.colorSpace)!==fe,(u!==P||d!==P.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ie(new qe(2,2),new Gn({name:"BackgroundMaterial",uniforms:Fr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(P.colorSpace)!==fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=P,d=P.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(fc,eu(n)),i.buffers.color.setClear(fc.r,fc.g,fc.b,y,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:m,addToRenderList:x,dispose:M}}function T_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(w,S,z,H,X){let K=!1,Z=u(H,z,S);s!==Z&&(s=Z,c(s.object)),K=f(w,H,z,X),K&&g(w,H,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(w,S,z,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function u(w,S,z){let H=z.wireframe===!0,X=i[w.id];X===void 0&&(X={},i[w.id]=X);let K=X[S.id];K===void 0&&(K={},X[S.id]=K);let Z=K[H];return Z===void 0&&(Z=d(l()),K[H]=Z),Z}function d(w){let S=[],z=[],H=[];for(let X=0;X<e;X++)S[X]=0,z[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:H,object:w,attributes:{},index:null}}function f(w,S,z,H){let X=s.attributes,K=S.attributes,Z=0,at=z.getAttributes();for(let q in at)if(at[q].location>=0){let A=X[q],v=K[q];if(v===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(v=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(v=w.instanceColor)),A===void 0||A.attribute!==v||v&&A.data!==v.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function g(w,S,z,H){let X={},K=S.attributes,Z=0,at=z.getAttributes();for(let q in at)if(at[q].location>=0){let A=K[q];A===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(A=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(A=w.instanceColor));let v={};v.attribute=A,A&&A.data&&(v.data=A.data),X[q]=v,Z++}s.attributes=X,s.attributesNum=Z,s.index=H}function m(){let w=s.newAttributes;for(let S=0,z=w.length;S<z;S++)w[S]=0}function x(w){p(w,0)}function p(w,S){let z=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;z[w]=1,H[w]===0&&(n.enableVertexAttribArray(w),H[w]=1),X[w]!==S&&(n.vertexAttribDivisor(w,S),X[w]=S)}function M(){let w=s.newAttributes,S=s.enabledAttributes;for(let z=0,H=S.length;z<H;z++)S[z]!==w[z]&&(n.disableVertexAttribArray(z),S[z]=0)}function _(w,S,z,H,X,K,Z){Z===!0?n.vertexAttribIPointer(w,S,z,X,K):n.vertexAttribPointer(w,S,z,H,X,K)}function y(w,S,z,H){m();let X=H.attributes,K=z.getAttributes(),Z=S.defaultAttributeValues;for(let at in K){let q=K[at];if(q.location>=0){let D=X[at];if(D===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),D!==void 0){let A=D.normalized,v=D.itemSize,N=t.get(D);if(N===void 0)continue;let Y=N.buffer,ht=N.type,dt=N.bytesPerElement,k=ht===n.INT||ht===n.UNSIGNED_INT||D.gpuType===Ll;if(D.isInterleavedBufferAttribute){let V=D.data,nt=V.stride,ut=D.offset;if(V.isInstancedInterleavedBuffer){for(let F=0;F<q.locationSize;F++)p(q.location+F,V.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let F=0;F<q.locationSize;F++)x(q.location+F);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let F=0;F<q.locationSize;F++)_(q.location+F,v/q.locationSize,ht,A,nt*dt,(ut+v/q.locationSize*F)*dt,k)}else{if(D.isInstancedBufferAttribute){for(let V=0;V<q.locationSize;V++)p(q.location+V,D.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let V=0;V<q.locationSize;V++)x(q.location+V);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let V=0;V<q.locationSize;V++)_(q.location+V,v/q.locationSize,ht,A,v*dt,v/q.locationSize*V*dt,k)}}else if(Z!==void 0){let A=Z[at];if(A!==void 0)switch(A.length){case 2:n.vertexAttrib2fv(q.location,A);break;case 3:n.vertexAttrib3fv(q.location,A);break;case 4:n.vertexAttrib4fv(q.location,A);break;default:n.vertexAttrib1fv(q.location,A)}}}}M()}function P(){O();for(let w in i){let S=i[w];for(let z in S){let H=S[z];for(let X in H)h(H[X].object),delete H[X];delete S[z]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;let S=i[w.id];for(let z in S){let H=S[z];for(let X in H)h(H[X].object),delete H[X];delete S[z]}delete i[w.id]}function U(w){for(let S in i){let z=i[S];if(z[w.id]===void 0)continue;let H=z[w.id];for(let X in H)h(H[X].object),delete H[X];delete z[w.id]}}function O(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:x,disableUnusedAttributes:M}}function E_(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m]*d[m];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Rn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let O=U===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Xn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==li&&!O)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:C}}function C_(n){let t=this,e=null,i=0,r=!1,s=!1,o=new ln,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!x)s?h(null):c();else{let M=s?0:i,_=M*4,y=p.clippingState||null;l.value=y,y=h(g,d,_,f);for(let P=0;P!==_;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let m=u!==null?u.length:0,x=null;if(m!==0){if(x=l.value,g!==!0||x===null){let p=f+m*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,y=f;_!==m;++_,y+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(x,y),x[y+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}function R_(n){let t=new WeakMap;function e(o,a){return a===Il?o.mapping=Dr:a===Pl&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Il||a===Pl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ja(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Vs=4,Hf=[.125,.215,.35,.446,.526,.582],zr=20,ou=new Ir,Gf=new Wt,au=null,lu=0,cu=0,hu=!1,Or=(1+Math.sqrt(5))/2,Bs=1/Or,Wf=[new L(-Or,Bs,0),new L(Or,Bs,0),new L(-Bs,0,Or),new L(Bs,0,Or),new L(0,Or,-Bs),new L(0,Or,Bs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],I_=new L,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=I_}=s;au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(au,lu,cu),this._renderer.xr.enabled=hu,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ns,format:Rn,colorSpace:wr,depthBuffer:!1},r=Xf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(s)),this._blurMaterial=D_(s,t,e)}return r}_compileMaterial(t){let e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,ou)}_sceneToCubeUV(t,e,i,r,s){let l=new We(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Gf),u.toneMapping=Ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let m=new $i({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new ie(new si,m),p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Gf),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let P=this._cubeSize;pc(r,y*P,_>2?P:0,P,P),u.setRenderTarget(r),p&&u.render(x,l),u.render(t,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Dr||t.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;pc(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ou)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wf[(r-s-1)%Wf.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ie(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zr-1),m=s/g,x=isFinite(s)?1+Math.floor(h*m):zr;x>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zr}`);let p=[],M=0;for(let U=0;U<zr;++U){let O=U/m,T=Math.exp(-O*O/2);p.push(T),U===0?M+=T:U<x&&(M+=2*T)}for(let U=0;U<p.length;U++)p[U]=p[U]/M;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let y=this._sizeLods[r],P=3*y*(r>_-Vs?r-_+Vs:0),C=4*(this._cubeSize-y);pc(e,P,C,3*y,2*y),l.setRenderTarget(e),l.render(u,ou)}};function P_(n){let t=[],e=[],i=[],r=n,s=n-Vs+1+Hf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Vs?l=Hf[o-n+Vs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,x=2,p=1,M=new Float32Array(m*g*f),_=new Float32Array(x*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let U=C%3*2/3-1,O=C>2?0:-1,T=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];M.set(T,m*g*C),_.set(d,x*g*C);let w=[C,C,C,C,C,C];y.set(w,p*g*C)}let P=new we;P.setAttribute("position",new rn(M,m)),P.setAttribute("uv",new rn(_,x)),P.setAttribute("faceIndex",new rn(y,p)),t.push(P),r>Vs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xf(n,t,e){let i=new ii(n,t,e);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function D_(n,t,e){let i=new Float32Array(zr),r=new L(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function $f(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function qf(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function L_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Il||l===Pl,h=l===Dr||l===Lr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gc(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(e===null&&(e=new gc(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function F_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Ms("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U_(n,t,e,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,m=0;if(f!==null){let M=f.array;m=f.version;for(let _=0,y=M.length;_<y;_+=3){let P=M[_+0],C=M[_+1],U=M[_+2];d.push(P,C,C,U,U,P)}}else if(g!==void 0){let M=g.array;m=g.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let P=_+0,C=_+1,U=_+2;d.push(P,C,C,U,U,P)}}else return;let x=new(tu(d)?Mo:bo)(d,1);x.version=m;let p=s.get(u);p&&t.remove(p),s.set(u,x)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function N_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let x=0;for(let p=0;p<g;p++)x+=f[p];e.update(x,i,1)}function u(d,f,g,m){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],m[p]);else{x.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,m,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*m[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function O_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function z_(n,t,e){let i=new WeakMap,r=new de;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let y=a.attributes.position.count*_,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*P*4*u),U=new vo(C,y,P,u);U.type=li,U.needsUpdate=!0;let O=_*4;for(let w=0;w<u;w++){let S=x[w],z=p[w],H=M[w],X=y*P*4*w;for(let K=0;K<S.count;K++){let Z=K*O;f===!0&&(r.fromBufferAttribute(S,K),C[X+Z+0]=r.x,C[X+Z+1]=r.y,C[X+Z+2]=r.z,C[X+Z+3]=0),g===!0&&(r.fromBufferAttribute(z,K),C[X+Z+4]=r.x,C[X+Z+5]=r.y,C[X+Z+6]=r.z,C[X+Z+7]=0),m===!0&&(r.fromBufferAttribute(H,K),C[X+Z+8]=r.x,C[X+Z+9]=r.y,C[X+Z+10]=r.z,C[X+Z+11]=H.itemSize===4?r.w:1)}}d={count:u,texture:U,size:new mt(y,P)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function k_(n,t,e,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var dp=new cn,Yf=new Ro(1,1),fp=new vo,pp=new Ja,mp=new So,Zf=[],Jf=[],Kf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function Gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=Zf[r];if(s===void 0&&(s=new Float32Array(r),Zf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xc(n,t){let e=Jf[t];e===void 0&&(e=new Int32Array(t),Jf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function B_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function V_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function G_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function W_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),Be(e,i)}}function X_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),Be(e,i)}}function $_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Kf.set(i),n.uniformMatrix4fv(this.addr,!1,Kf),Be(e,i)}}function q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function K_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function j_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Q_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function ey(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yf.compareFunction=Kh,s=Yf):s=dp,e.setTexture2D(t||s,r)}function ny(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||pp,r)}function iy(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||mp,r)}function ry(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||fp,r)}function sy(n){switch(n){case 5126:return B_;case 35664:return V_;case 35665:return H_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return $_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return j_;case 36295:return Q_;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}function oy(n,t){n.uniform1fv(this.addr,t)}function ay(n,t){let e=Gs(t,this.size,2);n.uniform2fv(this.addr,e)}function ly(n,t){let e=Gs(t,this.size,3);n.uniform3fv(this.addr,e)}function cy(n,t){let e=Gs(t,this.size,4);n.uniform4fv(this.addr,e)}function hy(n,t){let e=Gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uy(n,t){let e=Gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function dy(n,t){let e=Gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function fy(n,t){n.uniform1iv(this.addr,t)}function py(n,t){n.uniform2iv(this.addr,t)}function my(n,t){n.uniform3iv(this.addr,t)}function gy(n,t){n.uniform4iv(this.addr,t)}function xy(n,t){n.uniform1uiv(this.addr,t)}function _y(n,t){n.uniform2uiv(this.addr,t)}function yy(n,t){n.uniform3uiv(this.addr,t)}function vy(n,t){n.uniform4uiv(this.addr,t)}function by(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||dp,s[o])}function My(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||pp,s[o])}function wy(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||mp,s[o])}function Sy(n,t,e){let i=this.cache,r=t.length,s=xc(e,r);ke(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||fp,s[o])}function Ty(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return _y;case 36295:return yy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Sy}}var du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sy(e.type)}},fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ty(e.type)}},pu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},uu=/(\w+)(\])?(\[|\.)?/g;function tp(n,t){n.seq.push(t),n.map[t.id]=t}function Ey(n,t,e){let i=n.name,r=i.length;for(uu.lastIndex=0;;){let s=uu.exec(i),o=uu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tp(e,c===void 0?new du(a,n,t):new fu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new pu(a),tp(e,u)),e=u}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ey(s,o,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function ep(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Ay=37297,Cy=0;function Ry(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var np=new jt;function Iy(n){re._getMatrix(np,re.workingColorSpace,n);let t=`mat3( ${np.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case xo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ip(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ry(n.getShaderSource(t),a)}else return s}function Py(n,t){let e=Iy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dy(n,t){let e;switch(t){case mf:e="Linear";break;case gf:e="Reinhard";break;case xf:e="Cineon";break;case Yo:e="ACESFilmic";break;case yf:e="AgX";break;case vf:e="Neutral";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new L;function Ly(){re.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Uy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ny(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ea(n){return n!==""}function rp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(n){return n.replace(Oy,ky)}var zy=new Map;function ky(n,t){let e=ee[t];if(e===void 0){let i=zy.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return mu(e)}var By=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function op(n){return n.replace(By,Vy)}function Vy(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ap(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Hy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Gy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Lr:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function Xy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case pf:t="ENVMAP_BLENDING_ADD";break}return t}function $y(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qy(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Hy(e),c=Gy(e),h=Wy(e),u=Xy(e),d=$y(e),f=Fy(e),g=Uy(s),m=r.createProgram(),x,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(x=[ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Dy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Py("linearToOutputTexel",e.outputColorSpace),Ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),o=mu(o),o=rp(o,e),o=sp(o,e),a=mu(a),a=rp(a,e),a=sp(a,e),o=op(o),a=op(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+x+o,y=M+p+a,P=ep(r,r.VERTEX_SHADER,_),C=ep(r,r.FRAGMENT_SHADER,y);r.attachShader(m,P),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(S){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(m)||"",H=r.getShaderInfoLog(P)||"",X=r.getShaderInfoLog(C)||"",K=z.trim(),Z=H.trim(),at=X.trim(),q=!0,D=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,P,C);else{let A=ip(r,P,"vertex"),v=ip(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+K+`
`+A+`
`+v)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Z===""||at==="")&&(D=!1);D&&(S.diagnostics={runnable:q,programLog:K,vertexShader:{log:Z,prefix:x},fragmentShader:{log:at,prefix:p}})}r.deleteShader(P),r.deleteShader(C),O=new Hs(r,m),T=Ny(r,m)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(m,Ay)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cy++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=C,this}var Yy=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xu(t),e.set(t,i)),i}},xu=class{constructor(t){this.id=Yy++,this.code=t,this.usedTimes=0}};function Zy(n,t,e,i,r,s,o){let a=new Ss,l=new gu,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,w,S,z,H){let X=z.fog,K=H.geometry,Z=T.isMeshStandardMaterial?z.environment:null,at=(T.isMeshStandardMaterial?e:t).get(T.envMap||Z),q=at&&at.mapping===Zo?at.image.height:null,D=g[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let A=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,v=A!==void 0?A.length:0,N=0;K.morphAttributes.position!==void 0&&(N=1),K.morphAttributes.normal!==void 0&&(N=2),K.morphAttributes.color!==void 0&&(N=3);let Y,ht,dt,k;if(D){let le=ci[D];Y=le.vertexShader,ht=le.fragmentShader}else Y=T.vertexShader,ht=T.fragmentShader,l.update(T),dt=l.getVertexShaderID(T),k=l.getFragmentShaderID(T);let V=n.getRenderTarget(),nt=n.state.buffers.depth.getReversed(),ut=H.isInstancedMesh===!0,F=H.isBatchedMesh===!0,it=!!T.map,Dt=!!T.matcap,I=!!at,ot=!!T.aoMap,tt=!!T.lightMap,J=!!T.bumpMap,rt=!!T.normalMap,wt=!!T.displacementMap,gt=!!T.emissiveMap,Et=!!T.metalnessMap,qt=!!T.roughnessMap,Yt=T.anisotropy>0,R=T.clearcoat>0,b=T.dispersion>0,$=T.iridescence>0,st=T.sheen>0,pt=T.transmission>0,lt=Yt&&!!T.anisotropyMap,kt=R&&!!T.clearcoatMap,Tt=R&&!!T.clearcoatNormalMap,Nt=R&&!!T.clearcoatRoughnessMap,Ot=$&&!!T.iridescenceMap,yt=$&&!!T.iridescenceThicknessMap,Pt=st&&!!T.sheenColorMap,Xt=st&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,Rt=!!T.specularColorMap,Qt=!!T.specularIntensityMap,B=pt&&!!T.transmissionMap,Mt=pt&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,vt=T.alphaTest>0,ft=!!T.alphaHash,zt=!!T.extensions,Jt=Ei;T.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Jt=n.toneMapping);let ye={shaderID:D,shaderType:T.type,shaderName:T.name,vertexShader:Y,fragmentShader:ht,defines:T.defines,customVertexShaderID:dt,customFragmentShaderID:k,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:F,batchingColor:F&&H._colorsTexture!==null,instancing:ut,instancingColor:ut&&H.instanceColor!==null,instancingMorph:ut&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wr,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Dt,envMap:I,envMapMode:I&&at.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:tt,bumpMap:J,normalMap:rt,displacementMap:d&&wt,emissiveMap:gt,normalMapObjectSpace:rt&&T.normalMapType===Sf,normalMapTangentSpace:rt&&T.normalMapType===Jh,metalnessMap:Et,roughnessMap:qt,anisotropy:Yt,anisotropyMap:lt,clearcoat:R,clearcoatMap:kt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Nt,dispersion:b,iridescence:$,iridescenceMap:Ot,iridescenceThicknessMap:yt,sheen:st,sheenColorMap:Pt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:Rt,specularIntensityMap:Qt,transmission:pt,transmissionMap:B,thicknessMap:Mt,gradientMap:At,opaque:T.transparent===!1&&T.blending===br&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:vt,alphaHash:ft,combine:T.combine,mapUv:it&&m(T.map.channel),aoMapUv:ot&&m(T.aoMap.channel),lightMapUv:tt&&m(T.lightMap.channel),bumpMapUv:J&&m(T.bumpMap.channel),normalMapUv:rt&&m(T.normalMap.channel),displacementMapUv:wt&&m(T.displacementMap.channel),emissiveMapUv:gt&&m(T.emissiveMap.channel),metalnessMapUv:Et&&m(T.metalnessMap.channel),roughnessMapUv:qt&&m(T.roughnessMap.channel),anisotropyMapUv:lt&&m(T.anisotropyMap.channel),clearcoatMapUv:kt&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&m(T.sheenRoughnessMap.channel),specularMapUv:Bt&&m(T.specularMap.channel),specularColorMapUv:Rt&&m(T.specularColorMap.channel),specularIntensityMapUv:Qt&&m(T.specularIntensityMap.channel),transmissionMapUv:B&&m(T.transmissionMap.channel),thicknessMapUv:Mt&&m(T.thicknessMap.channel),alphaMapUv:Ft&&m(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(rt||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(it||Ft),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:v,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&S.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&re.getTransfer(T.map.colorSpace)===fe,decodeVideoTextureEmissive:gt&&T.emissiveMap.isVideoTexture===!0&&re.getTransfer(T.emissiveMap.colorSpace)===fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Se,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||F)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let S in T.defines)w.push(S),w.push(T.defines[S]);return T.isRawShaderMaterial===!1&&(M(w,T),_(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function M(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function _(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let w=g[T.type],S;if(w){let z=ci[w];S=Uf.clone(z.uniforms)}else S=T.uniforms;return S}function P(T,w){let S;for(let z=0,H=h.length;z<H;z++){let X=h[z];if(X.cacheKey===w){S=X,++S.usedTimes;break}}return S===void 0&&(S=new qy(n,w,T,s),h.push(S)),S}function C(T){if(--T.usedTimes===0){let w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),T.destroy()}}function U(T){l.remove(T)}function O(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:U,programs:h,dispose:O}}function Jy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Ky(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function lp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cp(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,d,f,g,m,x){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=m,p.group=x),t++,p}function a(u,d,f,g,m,x){let p=o(u,d,f,g,m,x);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function l(u,d,f,g,m,x){let p=o(u,d,f,g,m,x);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Ky),i.length>1&&i.sort(d||lp),r.length>1&&r.sort(d||lp)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function jy(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new cp,n.set(i,[o])):r>=s.length?(o=new cp,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Wt};break;case"SpotLight":e={position:new L,direction:new L,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function tv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ev=0;function nv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function iv(n){let t=new Qy,e=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new ve,o=new ve;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,m=0,x=0,p=0,M=0,_=0,y=0,P=0,C=0,U=0;c.sort(nv);for(let T=0,w=c.length;T<w;T++){let S=c[T],z=S.color,H=S.intensity,X=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(S.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(S.sh.coefficients[Z],H);U++}else if(S.isDirectionalLight){let Z=t.get(S);if(Z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let at=S.shadow,q=e.get(S);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=S.shadow.matrix,M++}i.directional[f]=Z,f++}else if(S.isSpotLight){let Z=t.get(S);Z.position.setFromMatrixPosition(S.matrixWorld),Z.color.copy(z).multiplyScalar(H),Z.distance=X,Z.coneCos=Math.cos(S.angle),Z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),Z.decay=S.decay,i.spot[m]=Z;let at=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,at.updateMatrices(S),S.castShadow&&C++),i.spotLightMatrix[m]=at.matrix,S.castShadow){let q=e.get(S);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,i.spotShadow[m]=q,i.spotShadowMap[m]=K,y++}m++}else if(S.isRectAreaLight){let Z=t.get(S);Z.color.copy(z).multiplyScalar(H),Z.halfWidth.set(S.width*.5,0,0),Z.halfHeight.set(0,S.height*.5,0),i.rectArea[x]=Z,x++}else if(S.isPointLight){let Z=t.get(S);if(Z.color.copy(S.color).multiplyScalar(S.intensity),Z.distance=S.distance,Z.decay=S.decay,S.castShadow){let at=S.shadow,q=e.get(S);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,q.shadowCameraNear=at.camera.near,q.shadowCameraFar=at.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=Z,g++}else if(S.isHemisphereLight){let Z=t.get(S);Z.skyColor.copy(S.color).multiplyScalar(H),Z.groundColor.copy(S.groundColor).multiplyScalar(H),i.hemi[p]=Z,p++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==m||O.rectAreaLength!==x||O.hemiLength!==p||O.numDirectionalShadows!==M||O.numPointShadows!==_||O.numSpotShadows!==y||O.numSpotMaps!==P||O.numLightProbes!==U)&&(i.directional.length=f,i.spot.length=m,i.rectArea.length=x,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,O.directionalLength=f,O.pointLength=g,O.spotLength=m,O.rectAreaLength=x,O.hemiLength=p,O.numDirectionalShadows=M,O.numPointShadows=_,O.numSpotShadows=y,O.numSpotMaps=P,O.numLightProbes=U,i.version=ev++)}function l(c,h){let u=0,d=0,f=0,g=0,m=0,x=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),u++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function hp(n){let t=new iv(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rv(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new hp(n),t.set(r,[a])):s>=o.length?(a=new hp(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`;function av(n,t,e){let i=new Cs,r=new mt,s=new mt,o=new de,a=new cl({depthPacking:wf}),l=new hl,c={},h=e.maxTextureSize,u={[Mi]:sn,[sn]:Mi,[Se]:Se},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:sv,fragmentShader:ov}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ie(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let p=this.type;this.render=function(C,U,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;let T=n.getRenderTarget(),w=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=p!==ai&&this.type===ai,X=p===ai&&this.type!==ai;for(let K=0,Z=C.length;K<Z;K++){let at=C[K],q=at.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let D=q.getFrameExtents();if(r.multiply(D),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,q.mapSize.y=s.y)),q.map===null||H===!0||X===!0){let v=this.type!==ai?{minFilter:An,magFilter:An}:{};q.map!==null&&q.map.dispose(),q.map=new ii(r.x,r.y,v),q.map.texture.name=at.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let A=q.getViewportCount();for(let v=0;v<A;v++){let N=q.getViewport(v);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),z.viewport(o),q.updateMatrices(at,v),i=q.getFrustum(),y(U,O,q.camera,at,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&M(q,O),q.needsUpdate=!1}p=this.type,x.needsUpdate=!1,n.setRenderTarget(T,w,S)};function M(C,U){let O=t.update(m);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ii(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(U,null,O,d,m,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(U,null,O,f,m,null)}function _(C,U,O,T){let w=null,S=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)w=S;else if(w=O.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let z=w.uuid,H=U.uuid,X=c[z];X===void 0&&(X={},c[z]=X);let K=X[H];K===void 0&&(K=w.clone(),X[H]=K,U.addEventListener("dispose",P)),w=K}if(w.visible=U.visible,w.wireframe=U.wireframe,T===ai?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:u[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let z=n.properties.get(w);z.light=O}return w}function y(C,U,O,T,w){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let H=t.update(C),X=C.material;if(Array.isArray(X)){let K=H.groups;for(let Z=0,at=K.length;Z<at;Z++){let q=K[Z],D=X[q.materialIndex];if(D&&D.visible){let A=_(C,D,T,w);C.onBeforeShadow(n,C,U,O,H,A,q),n.renderBufferDirect(O,null,H,A,C,q),C.onAfterShadow(n,C,U,O,H,A,q)}}}else if(X.visible){let K=_(C,X,T,w);C.onBeforeShadow(n,C,U,O,H,K,null),n.renderBufferDirect(O,null,H,K,C,null),C.onAfterShadow(n,C,U,O,H,K,null)}}let z=C.children;for(let H=0,X=z.length;H<X;H++)y(z[H],U,O,T,w)}function P(C){C.target.removeEventListener("dispose",P);for(let O in c){let T=c[O],w=C.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var lv={[wl]:Sl,[Tl]:Cl,[El]:Rl,[Mr]:Al,[Sl]:wl,[Cl]:Tl,[Rl]:El,[Al]:Mr};function cv(n,t){function e(){let B=!1,Mt=new de,At=null,Ft=new de(0,0,0,0);return{setMask:function(vt){At!==vt&&!B&&(n.colorMask(vt,vt,vt,vt),At=vt)},setLocked:function(vt){B=vt},setClear:function(vt,ft,zt,Jt,ye){ye===!0&&(vt*=Jt,ft*=Jt,zt*=Jt),Mt.set(vt,ft,zt,Jt),Ft.equals(Mt)===!1&&(n.clearColor(vt,ft,zt,Jt),Ft.copy(Mt))},reset:function(){B=!1,At=null,Ft.set(-1,0,0,0)}}}function i(){let B=!1,Mt=!1,At=null,Ft=null,vt=null;return{setReversed:function(ft){if(Mt!==ft){let zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ft;let Jt=vt;vt=null,this.setClear(Jt)}},getReversed:function(){return Mt},setTest:function(ft){ft?V(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(ft){At!==ft&&!B&&(n.depthMask(ft),At=ft)},setFunc:function(ft){if(Mt&&(ft=lv[ft]),Ft!==ft){switch(ft){case wl:n.depthFunc(n.NEVER);break;case Sl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case Al:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ft=ft}},setLocked:function(ft){B=ft},setClear:function(ft){vt!==ft&&(Mt&&(ft=1-ft),n.clearDepth(ft),vt=ft)},reset:function(){B=!1,At=null,Ft=null,vt=null,Mt=!1}}}function r(){let B=!1,Mt=null,At=null,Ft=null,vt=null,ft=null,zt=null,Jt=null,ye=null;return{setTest:function(le){B||(le?V(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(le){Mt!==le&&!B&&(n.stencilMask(le),Mt=le)},setFunc:function(le,pi,ti){(At!==le||Ft!==pi||vt!==ti)&&(n.stencilFunc(le,pi,ti),At=le,Ft=pi,vt=ti)},setOp:function(le,pi,ti){(ft!==le||zt!==pi||Jt!==ti)&&(n.stencilOp(le,pi,ti),ft=le,zt=pi,Jt=ti)},setLocked:function(le){B=le},setClear:function(le){ye!==le&&(n.clearStencil(le),ye=le)},reset:function(){B=!1,Mt=null,At=null,Ft=null,vt=null,ft=null,zt=null,Jt=null,ye=null}}}let s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,m=!1,x=null,p=null,M=null,_=null,y=null,P=null,C=null,U=new Wt(0,0,0),O=0,T=!1,w=null,S=null,z=null,H=null,X=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,at=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=at>=2);let D=null,A={},v=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),Y=new de().fromArray(v),ht=new de().fromArray(N);function dt(B,Mt,At,Ft){let vt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(B,ft),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<At;zt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,Ft,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(Mt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return ft}let k={};k[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(Mr),J(!1),rt(Uh),V(n.CULL_FACE),ot(Ti);function V(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function nt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function ut(B,Mt){return u[B]!==Mt?(n.bindFramebuffer(B,Mt),u[B]=Mt,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function F(B,Mt){let At=f,Ft=!1;if(B){At=d.get(Mt),At===void 0&&(At=[],d.set(Mt,At));let vt=B.textures;if(At.length!==vt.length||At[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,zt=vt.length;ft<zt;ft++)At[ft]=n.COLOR_ATTACHMENT0+ft;At.length=vt.length,Ft=!0}}else At[0]!==n.BACK&&(At[0]=n.BACK,Ft=!0);Ft&&n.drawBuffers(At)}function it(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let Dt={[Wi]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Jd]:n.FUNC_REVERSE_SUBTRACT};Dt[Kd]=n.MIN,Dt[jd]=n.MAX;let I={[Qd]:n.ZERO,[tf]:n.ONE,[ef]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[rf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[af]:n.ONE_MINUS_DST_COLOR,[sf]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[hf]:n.ONE_MINUS_CONSTANT_COLOR,[uf]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(B,Mt,At,Ft,vt,ft,zt,Jt,ye,le){if(B===Ti){m===!0&&(nt(n.BLEND),m=!1);return}if(m===!1&&(V(n.BLEND),m=!0),B!==Yd){if(B!==x||le!==T){if((p!==Wi||y!==Wi)&&(n.blendEquation(n.FUNC_ADD),p=Wi,y=Wi),le)switch(B){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,_=null,P=null,C=null,U.set(0,0,0),O=0,x=B,T=le}return}vt=vt||Mt,ft=ft||At,zt=zt||Ft,(Mt!==p||vt!==y)&&(n.blendEquationSeparate(Dt[Mt],Dt[vt]),p=Mt,y=vt),(At!==M||Ft!==_||ft!==P||zt!==C)&&(n.blendFuncSeparate(I[At],I[Ft],I[ft],I[zt]),M=At,_=Ft,P=ft,C=zt),(Jt.equals(U)===!1||ye!==O)&&(n.blendColor(Jt.r,Jt.g,Jt.b,ye),U.copy(Jt),O=ye),x=B,T=!1}function tt(B,Mt){B.side===Se?nt(n.CULL_FACE):V(n.CULL_FACE);let At=B.side===sn;Mt&&(At=!At),J(At),B.blending===br&&B.transparent===!1?ot(Ti):ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let Ft=B.stencilWrite;a.setTest(Ft),Ft&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){w!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),w=B)}function rt(B){B!==$d?(V(n.CULL_FACE),B!==S&&(B===Uh?n.cullFace(n.BACK):B===qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),S=B}function wt(B){B!==z&&(Z&&n.lineWidth(B),z=B)}function gt(B,Mt,At){B?(V(n.POLYGON_OFFSET_FILL),(H!==Mt||X!==At)&&(n.polygonOffset(Mt,At),H=Mt,X=At)):nt(n.POLYGON_OFFSET_FILL)}function Et(B){B?V(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function qt(B){B===void 0&&(B=n.TEXTURE0+K-1),D!==B&&(n.activeTexture(B),D=B)}function Yt(B,Mt,At){At===void 0&&(D===null?At=n.TEXTURE0+K-1:At=D);let Ft=A[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},A[At]=Ft),(Ft.type!==B||Ft.texture!==Mt)&&(D!==At&&(n.activeTexture(At),D=At),n.bindTexture(B,Mt||k[B]),Ft.type=B,Ft.texture=Mt)}function R(){let B=A[D];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(B){Y.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Y.copy(B))}function Xt(B){ht.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ht.copy(B))}function Bt(B,Mt){let At=c.get(Mt);At===void 0&&(At=new WeakMap,c.set(Mt,At));let Ft=At.get(B);Ft===void 0&&(Ft=n.getUniformBlockIndex(Mt,B.name),At.set(B,Ft))}function Rt(B,Mt){let Ft=c.get(Mt).get(B);l.get(Mt)!==Ft&&(n.uniformBlockBinding(Mt,Ft,B.__bindingPointIndex),l.set(Mt,Ft))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},D=null,A={},u={},d=new WeakMap,f=[],g=null,m=!1,x=null,p=null,M=null,_=null,y=null,P=null,C=null,U=new Wt(0,0,0),O=0,T=!1,w=null,S=null,z=null,H=null,X=null,Y.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:V,disable:nt,bindFramebuffer:ut,drawBuffers:F,useProgram:it,setBlending:ot,setMaterial:tt,setFlipSided:J,setCullFace:rt,setLineWidth:wt,setPolygonOffset:gt,setScissorTest:Et,activeTexture:qt,bindTexture:Yt,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:Ot,texImage3D:yt,updateUBOMapping:Bt,uniformBlockBinding:Rt,texStorage2D:Tt,texStorage3D:Nt,texSubImage2D:st,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:kt,scissor:Pt,viewport:Xt,reset:Qt}}function hv(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):yo("canvas")}function m(R,b,$){let st=1,pt=Yt(R);if((pt.width>$||pt.height>$)&&(st=$/Math.max(pt.width,pt.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let lt=Math.floor(st*pt.width),kt=Math.floor(st*pt.height);u===void 0&&(u=g(lt,kt));let Tt=b?g(lt,kt):u;return Tt.width=lt,Tt.height=kt,Tt.getContext("2d").drawImage(R,0,0,lt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+lt+"x"+kt+")."),Tt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),R;return R}function x(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,b,$,st,pt=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let lt=b;if(b===n.RED&&($===n.FLOAT&&(lt=n.R32F),$===n.HALF_FLOAT&&(lt=n.R16F),$===n.UNSIGNED_BYTE&&(lt=n.R8)),b===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(lt=n.R8UI),$===n.UNSIGNED_SHORT&&(lt=n.R16UI),$===n.UNSIGNED_INT&&(lt=n.R32UI),$===n.BYTE&&(lt=n.R8I),$===n.SHORT&&(lt=n.R16I),$===n.INT&&(lt=n.R32I)),b===n.RG&&($===n.FLOAT&&(lt=n.RG32F),$===n.HALF_FLOAT&&(lt=n.RG16F),$===n.UNSIGNED_BYTE&&(lt=n.RG8)),b===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(lt=n.RG8UI),$===n.UNSIGNED_SHORT&&(lt=n.RG16UI),$===n.UNSIGNED_INT&&(lt=n.RG32UI),$===n.BYTE&&(lt=n.RG8I),$===n.SHORT&&(lt=n.RG16I),$===n.INT&&(lt=n.RG32I)),b===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),$===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),$===n.UNSIGNED_INT&&(lt=n.RGB32UI),$===n.BYTE&&(lt=n.RGB8I),$===n.SHORT&&(lt=n.RGB16I),$===n.INT&&(lt=n.RGB32I)),b===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),$===n.UNSIGNED_INT&&(lt=n.RGBA32UI),$===n.BYTE&&(lt=n.RGBA8I),$===n.SHORT&&(lt=n.RGBA16I),$===n.INT&&(lt=n.RGBA32I)),b===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),b===n.RGBA){let kt=pt?xo:re.getTransfer(st);$===n.FLOAT&&(lt=n.RGBA32F),$===n.HALF_FLOAT&&(lt=n.RGBA16F),$===n.UNSIGNED_BYTE&&(lt=kt===fe?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function y(R,b){let $;return R?b===null||b===Qi||b===Os?$=n.DEPTH24_STENCIL8:b===li?$=n.DEPTH32F_STENCIL8:b===Us&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===Os?$=n.DEPTH_COMPONENT24:b===li?$=n.DEPTH_COMPONENT32F:b===Us&&($=n.DEPTH_COMPONENT16),$}function P(R,b){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=R.target;b.removeEventListener("dispose",C),O(b),b.isVideoTexture&&h.delete(b)}function U(R){let b=R.target;b.removeEventListener("dispose",U),w(b)}function O(R){let b=i.get(R);if(b.__webglInit===void 0)return;let $=R.source,st=d.get($);if(st){let pt=st[b.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&T(R),Object.keys(st).length===0&&d.delete($)}i.remove(R)}function T(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let $=R.source,st=d.get($);delete st[b.__cacheKey],o.memory.textures--}function w(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let pt=0;pt<b.__webglFramebuffer[st].length;pt++)n.deleteFramebuffer(b.__webglFramebuffer[st][pt]);else n.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)n.deleteFramebuffer(b.__webglFramebuffer[st]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let $=R.textures;for(let st=0,pt=$.length;st<pt;st++){let lt=i.get($[st]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove($[st])}i.remove(R)}let S=0;function z(){S=0}function H(){let R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function X(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function K(R,b){let $=i.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){let st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k($,R,b);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+b)}function Z(R,b){let $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){k($,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+b)}function at(R,b){let $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){k($,R,b);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+b)}function q(R,b){let $=i.get(R);if(R.version>0&&$.__version!==R.version){V($,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+b)}let D={[ys]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},A={[An]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[Dl]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},v={[Tf]:n.NEVER,[Pf]:n.ALWAYS,[Ef]:n.LESS,[Kh]:n.LEQUAL,[Af]:n.EQUAL,[If]:n.GEQUAL,[Cf]:n.GREATER,[Rf]:n.NOTEQUAL};function N(R,b){if(b.type===li&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Dl||b.magFilter===Jo||b.magFilter===ji||b.minFilter===Bn||b.minFilter===Dl||b.minFilter===Jo||b.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,D[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,D[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,D[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,v[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==Jo&&b.minFilter!==ji||b.type===li&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Y(R,b){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));let st=b.source,pt=d.get(st);pt===void 0&&(pt={},d.set(st,pt));let lt=X(b);if(lt!==R.__cacheKey){pt[lt]===void 0&&(pt[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),pt[lt].usedTimes++;let kt=pt[R.__cacheKey];kt!==void 0&&(pt[R.__cacheKey].usedTimes--,kt.usedTimes===0&&T(b)),R.__cacheKey=lt,R.__webglTexture=pt[lt].texture}return $}function ht(R,b,$){return Math.floor(Math.floor(R/$)/b)}function dt(R,b,$,st){let lt=R.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,$,st,b.data);else{lt.sort((yt,Pt)=>yt.start-Pt.start);let kt=0;for(let yt=1;yt<lt.length;yt++){let Pt=lt[kt],Xt=lt[yt],Bt=Pt.start+Pt.count,Rt=ht(Xt.start,b.width,4),Qt=ht(Pt.start,b.width,4);Xt.start<=Bt+1&&Rt===Qt&&ht(Xt.start+Xt.count-1,b.width,4)===Rt?Pt.count=Math.max(Pt.count,Xt.start+Xt.count-Pt.start):(++kt,lt[kt]=Xt)}lt.length=kt+1;let Tt=n.getParameter(n.UNPACK_ROW_LENGTH),Nt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ot=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let yt=0,Pt=lt.length;yt<Pt;yt++){let Xt=lt[yt],Bt=Math.floor(Xt.start/4),Rt=Math.ceil(Xt.count/4),Qt=Bt%b.width,B=Math.floor(Bt/b.width),Mt=Rt,At=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Qt,B,Mt,At,$,st,b.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Tt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function k(R,b,$){let st=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=n.TEXTURE_3D);let pt=Y(R,b),lt=b.source;e.bindTexture(st,R.__webglTexture,n.TEXTURE0+$);let kt=i.get(lt);if(lt.version!==kt.__version||pt===!0){e.activeTexture(n.TEXTURE0+$);let Tt=re.getPrimaries(re.workingColorSpace),Nt=b.colorSpace===Ai?null:re.getPrimaries(b.colorSpace),Ot=b.colorSpace===Ai||Tt===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let yt=m(b.image,!1,r.maxTextureSize);yt=qt(b,yt);let Pt=s.convert(b.format,b.colorSpace),Xt=s.convert(b.type),Bt=_(b.internalFormat,Pt,Xt,b.colorSpace,b.isVideoTexture);N(st,b);let Rt,Qt=b.mipmaps,B=b.isVideoTexture!==!0,Mt=kt.__version===void 0||pt===!0,At=lt.dataReady,Ft=P(b,yt);if(b.isDepthTexture)Bt=y(b.format===zs,b.type),Mt&&(B?e.texStorage2D(n.TEXTURE_2D,1,Bt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,yt.width,yt.height,0,Pt,Xt,null));else if(b.isDataTexture)if(Qt.length>0){B&&Mt&&e.texStorage2D(n.TEXTURE_2D,Ft,Bt,Qt[0].width,Qt[0].height);for(let vt=0,ft=Qt.length;vt<ft;vt++)Rt=Qt[vt],B?At&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Pt,Xt,Rt.data):e.texImage2D(n.TEXTURE_2D,vt,Bt,Rt.width,Rt.height,0,Pt,Xt,Rt.data);b.generateMipmaps=!1}else B?(Mt&&e.texStorage2D(n.TEXTURE_2D,Ft,Bt,yt.width,yt.height),At&&dt(b,yt,Pt,Xt)):e.texImage2D(n.TEXTURE_2D,0,Bt,yt.width,yt.height,0,Pt,Xt,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Bt,Qt[0].width,Qt[0].height,yt.depth);for(let vt=0,ft=Qt.length;vt<ft;vt++)if(Rt=Qt[vt],b.format!==Rn)if(Pt!==null)if(B){if(At)if(b.layerUpdates.size>0){let zt=su(Rt.width,Rt.height,b.format,b.type);for(let Jt of b.layerUpdates){let ye=Rt.data.subarray(Jt*zt/Rt.data.BYTES_PER_ELEMENT,(Jt+1)*zt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,Jt,Rt.width,Rt.height,1,Pt,ye)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,yt.depth,Pt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,Bt,Rt.width,Rt.height,yt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?At&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,yt.depth,Pt,Xt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,Bt,Rt.width,Rt.height,yt.depth,0,Pt,Xt,Rt.data)}else{B&&Mt&&e.texStorage2D(n.TEXTURE_2D,Ft,Bt,Qt[0].width,Qt[0].height);for(let vt=0,ft=Qt.length;vt<ft;vt++)Rt=Qt[vt],b.format!==Rn?Pt!==null?B?At&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?At&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Pt,Xt,Rt.data):e.texImage2D(n.TEXTURE_2D,vt,Bt,Rt.width,Rt.height,0,Pt,Xt,Rt.data)}else if(b.isDataArrayTexture)if(B){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Bt,yt.width,yt.height,yt.depth),At)if(b.layerUpdates.size>0){let vt=su(yt.width,yt.height,b.format,b.type);for(let ft of b.layerUpdates){let zt=yt.data.subarray(ft*vt/yt.data.BYTES_PER_ELEMENT,(ft+1)*vt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,yt.width,yt.height,1,Pt,Xt,zt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Pt,Xt,yt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,yt.width,yt.height,yt.depth,0,Pt,Xt,yt.data);else if(b.isData3DTexture)B?(Mt&&e.texStorage3D(n.TEXTURE_3D,Ft,Bt,yt.width,yt.height,yt.depth),At&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Pt,Xt,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,yt.width,yt.height,yt.depth,0,Pt,Xt,yt.data);else if(b.isFramebufferTexture){if(Mt)if(B)e.texStorage2D(n.TEXTURE_2D,Ft,Bt,yt.width,yt.height);else{let vt=yt.width,ft=yt.height;for(let zt=0;zt<Ft;zt++)e.texImage2D(n.TEXTURE_2D,zt,Bt,vt,ft,0,Pt,Xt,null),vt>>=1,ft>>=1}}else if(Qt.length>0){if(B&&Mt){let vt=Yt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,Ft,Bt,vt.width,vt.height)}for(let vt=0,ft=Qt.length;vt<ft;vt++)Rt=Qt[vt],B?At&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,Pt,Xt,Rt):e.texImage2D(n.TEXTURE_2D,vt,Bt,Pt,Xt,Rt);b.generateMipmaps=!1}else if(B){if(Mt){let vt=Yt(yt);e.texStorage2D(n.TEXTURE_2D,Ft,Bt,vt.width,vt.height)}At&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Xt,yt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,Pt,Xt,yt);x(b)&&p(st),kt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function V(R,b,$){if(b.image.length!==6)return;let st=Y(R,b),pt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);let lt=i.get(pt);if(pt.version!==lt.__version||st===!0){e.activeTexture(n.TEXTURE0+$);let kt=re.getPrimaries(re.workingColorSpace),Tt=b.colorSpace===Ai?null:re.getPrimaries(b.colorSpace),Nt=b.colorSpace===Ai||kt===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Ot=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let ft=0;ft<6;ft++)!Ot&&!yt?Pt[ft]=m(b.image[ft],!0,r.maxCubemapSize):Pt[ft]=yt?b.image[ft].image:b.image[ft],Pt[ft]=qt(b,Pt[ft]);let Xt=Pt[0],Bt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),Qt=_(b.internalFormat,Bt,Rt,b.colorSpace),B=b.isVideoTexture!==!0,Mt=lt.__version===void 0||st===!0,At=pt.dataReady,Ft=P(b,Xt);N(n.TEXTURE_CUBE_MAP,b);let vt;if(Ot){B&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,Qt,Xt.width,Xt.height);for(let ft=0;ft<6;ft++){vt=Pt[ft].mipmaps;for(let zt=0;zt<vt.length;zt++){let Jt=vt[zt];b.format!==Rn?Bt!==null?B?At&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Jt.width,Jt.height,Bt,Jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,Qt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Jt.width,Jt.height,Bt,Rt,Jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,Qt,Jt.width,Jt.height,0,Bt,Rt,Jt.data)}}}else{if(vt=b.mipmaps,B&&Mt){vt.length>0&&Ft++;let ft=Yt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,Qt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(yt){B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Pt[ft].width,Pt[ft].height,Bt,Rt,Pt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Qt,Pt[ft].width,Pt[ft].height,0,Bt,Rt,Pt[ft].data);for(let zt=0;zt<vt.length;zt++){let ye=vt[zt].image[ft].image;B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,ye.width,ye.height,Bt,Rt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,Qt,ye.width,ye.height,0,Bt,Rt,ye.data)}}else{B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Bt,Rt,Pt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Qt,Bt,Rt,Pt[ft]);for(let zt=0;zt<vt.length;zt++){let Jt=vt[zt];B?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Bt,Rt,Jt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,Qt,Bt,Rt,Jt.image[ft])}}}x(b)&&p(n.TEXTURE_CUBE_MAP),lt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function nt(R,b,$,st,pt,lt){let kt=s.convert($.format,$.colorSpace),Tt=s.convert($.type),Nt=_($.internalFormat,kt,Tt,$.colorSpace),Ot=i.get(b),yt=i.get($);if(yt.__renderTarget=b,!Ot.__hasExternalTextures){let Pt=Math.max(1,b.width>>lt),Xt=Math.max(1,b.height>>lt);pt===n.TEXTURE_3D||pt===n.TEXTURE_2D_ARRAY?e.texImage3D(pt,lt,Nt,Pt,Xt,b.depth,0,kt,Tt,null):e.texImage2D(pt,lt,Nt,Pt,Xt,0,kt,Tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),gt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,pt,yt.__webglTexture,0,wt(b)):(pt===n.TEXTURE_2D||pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,pt,yt.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,b,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let st=b.depthTexture,pt=st&&st.isDepthTexture?st.type:null,lt=y(b.stencilBuffer,pt),kt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=wt(b);gt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,lt,b.width,b.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,lt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,lt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,kt,n.RENDERBUFFER,R)}else{let st=b.textures;for(let pt=0;pt<st.length;pt++){let lt=st[pt],kt=s.convert(lt.format,lt.colorSpace),Tt=s.convert(lt.type),Nt=_(lt.internalFormat,kt,Tt,lt.colorSpace),Ot=wt(b);$&&gt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Nt,b.width,b.height):gt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,Nt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Nt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=i.get(b.depthTexture);st.__renderTarget=b,(!st.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);let pt=st.__webglTexture,lt=wt(b);if(b.depthTexture.format===vs)gt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pt,0);else if(b.depthTexture.format===zs)gt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pt,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function it(R){let b=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let pt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",pt)};st.addEventListener("dispose",pt),b.__depthDisposeCallback=pt}b.__boundDepthTexture=st}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let st=R.texture.mipmaps;st&&st.length>0?F(b.__webglFramebuffer[0],R):F(b.__webglFramebuffer,R)}else if($){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=n.createRenderbuffer(),ut(b.__webglDepthbuffer[st],R,!1);else{let pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,lt)}}else{let st=R.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ut(b.__webglDepthbuffer,R,!1);else{let pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,lt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(R,b,$){let st=i.get(R);b!==void 0&&nt(st.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&it(R)}function I(R){let b=R.texture,$=i.get(R),st=i.get(b);R.addEventListener("dispose",U);let pt=R.textures,lt=R.isWebGLCubeRenderTarget===!0,kt=pt.length>1;if(kt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=b.version,o.memory.textures++),lt){$.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Tt]=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)$.__webglFramebuffer[Tt][Nt]=n.createFramebuffer()}else $.__webglFramebuffer[Tt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)$.__webglFramebuffer[Tt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(kt)for(let Tt=0,Nt=pt.length;Tt<Nt;Tt++){let Ot=i.get(pt[Tt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Tt=0;Tt<pt.length;Tt++){let Nt=pt[Tt];$.__webglColorRenderbuffer[Tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Tt]);let Ot=s.convert(Nt.format,Nt.colorSpace),yt=s.convert(Nt.type),Pt=_(Nt.internalFormat,Ot,yt,Nt.colorSpace,R.isXRRenderTarget===!0),Xt=wt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Pt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,$.__webglColorRenderbuffer[Tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ut($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),N(n.TEXTURE_CUBE_MAP,b);for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)nt($.__webglFramebuffer[Tt][Nt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Nt);else nt($.__webglFramebuffer[Tt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);x(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let Tt=0,Nt=pt.length;Tt<Nt;Tt++){let Ot=pt[Tt],yt=i.get(Ot),Pt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Pt,yt.__webglTexture),N(Pt,Ot),nt($.__webglFramebuffer,R,Ot,n.COLOR_ATTACHMENT0+Tt,Pt,0),x(Ot)&&p(Pt)}e.unbindTexture()}else{let Tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,st.__webglTexture),N(Tt,b),b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)nt($.__webglFramebuffer[Nt],R,b,n.COLOR_ATTACHMENT0,Tt,Nt);else nt($.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,Tt,0);x(b)&&p(Tt),e.unbindTexture()}R.depthBuffer&&it(R)}function ot(R){let b=R.textures;for(let $=0,st=b.length;$<st;$++){let pt=b[$];if(x(pt)){let lt=M(R),kt=i.get(pt).__webglTexture;e.bindTexture(lt,kt),p(lt),e.unbindTexture()}}}let tt=[],J=[];function rt(R){if(R.samples>0){if(gt(R)===!1){let b=R.textures,$=R.width,st=R.height,pt=n.COLOR_BUFFER_BIT,lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,kt=i.get(R),Tt=b.length>1;if(Tt)for(let Ot=0;Ot<b.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let Nt=R.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ot=0;Ot<b.length;Ot++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pt|=n.STENCIL_BUFFER_BIT)),Tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,kt.__webglColorRenderbuffer[Ot]);let yt=i.get(b[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,$,st,0,0,$,st,pt,n.NEAREST),l===!0&&(tt.length=0,J.length=0,tt.push(n.COLOR_ATTACHMENT0+Ot),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(lt),J.push(lt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Tt)for(let Ot=0;Ot<b.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,kt.__webglColorRenderbuffer[Ot]);let yt=i.get(b[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,kt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function wt(R){return Math.min(r.maxSamples,R.samples)}function gt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function qt(R,b){let $=R.colorSpace,st=R.format,pt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==wr&&$!==Ai&&(re.getTransfer($)===fe?(st!==Rn||pt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=at,this.setTextureCube=q,this.rebindTextures=Dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=gt}function uv(n,t){function e(i,r=Ai){let s,o=re.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return n.BYTE;if(i===Gh)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Ns)return n.HALF_FLOAT;if(i===$h)return n.ALPHA;if(i===qh)return n.RGB;if(i===Rn)return n.RGBA;if(i===vs)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Yh)return n.RED;if(i===Nl)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===zl)return n.RGBA_INTEGER;if(i===Ko||i===jo||i===Qo||i===ta)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Bl||i===Vl||i===Hl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Wl||i===Xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gl||i===Wl)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$l||i===ql||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$l)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===ac||i===lc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===oc)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===hc||i===uc||i===dc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===cc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Gn({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends ni{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,m=typeof XRWebGLBinding<"u",x=new _u,p={},M=e.getContextAttributes(),_=null,y=null,P=[],C=[],U=new mt,O=null,T=new We;T.viewport=new de;let w=new We;w.viewport=new de;let S=[T,w],z=new bl,H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=P[k];return V===void 0&&(V=new Ts,P[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=P[k];return V===void 0&&(V=new Ts,P[k]=V),V.getGripSpace()},this.getHand=function(k){let V=P[k];return V===void 0&&(V=new Ts,P[k]=V),V.getHandSpace()};function K(k){let V=C.indexOf(k.inputSource);if(V===-1)return;let nt=P[V];nt!==void 0&&(nt.update(k.inputSource,k.frame,c||o),nt.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",at);for(let k=0;k<P.length;k++){let V=C[k];V!==null&&(C[k]=null,P[k].disconnect(V))}H=null,X=null,x.reset();for(let k in p)delete p[k];t.setRenderTarget(_),f=null,d=null,u=null,r=null,y=null,dt.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",at),M.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(U),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ut=null,F=null;M.depth&&(F=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?zs:vs,ut=M.stencil?Os:Qi);let it={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(it),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ii(d.textureWidth,d.textureHeight,{format:Rn,type:Xn,depthTexture:new Ro(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ii(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(k){for(let V=0;V<k.removed.length;V++){let nt=k.removed[V],ut=C.indexOf(nt);ut>=0&&(C[ut]=null,P[ut].disconnect(nt))}for(let V=0;V<k.added.length;V++){let nt=k.added[V],ut=C.indexOf(nt);if(ut===-1){for(let it=0;it<P.length;it++)if(it>=C.length){C.push(nt),ut=it;break}else if(C[it]===null){C[it]=nt,ut=it;break}if(ut===-1)break}let F=P[ut];F&&F.connect(nt)}}let q=new L,D=new L;function A(k,V,nt){q.setFromMatrixPosition(V.matrixWorld),D.setFromMatrixPosition(nt.matrixWorld);let ut=q.distanceTo(D),F=V.projectionMatrix.elements,it=nt.projectionMatrix.elements,Dt=F[14]/(F[10]-1),I=F[14]/(F[10]+1),ot=(F[9]+1)/F[5],tt=(F[9]-1)/F[5],J=(F[8]-1)/F[0],rt=(it[8]+1)/it[0],wt=Dt*J,gt=Dt*rt,Et=ut/(-J+rt),qt=Et*-J;if(V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qt),k.translateZ(Et),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),F[10]===-1)k.projectionMatrix.copy(V.projectionMatrix),k.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let Yt=Dt+Et,R=I+Et,b=wt-qt,$=gt+(ut-qt),st=ot*I/R*Yt,pt=tt*I/R*Yt;k.projectionMatrix.makePerspective(b,$,st,pt,Yt,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function v(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let V=k.near,nt=k.far;x.texture!==null&&(x.depthNear>0&&(V=x.depthNear),x.depthFar>0&&(nt=x.depthFar)),z.near=w.near=T.near=V,z.far=w.far=T.far=nt,(H!==z.near||X!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,X=z.far),z.layers.mask=k.layers.mask|6,T.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;let ut=k.parent,F=z.cameras;v(z,ut);for(let it=0;it<F.length;it++)v(F[it],ut);F.length===2?A(z,T,w):z.projectionMatrix.copy(T.projectionMatrix),N(k,z,ut)};function N(k,V,nt){nt===null?k.matrix.copy(V.matrixWorld):(k.matrix.copy(nt.matrixWorld),k.matrix.invert(),k.matrix.multiply(V.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(V.projectionMatrix),k.projectionMatrixInverse.copy(V.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=bs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(k){return p[k]};let Y=null;function ht(k,V){if(h=V.getViewerPose(c||o),g=V,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ut=!1;nt.length!==z.cameras.length&&(z.cameras.length=0,ut=!0);for(let I=0;I<nt.length;I++){let ot=nt[I],tt=null;if(f!==null)tt=f.getViewport(ot);else{let rt=u.getViewSubImage(d,ot);tt=rt.viewport,I===0&&(t.setRenderTargetTextures(y,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(y))}let J=S[I];J===void 0&&(J=new We,J.layers.enable(I),J.viewport=new de,S[I]=J),J.matrix.fromArray(ot.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ot.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(tt.x,tt.y,tt.width,tt.height),I===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ut===!0&&z.cameras.push(J)}let F=r.enabledFeatures;if(F&&F.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let I=u.getDepthInformation(nt[0]);I&&I.isValid&&I.texture&&x.init(I,r.renderState)}if(F&&F.includes("camera-access")&&m){t.state.unbindTexture(),u=i.getBinding();for(let I=0;I<nt.length;I++){let ot=nt[I].camera;if(ot){let tt=p[ot];tt||(tt=new Io,p[ot]=tt);let J=u.getCameraImage(ot);tt.sourceTexture=J}}}}for(let nt=0;nt<P.length;nt++){let ut=C[nt],F=P[nt];ut!==null&&F!==void 0&&F.update(ut,V,c||o)}Y&&Y(k,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}let dt=new up;dt.setAnimationLoop(ht),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}},Nr=new Hn,pv=new ve;function mv(n,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,eu(n)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),u(x,p)):p.isMeshPhongMaterial?(s(x,p),h(x,p)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,y)):p.isMeshMatcapMaterial?(s(x,p),g(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),m(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,M,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===sn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===sn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let M=t.get(p),_=M.envMap,y=M.envMapRotation;_&&(x.envMap.value=_,Nr.copy(y),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),x.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Nr)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,M,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=_*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,M){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function m(x,p){let M=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gv(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let y=_.program;i.uniformBlockBinding(M,y)}function c(M,_){let y=r[M.id];y===void 0&&(g(M),y=h(M),r[M.id]=y,M.addEventListener("dispose",x));let P=_.program;i.updateUBOMapping(M,P);let C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function h(M){let _=u();M.__bindingPointIndex=_;let y=n.createBuffer(),P=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=r[M.id],y=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,U=y.length;C<U;C++){let O=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,w=O.length;T<w;T++){let S=O[T];if(f(S,C,T,P)===!0){let z=S.__offset,H=Array.isArray(S.value)?S.value:[S.value],X=0;for(let K=0;K<H.length;K++){let Z=H[K],at=m(Z);typeof Z=="number"||typeof Z=="boolean"?(S.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+X,S.__data)):Z.isMatrix3?(S.__data[0]=Z.elements[0],S.__data[1]=Z.elements[1],S.__data[2]=Z.elements[2],S.__data[3]=0,S.__data[4]=Z.elements[3],S.__data[5]=Z.elements[4],S.__data[6]=Z.elements[5],S.__data[7]=0,S.__data[8]=Z.elements[6],S.__data[9]=Z.elements[7],S.__data[10]=Z.elements[8],S.__data[11]=0):(Z.toArray(S.__data,X),X+=at.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,_,y,P){let C=M.value,U=_+"_"+y;if(P[U]===void 0)return typeof C=="number"||typeof C=="boolean"?P[U]=C:P[U]=C.clone(),!0;{let O=P[U];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return P[U]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(M){let _=M.uniforms,y=0,P=16;for(let U=0,O=_.length;U<O;U++){let T=Array.isArray(_[U])?_[U]:[_[U]];for(let w=0,S=T.length;w<S;w++){let z=T[w],H=Array.isArray(z.value)?z.value:[z.value];for(let X=0,K=H.length;X<K;X++){let Z=H[X],at=m(Z),q=y%P,D=q%at.boundary,A=q+D;y+=D,A!==0&&P-A<at.storage&&(y+=P-A),z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=at.storage}}}let C=y%P;return C>0&&(y+=P-C),M.__size=y,M.__cache={},this}function m(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function x(M){let _=M.target;_.removeEventListener("dispose",x);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var na=class{constructor(t={}){let{canvas:e=Df(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,P=!1;this._outputColorSpace=Ge;let C=0,U=0,O=null,T=-1,w=null,S=new de,z=new de,H=null,X=new Wt(0),K=0,Z=e.width,at=e.height,q=1,D=null,A=null,v=new de(0,0,Z,at),N=new de(0,0,Z,at),Y=!1,ht=new Cs,dt=!1,k=!1,V=new ve,nt=new L,ut=new de,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function Dt(){return O===null?q:1}let I=i;function ot(E,G){return e.getContext(E,G)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",vt,!1),I===null){let G="webgl2";if(I=ot(G,E),I===null)throw ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let tt,J,rt,wt,gt,Et,qt,Yt,R,b,$,st,pt,lt,kt,Tt,Nt,Ot,yt,Pt,Xt,Bt,Rt,Qt;function B(){tt=new F_(I),tt.init(),Bt=new uv(I,tt),J=new A_(I,tt,t,Bt),rt=new cv(I,tt),J.reversedDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),wt=new O_(I),gt=new Jy,Et=new hv(I,tt,rt,gt,J,Bt,wt),qt=new R_(y),Yt=new L_(y),R=new G0(I),Rt=new T_(I,R),b=new U_(I,R,wt,Rt),$=new k_(I,b,R,wt),yt=new z_(I,J,Et),Tt=new C_(gt),st=new Zy(y,qt,Yt,tt,J,Rt,Tt),pt=new mv(y,gt),lt=new jy,kt=new rv(tt),Ot=new S_(y,qt,Yt,rt,$,f,l),Nt=new av(y,$,J),Qt=new gv(I,wt,J,rt),Pt=new E_(I,tt,wt),Xt=new N_(I,tt,wt),wt.programs=st.programs,y.capabilities=J,y.extensions=tt,y.properties=gt,y.renderLists=lt,y.shadowMap=Nt,y.state=rt,y.info=wt}B();let Mt=new yu(y,I);this.xr=Mt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Z,at,!1))},this.getSize=function(E){return E.set(Z,at)},this.setSize=function(E,G,Q=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,at=G,e.width=Math.floor(E*q),e.height=Math.floor(G*q),Q===!0&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Z*q,at*q).floor()},this.setDrawingBufferSize=function(E,G,Q){Z=E,at=G,q=Q,e.width=Math.floor(E*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(v)},this.setViewport=function(E,G,Q,et){E.isVector4?v.set(E.x,E.y,E.z,E.w):v.set(E,G,Q,et),rt.viewport(S.copy(v).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(N)},this.setScissor=function(E,G,Q,et){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,G,Q,et),rt.scissor(z.copy(N).multiplyScalar(q).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){rt.setScissorTest(Y=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){A=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,Q=!0){let et=0;if(E){let W=!1;if(O!==null){let bt=O.texture.format;W=bt===zl||bt===Ol||bt===Nl}if(W){let bt=O.texture.type,It=bt===Xn||bt===Qi||bt===Us||bt===Os||bt===Fl||bt===Ul,Ut=Ot.getClearColor(),Lt=Ot.getClearAlpha(),Gt=Ut.r,$t=Ut.g,Vt=Ut.b;It?(g[0]=Gt,g[1]=$t,g[2]=Vt,g[3]=Lt,I.clearBufferuiv(I.COLOR,0,g)):(m[0]=Gt,m[1]=$t,m[2]=Vt,m[3]=Lt,I.clearBufferiv(I.COLOR,0,m))}else et|=I.COLOR_BUFFER_BIT}G&&(et|=I.DEPTH_BUFFER_BIT),Q&&(et|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ot.dispose(),lt.dispose(),kt.dispose(),gt.dispose(),qt.dispose(),Yt.dispose(),$.dispose(),Rt.dispose(),Qt.dispose(),st.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",ti),Mt.removeEventListener("sessionend",ad),fr.stop()};function At(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=wt.autoReset,G=Nt.enabled,Q=Nt.autoUpdate,et=Nt.needsUpdate,W=Nt.type;B(),wt.autoReset=E,Nt.enabled=G,Nt.autoUpdate=Q,Nt.needsUpdate=et,Nt.type=W}function vt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ft(E){let G=E.target;G.removeEventListener("dispose",ft),zt(G)}function zt(E){Jt(E),gt.remove(E)}function Jt(E){let G=gt.get(E).programs;G!==void 0&&(G.forEach(function(Q){st.releaseProgram(Q)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Q,et,W,bt){G===null&&(G=F);let It=W.isMesh&&W.matrixWorld.determinant()<0,Ut=xm(E,G,Q,et,W);rt.setMaterial(et,It);let Lt=Q.index,Gt=1;if(et.wireframe===!0){if(Lt=b.getWireframeAttribute(Q),Lt===void 0)return;Gt=2}let $t=Q.drawRange,Vt=Q.attributes.position,ne=$t.start*Gt,pe=($t.start+$t.count)*Gt;bt!==null&&(ne=Math.max(ne,bt.start*Gt),pe=Math.min(pe,(bt.start+bt.count)*Gt)),Lt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Lt.count)):Vt!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,Vt.count));let Pe=pe-ne;if(Pe<0||Pe===1/0)return;Rt.setup(W,et,Ut,Q,Lt);let be,_e=Pt;if(Lt!==null&&(be=R.get(Lt),_e=Xt,_e.setIndex(be)),W.isMesh)et.wireframe===!0?(rt.setLineWidth(et.wireframeLinewidth*Dt()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(W.isLine){let Ht=et.linewidth;Ht===void 0&&(Ht=1),rt.setLineWidth(Ht*Dt()),W.isLineSegments?_e.setMode(I.LINES):W.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else W.isPoints?_e.setMode(I.POINTS):W.isSprite&&_e.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ht=W._multiDrawStarts,Ee=W._multiDrawCounts,se=W._multiDrawCount,mn=Lt?R.get(Lt).bytesPerElement:1,es=gt.get(et).currentProgram.getUniforms();for(let gn=0;gn<se;gn++)es.setValue(I,"_gl_DrawID",gn),_e.render(Ht[gn]/mn,Ee[gn])}else if(W.isInstancedMesh)_e.renderInstances(ne,Pe,W.count);else if(Q.isInstancedBufferGeometry){let Ht=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ee=Math.min(Q.instanceCount,Ht);_e.renderInstances(ne,Pe,Ee)}else _e.render(ne,Pe)};function ye(E,G,Q){E.transparent===!0&&E.side===Se&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,ma(E,G,Q),E.side=Mi,E.needsUpdate=!0,ma(E,G,Q),E.side=Se):ma(E,G,Q)}this.compile=function(E,G,Q=null){Q===null&&(Q=E),p=kt.get(Q),p.init(G),_.push(p),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==Q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let et=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let bt=W.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){let Ut=bt[It];ye(Ut,Q,W),et.add(Ut)}else ye(bt,Q,W),et.add(bt)}),p=_.pop(),et},this.compileAsync=function(E,G,Q=null){let et=this.compile(E,G,Q);return new Promise(W=>{function bt(){if(et.forEach(function(It){gt.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){W(E);return}setTimeout(bt,10)}tt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let le=null;function pi(E){le&&le(E)}function ti(){fr.stop()}function ad(){fr.start()}let fr=new up;fr.setAnimationLoop(pi),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(E){le=E,Mt.setAnimationLoop(E),E===null?fr.stop():fr.start()},Mt.addEventListener("sessionstart",ti),Mt.addEventListener("sessionend",ad),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(G),G=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,G,O),p=kt.get(E,_.length),p.init(G),_.push(p),V.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ht.setFromProjectionMatrix(V,kn,G.reversedDepth),k=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,k),x=lt.get(E,M.length),x.init(),M.push(x),Mt.enabled===!0&&Mt.isPresenting===!0){let bt=y.xr.getDepthSensingMesh();bt!==null&&qc(bt,G,-1/0,y.sortObjects)}qc(E,G,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(D,A),it=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,it&&Ot.addToRenderList(x,E),this.info.render.frame++,dt===!0&&Tt.beginShadows();let Q=p.state.shadowsArray;Nt.render(Q,E,G),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=x.opaque,W=x.transmissive;if(p.setupLights(),G.isArrayCamera){let bt=G.cameras;if(W.length>0)for(let It=0,Ut=bt.length;It<Ut;It++){let Lt=bt[It];cd(et,W,E,Lt)}it&&Ot.render(E);for(let It=0,Ut=bt.length;It<Ut;It++){let Lt=bt[It];ld(x,E,Lt,Lt.viewport)}}else W.length>0&&cd(et,W,E,G),it&&Ot.render(E),ld(x,E,G);O!==null&&U===0&&(Et.updateMultisampleRenderTarget(O),Et.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(y,E,G),Rt.resetDefaultState(),T=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],dt===!0&&Tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function qc(E,G,Q,et){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ht.intersectsSprite(E)){et&&ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);let It=$.update(E),Ut=E.material;Ut.visible&&x.push(E,It,Ut,Q,ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ht.intersectsObject(E))){let It=$.update(E),Ut=E.material;if(et&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ut.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ut.copy(It.boundingSphere.center)),ut.applyMatrix4(E.matrixWorld).applyMatrix4(V)),Array.isArray(Ut)){let Lt=It.groups;for(let Gt=0,$t=Lt.length;Gt<$t;Gt++){let Vt=Lt[Gt],ne=Ut[Vt.materialIndex];ne&&ne.visible&&x.push(E,It,ne,Q,ut.z,Vt)}}else Ut.visible&&x.push(E,It,Ut,Q,ut.z,null)}}let bt=E.children;for(let It=0,Ut=bt.length;It<Ut;It++)qc(bt[It],G,Q,et)}function ld(E,G,Q,et){let W=E.opaque,bt=E.transmissive,It=E.transparent;p.setupLightsView(Q),dt===!0&&Tt.setGlobalState(y.clippingPlanes,Q),et&&rt.viewport(S.copy(et)),W.length>0&&pa(W,G,Q),bt.length>0&&pa(bt,G,Q),It.length>0&&pa(It,G,Q),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function cd(E,G,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new ii(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Ns:Xn,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let bt=p.state.transmissionRenderTarget[et.id],It=et.viewport||S;bt.setSize(It.z*y.transmissionResolutionScale,It.w*y.transmissionResolutionScale);let Ut=y.getRenderTarget(),Lt=y.getActiveCubeFace(),Gt=y.getActiveMipmapLevel();y.setRenderTarget(bt),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),it&&Ot.render(Q);let $t=y.toneMapping;y.toneMapping=Ei;let Vt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),dt===!0&&Tt.setGlobalState(y.clippingPlanes,et),pa(E,Q,et),Et.updateMultisampleRenderTarget(bt),Et.updateRenderTargetMipmap(bt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let pe=0,Pe=G.length;pe<Pe;pe++){let be=G[pe],_e=be.object,Ht=be.geometry,Ee=be.material,se=be.group;if(Ee.side===Se&&_e.layers.test(et.layers)){let mn=Ee.side;Ee.side=sn,Ee.needsUpdate=!0,hd(_e,Q,et,Ht,Ee,se),Ee.side=mn,Ee.needsUpdate=!0,ne=!0}}ne===!0&&(Et.updateMultisampleRenderTarget(bt),Et.updateRenderTargetMipmap(bt))}y.setRenderTarget(Ut,Lt,Gt),y.setClearColor(X,K),Vt!==void 0&&(et.viewport=Vt),y.toneMapping=$t}function pa(E,G,Q){let et=G.isScene===!0?G.overrideMaterial:null;for(let W=0,bt=E.length;W<bt;W++){let It=E[W],Ut=It.object,Lt=It.geometry,Gt=It.group,$t=It.material;$t.allowOverride===!0&&et!==null&&($t=et),Ut.layers.test(Q.layers)&&hd(Ut,G,Q,Lt,$t,Gt)}}function hd(E,G,Q,et,W,bt){E.onBeforeRender(y,G,Q,et,W,bt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(y,G,Q,et,E,bt),W.transparent===!0&&W.side===Se&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,y.renderBufferDirect(Q,G,et,W,E,bt),W.side=Mi,W.needsUpdate=!0,y.renderBufferDirect(Q,G,et,W,E,bt),W.side=Se):y.renderBufferDirect(Q,G,et,W,E,bt),E.onAfterRender(y,G,Q,et,W,bt)}function ma(E,G,Q){G.isScene!==!0&&(G=F);let et=gt.get(E),W=p.state.lights,bt=p.state.shadowsArray,It=W.state.version,Ut=st.getParameters(E,W.state,bt,G,Q),Lt=st.getProgramCacheKey(Ut),Gt=et.programs;et.environment=E.isMeshStandardMaterial?G.environment:null,et.fog=G.fog,et.envMap=(E.isMeshStandardMaterial?Yt:qt).get(E.envMap||et.environment),et.envMapRotation=et.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",ft),Gt=new Map,et.programs=Gt);let $t=Gt.get(Lt);if($t!==void 0){if(et.currentProgram===$t&&et.lightsStateVersion===It)return dd(E,Ut),$t}else Ut.uniforms=st.getUniforms(E),E.onBeforeCompile(Ut,y),$t=st.acquireProgram(Ut,Lt),Gt.set(Lt,$t),et.uniforms=Ut.uniforms;let Vt=et.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),dd(E,Ut),et.needsLights=ym(E),et.lightsStateVersion=It,et.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.directionalShadowMap.value=W.state.directionalShadowMap,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotShadowMap.value=W.state.spotShadowMap,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMap.value=W.state.pointShadowMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),et.currentProgram=$t,et.uniformsList=null,$t}function ud(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function dd(E,G){let Q=gt.get(E);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function xm(E,G,Q,et,W){G.isScene!==!0&&(G=F),Et.resetTextureUnits();let bt=G.fog,It=et.isMeshStandardMaterial?G.environment:null,Ut=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wr,Lt=(et.isMeshStandardMaterial?Yt:qt).get(et.envMap||It),Gt=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$t=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Vt=!!Q.morphAttributes.position,ne=!!Q.morphAttributes.normal,pe=!!Q.morphAttributes.color,Pe=Ei;et.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pe=y.toneMapping);let be=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_e=be!==void 0?be.length:0,Ht=gt.get(et),Ee=p.state.lights;if(dt===!0&&(k===!0||E!==w)){let en=E===w&&et.id===T;Tt.setState(et,E,en)}let se=!1;et.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ee.state.version||Ht.outputColorSpace!==Ut||W.isBatchedMesh&&Ht.batching===!1||!W.isBatchedMesh&&Ht.batching===!0||W.isBatchedMesh&&Ht.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ht.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ht.instancing===!1||!W.isInstancedMesh&&Ht.instancing===!0||W.isSkinnedMesh&&Ht.skinning===!1||!W.isSkinnedMesh&&Ht.skinning===!0||W.isInstancedMesh&&Ht.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ht.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ht.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ht.instancingMorph===!1&&W.morphTexture!==null||Ht.envMap!==Lt||et.fog===!0&&Ht.fog!==bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Tt.numPlanes||Ht.numIntersection!==Tt.numIntersection)||Ht.vertexAlphas!==Gt||Ht.vertexTangents!==$t||Ht.morphTargets!==Vt||Ht.morphNormals!==ne||Ht.morphColors!==pe||Ht.toneMapping!==Pe||Ht.morphTargetsCount!==_e)&&(se=!0):(se=!0,Ht.__version=et.version);let mn=Ht.currentProgram;se===!0&&(mn=ma(et,G,W));let es=!1,gn=!1,to=!1,Ae=mn.getUniforms(),Sn=Ht.uniforms;if(rt.useProgram(mn.program)&&(es=!0,gn=!0,to=!0),et.id!==T&&(T=et.id,gn=!0),es||w!==E){rt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ae.setValue(I,"projectionMatrix",E.projectionMatrix),Ae.setValue(I,"viewMatrix",E.matrixWorldInverse);let an=Ae.map.cameraPosition;an!==void 0&&an.setValue(I,nt.setFromMatrixPosition(E.matrixWorld)),J.logarithmicDepthBuffer&&Ae.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ae.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,gn=!0,to=!0)}if(W.isSkinnedMesh){Ae.setOptional(I,W,"bindMatrix"),Ae.setOptional(I,W,"bindMatrixInverse");let en=W.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ae.setValue(I,"boneTexture",en.boneTexture,Et))}W.isBatchedMesh&&(Ae.setOptional(I,W,"batchingTexture"),Ae.setValue(I,"batchingTexture",W._matricesTexture,Et),Ae.setOptional(I,W,"batchingIdTexture"),Ae.setValue(I,"batchingIdTexture",W._indirectTexture,Et),Ae.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(I,"batchingColorTexture",W._colorsTexture,Et));let Tn=Q.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&yt.update(W,Q,mn),(gn||Ht.receiveShadow!==W.receiveShadow)&&(Ht.receiveShadow=W.receiveShadow,Ae.setValue(I,"receiveShadow",W.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Sn.envMap.value=Lt,Sn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&G.environment!==null&&(Sn.envMapIntensity.value=G.environmentIntensity),gn&&(Ae.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&_m(Sn,to),bt&&et.fog===!0&&pt.refreshFogUniforms(Sn,bt),pt.refreshMaterialUniforms(Sn,et,q,at,p.state.transmissionRenderTarget[E.id]),Hs.upload(I,ud(Ht),Sn,Et)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Hs.upload(I,ud(Ht),Sn,Et),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ae.setValue(I,"center",W.center),Ae.setValue(I,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(I,"normalMatrix",W.normalMatrix),Ae.setValue(I,"modelMatrix",W.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let en=et.uniformsGroups;for(let an=0,Yc=en.length;an<Yc;an++){let pr=en[an];Qt.update(pr,mn),Qt.bind(pr,mn)}}return mn}function _m(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function ym(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,G,Q){let et=gt.get(E);et.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),gt.get(E.texture).__webglTexture=G,gt.get(E.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:Q,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){let Q=gt.get(E);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};let vm=I.createFramebuffer();this.setRenderTarget=function(E,G=0,Q=0){O=E,C=G,U=Q;let et=!0,W=null,bt=!1,It=!1;if(E){let Lt=gt.get(E);if(Lt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(I.FRAMEBUFFER,null),et=!1;else if(Lt.__webglFramebuffer===void 0)Et.setupRenderTarget(E);else if(Lt.__hasExternalTextures)Et.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Vt=E.depthTexture;if(Lt.__boundDepthTexture!==Vt){if(Vt!==null&&gt.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(E)}}let Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(It=!0);let $t=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[G])?W=$t[G][Q]:W=$t[G],bt=!0):E.samples>0&&Et.useMultisampledRTT(E)===!1?W=gt.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?W=$t[Q]:W=$t,S.copy(E.viewport),z.copy(E.scissor),H=E.scissorTest}else S.copy(v).multiplyScalar(q).floor(),z.copy(N).multiplyScalar(q).floor(),H=Y;if(Q!==0&&(W=vm),rt.bindFramebuffer(I.FRAMEBUFFER,W)&&et&&rt.drawBuffers(E,W),rt.viewport(S),rt.scissor(z),rt.setScissorTest(H),bt){let Lt=gt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt.__webglTexture,Q)}else if(It){let Lt=G;for(let Gt=0;Gt<E.textures.length;Gt++){let $t=gt.get(E.textures[Gt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Gt,$t.__webglTexture,Q,Lt)}}else if(E!==null&&Q!==0){let Lt=gt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,Q)}T=-1},this.readRenderTargetPixels=function(E,G,Q,et,W,bt,It,Ut=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){rt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let Gt=E.textures[Ut],$t=Gt.format,Vt=Gt.type;if(!J.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-et&&Q>=0&&Q<=E.height-W&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ut),I.readPixels(G,Q,et,W,Bt.convert($t),Bt.convert(Vt),bt))}finally{let Gt=O!==null?gt.get(O).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,G,Q,et,W,bt,It,Ut=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(G>=0&&G<=E.width-et&&Q>=0&&Q<=E.height-W){rt.bindFramebuffer(I.FRAMEBUFFER,Lt);let Gt=E.textures[Ut],$t=Gt.format,Vt=Gt.type;if(!J.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ut),I.readPixels(G,Q,et,W,Bt.convert($t),Bt.convert(Vt),0);let pe=O!==null?gt.get(O).__webglFramebuffer:null;rt.bindFramebuffer(I.FRAMEBUFFER,pe);let Pe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lf(I,Pe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(ne),I.deleteSync(Pe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,Q=0){let et=Math.pow(2,-Q),W=Math.floor(E.image.width*et),bt=Math.floor(E.image.height*et),It=G!==null?G.x:0,Ut=G!==null?G.y:0;Et.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,It,Ut,W,bt),rt.unbindTexture()};let bm=I.createFramebuffer(),Mm=I.createFramebuffer();this.copyTextureToTexture=function(E,G,Q=null,et=null,W=0,bt=null){bt===null&&(W!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=W,W=0):bt=0);let It,Ut,Lt,Gt,$t,Vt,ne,pe,Pe,be=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(Q!==null)It=Q.max.x-Q.min.x,Ut=Q.max.y-Q.min.y,Lt=Q.isBox3?Q.max.z-Q.min.z:1,Gt=Q.min.x,$t=Q.min.y,Vt=Q.isBox3?Q.min.z:0;else{let Tn=Math.pow(2,-W);It=Math.floor(be.width*Tn),Ut=Math.floor(be.height*Tn),E.isDataArrayTexture?Lt=be.depth:E.isData3DTexture?Lt=Math.floor(be.depth*Tn):Lt=1,Gt=0,$t=0,Vt=0}et!==null?(ne=et.x,pe=et.y,Pe=et.z):(ne=0,pe=0,Pe=0);let _e=Bt.convert(G.format),Ht=Bt.convert(G.type),Ee;G.isData3DTexture?(Et.setTexture3D(G,0),Ee=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Et.setTexture2DArray(G,0),Ee=I.TEXTURE_2D_ARRAY):(Et.setTexture2D(G,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let se=I.getParameter(I.UNPACK_ROW_LENGTH),mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),es=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),to=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);let Ae=E.isDataArrayTexture||E.isData3DTexture,Sn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){let Tn=gt.get(E),en=gt.get(G),an=gt.get(Tn.__renderTarget),Yc=gt.get(en.__renderTarget);rt.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yc.__webglFramebuffer);for(let pr=0;pr<Lt;pr++)Ae&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(E).__webglTexture,W,Vt+pr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(G).__webglTexture,bt,Pe+pr)),I.blitFramebuffer(Gt,$t,It,Ut,ne,pe,It,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||gt.has(E)){let Tn=gt.get(E),en=gt.get(G);rt.bindFramebuffer(I.READ_FRAMEBUFFER,bm),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mm);for(let an=0;an<Lt;an++)Ae?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tn.__webglTexture,W,Vt+an):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tn.__webglTexture,W),Sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,bt,Pe+an):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,bt),W!==0?I.blitFramebuffer(Gt,$t,It,Ut,ne,pe,It,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):Sn?I.copyTexSubImage3D(Ee,bt,ne,pe,Pe+an,Gt,$t,It,Ut):I.copyTexSubImage2D(Ee,bt,ne,pe,Gt,$t,It,Ut);rt.bindFramebuffer(I.READ_FRAMEBUFFER,null),rt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Sn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ee,bt,ne,pe,Pe,It,Ut,Lt,_e,Ht,be.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,bt,ne,pe,Pe,It,Ut,Lt,_e,be.data):I.texSubImage3D(Ee,bt,ne,pe,Pe,It,Ut,Lt,_e,Ht,be):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,ne,pe,It,Ut,_e,Ht,be.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,ne,pe,be.width,be.height,_e,be.data):I.texSubImage2D(I.TEXTURE_2D,bt,ne,pe,It,Ut,_e,Ht,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,es),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,to),bt===0&&G.generateMipmaps&&I.generateMipmap(Ee),rt.unbindTexture()},this.initRenderTarget=function(E){gt.get(E).__webglFramebuffer===void 0&&Et.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Et.setTextureCube(E,0):E.isData3DTexture?Et.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Et.setTexture2DArray(E,0):Et.setTexture2D(E,0),rt.unbindTexture()},this.resetState=function(){C=0,U=0,O=null,rt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var gp={type:"change"},Mu={type:"start"},_p={type:"end"},_c=new Xi,xp=new ln,xv=Math.cos(70*ks.DEG2RAD),Ve=new L,hn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bu=1e-6,yc=class extends qo{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Cn,this._lastTargetPosition=new L,this._quat=new Cn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new L,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new L,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yv.bind(this),this._onPointerDown=_v.bind(this),this._onPointerUp=vv.bind(this),this._onContextMenu=Av.bind(this),this._onMouseWheel=wv.bind(this),this._onKeyDown=Sv.bind(this),this._onTouchStart=Tv.bind(this),this._onTouchMove=Ev.bind(this),this._onMouseDown=bv.bind(this),this._onMouseMove=Mv.bind(this),this._interceptControlDown=Cv.bind(this),this._interceptControlUp=Rv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gp),this.update(),this.state=me.NONE}update(t=null){let e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ve.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<xv?this.object.lookAt(this.target):(xp.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(xp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bu||this._lastTargetPosition.distanceToSquared(this.target)>bu?(this.dispatchEvent(gp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ve.copy(r).sub(this.target);let s=Ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function _v(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function yv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_p),this.state=me.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case Ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case Ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Mu)}function Mv(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wv(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(Mu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_p))}function Sv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Tv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Mu)}function Ev(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function Av(n){this.enabled!==!1&&n.preventDefault()}function Cv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var tr={format:"house-studio-3d",version:1,name:"My little house",preset:"my-little-house",items:[{id:"item-mu824cnw-109",type:"basin",x:-2.7,z:.30000000000000004,rot:3.141592653589793,w:.6,d:.43,h:.84,color:"#c6ac83",open:!1},{id:"item-mu824cnw-110",type:"toilet",x:-3.3000000000000003,z:-2,rot:0,w:.38,d:.66,h:.78,color:"#eeeeea",open:!1},{id:"item-mu824cnw-112",type:"outdoor",x:-.65,z:-2.91,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mu824cnw-113",type:"plant",x:-1.82,z:-2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-114",type:"plant",x:2.65,z:2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-117",type:"chair",x:1.1,z:-.8,rot:1.5707963267948966,w:.59,d:.59,h:1.05,color:"#425956",open:!1},{id:"item-mu824cnw-118",type:"wardrobe",x:-1.9000000000000001,z:-.5,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu825pvw-126",type:"wardrobe",x:-1.9000000000000001,z:.6000000000000001,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu8265dy-129",type:"desk160",x:1.8,z:-.8,rot:4.71238898038469,w:1.6,d:.75,h:.75,color:"#343b3b",open:!1},{id:"item-mu8276v5-130",type:"lamp",x:-3.3000000000000003,z:.30000000000000004,rot:0,w:.32,d:.32,h:1.55,color:"#ebdfc7",open:!1},{id:"item-mvlvr14r-44",type:"bed5",x:1.3,z:1.2000000000000002,rot:3.141592653589793,w:1.624,d:2.1,h:.88,color:"#d9d7c8"}],structure:{bounds:{left:-2.25,right:2.25,back:-2.375,front:2.375},bathroom:{x:-3,z:-.9,w:1.5,d:3},balcony:{depth:1},openings:[{id:"front-door",kind:"door",side:"back",at:1.1,w:2,h:2,sill:0},{id:"right-window",kind:"window",side:"right",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"left-window",kind:"window",side:"left",at:1.7000000000000002,w:1,h:1.1,sill:1},{id:"rear-window",kind:"window",side:"back",at:-1,w:1,h:1.1,sill:1},{id:"bath-window",kind:"window",side:"bath-left",at:-.95,w:.6,h:.45,sill:2.1},{id:"door-mu81p2c9",kind:"door",side:"front",at:-1.55,w:.8,h:2,sill:0},{id:"door-mu8209r5",kind:"door",side:"left",at:-1.55,w:.8,h:2,sill:0}],partitions:[],colors:{wall:"#eeeae0",floor:"#c5bfb4",foundation:"#b2b4a7",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#454d48",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#9a8262",window:"#9dbab6",frame:"#38433f",trim:"#d8d3c8",garden:"#9ba990"}}};var yp={format:"house-studio-3d",version:1,name:"My two-floor room",preset:"my-two-floor-room",items:[{id:"item-mvo3qu8g-38",type:"coatRack",x:-1.5,z:-1.1,rot:0,w:.52,d:.52,h:1.78,color:"#b68a5e",open:!1},{id:"item-mvo3qy9x-39",type:"timberWardrobe",x:1.1,z:-1.8,rot:0,w:1.25,d:.57,h:2.03,color:"#aa6936",open:!1},{id:"item-mvo3rpax-43",type:"desk140",x:.4,z:1,rot:3.141592653589793,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3rvv4-44",type:"desk140",x:1.5,z:-.1,rot:4.71238898038469,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3t2sa-45",type:"wireChair",x:.4,z:.4,rot:0,w:.48,d:.52,h:.95,color:"#252723",open:!1},{id:"item-mvo3t9yz-46",type:"leaningShelf",x:-1.6,z:-1.8,rot:1.5707963267948966,w:.85,d:.36,h:1.76,color:"#d4c29f",open:!1},{id:"item-mvo54hs7-52",type:"outdoor",x:-.6000000000000001,z:-2,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mvo55a79-53",type:"rug",x:-.6000000000000001,z:-1.7000000000000002,rot:0,w:1.5,d:1.2,h:.015,color:"#c9c4aa",open:!1},{id:"item-mvo57ira-55",type:"roundTable",x:1.5,z:1,rot:0,w:.7,d:.7,h:.75,color:"#c29b68",open:!1}],structure:{bounds:{left:-2,right:2,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.75,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},balcony:{enabled:!1,depth:1},openings:[{id:"door-mvo3qijq",kind:"door",side:"front",at:-.8,w:.8,h:2,sill:0},{id:"window-mvo3scen",kind:"window",side:"back",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"window-mvo3sgtc",kind:"window",side:"right",at:-1.2000000000000002,w:1,h:1.1,sill:1},{id:"window-mvo3soe3",kind:"window",side:"right",at:-.2,w:1,h:1.1,sill:1},{id:"window-mvo3su11",kind:"window",side:"right",at:.8,w:1,h:1.1,sill:1}],partitions:[],colors:{wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#eeede6",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#b59973",window:"#9dbab6",frame:"#6c7a70",trim:"#d8d3c8",garden:"#9ba990"},wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},room:{kind:"custom-room",height:2.8,estimated:!1},finishes:{floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},wallVisibility:{front:"low",back:"full",left:"low",right:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"}},activeFloorId:"floor-1",floors:[{id:"floor-1",name:"Ground floor",items:[{id:"item-mvo3qu8g-38",type:"coatRack",x:-1.5,z:-1.1,rot:0,w:.52,d:.52,h:1.78,color:"#b68a5e",open:!1},{id:"item-mvo3qy9x-39",type:"timberWardrobe",x:1.1,z:-1.8,rot:0,w:1.25,d:.57,h:2.03,color:"#aa6936",open:!1},{id:"item-mvo3rpax-43",type:"desk140",x:.4,z:1,rot:3.141592653589793,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3rvv4-44",type:"desk140",x:1.5,z:-.1,rot:4.71238898038469,w:1.4,d:.65,h:.75,color:"#c6ac83",open:!1},{id:"item-mvo3t2sa-45",type:"wireChair",x:.4,z:.4,rot:0,w:.48,d:.52,h:.95,color:"#252723",open:!1},{id:"item-mvo3t9yz-46",type:"leaningShelf",x:-1.6,z:-1.8,rot:1.5707963267948966,w:.85,d:.36,h:1.76,color:"#d4c29f",open:!1},{id:"item-mvo54hs7-52",type:"outdoor",x:-.6000000000000001,z:-2,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mvo55a79-53",type:"rug",x:-.6000000000000001,z:-1.7000000000000002,rot:0,w:1.5,d:1.2,h:.015,color:"#c9c4aa",open:!1},{id:"item-mvo57ira-55",type:"roundTable",x:1.5,z:1,rot:0,w:.7,d:.7,h:.75,color:"#c29b68",open:!1}],structure:{bounds:{left:-2,right:2,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.75,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},balcony:{enabled:!1,depth:1},openings:[{id:"door-mvo3qijq",kind:"door",side:"front",at:-.8,w:.8,h:2,sill:0},{id:"window-mvo3scen",kind:"window",side:"back",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"window-mvo3sgtc",kind:"window",side:"right",at:-1.2000000000000002,w:1,h:1.1,sill:1},{id:"window-mvo3soe3",kind:"window",side:"right",at:-.2,w:1,h:1.1,sill:1},{id:"window-mvo3su11",kind:"window",side:"right",at:.8,w:1,h:1.1,sill:1}],partitions:[],colors:{wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#eeede6",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#b59973",window:"#9dbab6",frame:"#6c7a70",trim:"#d8d3c8",garden:"#9ba990"},wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},room:{kind:"custom-room",height:2.8,estimated:!1},finishes:{floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},wallVisibility:{front:"low",back:"full",left:"low",right:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"}}},{id:"floor-mvo5043k-2",name:"Floor 2",items:[{id:"item-mvo537g7-49",type:"cabinet",x:-.1,z:-1.5,rot:1.5707963267948966,w:1.2,d:.38,h:.64,color:"#c6ac83",open:!1},{id:"item-mvo53c20-50",type:"cabinet",x:-.1,z:-.30000000000000004,rot:1.5707963267948966,w:1.2,d:.38,h:.64,color:"#c6ac83",open:!1},{id:"item-mvo53lwm-51",type:"rug",x:-1.1,z:.2,rot:0,w:1.5,d:1.2,h:.015,color:"#c9c4aa",open:!1},{id:"item-mvo55mj6-54",type:"timberBed",x:-1.1,z:-1.1,rot:0,w:1.6,d:2.13,h:.94,color:"#748dcb",open:!1}],structure:{bounds:{left:-2,right:2,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.75,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},balcony:{enabled:!1,depth:1},openings:[{id:"window-mvo52ysr",kind:"window",side:"back",at:-1.2000000000000002,w:1,h:1.1,sill:1}],partitions:[],colors:{wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#eeede6",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#b59973",window:"#9dbab6",frame:"#6c7a70",trim:"#d8d3c8",garden:"#9ba990"},wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},room:{kind:"custom-room",height:2.8,estimated:!1},finishes:{floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},wallVisibility:{front:"low",back:"full",left:"low",right:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"}}}],stairs:[{id:"stairs-mvo5043k-0",from:"floor-1",to:"floor-mvo5043k-2",style:"wood-ladder",x:.2,z:1.8,w:.68,run:.8,rot:4.71238898038469,color:"#b18b61"}]};var vp={format:"house-studio-3d",version:1,name:"My room \xB7 video model",preset:"video-room",items:[{id:"video-bed",type:"timberBed",x:.45,z:-1.13,rot:0,w:1.6,d:2.13,h:.94,color:"#748dcb"},{id:"video-desk",type:"timberDesk",x:-.9,z:-1.1,rot:0,w:1,d:.58,h:.75,color:"#985d35"},{id:"video-chair",type:"wireChair",x:-.86,z:-.33,rot:Math.PI,w:.48,d:.52,h:.95,color:"#252723"},{id:"video-wardrobe",type:"timberWardrobe",x:-1.57,z:.62,rot:Math.PI/2,w:1.25,d:.57,h:2.03,color:"#aa6936"},{id:"video-shelf",type:"leaningShelf",x:1.66,z:.12,rot:-Math.PI/2,w:.85,d:.36,h:1.76,color:"#d4c29f"},{id:"video-narrow-shelf",type:"leaningShelf",x:1.25,z:.33,rot:0,w:.36,d:.3,h:1.6,color:"#d4c29f"},{id:"video-basket",type:"laundryBasket",x:-.2,z:1.05,rot:0,w:.47,d:.38,h:.4,color:"#c3a4ad"}],structure:{bounds:{left:-1.95,right:1.95,back:-2.3,front:2.3},bathroom:{enabled:!1,x:-2.7,z:-.8,w:1.5,d:3,side:"left",start:-2.3,end:.7,depth:1.5},balcony:{enabled:!1,depth:1},room:{kind:"video-bedroom",estimated:!0,height:2.48,stairWidth:.88,stairRun:1.65,stairDrop:1.8,ladderRun:.88},openings:[{id:"video-back-window",kind:"window",side:"back",at:0,w:2.9,h:.66,sill:1.12,style:"horizontal"},{id:"video-high-window",kind:"window",side:"back",at:-1.02,w:.58,h:.52,sill:1.88,style:"high"},{id:"video-bed-window",kind:"window",side:"right",at:-1.05,w:1.36,h:1.35,sill:.77,style:"curtained"},{id:"video-stair-window",kind:"window",side:"right",at:1.37,w:.83,h:1.35,sill:.59,style:"curtained"},{id:"video-entry",kind:"door",side:"front",at:.4,w:.8,h:2.1,sill:0,style:"open"}],partitions:[],wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},wallVisibility:{front:"hidden",left:"low",right:"full",back:"full","bath-front":"low","bath-back":"full","bath-left":"low","bath-right":"low"},finishes:{floor:{material:"wood",scale:.65,rotation:90},bathFloor:{material:"tiles",scale:.3,rotation:0}},colors:{...tr.structure.colors,wall:"#d3ddcc",floor:"#ba773b",foundation:"#68472f",frame:"#684a37",window:"#e5e9de",trim:"#573e2e",roof:"#87a755",panel:"#4a382b",curtain:"#292744"}}};function kr(n){let t=n.bounds,e=n.room;return{left:t.right-e.stairWidth,right:t.right,back:t.front-e.stairRun,front:t.front}}function vc(n){let t=n.bounds,e=n.room;return{x:t.right-e.stairWidth-.37,z:t.front-.12-e.ladderRun/2,w:.65,d:e.ladderRun+.12}}function bp(n){let t=n.bounds,e=kr(n);return[{left:t.left,right:e.left,back:t.back,front:t.front},{left:e.left,right:t.right,back:t.back,front:e.back}].filter(i=>i.right-i.left>.01&&i.front-i.back>.01)}var Fe=["front","back","left","right"],$n=[...Fe,...Fe.map(n=>"bath-"+n)],Iv={front:"back",back:"front",left:"right",right:"left"},Ci={front:"Front",back:"Back",left:"Left",right:"Right"},Ri=[{id:"marble",name:"Veined marble",detail:"Soft, flowing veins",scale:.8,roughness:.24},{id:"stone",name:"Natural stone",detail:"Layered mineral texture",scale:.6,roughness:.82},{id:"wood",name:"Wood planks",detail:"Long grain & board joints",scale:1.2,roughness:.64},{id:"herringbone",name:"Herringbone wood",detail:"Interlocking parquet",scale:1.2,roughness:.64},{id:"matte",name:"Matt porcelain",detail:"Soft, unpolished tiles",scale:.6,roughness:.98},{id:"concrete",name:"Microcement",detail:"Continuous, fine texture",scale:1.5,roughness:.96},{id:"terrazzo",name:"Terrazzo",detail:"Fine stone chips",scale:.6,roughness:.48},{id:"tiles",name:"Ceramic tiles",detail:"Classic square grout grid",scale:.3,roughness:.32}],Pv=Object.fromEntries($n.map(n=>[n,n==="back"||n==="bath-back"?"full":"low"]));function ce(n,t){let e=n.bathroom,i=t.startsWith("bath-")?{left:e.x-e.w/2,right:e.x+e.w/2,back:e.z-e.d/2,front:e.z+e.d/2}:n.bounds,r=t.replace("bath-","");return r==="front"||r==="back"?{axis:"x",start:i.left,end:i.right,fixed:r==="front"?i.front:i.back,side:t}:{axis:"z",start:i.back,end:i.front,fixed:r==="left"?i.left:i.right,side:t}}function er(n){return n.bathroom.side?"bath-"+Iv[n.bathroom.side]:null}function nr(n){return $n.filter(t=>(n.bathroom.enabled!==!1||!t.startsWith("bath-"))&&t!==er(n)).map(t=>ce(n,t))}function un(n,t){let e=ce(n,t),i=[e.start,...(n.wallSplits?.[t]||[]).filter(r=>r>e.start+.05&&r<e.end-.05),e.end].sort((r,s)=>r-s);return i.slice(1).map((r,s)=>({...e,id:`segment-${t}-${s}`,index:s,start:i[s],end:r}))}function bc(n,t){return Fe.flatMap(e=>un(n,e)).find(e=>e.id===t)}function ia(n){let t=n.bathroom,e=n.bounds;if(!Fe.includes(t.side)){t.side=Fe.reduce((a,l)=>{let c={left:Math.abs(t.x+t.w/2-e.left),right:Math.abs(t.x-t.w/2-e.right),front:Math.abs(t.z-t.d/2-e.front),back:Math.abs(t.z+t.d/2-e.back)};return c[l]<c[a]?l:a},"left");let o=t.side==="left"||t.side==="right";t.start=o?t.z-t.d/2:t.x-t.w/2,t.end=t.start+(o?t.d:t.w),t.depth=o?t.w:t.d}let i=ce(n,t.side),r=Math.min(i.end-i.start,Math.max(.8,t.end-t.start));t.start=Math.min(i.end-r,Math.max(i.start,t.start)),t.end=t.start+r;let s=(t.start+t.end)/2;return i.axis==="z"?(t.w=t.depth,t.d=r,t.x=i.fixed+(t.side==="left"?-1:1)*t.depth/2,t.z=s):(t.w=r,t.d=t.depth,t.x=s,t.z=i.fixed+(t.side==="back"?-1:1)*t.depth/2),t}function Br(n){let t=JSON.parse(JSON.stringify(n));ia(t),t.wallSplits=Object.fromEntries(Fe.map(s=>[s,[...new Set(t.wallSplits?.[s]||[])].sort((o,a)=>o-a)])),t.segmentColors||(t.segmentColors={}),t.floorCuts||(t.floorCuts=[]),t.fences||(t.fences=[]),t.finishes||(t.finishes={});for(let s of["floor","bathFloor"])t.finishes[s]={material:s==="floor"?"marble":"tiles",scale:s==="floor"?.8:.3,rotation:0,...t.finishes[s]};t.wallVisibility={...Pv,...t.wallVisibility};let e=t.bathroom,i=ce(t,e.side);if(e.enabled===!1)return t;for(let s of[e.start,e.end])s>i.start+.05&&s<i.end-.05&&!t.wallSplits[e.side].some(o=>Math.abs(o-s)<.03)&&t.wallSplits[e.side].push(s);t.wallSplits[e.side].sort((s,o)=>s-o);let r=er(t);for(let s of t.openings.filter(o=>o.side===r))t.openings.some(o=>o.side===e.side&&o.kind===s.kind&&Math.abs(o.at-s.at)<.1)||t.openings.push({...s,side:e.side});return t.openings=t.openings.filter(s=>s.side!==r),t}function Mp(n,t,e){var a;if(!Fe.includes(t)||!Number.isFinite(e))throw new Error("Choose an exterior wall and a split position.");let i=ce(n,t);if(e<i.start+.25||e>i.end-.25)throw new Error("Leave at least 25 cm at either end of the wall.");if(n.wallSplits||(n.wallSplits={}),(a=n.wallSplits)[t]||(a[t]=[]),n.wallSplits[t].length>=12)throw new Error("This wall already has 12 split points.");if(n.wallSplits[t].some(l=>Math.abs(l-e)<.05))throw new Error("There is already a split here.");let r=un(n,t).find(l=>e>l.start&&e<l.end);if(!r||e-r.start<.25||r.end-e<.25)throw new Error("Leave at least 25 cm in each wall section.");let s=un(n,t),o={...n.segmentColors};n.wallSplits[t].push(e),n.wallSplits[t].sort((l,c)=>l-c),n.segmentColors||(n.segmentColors={});for(let l of un(n,t)){let c=s.find(h=>(l.start+l.end)/2>=h.start&&(l.start+l.end)/2<=h.end);o[c?.id]&&(n.segmentColors[l.id]=o[c.id])}return un(n,t).find(l=>Math.abs(l.start-e)<.001)}function wu(n,t,e,i,r=n.bathroom.depth||1.5){let s=ce(n,t);if(!Fe.includes(t)||![e,i,r].every(Number.isFinite)||e<s.start-.001||i>s.end+.001||i-e<.8||r<.8||r>4)throw new Error("Choose at least 80 cm of wall and an extension depth from 0.8 to 4 m.");let o={...n.bathroom};n.bathroom={...o,enabled:!0,side:t,start:e,end:i,depth:r},ia(n);let a=n.bathroom;if(Math.max(Math.abs(a.x-a.w/2),Math.abs(a.x+a.w/2),Math.abs(a.z-a.d/2),Math.abs(a.z+a.d/2))>6)throw n.bathroom=o,new Error("The extension must stay within the 12 m planning area.");for(let c of n.openings.filter(h=>h.side.startsWith("bath-")))c.side="bath-"+t,c.at=(e+i)/2,c.w=Math.min(c.w,i-e-.3);if(n.openings=n.openings.filter(c=>c.id!=="bath-access-auto"||c.side===t),!n.openings.some(c=>c.kind==="door"&&c.side===t&&c.at-c.w/2>=e+.05&&c.at+c.w/2<=i-.05)){let c=Math.min(.8,i-e-.2),h=n.openings.filter(f=>f.side===t),d=[(e+i)/2,...Array.from({length:Math.ceil((i-e)*10)},(f,g)=>e+.1+c/2+g*.1)].find(f=>f-c/2>=e+.05&&f+c/2<=i-.05&&!h.some(g=>Math.abs(g.at-f)<(g.w+c)/2+.05));d!==void 0&&n.openings.push({id:"bath-access-auto",kind:"door",side:t,at:d,w:c,h:2,sill:0})}let l=Br(n);return Object.assign(n,l),n.bathroom}function Su(n){let t=[];for(let i of n.openings){let r=ce(n,i.side);(i.at-i.w/2<r.start+.02||i.at+i.w/2>r.end-.02)&&t.push(`${i.id}: opening extends beyond its wall.`)}let e=n.bathroom;return e.enabled!==!1&&e.side&&!n.openings.some(i=>i.side===e.side&&i.kind==="door"&&i.at-i.w/2>=e.start&&i.at+i.w/2<=e.end)&&t.push("Add a door within the bathroom wall section to connect the rooms."),t}var Vr=4,Yn=[{id:"timber",name:"Wooden stairs",detail:"Classic steps with a handrail",w:.9,run:2.6,shape:"straight",color:"#b18b61"},{id:"open",name:"Open timber stairs",detail:"Light, open steps on two rails",w:.9,run:2.6,shape:"open",color:"#b18b61"},{id:"floating",name:"Floating stairs",detail:"Minimal treads on a central beam",w:.9,run:2.5,shape:"floating",color:"#d0b28b"},{id:"turn",name:"L-shaped stairs",detail:"Two short flights and a corner landing",w:1.8,run:1.8,shape:"turn",color:"#ae8660"},{id:"spiral",name:"Spiral stairs",detail:"Curved steps around a central pole",w:1.6,run:1.6,shape:"spiral",color:"#566862"},{id:"wood-ladder",name:"Wooden loft ladder",detail:"Simple timber rails and rungs",w:.68,run:.8,shape:"ladder",color:"#b18b61"},{id:"metal-ladder",name:"Metal loft ladder",detail:"Slim metal rails and round rungs",w:.62,run:.65,shape:"ladder",color:"#526461"},{id:"space-saver",name:"Space-saving stairs",detail:"Steep, alternating paddle steps",w:.75,run:1.45,shape:"paddle",color:"#b18b61"}],qn=n=>JSON.parse(JSON.stringify(n));function Mc(n=4,t=4,e=2.8){let i=qn(tr.structure);return i.bounds={left:-n/2,right:n/2,back:-t/2,front:t/2},i.bathroom={enabled:!1,x:-2.7,z:0,w:1.5,d:3,side:"left",start:-1.5,end:1.5,depth:1.5},i.balcony={enabled:!1,depth:1},i.openings=[],i.partitions=[],i.wallSplits={},i.segmentColors={},i.floorCuts=[],i.fences=[],i.room={kind:"custom-room",height:e,estimated:!1},i.colors={...i.colors,wall:"#e8e7df",floor:"#c3a17a",foundation:"#bdc0b3",roof:"#eeede6",frame:"#6c7a70",door:"#b59973"},i.finishes={floor:{material:"wood",scale:.65,rotation:0},bathFloor:{material:"matte",scale:.6,rotation:0}},i.wallVisibility={front:"low",back:"full",left:"low",right:"full"},Br(i)}function Tu(n=4,t=4,e=2.8){let i=Mc(n,t,e);return{format:"house-studio-3d",version:1,name:"My new room",preset:"custom",items:[],structure:i,activeFloorId:"floor-1",floors:[{id:"floor-1",name:"Ground floor",items:[],structure:qn(i)}],stairs:[]}}function wp(n,t,e){if(!Number.isFinite(e)||e<2||e>10)throw new Error("Use a room size from 2 to 10 metres.");let i=n.bounds,r=t==="width",s=r?"left":"back",o=r?"right":"front",a=(i[s]+i[o])/2,l=i[o]-i[s],c=i[s];if(a-e/2<-6||a+e/2>6)throw new Error("Keep the room inside the planning area.");i[s]=a-e/2,i[o]=a+e/2;for(let h of n.openings.filter(u=>r?["front","back"].includes(u.side):["left","right"].includes(u.side)))h.w=Math.min(h.w,e-.3),h.at=i[s]+(h.at-c)/l*e,h.at=Math.max(i[s]+h.w/2+.1,Math.min(i[o]-h.w/2-.1,h.at));for(let h of r?["front","back"]:["left","right"])n.wallSplits?.[h]&&(n.wallSplits[h]=n.wallSplits[h].map(u=>i[s]+(u-c)/l*e));return n}function In(n){return n.floors?.length?n.floors.map(t=>t.id===n.activeFloorId?{...t,items:n.items,structure:n.structure}:t):[{id:"floor-1",name:"Ground floor",items:n.items,structure:n.structure}]}function bn(n){return n.floors&&(n.floors=In(n).map(qn)),n}function wc(n){return n.floors||(n.activeFloorId="floor-1",n.floors=In(n).map(qn),n.stairs=[]),bn(n)}function Sc(n,t){bn(n);let e=n.floors?.find(i=>i.id===t);if(!e)throw new Error("Choose an existing floor.");return n.activeFloorId=t,n.items=qn(e.items),n.structure=qn(e.structure),n}function ir(n){return n.structure.room?.height||3}function Ws(n){let t=0;return In(n).map(e=>{let i={...e,elevation:t};return t+=ir(e)+.2,i})}function Hr(n,t=0){let e=Math.abs(Math.sin(n.rot))>.5,i=(e?n.run:n.w)+t*2,r=(e?n.w:n.run)+t*2;return{left:n.x-i/2,right:n.x+i/2,back:n.z-r/2,front:n.z+r/2}}var Tc=n=>n.style==="turn"&&n.turn==="left"?-1:1;function Dv(n,t){return n.left<t.right-.005&&n.right>t.left+.005&&n.back<t.front-.005&&n.front>t.back+.005}function Lv(n){let t=Math.abs(Math.cos(n.rot||0)),e=Math.abs(Math.sin(n.rot||0)),i=n.w*t+n.d*e,r=n.w*e+n.d*t;return{left:n.x-i/2,right:n.x+i/2,back:n.z-r/2,front:n.z+r/2}}function Xs(n,t=!1){let e=t&&n.style==="turn",i=e?.5:n.w,r=e?n.run*.46:.5,s=e?(n.w/2+.25)*Tc(n):0,o=e?-n.run/2+r/2:(t?-1:1)*(n.run/2+.25),a=Math.cos(n.rot),l=Math.sin(n.rot);return Lv({x:n.x+s*a+o*l,z:n.z-s*l+o*a,w:i,d:r,rot:n.rot})}function Eu(n,t){let e=In(n),i=e.findIndex(s=>s.id===t.from),r=e.findIndex(s=>s.id===t.to);return i<0||r!==i+1?"Connect two neighbouring floors.":null}function Fv(n,t,e,i="timber",r={}){let s=Yn.find(h=>h.id===i);if(!s)throw new Error("Choose a stair or ladder style.");let o=In(n).find(h=>h.id===t);if(!o)throw new Error("Choose an existing floor.");let a=o.structure.bounds,l={id:"stairs-"+Date.now().toString(36)+"-"+(n.stairs?.length||0),from:t,to:e,style:i,x:(a.left+a.right)/2,z:(a.back+a.front)/2,rot:r.rotations?.[0]??0,w:s.w,run:s.run,color:s.color,...i==="turn"?{turn:"right"}:{},...r.dimensions||{}},c=Eu(n,l);if(c)throw new Error(c);return l}function Sp(n,t="timber",e=!1,i="right"){if(wc(n),n.floors.length>=Vr)throw new Error("This project can have up to four floors.");let r=n.floors.at(-1),s=r.structure.bounds,o=n.floors.length,a="floor-"+Date.now().toString(36)+"-"+(o+1);for(let h of n.floors)h.structure.room?.kind!=="custom-room"&&(h.structure.room={kind:"custom-room",height:ir(h),estimated:!1});n.structure=qn(n.floors.find(h=>h.id===n.activeFloorId).structure);let l=Mc(s.right-s.left,s.front-s.back,ir(r));l.bounds=qn(s),l.colors=qn(r.structure.colors),l.finishes=qn(r.structure.finishes),e&&(l.partitions=qn(r.structure.partitions)),n.floors.push({id:a,name:`Floor ${o+1}`,items:[],structure:l});let c;try{c=Fv({...n,structure:n.floors.find(h=>h.id===n.activeFloorId).structure},r.id,a,t,{dimensions:t==="turn"?{turn:i}:{}})}catch(h){throw n.floors.pop(),h}return n.stairs.push(c),Sc(n,a),n.preset="custom",c}function Tp(n){if(wc(n),n.floors.length<2)throw new Error("Keep at least one floor.");let t=n.floors.at(-1).id;return n.floors.pop(),n.stairs=n.stairs.filter(e=>e.from!==t&&e.to!==t),Sc(n,n.floors.at(-1).id),n}function Gr(n,t=[]){let e=[{...n}];for(let i of t){let r=[];for(let s of e){if(!Dv(s,i)){r.push(s);continue}let o=Math.max(s.left,i.left),a=Math.min(s.right,i.right),l=Math.max(s.back,i.back),c=Math.min(s.front,i.front);r.push({left:s.left,right:o,back:s.back,front:s.front},{left:a,right:s.right,back:s.back,front:s.front},{left:o,right:a,back:s.back,front:l},{left:o,right:a,back:c,front:s.front})}e=r.filter(s=>s.right-s.left>.003&&s.front-s.back>.003)}return e}var Ec=[{id:"vertical",name:"Vertical rails"},{id:"horizontal",name:"Horizontal rails"},{id:"glass",name:"Glass panels"}];function Au(n,t){return{left:Math.min(n.x,t.x),right:Math.max(n.x,t.x),back:Math.min(n.z,t.z),front:Math.max(n.z,t.z)}}function rr(n,t){let e={left:Math.max(n.left,t.left),right:Math.min(n.right,t.right),back:Math.max(n.back,t.back),front:Math.min(n.front,t.front)};return e.right-e.left>.003&&e.front-e.back>.003?e:null}function Ep(n,t,e){if(!["left","right","back","front"].every(s=>Number.isFinite(t[s])))throw new Error("Choose a rectangular floor section.");let i=rr(t,n.bounds);if(!i||i.right-i.left<.0999||i.front-i.back<.0999)throw new Error("Choose at least 10 cm in both directions inside the room.");if(n.floorCuts||(n.floorCuts=[]),n.floorCuts.length>=30)throw new Error("Use up to 30 floor openings per floor.");let r={id:e,...i};return n.floorCuts.push(r),r}function Cu(n,t,e,i={}){let r=Math.hypot(t.x-n.x,t.z-n.z);if(![n.x,n.z,t.x,t.z].every(Number.isFinite)||r<.0999)throw new Error("Draw a fence at least 10 cm long.");return{id:e,x1:n.x,z1:n.z,x2:t.x,z2:t.z,h:1,style:"vertical",color:"#6e7d6b",...i}}function Ap(n){return{back:[{x:n.left,z:n.back},{x:n.right,z:n.back}],right:[{x:n.right,z:n.back},{x:n.right,z:n.front}],front:[{x:n.right,z:n.front},{x:n.left,z:n.front}],left:[{x:n.left,z:n.front},{x:n.left,z:n.back}]}}function Ac(n){return{x:(n.x1+n.x2)/2,z:(n.z1+n.z2)/2,w:Math.hypot(n.x2-n.x1,n.z2-n.z1),d:.065,rot:-Math.atan2(n.z2-n.z1,n.x2-n.x1)}}var _t=.38;var Ic=[{type:"bed3",name:"3 ft single bed",cat:"Sleep",w:.9144+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed35",name:"3.5 ft single bed",cat:"Sleep",w:1.0668+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed5",name:"5 ft queen bed",cat:"Sleep",w:1.524+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"bed6",name:"6 ft king bed",cat:"Sleep",w:1.8288+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"loft35",name:"3.5 ft loft bed",cat:"Sleep",w:1.17,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"loft5",name:"5 ft loft bed",cat:"Sleep",w:1.63,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"sofabed",name:"Convertible sofa bed",cat:"Sleep",w:1.55,d:.88,h:.84,kind:"sofabed",color:"#a7b7a0"},{type:"nightstand",name:"Bedside table",cat:"Storage",w:.4,d:.38,h:.48,kind:"nightstand",color:"#c6ac83"},{type:"desk140",name:"140 cm work desk",cat:"Work",w:1.4,d:.65,h:.75,kind:"desk",color:"#c6ac83"},{type:"desk160",name:"160 cm gaming desk",cat:"Work",w:1.6,d:.75,h:.75,kind:"gaming",color:"#343b3b"},{type:"chair",name:"Office chair",cat:"Work",w:.59,d:.59,h:1.05,kind:"chair",color:"#425956"},{type:"shelf",name:"Open bookshelf",cat:"Storage",w:.75,d:.32,h:1.65,kind:"shelf",color:"#c6ac83"},{type:"wardrobe",name:"Sliding wardrobe",cat:"Storage",w:1.1,d:.55,h:2.15,kind:"wardrobe",color:"#e7e6dc"},{type:"cabinet",name:"Low cabinet",cat:"Storage",w:1.2,d:.38,h:.64,kind:"cabinet",color:"#c6ac83"},{type:"sofa",name:"Two-seat sofa",cat:"Living",w:1.5,d:.78,h:.8,kind:"sofa",color:"#a7b7a0"},{type:"coffee",name:"Low coffee table",cat:"Living",w:.75,d:.45,h:.38,kind:"coffee",color:"#c6ac83"},{type:"tv",name:"TV & media cabinet",cat:"Living",w:1.2,d:.35,h:1.25,kind:"tv",color:"#c6ac83"},{type:"table",name:"Compact dining table",cat:"Living",w:.8,d:.7,h:.75,kind:"table",color:"#c6ac83"},{type:"stool",name:"Oak stool",cat:"Living",w:.35,d:.35,h:.46,kind:"stool",color:"#c6ac83"},{type:"fridge",name:"Compact refrigerator",cat:"Kitchen",w:.55,d:.52,h:1.2,kind:"fridge",color:"#e5e8e4"},{type:"pantry",name:"Mini pantry & sink",cat:"Kitchen",w:1.2,d:.58,h:.88,kind:"pantry",color:"#e7e6dc"},{type:"basin",name:"Vanity & basin",cat:"Bath",w:.6,d:.43,h:.84,kind:"basin",color:"#c6ac83"},{type:"toilet",name:"Toilet",cat:"Bath",w:.38,d:.66,h:.78,kind:"toilet",color:"#eeeeea"},{type:"shower",name:"Glass shower",cat:"Bath",w:1.2,d:.8,h:2.15,kind:"shower",color:"#b9cfcc"},{type:"plant",name:"Potted plant",cat:"Garden",w:.35,d:.35,h:.9,kind:"plant",color:"#bac8ae"},{type:"tallplant",name:"Tall indoor plant",cat:"Garden",w:.48,d:.48,h:1.5,kind:"plant",color:"#526d53"},{type:"outdoor",name:"Balcony bench",cat:"Garden",w:1.15,d:.45,h:.75,kind:"outdoor",color:"#bda178"},{type:"rug",name:"Woven area rug",cat:"Decor",w:1.5,d:1.2,h:.015,kind:"rug",color:"#c9c4aa"},{type:"lamp",name:"Floor lamp",cat:"Decor",w:.32,d:.32,h:1.55,kind:"lamp",color:"#ebdfc7"},{type:"timberBed",name:"Timber spindle bed",cat:"Sleep",w:1.6,d:2.13,h:.94,kind:"bed",roomModel:"bed",color:"#748dcb"},{type:"timberDesk",name:"Wooden bedroom desk",cat:"Work",w:1,d:.58,h:.75,kind:"desk",roomModel:"desk",color:"#985d35"},{type:"wireChair",name:"Black woven chair",cat:"Work",w:.48,d:.52,h:.95,kind:"chair",roomModel:"chair",color:"#252723"},{type:"timberWardrobe",name:"Timber double wardrobe",cat:"Storage",w:1.25,d:.57,h:2.03,kind:"wardrobe",roomModel:"wardrobe",color:"#aa6936"},{type:"leaningShelf",name:"Leaning storage shelves",cat:"Storage",w:.85,d:.36,h:1.76,kind:"shelf",roomModel:"shelf",color:"#d4c29f"},{type:"laundryBasket",name:"Woven laundry basket",cat:"Decor",w:.47,d:.38,h:.4,kind:"basket",roomModel:"basket",color:"#c3a4ad"},{type:"coatRack",name:"Tree clothes rack",keywords:"cloth rack coat hanger",cat:"Decor",w:.52,d:.52,h:1.78,kind:"coatRack",color:"#b68a5e"},{type:"roundTable",name:"Round wooden table",keywords:"circle desk dining",cat:"Work",w:1.1,d:1.1,h:.75,kind:"roundTable",color:"#c29b68"}],Re=Object.fromEntries(Ic.map(n=>[n.type,n])),Uv=0,sr=()=>`item-${Date.now().toString(36)}-${++Uv}`;function Pu(n,t,e,i=0,r={}){let s=Re[n];return{id:sr(),type:n,x:t,z:e,rot:i,w:s.w,d:s.d,h:s.h,color:s.color,open:!1,...r}}var Wr=[{id:"my-little-house",name:"My little house",subtitle:"Your supplied room",image:"assets/default-layout.svg",description:"A work nook, queen bed & attached bathroom."},{id:"my-two-floor-room",name:"My two-floor room",subtitle:"Your saved layout \xB7 2 floors",image:"assets/two-floor-layout.svg",description:"Your furnished two-floor room, ready to make your own."}];function Du(n){if(n==="my-little-house")return wn(tr);if(n==="my-two-floor-room")return wn(yp);if(n==="video-room")return wn(vp);throw new Error("Unknown room layout.")}var Mn=[];function on(n,t,e,i){Mn.push({x:n,z:t,w:e,d:i,rot:0})}on(-1.625,2.3,1.25,.15);on(1.625,2.3,1.25,.15);on((-2.25+1.25)/2,-2.3,3.5,.15);on(2.15,-2.3,.2,.15);on(2.175,0,.15,4.75);on(-2.175,(-2.375-.35)/2,.15,2.025);on(-2.175,(.45+2.375)/2,.15,1.925);on(-3.675,-.875,.15,3);on(-3,-2.3,1.5,.15);on(-3,.55,1.5,.15);on(-.5,-3.33,3.5,.07);on(2.15,-3.33,.2,.07);on(-2.21,-2.875,.07,1);on(2.21,-2.875,.07,1);on(.5,2.3,1,.045);var Ru=[{name:"Front door",x:0,z:2.19,w:2,d:.75,rot:0},{name:"Rear door",x:1.65,z:-2.18,w:.8,d:.7,rot:0},{name:"Bathroom door",x:-2.16,z:.05,w:.85,d:.8,rot:0}],De=null,Lu={holes:[],connections:[]};function or(n,t={holes:[],connections:[]}){let e=(n.floorCuts||[]).map(a=>rr(a,n.bounds)).filter(Boolean);t={...t,holes:[...t.holes||[],...e]},Lu=t,De=n,Mn.length=0,Ru.length=0;let i=a=>{let l=ce(n,a),c=l.axis==="x",{start:h,end:u,fixed:d}=l,f=n.openings.filter(m=>m.side===a&&m.kind==="door").map(m=>({a:Math.max(h,m.at-m.w/2),b:Math.min(u,m.at+m.w/2)})).filter(m=>m.b>m.a).sort((m,x)=>m.a-x.a),g=h;for(let m of[...f,{a:u,b:u}]){if(m.a-g>.01){let x=(g+m.a)/2;Mn.push(c?{x,z:d,w:m.a-g,d:.15,rot:0}:{x:d,z:x,w:.15,d:m.a-g,rot:0})}g=Math.max(g,m.b)}for(let m of n.openings.filter(x=>x.side===a&&x.kind==="door"))Ru.push({name:m.id,x:c?m.at:d,z:c?d:m.at,w:c?m.w:.72,d:c?.72:m.w,rot:0})};for(let a of nr(n))i(a.side);let r=n.openings.find(a=>a.id==="front-door"&&a.kind==="door"&&a.w>=1.3);if(r){let a=ce(n,r.side);Mn.push(a.axis==="x"?{x:r.at+r.w/4,z:a.fixed,w:r.w/2,d:.05,rot:0}:{x:a.fixed,z:r.at+r.w/4,w:.05,d:r.w/2,rot:0})}let s=n.bounds,o=n.balcony.depth;if(n.balcony.enabled!==!1){Mn.push({x:(s.left+s.right)/2-.52,z:s.back-o+.04,w:s.right-s.left-1.05,d:.07,rot:0});for(let a of[s.left,s.right])Mn.push({x:a,z:s.back-o/2,w:.07,d:o,rot:0})}if(n.room?.kind==="video-bedroom"){let a=kr(n),l=vc(n);Mn.push({x:(a.left+a.right)/2,z:(a.back+a.front)/2,w:a.right-a.left,d:a.front-a.back,rot:0},{...l,rot:0})}for(let a of[...t.holes||[],...t.connections||[]])Mn.push({x:(a.left+a.right)/2,z:(a.back+a.front)/2,w:a.right-a.left,d:a.front-a.back,rot:0});for(let a of n.partitions)Mn.push({x:a.x,z:a.z,w:a.w,d:a.d,rot:a.rot||0});for(let a of n.fences||[])Mn.push(Ac(a))}function Zn(n,t,e){let i=Math.cos(n.rot||0),r=Math.sin(n.rot||0);return{x:n.x+t*i+e*r,z:n.z-t*r+e*i}}function Nv(n,t,e){let i=Math.cos(n.rot||0),r=Math.sin(n.rot||0),s=t-n.x,o=e-n.z;return{x:s*i-o*r,z:s*r+o*i}}function Cc(n,t,e=0){let i=[n.rot||0,(n.rot||0)+Math.PI/2,t.rot||0,(t.rot||0)+Math.PI/2],r=a=>[[-a.w/2,-a.d/2],[a.w/2,-a.d/2],[a.w/2,a.d/2],[-a.w/2,a.d/2]].map(l=>Zn(a,...l)),s=r(n),o=r(t);return i.every(a=>{let l=Math.cos(a),c=-Math.sin(a),h=s.map(d=>d.x*l+d.z*c),u=o.map(d=>d.x*l+d.z*c);return Math.max(...h)+e>Math.min(...u)+.008&&Math.max(...u)+e>Math.min(...h)+.008})}function Rc(n,t=!1,e=1.7){let i=Re[n.type]?.kind;if(!i||i==="rug")return[];if(i==="loft"){let r=n.w/Re[n.type].w,s=n.d/Re[n.type].d,a=[[-n.w/2+.045*r,-n.d/2+.045*s],[n.w/2-.045*r,-n.d/2+.045*s],[-n.w/2+.045*r,n.d/2-.045*s],[n.w/2-.045*r,n.d/2-.045*s]].map(([l,c])=>({...Zn(n,l,c),w:.09*r,d:.09*s,rot:n.rot}));return a.push({...Zn(n,n.w/2-.23*r,n.d/2+.2*s),w:.42*r,d:.46*s,rot:n.rot}),t&&e>n.h*(1.53/2.25)&&a.push({...n}),a}if(i==="sofabed"&&n.open){let r=n.d/Re[n.type].d;return[{...n,...Zn(n,0,.52*r),d:n.d+1.04*r}]}return t&&i==="shower"?[]:[n]}function Pc(n,t){let e=[],i=Rc(n);if(i.some(r=>Mn.some(s=>Cc(r,s)))&&e.push("Overlaps a wall or balcony railing."),i.some(r=>t.some(s=>s.id!==n.id&&Rc(s).some(o=>Cc(r,o))))&&e.push("Overlaps another object."),i.some(r=>Ru.some(s=>Cc(r,s)))&&e.push("Occupies a door clearance zone."),i.some(r=>(Lu.landings||[]).some(s=>Cc(r,{x:(s.left+s.right)/2,z:(s.back+s.front)/2,w:s.right-s.left,d:s.front-s.back,rot:0})))&&e.push("Overlaps a stair landing."),Re[n.type].kind==="loft"&&e.push(`Loft: mattress about ${(n.h*1.88/2.25).toFixed(2)} m high. Check ceiling, guardrails & ladder.`),(Math.abs(n.x)>6||Math.abs(n.z)>6)&&e.push("Outside the illustrated garden area."),De?.room?.kind==="custom-room"){let r=De.bounds;i.some(s=>s.x-s.w/2<r.left||s.x+s.w/2>r.right||s.z-s.d/2<r.back||s.z+s.d/2>r.front)&&e.push("Part of this item is outside the room."),n.h>De.room.height&&e.push("This item is taller than the ceiling.")}return e}var Fu=n=>.3*n/1.7;function ra(n,t,e,i=.3){return e.some(r=>{let s=Nv(r,n,t),o=Math.max(Math.abs(s.x)-r.w/2,0),a=Math.max(Math.abs(s.z)-r.d/2,0);return o*o+a*a<i*i})}function Uu(n,t=1.7){return[...Mn,...n.flatMap(e=>Rc(e,!0,t))]}function Ye(n,t){if(De){let e=De.bounds,i=De.bathroom,r=De.balcony.depth;if((Lu.holes||[]).some(s=>n>=s.left&&n<=s.right&&t>=s.back&&t<=s.front))return _t;if(De.room?.kind==="video-bedroom"){let s=kr(De);if(n>=s.left&&n<=s.right&&t>=s.back&&t<=s.front)return _t-De.room.stairDrop*(t-s.back)/(s.front-s.back)}return n>=e.left&&n<=e.right&&t>=e.back-(De.balcony.enabled===!1?0:r)&&t<=e.front||i.enabled!==!1&&n>=i.x-i.w/2&&n<=i.x+i.w/2&&t>=i.z-i.d/2&&t<=i.z+i.d/2?_t:Math.abs(n-(e.left+e.right)/2)<1&&t>=e.front&&t<e.front+.825?Math.max(.02,_t*(1-(t-e.front)/.825)):n>e.right-1.15&&n<e.right-.05&&t<e.back-r&&t>e.back-r-.825?Math.max(.02,_t*(1-(e.back-r-t)/.825)):.025}return n>=-2.25&&n<=2.25&&t>=-3.375&&t<=2.375||n>=-3.75&&n<-2.25&&t>=-2.375&&t<=.625?_t:Math.abs(n)<1.3&&t>=2.375&&t<3.2?Math.max(.02,_t*(1-(t-2.375)/.825)):n>1.13&&n<2.16&&t<-3.375&&t>-4.2?Math.max(.02,_t*(1-(-t-3.375)/.825)):.025}function Ov(n,t){return Math.abs(Ye(n.x,n.z)-Ye(t.x,t.z))<.14}var Iu=class{constructor(){this.v=[]}push(t){let e=this.v,i=e.push(t)-1;for(;i;){let r=i-1>>1;if(e[r].f<=t.f)break;e[i]=e[r],i=r}e[i]=t}pop(){let t=this.v,e=t[0],i=t.pop();if(t.length){let r=0;for(;r*2+1<t.length;){let s=r*2+1;if(s+1<t.length&&t[s+1].f<t[s].f&&s++,t[s].f>=i.f)break;t[r]=t[s],r=s}t[r]=i}return e}};function Dc(n,t,e,i=1.7){if(![n.x,n.z,t.x,t.z].every(y=>Number.isFinite(y)&&Math.abs(y)<=6))return null;let r=.1,s=-6,o=6,a=121,l=Uu(e,i),c=Fu(i),h=(y,P)=>Math.round((P-s)/r)*a+Math.round((y-s)/r),u=y=>({x:s+y%a*r,z:s+Math.floor(y/a)*r}),d=h(n.x,n.z),f=h(t.x,t.z);if(d<0||d>=a*a||f<0||f>=a*a||ra(t.x,t.z,l,c))return null;let g=new Int8Array(a*a);g.fill(-1);function m(y){if(y<0||y>=a*a)return!1;if(g[y]<0){let P=u(y);g[y]=ra(P.x,P.z,l,c)?1:0}return!g[y]}if(!m(d)||!m(f))return null;let x=new Float32Array(a*a);x.fill(1/0),x[d]=0;let p=new Int32Array(a*a);p.fill(-1);let M=new Uint8Array(a*a),_=new Iu;for(_.push({i:d,f:0});_.v.length;){let y=_.pop().i;if(M[y])continue;if(M[y]=1,y===f){let O=[t];for(let T=f;T!==d;T=p[T])O.push(u(T));return O.push(n),O.reverse()}let P=u(y),C=y%a,U=Math.floor(y/a);for(let[O,T]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let w=C+O,S=U+T;if(w<0||w>=a||S<0||S>=a)continue;let z=S*a+w;if(M[z]||!m(z)||O&&T&&(!m(U*a+w)||!m(S*a+C)))continue;let H=u(z);if(!Ov(P,H))continue;let X=x[y]+Math.hypot(O,T);X>=x[z]||(x[z]=X,p[z]=y,_.push({i:z,f:X+Math.hypot(H.x-t.x,H.z-t.z)/r}))}}return null}function Nu(n,t){if(De){let e=De.bounds,i=De.bathroom;if(n==="bathroom")return i.enabled===!1?[]:[{x:i.x,z:i.z,pose:"stand",label:"In the bathroom"}];if(n==="balcony")return De.balcony.enabled===!1?[]:[{x:e.right-.6,z:e.back-De.balcony.depth/2,pose:"stand",label:"Taking a balcony break"}];if(n==="entrance"&&De.room?.kind==="video-bedroom"){let r=kr(De);return[{x:r.left-.45,z:r.back+.22,pose:"stand",label:"At the stair landing"}]}if(n==="entrance"){let r=De.openings.find(s=>s.kind==="door"&&s.side==="front")||De.openings.find(s=>s.id==="front-door");if(r){let s=ce(De,r.side),o={front:-1,back:1,left:1,right:-1}[r.side];return[{x:s.axis==="x"?r.at:s.fixed+o*.4,z:s.axis==="x"?s.fixed+o*.4:r.at,pose:"stand",label:"At the entrance"}]}return[]}}if(n==="bathroom")return[{x:-2.64,z:.05,pose:"stand",label:"In the bathroom"}];if(n==="balcony")return[{x:1.55,z:-2.88,pose:"stand",label:"Taking a balcony break"}];if(n==="entrance")return[{x:-.5,z:2.02,pose:"stand",label:"At the front door"}];if(n==="bed"){let e=t.find(r=>["bed","loft","sofabed"].includes(Re[r.type].kind));if(!e)return[];if(Re[e.type].kind==="loft")return[{...Zn(e,e.w/2-.23*e.w/Re[e.type].w,e.d/2+.83*e.d/Re[e.type].d),pose:"sleep",item:e,label:"Climbing to bed"}];let i=Rc(e)[0];return[[-i.w/2-.42,.15],[i.w/2+.42,.15],[0,i.d/2+.42]].map(r=>({...Zn(i,...r),pose:"sleep",item:e,label:"Resting on the bed"}))}if(n==="desk"){let e=t.find(s=>["desk","gaming","roundTable"].includes(Re[s.type].kind));if(!e)return[];let r=t.filter(s=>Re[s.type].kind==="chair").sort((s,o)=>Math.hypot(s.x-e.x,s.z-e.z)-Math.hypot(o.x-e.x,o.z-e.z))[0];return r&&Math.hypot(r.x-e.x,r.z-e.z)<1.8?[[-.72,0],[.72,0],[0,.72],[0,-.72]].map(s=>({...Zn(r,...s),pose:"sit",item:r,label:"Working at the desk"})):[{...Zn(e,0,e.d/2+.45),pose:"stand",label:"At the desk (add a chair to sit)"}]}return[]}function wn(n,t=!1){if(!n||n.format!=="house-studio-3d"||n.version!==1||!Array.isArray(n.items)||n.items.length>180)throw new Error("Not a supported House Studio layout (maximum 180 items).");let e=new Set,i=n.items.map(o=>{if(!o||!Re[o.type]||typeof o.id!="string"||o.id.length>100||e.has(o.id))throw new Error("Invalid or duplicate furniture ID.");e.add(o.id);for(let a of["x","z","rot","w","d","h"])if(typeof o[a]!="number"||!Number.isFinite(o[a]))throw new Error("Furniture dimensions must be finite numbers.");if(Math.abs(o.x)>6||Math.abs(o.z)>6||o.w<.1||o.w>4||o.d<.1||o.d>4||o.h<.01||o.h>3||Math.abs(o.rot)>100)throw new Error("Furniture dimensions or positions are outside the supported range.");if(o.type==="roundTable"&&Math.abs(o.w-o.d)>.001)throw new Error("A round table needs equal width and depth. Change its diameter.");if(!/^#[0-9a-f]{6}$/i.test(o.color))throw new Error("Invalid furniture colour.");return{id:o.id,type:o.type,x:o.x,z:o.z,rot:o.rot,w:o.w,d:o.d,h:o.h,color:o.color,open:!!o.open}}),r;if(n.structure!==void 0){let o=n.structure;if(!o||typeof o!="object"||!o.bounds||!o.bathroom||!o.balcony||!o.colors||!Array.isArray(o.openings)||!Array.isArray(o.partitions)||o.openings.length>40||o.partitions.length>30)throw new Error("Invalid structural layout.");for(let[h,u]of[[o.bounds,["left","right","back","front"]],[o.bathroom,["x","z","w","d"]],[o.balcony,["depth"]]])for(let d of u)if(!Number.isFinite(h[d])||Math.abs(h[d])>6)throw new Error("Invalid structural dimensions.");if(o.bounds.right-o.bounds.left<2||o.bounds.front-o.bounds.back<2||o.bathroom.w<.8||o.bathroom.d<.8||o.balcony.depth<.5||o.balcony.depth>3)throw new Error("Structural dimensions are too small or out of range.");let a=["wall","floor","foundation","bathWall","bathFloor","roof","bathRoof","balcony","rail","door","window","frame","trim","garden"];for(let h of a)if(!/^#[0-9a-f]{6}$/i.test(o.colors[h]||""))throw new Error("Invalid structural color.");let l=new Set;for(let h of o.openings){if(!h||typeof h.id!="string"||h.id.length>60||l.has(h.id)||!["door","window"].includes(h.kind)||!["front","back","left","right","bath-front","bath-back","bath-left","bath-right"].includes(h.side)||!["at","w","h","sill"].every(u=>Number.isFinite(h[u]))||Math.abs(h.at)>6||h.w<.4||h.w>3||h.h<.3||h.h>2.7||h.sill<0||h.sill+h.h>3)throw new Error("Invalid door or window.");l.add(h.id)}for(let h of o.partitions){if(!h||typeof h.id!="string"||h.id.length>60||l.has(h.id)||!["x","z","w","d","h","rot"].every(u=>Number.isFinite(h[u]))||Math.abs(h.x)>6||Math.abs(h.z)>6||h.w<.1||h.d<.1||h.h<.3||h.h>3||h.w>6||h.d>6||!/^#[0-9a-f]{6}$/i.test(h.color))throw new Error("Invalid partition.");l.add(h.id)}for(let h of["floorCuts","fences"]){if(o[h]!==void 0&&(!Array.isArray(o[h])||o[h].length>(h==="fences"?60:30)))throw new Error("Use up to 30 floor openings and 60 fence sections per floor.");for(let u of o[h]||[]){if(!u||typeof u.id!="string"||!/^[a-zA-Z0-9_-]{1,60}$/.test(u.id)||l.has(u.id))throw new Error("Invalid or duplicate floor opening / fence ID.");if(l.add(u.id),h==="floorCuts"){if(!["left","right","back","front"].every(d=>Number.isFinite(u[d])&&Math.abs(u[d])<=6)||u.right-u.left<.0999||u.front-u.back<.0999)throw new Error("Floor openings need finite dimensions of at least 10 cm.")}else if(!["x1","z1","x2","z2"].every(d=>Number.isFinite(u[d])&&Math.abs(u[d])<=6)||!Number.isFinite(u.h)||u.h<.3||u.h>2||Math.hypot(u.x2-u.x1,u.z2-u.z1)<.0999||!Ec.some(d=>d.id===u.style)||!/^#[0-9a-f]{6}$/i.test(u.color))throw new Error("Check the fence endpoints, style, color and height (0.3\u20132 m).")}}for(let[h,u]of Object.entries(o.colors))if(!/^#[0-9a-f]{6}$/i.test(u))throw new Error("Invalid structural color.");if(o.bathroom.side!==void 0&&(!Fe.includes(o.bathroom.side)||!["start","end","depth"].every(h=>Number.isFinite(o.bathroom[h]))||o.bathroom.end-o.bathroom.start<.8||o.bathroom.depth<.8||o.bathroom.depth>4))throw new Error("Invalid bathroom attachment.");if(o.wallSplits!==void 0){if(!o.wallSplits||typeof o.wallSplits!="object"||Array.isArray(o.wallSplits))throw new Error("Invalid wall splits.");for(let[h,u]of Object.entries(o.wallSplits))if(!Fe.includes(h)||!Array.isArray(u)||u.length>12||u.some(d=>!Number.isFinite(d)||Math.abs(d)>6))throw new Error("Invalid wall splits.")}if(o.segmentColors!==void 0){if(!o.segmentColors||typeof o.segmentColors!="object"||Array.isArray(o.segmentColors))throw new Error("Invalid segment colors.");for(let[h,u]of Object.entries(o.segmentColors))if(!/^segment-(front|back|left|right)-\d{1,2}$/.test(h)||!/^#[0-9a-f]{6}$/i.test(u))throw new Error("Invalid wall section color.")}if(o.finishes!==void 0){if(!o.finishes||typeof o.finishes!="object"||Array.isArray(o.finishes))throw new Error("Invalid floor finishes.");for(let[h,u]of Object.entries(o.finishes))if(!["floor","bathFloor"].includes(h)||!u||!Ri.some(d=>d.id===u.material)||!Number.isFinite(u.scale)||u.scale<.15||u.scale>3||!Number.isFinite(u.rotation)||Math.abs(u.rotation)>360)throw new Error("Invalid floor finish.")}if(o.wallVisibility!==void 0){if(!o.wallVisibility||typeof o.wallVisibility!="object"||Array.isArray(o.wallVisibility))throw new Error("Invalid wall visibility.");for(let[h,u]of Object.entries(o.wallVisibility))if(![...$n,...o.partitions.map(d=>d.id)].includes(h)||!["full","low","hidden"].includes(u))throw new Error("Invalid wall visibility.")}for(let h of[o.bathroom,o.balcony])if(h.enabled!==void 0&&typeof h.enabled!="boolean")throw new Error("Invalid room component visibility.");if(o.room!==void 0){let h=o.room,u=o.bounds.right-o.bounds.left,d=o.bounds.front-o.bounds.back;if(!h||!["video-bedroom","custom-room"].includes(h.kind)||typeof h.estimated!="boolean"||!Number.isFinite(h.height)||h.height<2||h.height>3)throw new Error("Use a ceiling height from 2 to 3 metres.");if(h.kind==="video-bedroom"&&(!["stairWidth","stairRun","stairDrop","ladderRun"].every(f=>Number.isFinite(h[f]))||h.stairWidth<.6||h.stairWidth>Math.min(2,u-.8)||h.stairRun<.8||h.stairRun>d-.8||h.stairDrop<.6||h.stairDrop>3||h.ladderRun<.5||h.ladderRun>1.5))throw new Error("Check the stair and ladder dimensions.")}if(o.room&&o.openings.some(h=>h.sill+h.h>o.room.height+.001))throw new Error("Lower the existing window or door opening before reducing the ceiling below it.");r=Br(o);let c=r.bathroom;if(c.enabled!==!1&&Math.max(Math.abs(c.x-c.w/2),Math.abs(c.x+c.w/2),Math.abs(c.z-c.d/2),Math.abs(c.z+c.d/2))>6)throw new Error("The attached bathroom must stay within the 12 m planning area.");if(Object.values(r.wallSplits).some(h=>h.length>12))throw new Error("Maximum 12 split points per exterior wall.")}let s={format:"house-studio-3d",version:1,name:typeof n.name=="string"?n.name.slice(0,60):"Imported layout",preset:Wr.some(o=>o.id===n.preset)?n.preset:"custom",items:i,...r?{structure:r}:{}};if(n.floors!==void 0){if(t||!Array.isArray(n.floors)||n.floors.length<1||n.floors.length>Vr||!r)throw new Error("Use one to four floors.");let o=new Set;if(s.activeFloorId=n.activeFloorId,s.floors=n.floors.map(l=>{if(!l||typeof l.id!="string"||!/^floor-[a-z0-9-]{1,50}$/.test(l.id)||o.has(l.id)||typeof l.name!="string"||!l.name.trim())throw new Error("Invalid floor name or ID.");o.add(l.id);let c=wn({format:s.format,version:1,name:l.name,items:l.id===n.activeFloorId?i:l.items,structure:l.id===n.activeFloorId?r:l.structure},!0);if(!c.structure)throw new Error("Every floor needs a room.");return{id:l.id,name:l.name.slice(0,40),items:c.items,structure:c.structure}}),!o.has(s.activeFloorId))throw new Error("Choose an existing floor.");if(!Array.isArray(n.stairs)||n.stairs.length>12)throw new Error("Invalid floor connections.");let a=new Set;s.stairs=n.stairs.map(l=>{if(!l||typeof l.id!="string"||!/^stairs-[a-z0-9-]{1,60}$/.test(l.id)||a.has(l.id)||l.turn!==void 0&&!["left","right"].includes(l.turn)||!Yn.some(c=>c.id===l.style)||!["x","z","w","run","rot"].every(c=>Number.isFinite(l[c]))||Math.abs(l.x)>6||Math.abs(l.z)>6||l.w<.5||l.w>3||l.run<.4||l.run>5||Math.abs(l.rot)>Math.PI*2+.001||Math.abs(l.rot/(Math.PI/2)-Math.round(l.rot/(Math.PI/2)))>.001||!/^#[0-9a-f]{6}$/i.test(l.color))throw new Error("Invalid stair or ladder dimensions.");return a.add(l.id),{id:l.id,from:l.from,to:l.to,style:l.style,x:l.x,z:l.z,w:l.w,run:l.run,rot:l.rot,color:l.color,...l.style==="turn"||l.turn!==void 0?{turn:l.turn||"right"}:{}}});for(let l of s.stairs){let c=Eu(s,l);if(c)throw new Error(c)}for(let l=1;l<s.floors.length;l++)if(!s.stairs.some(c=>c.from===s.floors[l-1].id&&c.to===s.floors[l].id))throw new Error("Each upper floor needs stairs or a ladder.")}return s}var sa=new L;function Pn(n,t,e,i,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;sa.copy(t),sa[i]=0,sa.normalize();let c=.5*o/(o+a),h=1-sa.angleTo(n)/l;return Math.sign(sa[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Lc=class n extends si{constructor(t=1,e=1,i=1,r=2,s=.1){let o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,h=new L(t,e,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,m=new L,x=.5/o;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:m.set(1,0,0),f[M+0]=Pn(m,c,"z","y",s,i),f[M+1]=1-Pn(m,c,"y","z",s,e);break;case 1:m.set(-1,0,0),f[M+0]=1-Pn(m,c,"z","y",s,i),f[M+1]=1-Pn(m,c,"y","z",s,e);break;case 2:m.set(0,1,0),f[M+0]=1-Pn(m,c,"x","z",s,t),f[M+1]=Pn(m,c,"z","x",s,i);break;case 3:m.set(0,-1,0),f[M+0]=1-Pn(m,c,"x","z",s,t),f[M+1]=1-Pn(m,c,"z","x",s,i);break;case 4:m.set(0,0,1),f[M+0]=1-Pn(m,c,"x","y",s,t),f[M+1]=1-Pn(m,c,"y","x",s,e);break;case 5:m.set(0,0,-1),f[M+0]=Pn(m,c,"x","y",s,t),f[M+1]=1-Pn(m,c,"y","x",s,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};function Cp(n,t,e,i){let{box:r,cylinder:s,rod:o,mat:a}=i,l=e.w,c=e.d,h=e.h,u=t.color,d="#854d2d",f="#282c26",g=(m,x,p,M,_,y,P,C=0)=>r(n,m,x,p,M,_,y,P,C);if(e.roomModel==="bed"){for(let M of[-l/2+.055,l/2-.055])for(let _ of[-c/2+.055,c/2-.055])g(.1,_<0?h:.8,.1,M,(_<0?h:.8)/2,_,d,.012);for(let[M,_]of[[-c/2+.04,h-.06],[c/2-.04,.76]]){g(l,.1,.08,0,_,M,d,.014),g(l-.1,.09,.07,0,.33,M,d,.009);for(let y=-l/2+.17;y<l/2-.1;y+=.13)g(.038,_-.42,.035,y,(_+.36)/2,M,d,.008)}for(let M of[-l/2+.035,l/2-.035])g(.065,.18,c-.1,M,.34,0,d,.012);g(l-.09,.22,c-.15,0,.46,0,u,.048);for(let M=0;M<12;M++)for(let _=0;_<9;_++){let y=-l/2+.14+_*(l-.28)/8,P=-c/2+.14+M*(c-.28)/11;s(n,.018,.018,.002,y,.572,P,"#d7e0e8",8)}for(let M of[-l*.23,l*.23])g(l*.4,.12,.43,M,.61,-c/2+.35,"#e8e4db",.05);let m=new qe(l*.8,c*.65,14,18),x=m.attributes.position;for(let M=0;M<x.count;M++){let _=x.getX(M),y=x.getY(M);x.setZ(M,.016+Math.sin(_*16+y*7)*.016+Math.sin(y*11)*.018)}m.computeVertexNormals();let p=new ie(m,new Oe({color:new Wt(u).lerp(new Wt("#d4eaf1"),.7),roughness:1,side:Se}));p.rotation.x=-Math.PI/2,p.position.set(.07,.582,.2),p.receiveShadow=!0,n.add(p)}else if(e.roomModel==="desk"){for(let m of[-l/2+.05,l/2-.05])for(let x of[-c/2+.05,c/2-.05])g(.055,h-.06,.055,m,(h-.06)/2,x,u,.006);g(l,.065,c,0,h-.03,0,u,.012),g(l-.1,.13,.03,0,h-.13,-c/2+.06,u);for(let[m,x,p,M]of[[.16,.05,"#e5dfd5",3],[-.08,-.08,"#45565a",3],[.31,-.07,"#b5d2e0",2]])for(let _=0;_<M;_++)g(.25,.027,.21,m+_%2*.015,h+.014+_*.027,x,p,.012);for(let[m,x,p,M]of[[-.37,.027,.17,"#e8ded4"],[-.29,.022,.12,"#d8d4a4"],[-.2,.024,.1,"#3a4b45"]])s(n,x,x,p,m,h+p/2,-.17,M,10),s(n,x*.55,x*.55,.02,m,h+p+.01,-.17,"#d5bd57",8)}else if(e.roomModel==="chair"){g(l-.04,.035,c-.07,0,.43,0,u,.015);for(let m of[-l/2+.035,l/2-.035])for(let x of[-c/2+.035,c/2-.035])o(n,[m,0,x],[m*.83,.44,x*.82],.013,u);for(let m of[-l/2+.025,l/2-.025])o(n,[m,.4,-c/2+.05],[m,.91,-c/2-.025],.015,u);g(l-.02,.026,.025,0,.91,-c/2-.025,u,.008);for(let m=-l/2+.045;m<l/2-.02;m+=.04)o(n,[m,.47,-c/2+.035],[m,.89,-c/2-.025],.0045,u);for(let m=.49;m<.9;m+=.045)g(l-.04,.007,.009,0,m,-c/2+.035-(m-.47)*.14,u)}else if(e.roomModel==="wardrobe"){g(l,h,c,0,h/2,0,u,.012);for(let m of[-l*.246,l*.246])g(l*.48,h-.23,.035,m,h/2+.025,c/2+.008,new Wt(u).multiplyScalar(1.03).getStyle(),.006),g(.016,.24,.035,m+(m<0?.19:-.19),h*.52,c/2+.045,f,.006);for(let m=-l/2+.03;m<l/2;m+=.045)g(.002,h-.26,.003,m,h/2+.02,c/2+.029,"#915b31");for(let m of[.13,.27])g(l-.08,.12,.025,0,m,c/2+.025,u,.004),g(.22,.014,.035,0,m+.02,c/2+.05,"#b9b9ae",.006);for(let[m,x]of[[-.32,"#252c30"],[-.12,"#bcb8ac"]]){g(.24,.47,.055,m,1.21,c/2+.12,x,.035);let p=g(.09,.36,.055,m-.16,1.29,c/2+.12,x,.02);p.rotation.z=-.22}}else if(e.roomModel==="shelf"){let m="#e3decb";for(let p of[-l/2+.025,l/2-.025])o(n,[p,0,c/2-.015],[p,h,-c/2+.03],.021,m),o(n,[p,0,-c/2+.03],[p,h,-c/2+.03],.021,m);let x=["#4b615b","#b9aa83","#c7b8a1","#525879","#9c7652","#d6d4c8"];for(let p=0;p<5;p++){let M=.08+p*(h-.13)/4,_=c*(1-p*.08);if(g(l,.025,_,0,M,-c/2+_/2,u,.006),(p===0||p===1)&&(g(l*.35,.18,_*.7,-l*.2,M+.105,-.015,"#c2b294",.008),g(l*.35,.018,.025,-l*.2,M+.18,_*.35,"#aa926c")),p===2||p===3)for(let y=0;y<Math.max(2,Math.floor(l*13));y++){let P=-l/2+.07+y*.055;if(P>l/2-.04)break;g(.038,.12+y%3*.025,_*.65,P,M+.08,-.015,x[(y+p)%6],.003)}p===4&&(s(n,.035,.035,.12,-l*.25,M+.072,-.01,"#9fbd66",10),g(.08,.09,.065,l*.2,M+.055,0,"#dccb9f",.014),s(n,.024,.024,.032,l*.2,M+.115,0,"#bd684c",8))}}else if(e.roomModel==="basket"){g(l,.035,c,0,.025,0,u,.016);for(let m of[-l/2,l/2]){g(.025,.035,c,m,h-.025,0,u,.008);for(let x=-c/2+.035;x<c/2;x+=.045)g(.018,h-.06,.018,m,h/2,x,u,.005);for(let x=.08;x<h;x+=.05)g(.022,.015,c,m,x,0,u,.004)}for(let m of[-c/2,c/2]){g(l,.035,.025,0,h-.025,m,u,.008);for(let x=-l/2+.035;x<l/2;x+=.045)g(.018,h-.06,.018,x,h/2,m,u,.005);for(let x=.08;x<h;x+=.05)g(l,.015,.022,0,x,m,u,.004)}}}var Ou=new Map,zu=new Map;function tn(n,t=.75,e=0){let i=`${n}:${t}:${e}`;if(!Ou.has(i)){let r=new Oe({color:n,roughness:t,metalness:e});r.userData.shared=!0,Ou.set(i,r)}return Ou.get(i)}var Xr=new Oe({color:"#9dbab6",transparent:!0,opacity:.27,roughness:.15,metalness:.2,depthWrite:!1,side:Se});Xr.userData.shared=!0;function xt(n,t,e,i,r,s,o,a="#fff",l=0){let c=`${t.toFixed(4)},${e.toFixed(4)},${i.toFixed(4)},${l}`;if(!zu.has(c)){let u=l?new Lc(t,e,i,2,Math.min(l,t/3,e/3,i/3)):new si(t,e,i);u.userData.shared=!0,zu.set(c,u)}let h=new ie(zu.get(c),typeof a=="string"?tn(a):a);return h.position.set(r,s,o),h.castShadow=!0,h.receiveShadow=!0,n.add(h),h}function ge(n,t,e,i,r,s,o,a,l=16){let c=new ie(new Po(t,e,i,l),typeof a=="string"?tn(a):a);return c.position.set(r,s,o),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function ku(n,t,e,i,r,s,o=[1,1,1]){let a=new ie(new Ar(t,1),tn(s));return a.position.set(e,i,r),a.scale.set(...o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function ui(n,t,e,i,r){let s=new L(...t),o=new L(...e),a=ge(n,i,i,s.distanceTo(o),0,0,0,r,8);return a.position.copy(s).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new L(0,1,0),o.sub(s).normalize()),a}function Fc(n,t,e,i,r="#b59a72",s=.05){for(let o of[-t/2+.055,t/2-.055])for(let a of[-e/2+.055,e/2-.055])xt(n,s,i,s,o,i/2,a,r,.009)}function oa(n){let t=Re[n.type],e=t.kind,i=new St,r=t.w,s=t.d,o=t.h,a=n.color,l="#bda17a",c="#37433f",h="#ecebdc";if(i.userData.itemId=n.id,e==="coatRack"){ge(i,.255,.255,.035,0,.022,0,a,48),ge(i,.025,.034,o-.04,0,o/2,0,a,20);for(let d=0;d<7;d++){let f=d*2.4,g=.9+d*.115,m=Math.cos(f)*.225,x=Math.sin(f)*.225;ui(i,[0,g,0],[m,g+.19,x],.017,a),ge(i,.02,.02,.025,m,g+.2,x,a,12)}let u=new ie(new Ps(.155,.012,8,32),tn(a));u.rotation.x=Math.PI/2,u.position.y=.61,i.add(u),ge(i,.155,.155,.018,0,.6,0,a,32)}else if(e==="roundTable"){let u=n.w/2,d=Math.min(.52,n.w*.74),f=.75;ge(i,u,u,.045,0,f-.0225,0,a,64);for(let g=-u+.045;g<u-.025;g+=.105){let m=2*Math.sqrt(Math.max(0,u*u-g*g))-.02;m>0&&xt(i,m,.0012,.003,0,f+.001,g,"#a1825c")}for(let g of[-d*.38,d*.38])for(let m of[-d*.38,d*.38])xt(i,.045,.675,.045,g,.36,m,a,.008);xt(i,d+.07,.045,.055,0,.065,0,a,.012),xt(i,.055,.045,d+.07,0,.09,0,a,.012);for(let g of[-d*.38,d*.38])xt(i,d*.8,.045,.045,0,.2,g,a,.008)}else if(t.roomModel)Cp(i,n,t,{box:xt,cylinder:ge,rod:ui,mat:tn});else if(e==="bed"||e==="loft"){let u=e==="loft",d=u?1.88:.55,f=d-.25;if(u){for(let m of[-r/2+.045,r/2-.045])for(let x of[-s/2+.045,s/2-.045])xt(i,.09,2.25,.09,m,1.125,x,a,.008);xt(i,r,.09,.07,0,2.2,-s/2,a);for(let m of[-r/2,r/2])xt(i,.065,.07,s,m,2.2,0,a),xt(i,.04,.07,s,m,2.04,0,a);xt(i,r-.44,.07,.07,-.22,2.2,s/2,a);for(let m=.16;m<1.9;m+=.25)xt(i,.34,.04,.08,r/2-.23,m,s/2+.19,a);for(let m of[r/2-.41,r/2-.05])ui(i,[m,.02,s/2+.4],[m,1.94,s/2+.02],.025,a)}else Fc(i,r,s,.22,l,.075),xt(i,r,o,.085,0,o/2,-s/2+.03,l,.03),xt(i,r-.1,.35,.05,0,o-.22,-s/2+.081,a,.05);xt(i,r,.16,s,0,f-.02,0,l,.035),xt(i,r-.1,.22,s-.12,0,d-.11,.01,h,.065),xt(i,r-.13,.042,s*.6,0,d+.014,s*.13,a,.025),xt(i,r-.13,.028,.24,0,d+.034,s*.09,new Oe({color:a,roughness:1}),.015);let g=r>1.4?2:1;for(let m=0;m<g;m++)xt(i,(r-.23)/g,.11,.39,(m-(g-1)/2)*(r-.12)/g,d+.045,-s/2+.34,"#f5f3e8",.055);if(!u)for(let m of[-r*.24,r*.24])xt(i,r*.42,.15,.018,m,.275,s/2+.006,l,.015),xt(i,.11,.012,.012,m,.3,s/2+.02,c)}else if(e==="sofa"||e==="sofabed"||e==="outdoor"){let u=e==="outdoor";Fc(i,r,s,.19,c,.045),xt(i,r-.03,.2,s,0,.27,0,u?l:a,.055),xt(i,r,.49,.15,0,.57,-s/2+.075,a,.06);for(let d of[-r/2+.075,r/2-.075])xt(i,.15,.38,s,d,.45,0,a,.04);for(let d of[-r*.22,r*.22])xt(i,r*.42,.13,s-.23,d,.42,.045,u?"#d9d7c4":a,.055);if(!u)for(let d of[-r*.22,r*.22]){let f=xt(i,r*.38,.3,.14,d,.63,-s/2+.19,a,.055);f.rotation.x=-.12}if(e==="sofabed"&&n.open){for(let d of[-r/2+.09,r/2-.09])xt(i,.045,.21,.045,d,.105,s/2+.96,c);xt(i,r-.14,.28,1.04,0,.29,s/2+.52,a,.05),xt(i,r-.19,.03,1,0,.443,s/2+.5,"#e7e4d7",.02)}}else if(["desk","gaming","table","coffee","stool","outdoor"].includes(e)){let u=e==="gaming";if(Fc(i,r,s,o-.055,u?c:l,u?.055:.045),xt(i,r,.06,s,0,o-.03,0,a,.015),e==="desk"||u){xt(i,.23,.014,.16,0,o+.014,-s*.12,c,.005),xt(i,.04,.19,.04,0,o+.105,-s*.21,c),xt(i,.58,.35,.025,0,o+.32,-s*.23,c,.008);let d=new Oe({color:u?"#315251":"#829f99",emissive:u?"#407787":"#51786c",emissiveIntensity:.3,roughness:.3});xt(i,.546,.313,.005,0,o+.32,-s*.23+.017,d,.003),xt(i,.38,.015,.13,-.06,o+.014,.11,"#454e49",.008);for(let f=0;f<8;f++)xt(i,.032,.004,.08,-.21+f*.043,o+.024,.1,"#bac7bb",.003);if(xt(i,.06,.025,.09,.23,o+.02,.13,c,.012),u){xt(i,.2,.45,.43,r/2-.2,.29,-.04,c,.018);for(let f of[.2,.37]){let g=ge(i,.064,.064,.01,r/2-.2,f,.185,"#66bdbc");g.rotation.x=Math.PI/2}}else ge(i,.036,.03,.085,-r/2+.14,o+.044,.07,"#e5e7df")}}else if(e==="chair"){ge(i,.035,.035,.35,0,.2,0,c);for(let u=0;u<5;u++){let d=u*Math.PI*2/5;ui(i,[0,.09,0],[Math.sin(d)*.25,.065,Math.cos(d)*.25],.018,c),ku(i,.033,Math.sin(d)*.25,.04,Math.cos(d)*.25,c)}xt(i,.46,.085,.45,0,.47,0,a,.055),xt(i,.46,.52,.065,0,.77,-.2,a,.045);for(let u of[-.25,.25])xt(i,.028,.18,.03,u,.53,0,c),xt(i,.06,.035,.25,u,.63,.01,c,.012)}else if(["wardrobe","shelf","cabinet","nightstand","tv","pantry","basin"].includes(e)){let u=e==="tv"?.48:e==="pantry"?.83:e==="basin"?.66:o,d=e==="shelf";Fc(i,r,s,.1,c,.035),xt(i,r,.045,s,0,.11,0,a,.008),xt(i,r,.045,s,0,u-.02,0,a,.008);for(let f of[-r/2+.017,r/2-.017])xt(i,.035,u-.14,s,f,u/2+.03,0,a,.005);if(xt(i,r-.03,u-.1,.025,0,u/2+.025,-s/2+.012,a),d)for(let f=.45;f<u-.1;f+=.39){xt(i,r-.05,.027,s,0,f,0,a);for(let g=0;g<5;g++)xt(i,.055,.18+g%3*.045,.16,-r*.32+g*.073,f+.1+g%3*.022,0,["#879d8c","#d6c7a7","#b4bbb2","#dedbd0","#657b79"][g])}else{let f=r>.8?2:1;for(let g=0;g<f;g++){let m=(g-(f-1)/2)*(r/f);xt(i,r/f-.027,u-.17,.025,m,u/2+.02,s/2-.012,a,.008),xt(i,.013,e==="wardrobe"?.38:.08,.018,m+r/f*.31,u/2+.05,s/2+.01,c,.004)}}if(e==="tv"&&(xt(i,.32,.02,.17,0,.5,0,c),xt(i,.045,.13,.04,0,.56,0,c),xt(i,1.07,.6,.045,0,.91,0,c,.012),xt(i,1.01,.54,.007,0,.91,.028,"#4a6664",.009)),e==="pantry"||e==="basin"){xt(i,r+.03,.05,s+.02,0,u+.02,0,"#f1efe5",.013);let f=e==="basin"?r-.12:.39,g=e==="basin"?0:-r*.22;if(xt(i,f,.045,s-.12,g,u+.05,0,"#748d88",.018),xt(i,f-.055,.008,s-.17,g,u+.075,0,"#bbd1c9",.015),ui(i,[g,u+.07,-s*.28],[g,u+.24,-s*.28],.015,c),ui(i,[g,u+.24,-s*.28],[g,u+.24,-s*.08],.015,c),e==="pantry"){xt(i,.39,.018,s-.13,r*.26,u+.058,0,c,.01);for(let m of[-.1,.1])ge(i,.07,.07,.003,r*.26,u+.069,m,"#63756d")}}}else if(e==="fridge")xt(i,r,o,s,0,o/2,0,a,.035),xt(i,r-.028,o*.72,.035,0,o*.39,s/2,a,.014),xt(i,r-.028,o*.23,.035,0,o*.89,s/2,a,.014),xt(i,.015,.2,.023,-r*.36,o*.61,s/2+.028,c,.005);else if(e==="toilet"){xt(i,.34,.5,.17,0,.45,-s/2+.075,a,.035),xt(i,.34,.055,.19,0,.73,-s/2+.075,"#f5f4f0",.015);let u=ku(i,.23,0,.34,.075,a,[.82,.47,1.14]);ge(i,.1,.13,.27,0,.16,.01,a);let d=new ie(new Ps(.145,.031,7,24),tn("#f4f3ed"));d.rotation.x=Math.PI/2,d.scale.y=1.3,d.position.set(0,.435,.076),i.add(d),xt(i,.035,.008,.06,.09,.762,-s/2+.07,"#a4b0ab",.003)}else if(e==="shower"){xt(i,r,.035,s,0,.019,0,"#d5dcd4",.008),xt(i,.09,.003,.09,0,.04,0,c),xt(i,.018,o,s,-r/2,.035+o/2,0,Xr),xt(i,.018,o,s,r/2,.035+o/2,0,Xr),xt(i,r*.46,o,.018,-r*.27,.035+o/2,s/2,Xr);for(let u of[-r/2,r/2])xt(i,.022,o,.022,u,o/2,s/2,c);ui(i,[r*.23,1.1,-s/2+.04],[r*.23,2.03,-s/2+.04],.013,c),ui(i,[r*.23,2.03,-s/2+.04],[r*.23,2.03,-s/2+.23],.013,c),ge(i,.1,.1,.018,r*.23,2.01,-s/2+.23,c),xt(i,.16,.025,.05,r*.23,1.07,-s/2+.08,c,.01)}else if(e==="plant"){ge(i,r*.34,r*.27,o*.28,0,o*.14,0,a),ge(i,r*.29,r*.29,.02,0,o*.283,0,"#5b5742"),ui(i,[0,o*.28,0],[.02,o*.84,0],.009,"#786c42");for(let u=0;u<9;u++){let d=u*2.4,f=o*(.36+u*.06);ui(i,[0,f-.04,0],[Math.sin(d)*r*.28,f+.08,Math.cos(d)*r*.28],.007,"#7a8957");let g=ku(i,r*.25,Math.sin(d)*r*.33,f+.085,Math.cos(d)*r*.33,["#507454","#6f8b59","#869b69"][u%3],[.65,.45,1.6]);g.rotation.y=-d}}else if(e==="rug"){xt(i,r,.012,s,0,.01,0,a,.004);for(let u of[-s/2+.07,s/2-.07])xt(i,r-.05,.002,.025,0,.017,u,"#ebe6d2");for(let u=0;u<30;u++)xt(i,.002,.001,s-.04,-r/2+.02+u*(r-.04)/29,.017,0,"#d8d3be")}else e==="lamp"&&(ge(i,.14,.15,.035,0,.02,0,c),ge(i,.014,.014,o-.2,0,(o-.2)/2,0,c),ge(i,.11,.17,.27,0,o-.16,0,a),ge(i,.15,.15,.009,0,o-.295,0,"#fff3cc"));return i.scale.set(e==="roundTable"?1:n.w/r,n.h/o,e==="roundTable"?1:n.d/s),i.position.set(n.x,Ye(n.x,n.z)+.015,n.z),i.rotation.y=n.rot,i}function Rp(n){let t=new St,e=new St;t.add(e),n.add(t);let i=xt(e,.24,.28,.24,0,1.56,0,"#d9b999",.013),r=xt(e,.35,.57,.23,0,1.12,0,"#e0a76b",.014),s=[],o=[];for(let a of[-1,1]){let l=new St;l.position.set(a*.235,1.37,0),xt(l,.12,.56,.16,0,-.265,0,"#d9b999",.012),e.add(l),s.push(l);let c=new St;c.position.set(a*.1,.835,0),xt(c,.16,.835,.19,0,-.4175,0,"#405b55",.012),e.add(c),o.push(c)}return t.position.set(0,_t+.015,1.4),{root:t,body:e,head:i,torso:r,arms:s,legs:o,reset(){e.rotation.set(0,0,0),e.position.set(0,0,0);for(let a of[...s,...o])a.rotation.set(0,0,0)}}}function aa(n){n.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),t.material&&!t.material.userData.shared&&t.material.dispose()})}var Ip={house:"m3 10 9-7 9 7v11H3Z M9 21v-8h6v8",orbit:"M21 12a9 9 0 1 1-9-9 M15 3h6v6 M7 12h10 M12 7v10",chair:"M6 12V4h12v8 M4 12h16v5H4Z M6 17v4 M18 17v4",person:"M10 3h4v4h-4z M8 10h8v6H8z M5 10v6 M19 10v6 M9 16v6 M15 16v6",save:"M4 3h13l4 4v14H3V3Z M7 3v7h10V3 M7 21v-7h10v7",expand:"M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5",collapse:"M3 8h5V3 M16 3v5h5 M21 16h-5v5 M8 21v-5H3",help:"M9 8a3 3 0 0 1 6 0c0 3-3 2-3 5 M12 17h.01 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M18 18l1 1 M5 19l1-1 M18 6l1-1",sunset:"M3 17h18 M4 21h16 M7 17a5 5 0 0 1 10 0 M12 3v6 M9 6l3 3 3-3 M3 10l2 2 M21 10l-2 2",moon:"M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z",arrow:"M4 12h16 M14 6l6 6-6 6",search:"M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0 M15 15l6 6",bed:"M3 18V7 M21 18V9 M3 14h18 M3 9h6v5 M9 9h12 M3 18v3 M21 18v3",monitor:"M3 4h18v13H3Z M12 17v4 M8 21h8",bath:"M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z M5 12V5a2 2 0 0 1 4 0 M6 20v2 M18 20v2",leaf:"M20 3C6 3 3 9 5 16s15 5 15-13Z M5 21l10-11",door:"M5 21V3h14v18 M2 21h20 M14 12h.1",route:"M6 6h10a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h10 M5 3h3v6H5Z M17 19h3v4h-3z",reset:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",download:"M12 3v12 M7 10l5 5 5-5 M4 16v5h16v-5",upload:"M12 16V3 M7 8l5-5 5 5 M4 16v5h16v-5",roof:"m2 12 10-9 10 9 M5 11v10h14V11",walls:"M3 4h18v16H3Z M3 9h18 M3 15h18 M9 4v5 M15 9v6 M8 15v5",ruler:"m3 17 14-14 4 4L7 21Z M7 13l2 2 M11 9l2 2 M15 5l2 2",dimensions:"M4 7V3h16v4 M4 17v4h16v-4 M8 12h8 M4 10v4 M20 10v4",cube:"m12 3 9 5v9l-9 5-9-5V8Z M3 8l9 5 9-5 M12 13v9",plan:"M3 3h18v18H3Z M3 12h9V3 M12 21v-5",focus:"M3 8V3h5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5 M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",undo:"M3 10h11a6 6 0 0 1 0 12 M8 5l-5 5 5 5",redo:"M21 10H10a6 6 0 0 0 0 12 M16 5l5 5-5 5",play:"m8 4 12 8-12 8Z",pause:"M7 4v16 M17 4v16",camera:"M3 7h4l2-3h6l2 3h4v14H3Z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0",close:"M6 6l12 12 M18 6 6 18",copy:"M8 8h13v13H8Z M16 8V3H3v13h5",trash:"M3 6h18 M6 6l1 15h10l1-15 M9 6V3h6v3 M10 10v7 M14 10v7",rotate:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",check:"m5 12 4 4 10-10"},Ii=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Ip[n]||Ip.cube}"/></svg>`;function Pp(n=document){n.querySelectorAll("[data-icon]").forEach(t=>{t.innerHTML=Ii(t.dataset.icon)})}var Bu=new Map;function zv(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296)}function Uc(n,t,e=19){let i=Math.floor(n),r=Math.floor(t),s=n-i,o=t-r,a=s*s*(3-2*s),l=o*o*(3-2*o),c=(d,f)=>((Math.imul(d+e,374761393)^Math.imul(f-e,668265263))>>>0)/4294967296,h=c(i,r)*(1-a)+c(i+1,r)*a,u=c(i,r+1)*(1-a)+c(i+1,r+1)*a;return h*(1-l)+u*l}function Dp(n,t){return Uc(n/151,t/151)*.53+Uc(n/68,t/68,71)*.27+Uc(n/29,t/29,137)*.14+Uc(n/11,t/11,251)*.06}function Lp(n){if(Bu.has(n))return Bu.get(n);let t=document.createElement("canvas"),e=512;t.width=t.height=e;let i=t.getContext("2d"),r=zv(271+Ri.findIndex(l=>l.id===n)*7919),s=(l,c=1)=>`rgba(${l},${l},${l},${c})`;i.fillStyle="#f7f7f7",i.fillRect(0,0,e,e);let o=i.getImageData(0,0,e,e);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=Math.sin(c*.021+Math.sin(l*.013)*2)+Math.sin(l*.031-c*.014)+Math.cos((c+l)*.014),u=n==="marble"||n==="stone"?Dp(c,l):.5,d=n==="stone"?212+u*42:n==="concrete"?238+h*2:n==="marble"?234+u*24:246,f=n==="concrete"||n==="stone"?9:3,g=Math.max(0,Math.min(255,d+(r()-.5)*f)),m=(l*e+c)*4;o.data[m]=o.data[m+1]=o.data[m+2]=g,o.data[m+3]=255}if(i.putImageData(o,0,0),n==="marble"||n==="stone")for(let l=0;l<(n==="marble"?9:5);l++){let c=r()*e*1.8-e*.4,h=r()*7,u=r()*.9-.45,d=Array.from({length:65},(f,g)=>{let m=g*e/64;return[c+u*m+(Dp(m+h*101,h*79)-.5)*170+Math.sin(m*.07+h)*2,m]});for(let[f,g]of[[18,.018],[5,.065],[.7,.24]])i.beginPath(),d.forEach(([m,x],p)=>p?i.lineTo(m,x):i.moveTo(m,x)),i.strokeStyle=s(n==="marble"?116:150,g),i.lineWidth=f,i.stroke();if(l%2===0){let[f,g]=d[20];i.beginPath(),i.moveTo(f,g),i.bezierCurveTo(f-12,g+40,f-70,g+50,f-87,g+115),i.lineWidth=.6,i.strokeStyle=s(130,.18),i.stroke()}}let a=(l,c,h,u,d)=>{i.save(),i.beginPath(),i.rect(l,c,h,u),i.clip(),i.fillStyle=s(217+Math.floor(d*30)),i.fillRect(l,c,h,u);for(let f=0;f<32;f++){let g=c+f*u/30;i.beginPath();for(let m=0;m<=h;m+=8){let x=g+Math.sin(m*.025+d*8+f*.3)*u*.027;m?i.lineTo(l+m,x):i.moveTo(l+m,x)}i.strokeStyle=s(120,.05+f%4*.012),i.lineWidth=.45+f%3*.35,i.stroke()}i.strokeStyle=s(95,.24),i.lineWidth=1.8,i.strokeRect(l,c,h,u),i.restore()};if(n==="wood")for(let l=0;l<4;l++){let c=l%2?e*.38:0;for(let h=-1;h<2;h++)a(h*e+c,l*e/4,e,e/4,r())}if(n==="herringbone"){i.save(),i.translate(e/2,e/2),i.rotate(Math.PI/4);let l=e/8;for(let c=-12;c<12;c++)for(let h=-12;h<12;h++)((c-h)%6+6)%6===0&&a(c*l,h*l,3*l,l,r()),((c-h)%6+6)%6===3&&(i.save(),i.translate((c+1)*l,h*l),i.rotate(Math.PI/2),a(0,0,3*l,l,r()),i.restore());i.restore()}if(n==="terrazzo")for(let l=0;l<850;l++){let c=r()*e,h=r()*e,u=1.3+r()*5;i.beginPath();for(let d=0;d<5;d++){let f=d/5*Math.PI*2,g=u*(.5+r()*.5);d?i.lineTo(c+Math.cos(f)*g,h+Math.sin(f)*g):i.moveTo(c+Math.cos(f)*g,h+Math.sin(f)*g)}i.closePath(),i.fillStyle=s(125+Math.floor(r()*125),.45),i.fill()}return["marble","stone","tiles","matte"].includes(n)&&(i.strokeStyle=s(n==="tiles"?130:170,.45),i.lineWidth=n==="tiles"?5:2.3,i.strokeRect(0,0,e,e),i.strokeStyle="rgba(255,255,255,.45)",i.lineWidth=1,i.strokeRect(3,3,e-6,e-6)),Bu.set(n,t),t}function $s(n,t,e,i,r=null){let s=Ri.find(g=>g.id===n.material)||Ri[0],o=new Tr(Lp(s.id));o.wrapS=o.wrapT=ys,o.repeat.set(e/n.scale,i/n.scale),o.center.set(.5,.5),o.rotation=n.rotation*Math.PI/180,o.colorSpace=Ge,o.anisotropy=4;let a=Math.cos(o.rotation),l=Math.sin(o.rotation),c=a*e/n.scale,h=-l*i/n.scale,u=l*e/n.scale,d=a*i/n.scale;if(o.matrixAutoUpdate=!1,o.matrix.set(c,h,.5-(c+h)/2,u,d,.5-(u+d)/2,0,0,1),r){let g=n.scale;o.matrix.set(a*e/g,l*i/g,(a*(r.x-e/2)-l*(r.z+i/2))/g,l*e/g,-a*i/g,(l*(r.x-e/2)+a*(r.z+i/2))/g,0,0,1)}let f=new Oe({color:t,map:o,roughness:s.roughness,metalness:0});return f.userData.floorTexture=!0,f}function Fp(n,t){let e=Lp(n),i=document.createElement("canvas");i.width=i.height=96;let r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,96,96),r.globalCompositeOperation="multiply";let s=["marble","stone","matte","tiles"].includes(n)?2:1;for(let o=0;o<s;o++)for(let a=0;a<s;a++)r.drawImage(e,a*96/s,o*96/s,96/s,96/s);return i.toDataURL()}function kv(n,t){let e=new St,i=Ac(n),r=i.w,s=n.h;e.userData.structureId=n.id,e.position.set(i.x,t,i.z),e.rotation.y=i.rot;let o=(l,c,h,u,d,f=n.color)=>xt(e,l,c,h,u,d,0,f,.004),a=Math.max(1,Math.ceil(r/1.2));for(let l=0;l<=a;l++)o(.055,s,.055,-r/2+r*l/a,s/2);if(o(r+.055,.055,.065,0,s-.025),n.style==="glass"){let l=new Oe({color:n.color,transparent:!0,opacity:.28,roughness:.18,side:Se,depthWrite:!1});for(let c=0;c<a;c++)o(r/a-.055,s-.16,.018,-r/2+r*(c+.5)/a,s/2,l)}else if(n.style==="horizontal")for(let l=1;l<=3;l++)o(r,.035,.035,0,s*l/4);else{o(r,.035,.045,0,.1);let l=Math.max(1,Math.ceil(r/.14));for(let c=1;c<l;c++)o(.022,Math.max(.05,s-.15),.022,-r/2+r*c/l,s/2)}return e}function qs(n,t,e){for(let i of t.fences||[])n.add(kv(i,e))}function Up(n,t){or(t);let e=new St,i=new St,r=new St,s=new St,o=new St,a=new St,l=new St;n.add(e,i,r,s,o,a,l);let c=t.colors,h=t.bounds,u=t.room,d=u.height,f=kr(t),g=vc(t),m={},x={},p={},M=[],_=(v,N)=>(v.userData.structureId=N,v),y=(v,N,Y,ht,dt,k,V,nt,ut,F=0)=>_(xt(v,N,Y,ht,dt,k,V,nt,F),ut),P=(v,N,Y,ht,dt,k)=>{let V=new L(...N),nt=new L(...Y),ut=y(v,ht,V.distanceTo(nt),ht,0,0,0,dt,k,.005);return ut.position.copy(V).add(nt).multiplyScalar(.5),ut.quaternion.setFromUnitVectors(new L(0,1,0),nt.sub(V).normalize()),ut};function C(v,N="floor",Y="floor"){let ht=v.right-v.left,dt=v.front-v.back,k=(v.left+v.right)/2,V=(v.back+v.front)/2;y(e,ht,.14,dt,k,_t-.075,V,c.foundation,Y);let nt=$s(t.finishes[N],c[N],ht,dt,{x:k,z:V}),ut=_(new ie(new qe(ht,dt),nt),Y);ut.rotation.x=-Math.PI/2,ut.position.set(k,_t+.008,V),ut.receiveShadow=!0,e.add(ut)}for(let v of bp(t))for(let N of Gr(v,t.floorCuts||[]))C(N);if(qs(e,t,_t),t.bathroom.enabled!==!1){let v=t.bathroom;C({left:v.x-v.w/2,right:v.x+v.w/2,back:v.z-v.d/2,front:v.z+v.d/2},"bathFloor","bathroom"),y(s,v.w,.1,v.d,v.x,_t+d+.05,v.z,c.bathRoof,"bath-roof")}function U(v,N,Y,ht,dt,k){let V=[N.start,N.end,...Y.flatMap(ut=>[Math.max(N.start,ut.at-ut.w/2),Math.min(N.end,ut.at+ut.w/2)])].filter(ut=>ut>=N.start&&ut<=N.end).sort((ut,F)=>ut-F),nt=N.axis==="x";for(let ut=1;ut<V.length;ut++){let F=V[ut-1],it=V[ut],Dt=(F+it)/2;if(it-F<.003)continue;let I=Y.find(tt=>Dt>tt.at-tt.w/2&&Dt<tt.at+tt.w/2),ot=I?[[0,Math.min(ht,I.sill)],[I.sill+I.h,ht]]:[[0,ht]];for(let[tt,J]of ot)if(!(J<=tt)&&(y(v,nt?it-F:.14,J-tt,nt?.14:it-F,nt?Dt:N.fixed,_t+(tt+J)/2,nt?N.fixed:Dt,k,dt),N.side==="back"&&tt<1.1)){let rt=Math.min(J,1.1),wt=N.fixed+.082;y(v,it-F,rt-tt,.024,Dt,_t+(tt+rt)/2,wt,c.panel,dt);for(let gt=F+.025;gt<it-.01;gt+=.055)y(v,.006,rt-tt,.006,gt,_t+(tt+rt)/2,wt+.014,"#30271f",dt);rt===1.1&&y(v,it-F,.045,.04,Dt,_t+1.1,wt+.005,c.trim,dt)}}}for(let v of nr(t)){let N=new St,Y=new St;i.add(N),r.add(Y),m[v.side]={full:N,low:Y};let ht=t.openings.filter(k=>k.side===v.side),dt=v.side.startsWith("bath-");for(let k of dt?[{...v,id:v.side+"-wall"}]:un(t,v.side)){let V=t.segmentColors[k.id]||(dt?c.bathWall:t.colors[v.side+"Wall"]||c.wall);U(N,k,ht,d,k.id,V),U(Y,k,ht,.64,k.id,V)}}function O(v){let N=nr(t).find(dt=>dt.side===v.side);if(!N)return;let Y=new St;Y.position.set(N.axis==="x"?v.at:N.fixed,_t+v.sill,N.axis==="x"?N.fixed:v.at),N.axis==="z"&&(Y.rotation.y=-Math.PI/2),_(Y,v.id),a.add(Y),x[v.id]=Y;let ht=v.color||c.frame;if(v.style!=="open"){for(let dt of[-v.w/2,v.w/2])y(Y,.05,v.h,.09,dt,v.h/2,0,ht,v.id);for(let dt of[0,v.h])y(Y,v.w+.05,.05,.09,0,dt,0,ht,v.id)}if(v.kind==="window"){y(Y,v.w-.07,v.h-.07,.018,0,v.h/2,0,new Oe({color:v.style==="horizontal"?new Wt(c.window).multiplyScalar(.3):c.window,transparent:!0,opacity:v.style==="horizontal"?.9:.23,roughness:.4,side:Se,depthWrite:!1}),v.id);let dt=v.style==="horizontal"?4:2;for(let k=1;k<dt;k++)y(Y,.024,v.h-.04,.055,-v.w/2+v.w*k/dt,v.h/2,.015,ht,v.id);if(v.style==="curtained"){y(Y,v.w,.024,.055,0,v.h*.48,.015,ht,v.id);let k=v.sill+v.h-.18,V=v.h+.15,nt=N.side==="right"?.12:N.side==="left"?-.12:.12,ut=ge(Y,.016,.016,v.w+.72,0,V+.03,nt,"#ad8e53",10);ut.rotation.z=Math.PI/2,_(ut,v.id);for(let F of[-1,1])for(let it=0;it<7;it++){let Dt=F*(v.w/2+.035)+F*it*.042,I=.045+Math.sin(it/6*Math.PI*3)*.022;y(Y,.053,k,.035,Dt,V-k/2,nt+I,c.curtain,v.id,.012);let ot=ge(Y,.024,.024,.012,Dt,V-.025,nt+I,"#b6a16d",8);ot.rotation.x=Math.PI/2,_(ot,v.id)}}}else if(v.style!=="open"){let dt=new St;dt.position.x=-v.w/2+.04,Y.add(dt),y(dt,v.w-.08,v.h-.06,.035,v.w/2-.04,v.h/2,0,c.door,v.id),p[v.id]=dt}}for(let v of t.openings)O(v);for(let v of t.partitions){let N=new St,Y=new St;i.add(N),r.add(Y),m[v.id]={full:N,low:Y};for(let[ht,dt]of[[N,v.h],[Y,Math.min(.64,v.h)]]){let k=y(ht,v.w,dt,v.d,v.x,_t+dt/2,v.z,v.color,v.id);k.rotation.y=v.rot||0}}let T=9,w=(f.front-f.back)/T,S=u.stairDrop/T,z=(f.left+f.right)/2;for(let v=0;v<T;v++){let N=_t-v*S,Y=f.back+(v+.5)*w;y(e,f.right-f.left-.07,.055,w+.025,z,N-.035,Y,"#755031","stairwell",.004),y(e,f.right-f.left-.07,S,.035,z,N-S/2,f.back+(v+1)*w,"#62442d","stairwell")}for(let v of[f.left+.055,f.right-.055])P(e,[v,_t-.12,f.back],[v,_t-u.stairDrop-.12,f.front],.075,"#62442d","stairwell");P(e,[f.left+.035,_t+.88,f.back],[f.left+.035,_t-u.stairDrop+.88,f.front],.055,"#8a5734","stairwell");for(let v=0;v<=T;v+=2){let N=f.back+v*w,Y=_t-v*S;P(e,[f.left+.035,Y,N],[f.left+.035,Y+.86,N],.035,"#825332","stairwell")}y(e,.055,.92,.055,f.left+.035,_t+.46,f.back,"#8a5734","stairwell");let H=g.z-g.d/2+.06,X=h.front-.12;for(let v of[g.x-.29,g.x+.29])P(e,[v,_t+.02,H],[v,_t+d+.04,X],.055,c.roof,"loft"),y(e,.055,.53,.055,v,_t+d+.28,X,c.roof,"loft");for(let v=1;v<=8;v++){let N=v/9;y(e,.55,.035,.095,g.x,_t+N*d,H+N*(X-H),c.roof,"loft",.004)}for(let[v,N]of[["back",h.back+.05],["front",h.front-.05]]){let Y=y(e,h.right-h.left,.15,.1,(h.left+h.right)/2,_t+d-.055,N,c.roof,"loft");Y.userData.wallSide=v}for(let[v,N]of[["left",h.left+.05],["right",h.right-.05]]){let Y=y(e,.1,.15,h.front-h.back,N,_t+d-.055,(h.back+h.front)/2,c.roof,"loft");Y.userData.wallSide=v}for(let v=h.left+.48;v<h.right-.1;v+=.48){let N=Math.abs(v-g.x)<.45,Y=N?h.front-1.05:h.front;y(s,.065,.14,Y-h.back,v,_t+d-.055,(h.back+Y)/2,c.roof,"loft")}let K=g.x-.43,Z=g.x+.43,at=h.front-1.05;for(let v of[{left:h.left,right:h.right,back:h.back,front:at},{left:h.left,right:K,back:at,front:h.front},{left:Z,right:h.right,back:at,front:h.front}])v.right>v.left&&y(s,v.right-v.left,.055,v.front-v.back,(v.left+v.right)/2,_t+d+.04,(v.back+v.front)/2,"#e1e3da","loft");y(s,.07,.12,1.05,K,_t+d-.02,h.front-.525,c.roof,"loft"),y(s,.07,.12,1.05,Z,_t+d-.02,h.front-.525,c.roof,"loft");let q=y(s,h.right-h.left,.06,h.front-h.back,(h.left+h.right)/2,_t+d+1.15,(h.back+h.front)/2,"#e4e2dc","loft");q.rotation.z=-.1;let D=new oi("#fff0ce",0,7,2);D.position.set(-.3,_t+d-.25,-.2),l.add(D),M.push(D);let A=new ie(new qe(200,200),tn("#e7ede3"));return A.rotation.x=-Math.PI/2,A.position.y=_t-u.stairDrop-.32,A.receiveShadow=!0,n.add(A),{structure:e,full:i,cut:r,roof:s,garden:o,doors:a,lightsGroup:l,lights:M,base:A,openingMeshes:x,doorLeaves:p,wallGroups:m,front:new St,rear:new St,bath:new St,frontLeaf:new St,rearPivot:new St,bathLeaf:new St}}function Vu(n,t){let e=new St,i=Yn.find(u=>u.id===n.style),r=n.w,s=n.run,o=n.color,a=n.style==="metal-ladder"?"#53635d":"#52615a";e.userData.structureId="connection:"+n.id,e.userData.connectionId=n.id;let l=(u,d,f,g,m,x,p=o)=>xt(e,u,d,f,g,m,x,p,.006),c=(u,d,f=.035,g=o)=>{let m=new L(...u),x=new L(...d),p=l(f,m.distanceTo(x),f,0,0,0,g);return p.position.copy(m).add(x).multiplyScalar(.5),p.quaternion.setFromUnitVectors(new L(0,1,0),x.sub(m).normalize()),p},h=Math.max(10,Math.ceil(t/.19));if(i.shape==="ladder"){for(let u of[-r/2+.025,r/2-.025])c([u,0,s/2-.05],[u,t+.08,-s/2+.05],.045),c([u,t,-s/2+.05],[u,t+.65,-s/2+.05],.04);for(let u=1;u<h;u++){let d=u/h,f=d*t,g=s/2-.05-d*(s-.1);if(n.style==="metal-ladder"){let m=ge(e,.018,.018,r-.05,0,f,g,o,12);m.rotation.z=Math.PI/2}else l(r-.05,.032,.1,0,f,g)}}else if(i.shape==="spiral"){let u=Math.min(r,s)/2,d=Math.max(18,h),f=Math.PI*3;ge(e,.045,.045,t+.95,0,(t+.95)/2,0,a,16);for(let g=0;g<d;g++){let m=Math.PI/2+f*g/(d-1),x=(g+1)/d*t,p=new Si,M=f/(d-1)*.51,_=m-M,y=m+M;p.moveTo(.07*Math.cos(_),.07*Math.sin(_)),p.lineTo(u*Math.cos(_),u*Math.sin(_)),p.absarc(0,0,u,_,y,!1),p.lineTo(.07*Math.cos(y),.07*Math.sin(y)),p.closePath();let P=new ie(new qi(p,{depth:.055,bevelEnabled:!1}),tn(o));P.rotation.x=Math.PI/2,P.position.y=x,P.castShadow=!0,P.receiveShadow=!0,e.add(P);let C=(u-.04)*Math.cos(m),U=(u-.04)*Math.sin(m);if(c([C,x,U],[C,x+.86,U],.018,a),g){let O=m-f/(d-1),T=g/d*t;c([(u-.04)*Math.cos(O),T+.86,(u-.04)*Math.sin(O)],[C,x+.86,U],.025,a)}}}else if(i.shape==="turn"){let u=Math.min(r,s)*.46,d=Math.ceil(h/2),f=s-u,g=r-u;for(let m=0;m<d;m++)l(u,.065,f/d+.015,-r/2+u/2,(m+1)/d*t/2,s/2-(m+.5)/d*f);l(u,.07,u,-r/2+u/2,t/2,-s/2+u/2);for(let m=0;m<d;m++)l(g/d+.015,.065,u,-r/2+u+(m+.5)/d*g,t/2+(m+1)/d*t/2,-s/2+u/2);c([-r/2+.04,0,s/2],[-r/2+.04,t/2,-s/2+u],.07,a),c([-r/2+u,t/2,-s/2+.04],[r/2,t,-s/2+.04],.07,a),c([-r/2+.04,.86,s/2],[-r/2+.04,t/2+.86,-s/2+u/2],.035,a),c([-r/2+.04,t/2+.86,-s/2+u/2],[r/2,t+.86,-s/2+u/2],.035,a)}else{for(let d=0;d<h;d++){let f=(d+.5)/h,g=(d+1)/h*t,m=s/2-f*s,x=i.shape==="paddle",p=x?r*.64:r-.06,M=x?(d%2?1:-1)*r*.17:0;l(p,.06,x?s/h*1.6:s/h+.018,M,g,m),i.shape==="straight"&&l(r-.06,t/h,.025,0,g-t/h/2,m-s/h/2)}let u=i.shape==="floating"?[0]:[-r/2+.08,r/2-.08];for(let d of u)c([d,-.07,s/2],[d,t-.07,-s/2],i.shape==="floating"?.12:.075,a);for(let d of[-r/2+.035,r/2-.035]){c([d,.88,s/2],[d,t+.88,-s/2],.035,a);for(let f=0;f<=h;f+=2){let g=f/h;c([d,g*t,s/2-g*s],[d,g*t+.86,s/2-g*s],.022,a)}}}return e.scale.x=Tc(n),e.position.set(n.x,0,n.z),e.rotation.y=n.rot,e}function Np(n,t){let e=new St,i=n.w,r=n.run;e.userData.structureId="connection:"+n.id;for(let s of[-i/2-.025,i/2+.025].filter(o=>n.style!=="turn"||o<0)){xt(e,.035,.035,r,s,t+.9,0,"#6e7d6b");for(let o=-r/2;o<=r/2+.001;o+=.32)xt(e,.025,.9,.025,s,t+.45,o,"#6e7d6b")}if(n.style==="turn"){xt(e,i,.035,.035,0,t+.9,-r/2,"#6e7d6b");for(let s=-i/2;s<=i/2+.001;s+=.3)xt(e,.025,.9,.025,s,t+.45,-r/2,"#6e7d6b")}xt(e,i,.035,.035,0,t+.9,r/2,"#6e7d6b");for(let s=-i/2;s<=i/2+.001;s+=.3)xt(e,.025,.9,.025,s,t+.45,r/2,"#6e7d6b");return e.scale.x=Tc(n),e.position.set(n.x,0,n.z),e.rotation.y=n.rot,e}function Op(n,t,e={}){let i=e.incoming||[],r=e.outgoing||[],s=i.map(S=>Hr(S)),o=[...s,...t.floorCuts||[]];or(t,{holes:s,connections:r.map(S=>Hr(S)),landings:[...i.map(S=>Xs(S,!0)),...r.map(S=>Xs(S,!1))]});let a=new St,l=new St,c=new St,h=new St,u=new St,d=new St,f=new St;n.add(a,l,c,h,u,d,f);let g=t.bounds,m=t.colors,x=t.room.height,p={},M={},_={},y=[],P=(S,z)=>(S.userData.structureId=z,S),C=(S,z,H,X,K,Z,at,q,D)=>P(xt(S,z,H,X,K,Z,at,q),D);function U(S,z="floor",H="floor"){let X=S.right-S.left,K=S.front-S.back,Z=(S.left+S.right)/2,at=(S.back+S.front)/2;C(a,X,.18,K,Z,_t-.09,at,m.foundation,H);let q=P(new ie(new qe(X,K),$s(t.finishes[z],m[z],X,K,{x:Z,z:at})),H);q.rotation.x=-Math.PI/2,q.position.set(Z,_t+.008,at),q.receiveShadow=!0,a.add(q)}for(let S of Gr(g,o))U(S);if(t.bathroom.enabled!==!1){let S=t.bathroom;U({left:S.x-S.w/2,right:S.x+S.w/2,back:S.z-S.d/2,front:S.z+S.d/2},"bathFloor","bathroom"),C(h,S.w,.12,S.d,S.x,_t+x+.06,S.z,m.bathRoof,"bath-roof")}if(t.balcony.enabled!==!1){let S=t.balcony.depth;U({left:g.left,right:g.right,back:g.back-S,front:g.back})}function O(S,z,H,X,K,Z){let at=[z.start,z.end,...H.flatMap(q=>[Math.max(z.start,q.at-q.w/2),Math.min(z.end,q.at+q.w/2)])].filter(q=>q>=z.start&&q<=z.end).sort((q,D)=>q-D);for(let q=1;q<at.length;q++){let D=at[q-1],A=at[q],v=(D+A)/2;if(A-D<.002)continue;let N=H.find(Y=>v>Y.at-Y.w/2&&v<Y.at+Y.w/2);for(let[Y,ht]of N?[[0,Math.min(N.sill,X)],[N.sill+N.h,X]]:[[0,X]])ht>Y&&C(S,z.axis==="x"?A-D:.15,ht-Y,z.axis==="x"?.15:A-D,z.axis==="x"?v:z.fixed,_t+(ht+Y)/2,z.axis==="x"?z.fixed:v,K,Z)}}for(let S of nr(t)){let z=new St,H=new St;l.add(z),c.add(H),p[S.side]={full:z,low:H};let X=S.side.startsWith("bath-"),K=t.openings.filter(Z=>Z.side===S.side);for(let Z of X?[{...S,id:S.side+"-wall"}]:un(t,S.side)){let at=t.segmentColors[Z.id]||(X?m.bathWall:m[S.side+"Wall"]||m.wall);O(z,Z,K,x,at,Z.id),O(H,Z,K,.64,at,Z.id)}}for(let S of t.partitions){let z=new St,H=new St;l.add(z),c.add(H),p[S.id]={full:z,low:H};for(let[X,K]of[[z,S.h],[H,Math.min(.64,S.h)]]){let Z=C(X,S.w,K,S.d,S.x,_t+K/2,S.z,S.color,S.id);Z.rotation.y=S.rot}}for(let S of t.openings){let z=nr(t).find(X=>X.side===S.side);if(!z)continue;let H=P(new St,S.id);H.position.set(z.axis==="x"?S.at:z.fixed,_t+S.sill,z.axis==="x"?z.fixed:S.at),z.axis==="z"&&(H.rotation.y=-Math.PI/2),d.add(H),M[S.id]=H;for(let X of[-S.w/2,S.w/2])C(H,.055,S.h,.1,X,S.h/2,0,m.frame,S.id);for(let X of[0,S.h])C(H,S.w+.05,.055,.1,0,X,0,m.frame,S.id);if(S.kind==="window")C(H,S.w-.06,S.h-.06,.02,0,S.h/2,0,new Oe({color:S.color||m.window,transparent:!0,opacity:.3,depthWrite:!1,side:Se}),S.id),C(H,.025,S.h,.06,0,S.h/2,0,m.frame,S.id);else{let X=new St;X.position.x=-S.w/2+.04,H.add(X),C(X,S.w-.08,S.h-.07,.035,S.w/2-.04,S.h/2,0,S.color||m.door,S.id),C(X,.025,.13,.07,S.w-.18,S.h*.52,.045,m.frame,S.id),_[S.id]=X}}for(let S of Gr(g,[...r.map(z=>Hr(z)),...e.ceilingHoles||[]]))C(h,S.right-S.left,.1,S.front-S.back,(S.left+S.right)/2,_t+x+.05,(S.back+S.front)/2,m.roof,"ceiling");for(let S of r){let z=Vu(S,S.rise);z.position.y=_t,a.add(z)}for(let S of i){if(e.showIncoming!==!1){let z=Vu(S,S.rise);z.position.y=_t-S.rise,a.add(z)}a.add(Np(S,_t))}qs(a,t,_t);let T=new oi("#fff1d7",0,9,2);T.position.set((g.left+g.right)/2,_t+x-.2,(g.back+g.front)/2),f.add(T),y.push(T);let w=new ie(new qe(200,200),tn("#e7ede3"));return w.rotation.x=-Math.PI/2,w.position.y=-.15,w.receiveShadow=!0,n.add(w),{structure:a,full:l,cut:c,roof:h,garden:u,doors:d,lightsGroup:f,lights:y,base:w,wallGroups:p,openingMeshes:M,doorLeaves:_}}var Bv=Br(tr.structure);var $r=()=>JSON.parse(JSON.stringify(Bv));function Nc(n,t,e={}){if(t.room?.kind==="custom-room")return Op(n,t,e);if(t.room?.kind==="video-bedroom")return Up(n,t);or(t);let i=new St,r=new St,s=new St,o=new St,a=new St,l=new St,c=new St;n.add(i,r,s,o,a,l,c);let h=t.bounds,u=t.bathroom,d=t.colors,f=h.right-h.left,g=h.front-h.back,m=(h.left+h.right)/2,x=(h.front+h.back)/2,p=.15;function M(A,v){return A.userData.structureId=v,A}function _(A,v,N,Y,ht,dt,k,V,nt,ut=0){let F=xt(A,v,N,Y,ht,dt,k,V,ut);return nt&&M(F,nt),F}let y={};function P(A,v,N,Y,ht,dt){let k=$s(t.finishes[ht],d[ht],A,v,{x:N,z:Y}),V=new ie(new qe(A,v),k);V.rotation.x=-Math.PI/2,V.position.set(N,_t+.008,Y),V.receiveShadow=!0,M(V,dt),i.add(V)}for(let A of Gr(h,t.floorCuts||[])){let v=A.right-A.left,N=A.front-A.back,Y=(A.left+A.right)/2,ht=(A.back+A.front)/2;_(i,v,.36,N,Y,.18,ht,d.foundation,"floor"),P(v,N,Y,ht,"floor","floor")}qs(i,t,_t),_(i,u.w,.36,u.d,u.x,.18,u.z,d.foundation,"bathroom"),P(u.w-.15,u.d-.15,u.x,u.z,"bathFloor","bathroom");let C=h.back-t.balcony.depth/2;_(i,f,.12,t.balcony.depth,m,_t-.07,C,d.balcony,"balcony",.008);for(let A=h.back-t.balcony.depth+.07;A<h.back;A+=.17)_(i,f-.08,.004,.009,m,_t-.007,A,d.rail,"balcony");let U=h.back-t.balcony.depth+.055;for(let A=h.left+.1;A<h.right-.05;A+=.23)A>h.right-1.1&&A<h.right-.17||_(i,.035,.82,.035,A,_t+.42,U,d.rail,"balcony");_(i,f-.9,.055,.07,m-.43,_t+.86,U,d.rail,"balcony");for(let A of[h.left+.04,h.right-.04]){_(i,.05,.08,t.balcony.depth,A,_t+.86,C,d.rail,"balcony");for(let v=U+.1;v<h.back-.05;v+=.23)_(i,.04,.8,.04,A,_t+.42,v,d.rail,"balcony")}let O=[];for(let[A,v]of[[m-.9,x-.6],[m+.9,x+.8],[u.x,u.z],[m,C]]){ge(c,.065,.065,.05,A,_t+2.77,v,"#f5e8d3");let N=new oi("#ffdfaa",0,5,2);N.position.set(A,_t+2.5,v),c.add(N),O.push(N)}let T={},w={};function S(A,v,N,Y,ht,dt,k,V,nt){let ut=[N,Y,...dt.flatMap(F=>[Math.max(N,F.at-F.w/2),Math.min(Y,F.at+F.w/2)])].filter(F=>F>=N&&F<=Y).sort((F,it)=>F-it);for(let F=1;F<ut.length;F++){let it=ut[F-1],Dt=ut[F];if(Dt-it<.002)continue;let I=(it+Dt)/2,ot=dt.find(J=>I>J.at-J.w/2&&I<J.at+J.w/2),tt=ot?[[0,ot.sill],[ot.sill+ot.h,V]]:[[0,V]];for(let[J,rt]of tt){if(rt-J<.002)continue;let wt=v==="x"?Dt-it:p,gt=v==="x"?p:Dt-it,Et=v==="x"?I:ht,qt=v==="x"?ht:I;_(A,wt,rt-J,gt,Et,_t+(rt+J)/2,qt,k,nt)}}}function z(A){let v=ce(t,A.side),N=v.axis==="x",Y=N?[A.at,v.fixed]:[v.fixed,A.at],ht=Y[0],dt=Y[1],k=new St;k.position.set(ht,_t+A.sill,dt),N||(k.rotation.y=-Math.PI/2),l.add(k),k.userData.structureId=A.id,T[A.id]=k;let V=d.frame,nt=A.color||(A.kind==="window"?d.window:d.door);for(let ut of[-A.w/2,A.w/2])_(k,.055,A.h,.1,ut,A.h/2,0,V,A.id);for(let ut of[0,A.h])_(k,A.w+.06,.055,.1,0,ut,0,V,A.id);if(A.kind==="window")_(k,A.w-.06,A.h-.08,.024,0,A.h/2,0,new Oe({color:nt,transparent:!0,opacity:.32,depthWrite:!1,side:Se}),A.id),_(k,.027,A.h,.09,0,A.h/2,0,V,A.id);else if(A.id==="front-door"&&A.w>=1.3){let ut=A.w/2-.04,F=new St;k.add(F),_(F,ut,A.h-.08,.029,-A.w/4,A.h/2,0,A.color?nt:Xr,A.id),_(F,.025,A.h-.05,.05,-A.w/2+.035,A.h/2,0,V,A.id),_(F,.025,.16,.05,-.06,A.h*.51,.045,V,A.id),_(k,ut,A.h-.08,.029,A.w/4,A.h/2,-.015,A.color?nt:Xr,A.id),_(k,.028,A.h-.05,.05,A.w/2-.04,A.h/2,0,V,A.id),w[A.id]=F}else{let ut=new St;ut.position.x=-A.w/2+.04,k.add(ut),_(ut,A.w-.08,A.h-.08,.032,A.w/2-.04,A.h/2,0,nt,A.id),_(ut,.022,.13,.08,A.w-.2,A.h*.51,.05,V,A.id),w[A.id]=ut}}for(let A of $n.filter(v=>v!==er(t))){let v=ce(t,A),N=t.openings.filter(V=>V.side===A&&V.at+V.w/2>v.start&&V.at-V.w/2<v.end),Y=A.startsWith("bath-"),ht=Y?2.74:3,dt=new St,k=new St;r.add(dt),s.add(k),y[A]={full:dt,low:k};for(let V of Y?[{...v,id:A+"-wall"}]:un(t,A)){let nt=V.id,ut=t.segmentColors?.[nt]||(Y?d.bathWall:d[A+"Wall"]||d.wall);S(dt,v.axis,V.start,V.end,v.fixed,N,ut,ht,nt);let F=N.filter(it=>it.kind==="door").map(it=>({...it,h:.65,sill:0}));S(k,v.axis,V.start,V.end,v.fixed,F,ut,.64,nt)}}for(let A of t.openings)z(A);for(let A of t.partitions){let v=new St,N=new St;r.add(v),s.add(N),y[A.id]={full:v,low:N};let Y=_(v,A.w,A.h,A.d,A.x,_t+A.h/2,A.z,A.color||d.wall,A.id),ht=_(N,A.w,Math.min(.65,A.h),A.d,A.x,_t+Math.min(.65,A.h)/2,A.z,A.color||d.wall,A.id);Y.rotation.y=ht.rotation.y=A.rot||0}let H=.84,X=f/2+.35,K=Math.atan2(H,f/2),Z=g+.65;for(let A of[-1,1]){let v=_(o,Math.hypot(X,H),.13,Z,m+A*X/2,_t+3+H/2,x,d.roof,"roof");v.rotation.z=-A*K}for(let A of[h.back,h.front]){let v=new Si;v.moveTo(h.left,0),v.lineTo(h.right,0),v.lineTo(m,H),v.closePath();let N=new ie(new qi(v,{depth:.13,bevelEnabled:!1}),tn(d.wall));N.position.set(0,_t+3,A-.065),N.castShadow=!0,M(N,"roof"),o.add(N)}_(o,u.w+.3,.11,u.d+.4,u.x,_t+2.86,u.z,d.bathRoof,"bath-roof");let at=_(o,f,.1,t.balcony.depth+.2,m,_t+2.8,C,d.roof,"roof");at.rotation.x=-.07;let q=new St;q.position.set(m,_t,h.front),l.add(q);for(let A=0;A<3;A++){let v=3-A;_(i,1.85,.126*v,.29,m,.063*v,h.front+.19+A*.27,d.foundation,"floor"),_(i,.9,.126*v,.29,h.right-.5,.063*v,U-.22-A*.27,d.balcony,"balcony")}_(a,13,.12,13,-.2,-.08,0,d.garden,"garden",.07);for(let A=h.front+1;A<6;A+=.5)_(a,1.2,.03,.31,m,.02,A,"#d6d7c8","garden",.01);for(let[A,v]of[[-5,-3.8],[5,-4],[5,3.6],[-4.9,4]]){let N=ge(a,.07,.13,1.4,A,.7,v,"#807556",9),Y=new ie(new Ar(.75,1),tn("#71885e"));Y.position.set(A,1.75,v),a.add(Y),N.userData.structureId="garden"}let D=new ie(new qe(200,200),tn("#e7ede3"));return D.rotation.x=-Math.PI/2,D.position.y=-.15,D.receiveShadow=!0,n.add(D),{structure:i,full:r,cut:s,roof:o,garden:a,doors:l,lightsGroup:c,lights:O,base:D,openingMeshes:T,doorLeaves:w,wallGroups:y,front:T["front-door"]||new St,rear:T["rear-door"]||new St,bath:T["bath-inner"]||new St,frontLeaf:w["front-door"]||new St,rearPivot:w["rear-door"]||new St,bathLeaf:w["bath-inner"]||new St}}function Hu(n,t){for(let e of["structure","full","cut","roof","garden","doors","lightsGroup"])n.remove(t[e]),t[e].traverse(i=>{i.geometry&&!i.geometry.userData.shared&&i.geometry.dispose(),i.material&&!i.material.userData.shared&&(i.material.userData.floorTexture&&i.material.map?.dispose(),i.material.dispose())});n.remove(t.base),t.base.geometry.dispose()}function zp(n){let{$:t,$$:e,escapeHTML:i}=n,r="floor",s=null,o=null,a=null,l=null,c=0,h=new wi(new we,new Wn({color:"#3e886b",depthTest:!1}));h.renderOrder=20,h.visible=!1,n.scene.add(h);let u=new St;n.scene.add(u);let d={split:"splitWallTool",draw:"addPartition",floor:"splitFloorTool",fence:"drawFenceTool"},f={wall:"General walls",floor:"Main floor",foundation:"Foundation",bathWall:"Bathroom walls",bathFloor:"Bathroom floor",roof:"Roof / beams",bathRoof:"Bathroom roof",balcony:"Balcony deck",rail:"Balcony rails",door:"Doors",window:"Window glass",frame:"Frames",trim:"Wall trim",garden:"Garden",panel:"Timber panels",curtain:"Curtains"},g=()=>n.getState(),m=()=>g().structure,x=(D,A,v,N=-6,Y=6,ht=.05)=>`<label class="field-label">${A}<input type="number" data-build-field="${D}" min="${N}" max="${Y}" step="${ht}" value="${Number(v).toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}"></label>`,p=(D,A,v)=>`<label class="field-label">${A}<input type="color" data-build-color="${D}" value="${v}"></label>`,M=(D,A,v="secondary")=>`<button id="${D}" class="btn ${v} wide">${A}</button>`;function _(D){if(D.startsWith("connection:")){n.selectConnection?.(D.slice(11));return}r=D,a=null,C(),at()}function y(D){h.geometry.dispose(),h.geometry=new we().setFromPoints(D.map(A=>new L(A.x,A.y??_t+.035,A.z))),h.visible=!0}function P(D){let A=D.axis==="x",v={x:A?D.start:D.fixed,z:A?D.fixed:D.start},N={x:A?D.end:D.fixed,z:A?D.fixed:D.end};y([v,N,{...N,y:_t+3.02},{...v,y:_t+3.02},v])}function C(){s=null,o=null,a=null,r==="floor-draft"&&(r="floor"),h.visible=!1,u.visible=!1,n.controls.enabled=!0,n.renderer.domElement.style.cursor="",t("#buildToolHint").hidden=!0;for(let D of Object.values(d))t("#"+D).classList.remove("active")}function U(D){C(),s=D,D==="floor"&&(r="floor-draft"),t("#buildToolHint").hidden=!1,t("#buildToolText").textContent={split:"Click a point on an outside wall to split it.",draw:"Click the start and end of your new wall.",floor:"1 / 2 \xB7 Click the first corner of the floor section to remove.",fence:"Click the start and end of your fence. Overlaps are allowed."}[D],t("#"+d[D]).classList.add("active"),n.renderer.domElement.style.cursor="crosshair",D!=="split"&&n.view("top"),at()}function O(D){return[{x:D.left,z:D.back},{x:D.right,z:D.back},{x:D.right,z:D.front},{x:D.left,z:D.front},{x:D.left,z:D.back}]}function T(){for(let D of[...u.children])u.remove(D),D.geometry.dispose(),D.material.dispose();u.visible=n.getMode()==="build";for(let D of m().floorCuts||[]){let A=rr(D,m().bounds);if(!A)continue;let v=new wi(new we().setFromPoints(O(A).map(N=>new L(N.x,_t+.025,N.z))),new Cr({color:D.id===r?"#b95837":"#b49775",dashSize:.1,gapSize:.07,depthTest:!1}));v.computeLineDistances(),v.renderOrder=18,u.add(v)}}function w(D){for(;D;){if(!D.visible)return!1;D=D.parent}return!0}function S(D){n.ray(D);let A=n.getHouse();for(let v of n.raycaster.intersectObjects([A.structure,A.full,A.cut,A.doors,A.roof,A.garden],!0)){if(!w(v.object))continue;let N=v.object;for(;N;){if(N.userData.structureId)return{id:N.userData.structureId,point:v.point};N=N.parent}}return null}function z(D){let A=n.pointAt(D);if(!A)return null;let v=n.getSnap()?.1:.01,N=Math.round(A.x/v)*v,Y=Math.round(A.z/v)*v,ht=m().bounds;for(let dt of["left","right"])Math.abs(N-ht[dt])<.13&&(N=ht[dt]);for(let dt of["front","back"])Math.abs(Y-ht[dt])<.13&&(Y=ht[dt]);return{x:Math.max(-6,Math.min(6,N)),z:Math.max(-6,Math.min(6,Y))}}function H(D){let A=m(),v=S(D),N=v&&bc(A,v.id),Y=N?.side||(v?.id.endsWith("-wall")?v.id.replace("-wall",""):null);if(Fe.includes(Y)){let k=ce(A,Y);return{side:Y,at:v.point[k.axis]}}let ht=n.pointAt(D);if(!ht)return null;let dt=Fe.map(k=>{let V=ce(A,k);return{side:k,at:ht[V.axis],distance:Math.abs((V.axis==="x"?ht.z:ht.x)-V.fixed),v:V}}).filter(k=>k.at>=k.v.start&&k.at<=k.v.end).sort((k,V)=>k.distance-V.distance);return dt[0]?.distance<.32?dt[0]:null}function X(D,A,v=!0){try{let N=n.getSnap()?.1:.01,Y=v?Math.round(A/N)*N:A,ht;n.edit(k=>ht=Mp(k,D,Y))&&(r=ht.id,C(),at(),n.toast("Wall split. Select either section to edit or extend it."))}catch(N){n.toast(N.message)}}function K(D){let A=m(),v=A.finishes[D];return`<div class="finish-heading"><h3>Floor finish</h3><span>Pattern + color</span></div><div class="finish-grid">${Ri.map(N=>`<button class="finish-card ${v.material===N.id?"active":""}" data-floor-material="${N.id}" title="${N.detail}" aria-pressed="${v.material===N.id}"><img alt="" src="${Fp(N.id,A.colors[D])}"><span>${N.name}</span></button>`).join("")}</div>${p("colors."+D,"Floor color \xB7 pattern stays",A.colors[D])}<div class="row">${x("finish.scale",v.material==="wood"||v.material==="herringbone"?"Pattern size \xB7 m":"Tile / pattern size \xB7 m",v.scale,.15,3,.05)}<label class="field-label">Pattern direction<select data-build-field="finish.rotation">${[0,45,90,135,180,270].map(N=>`<option value="${N}" ${v.rotation===N?"selected":""}>${N}\xB0</option>`).join("")}</select></label></div><p class="small-note">Color changes tint the same texture. Size and direction change the pattern independently.</p>`}function Z(D){let A=D.end-D.start;return`<div class="editor-divider"></div><h3>Split this wall</h3><p class="small-note">Split by a distance from this section\u2019s start, or use the Split wall tool in the scene.</p><label class="field-label">Distance from start \xB7 m<input id="splitDistance" type="number" min=".25" max="${Math.max(.25,A-.25)}" step=".05" value="${(A/2).toFixed(2)}"></label>${M("splitSelected","Split into two sections")}<div class="editor-divider"></div><h3>Bathroom extension</h3><p class="small-note">Extend this wall section out from the main room. It stays attached as the house changes. The existing bathroom and fixtures follow the new section.</p><label class="field-label">Outward depth \xB7 m<input id="extensionDepth" type="number" min=".8" max="4" step=".1" value="${m().bathroom.depth}"></label>${M("extendBathroom","Extend section as bathroom","primary")}`}function at(){let D=m(),A=D.bounds,v=D.bathroom,N=D.openings.find(F=>F.id===r)||D.partitions.find(F=>F.id===r),Y=bc(D,r),ht=D.floorCuts?.find(F=>F.id===r),dt=D.fences?.find(F=>F.id===r);T();let k=(F,it,Dt=!1)=>`<button data-build-select="${i(F)}" class="${r===F?"active ":""}${Dt?"segment-row":""}"><span>${i(it)}</span><small>${r===F?"EDITING":"\u2192"}</small></button>`;t("#buildList").innerHTML=k("floor","Room size & floor finish")+(D.floorCuts||[]).map((F,it)=>k(F.id,`Floor opening ${it+1} \xB7 ${((F.right-F.left)*(F.front-F.back)).toFixed(2)} m\xB2`)).join("")+(D.fences||[]).map((F,it)=>k(F.id,`Fence ${it+1} \xB7 ${Math.hypot(F.x2-F.x1,F.z2-F.z1).toFixed(2)} m`)).join("")+Fe.map(F=>k(F+"-wall",Ci[F]+" wall")+(un(D,F).length>1?un(D,F).map(it=>k(it.id,`Section ${it.index+1} \xB7 ${(it.end-it.start).toFixed(2)} m`,!0)).join(""):"")).join("")+(v.enabled===!1?"":k("bathroom","Attached bathroom"))+(D.balcony.enabled===!1?"":k("balcony","Balcony"))+(D.room?.kind==="video-bedroom"?k("loft","Green loft frame & ceiling")+k("stairwell","Stair opening"):D.room?k("ceiling","Ceiling"):k("roof","Main roof")+k("bath-roof","Bathroom roof")+k("garden","Garden / surroundings"))+D.openings.map(F=>k(F.id,`${F.kind==="door"?"Door":"Window"} \xB7 ${F.side}`)).join("")+D.partitions.map((F,it)=>k(F.id,`Interior wall ${it+1}`)).join(""),e("[data-build-select]").forEach(F=>F.onclick=()=>{_(F.dataset.buildSelect),t("#buildInspectorTitle").scrollIntoView?.({block:"nearest",behavior:"smooth"})}),t("#buildPalette").innerHTML=Object.entries(f).filter(([F])=>D.colors[F]&&!(v.enabled===!1&&["bathWall","bathFloor","bathRoof"].includes(F))&&!(D.balcony.enabled===!1&&["balcony","rail"].includes(F))&&!(D.room&&F==="garden")).map(([F,it])=>`<label><input type="color" value="${D.colors[F]}" data-palette="${F}"><span>${it}</span></label>`).join(""),e("[data-palette]").forEach(F=>F.onchange=()=>n.edit(it=>it.colors[F.dataset.palette]=F.value));let V="",nt="",ut=null;if(r==="floor-draft")V="Split floor",nt=a?`<p class="attachment-note">Section selected \xB7 ${((a.right-a.left)*(a.front-a.back)).toFixed(2)} m\xB2</p><p class="small-note">The outlined rectangle will become an opening through the floor. Furniture stays where you placed it. Fine-tune the edges below, then remove the floor.</p>${q(a,"draft")}${M("confirmFloorCut","Remove this floor section","primary")}${M("cancelFloorCut","Cancel selection")}`:'<p class="attachment-note">1 \xB7 Click the first corner in Plan.<br>2 \xB7 Click the opposite corner.<br>3 \xB7 Choose Remove this floor section.</p><p class="small-note">The section can touch the room edges or overlap a stair opening. Nothing changes until you choose Remove.</p>',a&&y(O(a));else if(ht)V="Floor opening",nt=`<p class="attachment-note">No floor \xB7 ${((ht.right-ht.left)*(ht.front-ht.back)).toFixed(2)} m\xB2</p><p class="small-note">Resize the opening below or restore its floor. Stair openings stay automatic.</p>${q(ht,"cut")}<div class="editor-divider"></div><h3>Fence around this opening</h3><p class="small-note">Select the edges to fence. Leave an edge open for the stairs or ladder. Each new fence can be moved and edited separately.</p><div class="fence-edge-grid">${["back","right","front","left"].map(F=>`<label><input type="checkbox" data-fence-edge="${F}" checked>${Ci[F]}</label>`).join("")}</div>${M("fenceOpening","Add fence on selected edges")}${M("restoreFloor","Restore this floor section")}`,y(O(ht));else if(dt)V="Fence",nt=`<p class="small-note">${Math.hypot(dt.x2-dt.x1,dt.z2-dt.z1).toFixed(2)} m long. Drag the fence in Plan or edit its endpoints. Overlaps are allowed.</p><label class="field-label">Fence style<select data-build-field="fence.style">${Ec.map(F=>`<option value="${F.id}" ${F.id===dt.style?"selected":""}>${F.name}</option>`).join("")}</select></label><div class="row">${x("fence.x1","Start \xB7 left / right",dt.x1)}${x("fence.z1","Start \xB7 back / front",dt.z1)}</div><div class="row">${x("fence.x2","End \xB7 left / right",dt.x2)}${x("fence.z2","End \xB7 back / front",dt.z2)}</div>${x("fence.h","Height \xB7 m",dt.h,.3,2,.05)}${p("fence.color","Fence color",dt.color)}${M("deleteFence","Delete fence")}`;else if(r==="floor")V="Room size & floor",ut="floor",nt=`<h3>How big is your room?</h3><div class="row">${x("footprint.width","Width \xB7 m",A.right-A.left,2,10,.1)}${x("footprint.depth","Length \xB7 m",A.front-A.back,2,10,.1)}</div>${D.room?x("room.height","Ceiling height \xB7 m",D.room.height,2,3,.05):""}${D.room?.kind==="video-bedroom"?'<label class="measured-check"><input id="dimensionsConfirmed" type="checkbox" '+(D.room.estimated?"":"checked")+"> I have entered measured dimensions</label>":""}<p class="small-note">Use metres. Furniture stays where you put it when you resize the room.</p><details class="advanced-fields"><summary>Advanced wall positions</summary><div class="row">${x("bounds.left","Left X",A.left,-5,2)}${x("bounds.right","Right X",A.right,-2,5)}</div><div class="row">${x("bounds.back","Back Z",A.back,-5,2)}${x("bounds.front","Front Z",A.front,-2,5)}</div></details><div class="editor-divider"></div>`+K("floor");else if(Y||Fe.some(F=>r===F+"-wall")){let F=Y?.side||r.replace("-wall",""),it=Y||ce(D,F);V=Ci[F]+(Y?` wall \xB7 section ${Y.index+1}`:" wall"),nt=`<p class="small-note">${(it.end-it.start).toFixed(2)} m along the ${Ci[F].toLowerCase()} wall${Y?". This section has its own color and can become the bathroom extension.":". Move the wall to resize the house."}</p>`,Y||(nt+=x("bounds."+F,"Wall position \xB7 "+(it.axis==="x"?"Z":"X"),A[F],-5,5)),nt+=p(Y?"segment.color":"colors."+F+"Wall",Y?"This section color":"This wall color",D.segmentColors[Y?.id]||D.colors[F+"Wall"]||D.colors.wall)+Z(it),s||P(it)}else if(r==="bathroom"){V="Attached bathroom",ut="bathFloor";let F=ce(D,v.side);nt=`<p class="attachment-note">Attached to the ${Ci[v.side].toLowerCase()} wall \xB7 ${(v.end-v.start).toFixed(2)} m section</p><p class="small-note">Resize the section and outward depth here. To attach it elsewhere, split an exterior wall and choose a section.</p><div class="row">${x("bathroom.start","Section start \xB7 "+F.axis.toUpperCase(),v.start,F.start,F.end-.8)}${x("bathroom.end","Section end \xB7 "+F.axis.toUpperCase(),v.end,F.start+.8,F.end)}</div>${x("bathroom.depth","Outward depth \xB7 m",v.depth,.8,4,.1)}${p("colors.bathWall","Bathroom walls",D.colors.bathWall)}<div class="editor-divider"></div>${K("bathFloor")}`}else if(r.startsWith("bath-")&&r.endsWith("-wall"))V="Bathroom "+r.replace("bath-","").replace("-wall","")+" wall",nt=p("colors.bathWall","Bathroom walls",D.colors.bathWall)+M("editBathFloor","Edit bathroom floor");else if(r==="loft"&&D.room?.kind==="video-bedroom")V="Green loft frame",nt='<p class="attachment-note">Beams, ladder and hatch from the video. Switch Ceiling on to see the overhead infill.</p>'+x("room.height","Ceiling / loft height \xB7 m",D.room.height,2,3,.05)+x("room.ladderRun","Ladder horizontal run \xB7 m",D.room.ladderRun,.5,1.5,.05)+p("colors.roof","Green frame color",D.colors.roof);else if(r==="stairwell"&&D.room?.kind==="video-bedroom")V="Stair opening",nt='<p class="small-note">The opening and descending steps are estimated from the video. The person stops at the landing; stair climbing is not simulated.</p>'+x("room.stairWidth","Opening width \xB7 m",D.room.stairWidth,.6,2,.05)+x("room.stairRun","Opening length \xB7 m",D.room.stairRun,.8,4,.05)+x("room.stairDrop","Visible stair drop \xB7 m",D.room.stairDrop,.6,3,.05);else if(r==="ceiling"&&D.room)V="Ceiling",nt=x("room.height","Ceiling height \xB7 m",D.room.height,2,3,.05)+p("colors.roof","Ceiling color",D.colors.roof)+'<p class="small-note">Turn Ceiling on above the scene to see it. Openings follow your stairs automatically.</p>';else if(r==="balcony")V="Back balcony",nt=x("balcony.depth","Depth",D.balcony.depth,.5,3)+p("colors.balcony","Deck color",D.colors.balcony)+p("colors.rail","Rail color",D.colors.rail);else if(r==="roof"||r==="bath-roof"){V=r==="roof"?"Main roof":"Bathroom roof";let F=r==="roof"?"roof":"bathRoof";nt=p("colors."+F,"Roof color",D.colors[F])}else if(r==="garden")V="Garden",nt=p("colors.garden","Ground color",D.colors.garden);else if(N?.kind){let F=ce(D,N.side);V=N.kind==="door"?"Door":"Window",nt=`<label class="field-label">Wall<select data-build-field="opening.side">${$n.filter(it=>(v.enabled!==!1||!it.startsWith("bath-"))&&it!==er(D)).map(it=>`<option value="${it}" ${N.side===it?"selected":""}>${it}</option>`).join("")}</select></label><div class="row">${x("opening.at",F.axis.toUpperCase()+" position",N.at)}${x("opening.w","Width",N.w,.4,3)}</div><div class="row">${x("opening.h","Height",N.h,.3,(N.side.startsWith("bath-"),2.7))}${x("opening.sill","Sill height",N.sill,0,2.5)}</div>${p("opening.color","Individual color",N.color||D.colors[N.kind])}${M("deleteStructure","Delete "+N.kind)}`}else if(N)V="Interior wall",nt=`<div class="row">${x("partition.x","Center X",N.x)}${x("partition.z","Center Z",N.z)}</div><div class="row">${x("partition.w","Length",N.w,.1,6)}${x("partition.d","Thickness",N.d,.1,6)}</div><div class="row">${x("partition.h","Height",N.h,.3,3)}${x("partition.deg","Rotation \xB0",(N.rot||0)*180/Math.PI,-360,360,15)}</div>${p("partition.color","Wall color",N.color)}${M("deleteStructure","Delete wall")}`;else return r="floor",at();!Y&&!ht&&!a&&!Fe.some(F=>r===F+"-wall")&&!s&&(h.visible=!1),t("#buildInspectorTitle").textContent=V,t("#buildInspector").innerHTML=nt+Su(D).map(F=>`<p class="warning">${i(F)}</p>`).join(""),e("[data-build-field]").forEach(F=>F.onchange=()=>{let[it,Dt]=F.dataset.buildField.split("."),I=F.tagName==="SELECT"&&["opening","fence"].includes(it)?F.value:Number(F.value);if(typeof I=="number"&&(!Number.isFinite(I)||F.min!==""&&I<Number(F.min)||F.max!==""&&I>Number(F.max))){n.toast("Check the allowed dimension range."),at();return}if(it==="draft"){a[Dt]=I,at();return}n.edit(ot=>{if(it==="cut"){let J=ot.floorCuts.find(rt=>rt.id===r);J[Dt]=I;return}if(it==="footprint"){wp(ot,Dt,I);return}if(it==="bathroom"){let J=ot.bathroom;wu(ot,J.side,Dt==="start"?I:J.start,Dt==="end"?I:J.end,Dt==="depth"?I:J.depth);return}let tt=it==="finish"?ot.finishes[ut]:it==="opening"?ot.openings.find(J=>J.id===r):it==="partition"?ot.partitions.find(J=>J.id===r):it==="fence"?ot.fences.find(J=>J.id===r):ot[it];if(tt){if(Dt==="deg"?tt.rot=I*Math.PI/180:tt[Dt]=I,it==="room"&&Dt==="height")for(let J of ot.partitions)J.h=Math.min(J.h,I);if(it==="opening"&&Dt==="side"){let J=ce(ot,I);tt.at=Math.min(J.end-tt.w/2-.1,Math.max(J.start+tt.w/2+.1,tt.at))}}})}),e("[data-build-color]").forEach(F=>F.onchange=()=>{let[it,Dt]=F.dataset.buildColor.split(".");n.edit(I=>{it==="segment"?I.segmentColors[r]=F.value:it==="opening"?I.openings.find(ot=>ot.id===r).color=F.value:it==="partition"?I.partitions.find(ot=>ot.id===r).color=F.value:it==="fence"?I.fences.find(ot=>ot.id===r).color=F.value:I.colors[Dt]=F.value})}),t("#confirmFloorCut")&&(t("#confirmFloorCut").onclick=()=>{let F={...a},it="cut-"+sr();n.edit(Dt=>Ep(Dt,F,it))&&(_(it),n.toast("Floor section removed. Add a fence or restore it from this panel."))}),t("#cancelFloorCut")&&(t("#cancelFloorCut").onclick=()=>_("floor")),t("#restoreFloor")&&(t("#restoreFloor").onclick=()=>{n.edit(F=>F.floorCuts=F.floorCuts.filter(it=>it.id!==r))&&(_("floor"),n.toast("Floor restored. Any overlapping openings and fences stay editable."))}),t("#deleteFence")&&(t("#deleteFence").onclick=()=>{n.edit(F=>F.fences=F.fences.filter(it=>it.id!==r))&&_("floor")}),t("#fenceOpening")&&(t("#fenceOpening").onclick=()=>{let F=e("[data-fence-edge]").filter(I=>I.checked).map(I=>I.dataset.fenceEdge),it=rr(ht,D.bounds);if(!F.length||!it){n.toast("Select an edge inside the room.");return}let Dt=0;n.edit(I=>{I.fences||(I.fences=[]);for(let ot of F){let[tt,J]=Ap(it)[ot];I.fences.some(rt=>Math.hypot(rt.x1-tt.x,rt.z1-tt.z)<.01&&Math.hypot(rt.x2-J.x,rt.z2-J.z)<.01||Math.hypot(rt.x2-tt.x,rt.z2-tt.z)<.01&&Math.hypot(rt.x1-J.x,rt.z1-J.z)<.01)||(I.fences.push(Cu(tt,J,"fence-"+sr())),Dt++)}})&&(at(),n.toast(Dt?`${Dt} fence sections added. Select a fence to change its style or size.`:"These edges already have fences."))}),e("[data-floor-material]").forEach(F=>F.onclick=()=>n.edit(it=>{let Dt=Ri.find(I=>I.id===F.dataset.floorMaterial);it.finishes[ut].material=Dt.id,it.finishes[ut].scale=Dt.scale})),t("#splitSelected")&&(t("#splitSelected").onclick=()=>{let F=Y||ce(D,r.replace("-wall","")),it=Number(t("#splitDistance").value);if(!Number.isFinite(it)||it<.25||it>F.end-F.start-.25){n.toast("Leave at least 25 cm in each section.");return}X(F.side,F.start+it,!1)}),t("#extendBathroom")&&(t("#extendBathroom").onclick=()=>{let F=Y||ce(D,r.replace("-wall","")),it=Number(t("#extensionDepth").value);n.edit(Dt=>wu(Dt,F.side,F.start,F.end,it))&&(r="bathroom",at(),n.toast("Bathroom extended from that section. Its shared wall stays connected."))}),t("#dimensionsConfirmed")&&(t("#dimensionsConfirmed").onchange=F=>n.edit(it=>it.room.estimated=!F.target.checked)),t("#editBathFloor")&&(t("#editBathFloor").onclick=()=>_("bathroom")),t("#deleteStructure")&&(t("#deleteStructure").onclick=()=>{n.edit(F=>{F.openings=F.openings.filter(it=>it.id!==r),F.partitions=F.partitions.filter(it=>it.id!==r),delete F.wallVisibility[r]}),r="floor",at()})}function q(D,A){return`<div class="row">${x(A+".left","Left edge \xB7 m",D.left)}${x(A+".right","Right edge \xB7 m",D.right)}</div><div class="row">${x(A+".back","Back edge \xB7 m",D.back)}${x(A+".front","Front edge \xB7 m",D.front)}</div>`}t("#splitWallTool").onclick=()=>U("split"),t("#addPartition").onclick=()=>U("draw"),t("#splitFloorTool").onclick=()=>U("floor"),t("#drawFenceTool").onclick=()=>U("fence"),t("#cancelBuildTool").onclick=()=>{C(),r==="floor-draft"&&(r="floor"),at()};for(let D of["Door","Window"])t("#add"+D).onclick=()=>{let A=m();if(A.openings.length>=40){n.toast("Maximum 40 openings.");return}let v=bc(A,r),N=v?.side||(Fe.includes(r.replace("-wall",""))?r.replace("-wall",""):D==="Window"?"back":"front"),Y=v||ce(A,N),ht=`${D.toLowerCase()}-${Date.now().toString(36)}`,dt=D==="Door"?.8:1,k=[(Y.start+Y.end)/2];for(let nt=Y.start+dt/2+.15;nt<=Y.end-dt/2-.14;nt+=.1)k.push(nt);let V=k.find(nt=>!A.openings.some(ut=>ut.side===N&&Math.abs(ut.at-nt)<(ut.w+dt)/2+.15));if(V===void 0){n.toast("This wall is full. Select another wall to add an opening.");return}n.edit(nt=>nt.openings.push({id:ht,kind:D.toLowerCase(),side:N,at:V,w:dt,h:D==="Door"?2:1.1,sill:D==="Door"?0:Math.min(1,(nt.room?.height||3)-1.1)}))&&_(ht)};return t("#resetStructure").onclick=()=>{n.edit(D=>{let A=n.cloneStructure();for(let v of Object.keys(D))delete D[v];Object.assign(D,A)}),_("floor"),n.toast("Structure reset. Undo is available.")},n.renderer.domElement.addEventListener("pointerdown",D=>{if(n.getMode()!=="build"||D.button!==0||n.getMeasure())return;if(s){D.stopImmediatePropagation(),D.preventDefault(),n.controls.enabled=!1,n.renderer.domElement.setPointerCapture(D.pointerId);return}let A=S(D),v=n.pointAt(D),N=m(),Y=v&&(N.floorCuts||[]).find(nt=>v.x>=nt.left&&v.x<=nt.right&&v.z>=nt.back&&v.z<=nt.front);if(Y&&(!A||A.id==="floor")){_(Y.id);return}if(!A||(_(A.id),!v))return;let ht=N.fences?.find(nt=>nt.id===r),dt=N.openings.find(nt=>nt.id===r)||N.partitions.find(nt=>nt.id===r),k=Fe.find(nt=>r===nt+"-wall");if(!dt&&!k&&!ht)return;let V=ht?{x:(ht.x1+ht.x2)/2,z:(ht.z1+ht.z2)/2}:dt&&!dt.kind?dt:v;l={id:r,pointer:D.pointerId,x:D.clientX,y:D.clientY,offsetX:V.x-v.x,offsetZ:V.z-v.z,before:JSON.stringify(g()),started:!1},n.controls.enabled=!1,n.renderer.domElement.setPointerCapture(D.pointerId)},!0),n.renderer.domElement.addEventListener("pointermove",D=>{if(n.getMode()!=="build")return;if(["draw","fence","floor"].includes(s)&&o){let v=z(D);if(v)if(s==="floor"){let N=rr(Au(o,v),m().bounds);N&&y(O(N)),t("#buildToolText").textContent="2 / 2 \xB7 Click the opposite corner, then review the section in the left panel."}else y([o,v]),t("#buildToolText").textContent=`${s==="fence"?"Fence":"Wall"} length ${Math.hypot(v.x-o.x,v.z-o.z).toFixed(2)} m \xB7 click to finish`}if(s==="split"){let v=H(D);if(v){let N=ce(m(),v.side),Y=n.getSnap()?.1:.01,ht=Math.round(v.at/Y)*Y;y([{x:N.axis==="x"?ht:N.fixed,z:N.axis==="x"?N.fixed:ht},{x:N.axis==="x"?ht:N.fixed,z:N.axis==="x"?N.fixed:ht,y:_t+3.12}])}}if(!l||D.pointerId!==l.pointer)return;if(!l.started){if(Math.hypot(D.clientX-l.x,D.clientY-l.y)<5)return;n.checkpoint(),l.started=!0}let A=n.pointAt(D);A&&(n.moveStructure(l.id,A.x+l.offsetX,A.z+l.offsetZ),performance.now()-c>85&&(n.rebuildStructure(),c=performance.now()))}),n.renderer.domElement.addEventListener("pointerup",D=>{if(!(n.getMode()!=="build"||D.button!==0||n.getMeasure())){if(s){if(D.stopImmediatePropagation(),D.preventDefault(),n.controls.enabled=!0,s==="split"){let A=H(D);A?X(A.side,A.at):n.toast("Click an exterior wall, or enter a precise split in its inspector.")}else{let A=z(D);if(!A)return;if(s==="floor")if(o){let v=rr(Au(o,A),m().bounds);if(!v||v.right-v.left<.0999||v.front-v.back<.0999){n.toast("Choose at least 10 cm in both directions.");return}C(),a=v,r="floor-draft",at(),t("#buildInspectorTitle").scrollIntoView?.({block:"nearest",behavior:"smooth"})}else{let v=m().bounds;if(A.x<v.left||A.x>v.right||A.z<v.back||A.z>v.front){n.toast("Start inside the room or on its edge.");return}o=A,t("#buildToolText").textContent="2 / 2 \xB7 Click the opposite corner of your section."}else if(!o)o=A,t("#buildToolText").textContent=`Start set. Click the end of the new ${s==="fence"?"fence":"wall"}.`;else if(s==="fence"){let v=o,N="fence-"+sr();if(Math.hypot(A.x-v.x,A.z-v.z)<.0999){n.toast("Draw a fence at least 10 cm long.");return}n.edit(Y=>{Y.fences||(Y.fences=[]),Y.fences.push(Cu(v,A,N))})&&_(N)}else{let v=Math.hypot(A.x-o.x,A.z-o.z);if(v<.25||v>6){n.toast("Draw a wall between 0.25 and 6 m long.");return}let N=o,Y=sr();n.edit(ht=>ht.partitions.push({id:Y,x:(N.x+A.x)/2,z:(N.z+A.z)/2,w:v,d:.15,h:ht.room?.height||3,rot:-Math.atan2(A.z-N.z,A.x-N.x),color:ht.colors.wall}))&&_(Y)}}return}l&&D.pointerId===l.pointer&&(l.started&&(g().preset="custom",n.finishDrag(l.before)),l=null,n.controls.enabled=!0)}},!0),n.renderer.domElement.addEventListener("pointercancel",()=>{l?.started&&n.finishDrag(l.before,!0),l=null,n.controls.enabled=!0}),window.addEventListener("keydown",D=>{D.key==="Escape"&&(s||a)&&(C(),r==="floor-draft"&&(r="floor"),at())}),{render:at,cancelTool:C,select:_}}function kp(n,t="right"){let e=Yn.find(r=>r.id===n),i="";if(e.shape==="spiral")i='<ellipse cx="58" cy="60" rx="27" ry="10"/><path d="M58 15v54M35 55q45-12 3-20q38-13 2-20M39 20l37 6M37 36l39 7M35 53l41 7"/>';else if(e.shape==="ladder")i='<path d="M38 70 53 14M62 70 77 14M42 58h24M45 46h24M48 34h24M51 22h24"/>';else if(e.shape==="turn")i='<path d="M25 70V40h27V20h39M25 61h27M25 51h27M52 40h14V20M66 40h13V20M79 40h12V20"/>';else{for(let r=0;r<6;r++){let s=27+r*7,o=67-r*8;i+=`<path d="M${s} ${o}h28v5h-28z"/>`}e.shape!=="floating"&&(i+='<path d="M26 54 63 12M53 58 91 17"/>'),e.shape==="paddle"&&(i+='<path d="M42 61 65 14"/>')}return`<svg viewBox="0 0 116 82" aria-hidden="true"><g transform="${n==="turn"&&t==="left"?"translate(116 0) scale(-1 1)":""}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</g></svg>`}function Bp(n){let{$:t,$$:e,escapeHTML:i}=n,r="timber",s="right",o=null,a=(u,d,f,g,m,x=.1)=>`<label class="field-label">${d}<input data-stair-field="${u}" type="number" min="${g}" max="${m}" step="${x}" value="${Number(f).toFixed(2)}"></label>`;function l(u){o=u,n.currentFloor(),h(),t("#connectionEditor").scrollIntoView?.({block:"nearest",behavior:"smooth"})}function c(u,d){n.editProject(f=>d(f.stairs.find(g=>g.id===u)))}function h(){let u=n.getState(),d=In(u),f=u.activeFloorId||d[0].id;t("#floorTabs").innerHTML=d.map((_,y)=>`<button data-floor="${_.id}" class="${_.id===f&&!n.isOverview()?"active":""}" aria-pressed="${_.id===f&&!n.isOverview()}"><span>${y+1}</span>${i(_.name)}</button>`).join(""),e("[data-floor]").forEach(_=>_.onclick=()=>n.switchFloor(_.dataset.floor)),t("#wholeHouseBtn").hidden=d.length<2,t("#wholeHouseBtn").classList.toggle("active",n.isOverview()),t("#wholeHouseBtn").textContent=n.isOverview()?"\u2190 Edit this floor":"View whole house",t("#floorCount").textContent=`${d.length} / ${Vr} FLOORS`,t("#stairStyles").innerHTML=Yn.map(_=>`<button class="stair-card ${_.id===r?"active":""}" data-stair-style="${_.id}" aria-pressed="${_.id===r}" title="${i(_.detail)}">${kp(_.id,s)}<b>${_.name}</b><small>${_.w.toFixed(2)} \xD7 ${_.run.toFixed(2)} m</small></button>`).join(""),e("[data-stair-style]").forEach(_=>_.onclick=()=>{r=_.dataset.stairStyle,h()}),t("#newStairTurn").hidden=r!=="turn",e("[data-new-stair-turn]").forEach(_=>{_.classList.toggle("active",_.dataset.newStairTurn===s),_.setAttribute("aria-pressed",String(_.dataset.newStairTurn===s)),_.onclick=()=>{s=_.dataset.newStairTurn,h()}}),t("#addFloorBtn").disabled=d.length>=Vr,t("#addFloorBtn").textContent=d.length>=Vr?"Four floors added":`+ Add floor ${d.length+1} with this style`,t("#floorName").value=d.find(_=>_.id===f)?.name||"Ground floor";let g=(u.stairs||[]).filter(_=>_.from===f||_.to===f);g.some(_=>_.id===o)||(o=g[0]?.id||null),t("#connectionsList").innerHTML=g.map(_=>{let y=d.find(C=>C.id===_.from),P=d.find(C=>C.id===_.to);return`<button data-connection="${_.id}" class="${_.id===o?"active":""}"><b>${i(Yn.find(C=>C.id===_.style).name)}${_.style==="turn"?" \xB7 turns "+(_.turn||"right"):""}</b><small>${i(y.name)} \u2192 ${i(P.name)}</small></button>`}).join(""),e("[data-connection]").forEach(_=>_.onclick=()=>l(_.dataset.connection));let m=g.find(_=>_.id===o);if(t("#connectionEditor").hidden=!m,t("#removeFloorBtn").hidden=d.length<2,!m)return;let x=Ws(u),p=x.find(_=>_.id===m.from),M=x.find(_=>_.id===m.to);t("#connectionEditor").innerHTML=`<h3>Move & resize connection</h3><p class="small-note">Move, resize or change the style freely. Overlaps are allowed; the upper-floor opening follows automatically.</p><label class="field-label">Style<select id="connectionStyle">${Yn.map(_=>`<option value="${_.id}" ${m.style===_.id?"selected":""}>${_.name}</option>`).join("")}</select></label>${m.style==="turn"?`<fieldset class="stair-turn-choice"><legend>Turn as you go upstairs</legend><div>${["left","right"].map(_=>`<button class="${(m.turn||"right")===_?"active":""}" data-connection-turn="${_}" aria-pressed="${(m.turn||"right")===_}">${kp("turn",_)}<span>Turn ${_}</span></button>`).join("")}</div><p class="small-note">Mirror the L shape. Use Direction below to rotate the whole staircase.</p></fieldset>`:""}<div class="row">${a("x","Left / right \xB7 m",m.x,-5.5,5.5)}${a("z","Back / front \xB7 m",m.z,-5.5,5.5)}</div><div class="row">${a("w","Width \xB7 m",m.w,.5,3,.05)}${a("run","Floor space \xB7 m",m.run,.4,5,.05)}</div><label class="field-label">Direction<select id="connectionRotation">${[0,90,180,270].map(_=>`<option value="${_}" ${Math.round(m.rot*180/Math.PI)%360===_?"selected":""}>${_}\xB0</option>`).join("")}</select></label><label class="field-label">Color<input type="color" id="connectionColor" value="${m.color}"></label><div class="stair-nudge" aria-label="Move connection 10 centimetres"><button data-stair-nudge="0,-0.1" aria-label="Move toward back">\u2191</button><button data-stair-nudge="-0.1,0" aria-label="Move left">\u2190</button><span>Move 10 cm</span><button data-stair-nudge="0.1,0" aria-label="Move right">\u2192</button><button data-stair-nudge="0,0.1" aria-label="Move toward front">\u2193</button></div><p class="small-note">Connects ${i(p.name)} to ${i(M.name)} \xB7 ${(M.elevation-p.elevation).toFixed(2)} m rise. Switch floors to furnish each room. Blocky explores the selected floor.</p>`,e("[data-stair-field]").forEach(_=>_.onchange=()=>{let y=Number(_.value);if(!Number.isFinite(y)){n.toast("Enter a size in metres."),h();return}c(m.id,P=>P[_.dataset.stairField]=y)}),t("#connectionStyle").onchange=_=>{let y=Yn.find(P=>P.id===_.target.value);c(m.id,P=>Object.assign(P,{style:y.id,w:y.w,run:y.run,color:y.color,...y.id==="turn"?{turn:P.turn||s}:{}}))},t("#connectionRotation").onchange=_=>c(m.id,y=>y.rot=Number(_.target.value)*Math.PI/180),e("[data-connection-turn]").forEach(_=>_.onclick=()=>c(m.id,y=>y.turn=_.dataset.connectionTurn)),t("#connectionColor").onchange=_=>c(m.id,y=>y.color=_.target.value),e("[data-stair-nudge]").forEach(_=>_.onclick=()=>{let[y,P]=_.dataset.stairNudge.split(",").map(Number);c(m.id,C=>{C.x=Math.round((C.x+y)*100)/100,C.z=Math.round((C.z+P)*100)/100})})}return t("#addFloorBtn").onclick=()=>{let u;n.editProject(f=>{u=Sp(f,r,t("#copyFloorWalls").checked,s)})&&(o=u.id,n.switchFloor(n.getState().activeFloorId),n.toast("New floor added. Use the floor tabs to move between rooms."),h())},t("#removeFloorBtn").onclick=()=>n.editProject(u=>Tp(u)),t("#floorName").onchange=u=>{let d=u.target.value.trim();if(!d){h();return}n.editProject(f=>{let g=f.activeFloorId||"floor-1";f.floors.find(m=>m.id===g).name=d.slice(0,40)})},t("#wholeHouseBtn").onclick=()=>n.toggleOverview(),{render:h,selectConnection:l}}var j=n=>document.querySelector(n),Le=n=>[...document.querySelectorAll(n)],Yr=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);Pp();var Vp;function ae(n){j("#toast").textContent=n,j("#toast").classList.add("show"),clearTimeout(Vp),Vp=setTimeout(()=>j("#toast").classList.remove("show"),4200)}var Vv=!0;function $p(n,t){try{return JSON.parse(localStorage.getItem(n))??t}catch{return t}}function Xu(n,t){try{return localStorage.setItem(n,JSON.stringify(t)),!0}catch{return Vv=!1,j("#saveStatus").textContent="Export JSON to save",!1}}var ct=wn(Tu()),qp=!0;try{let n=$p("house-studio-autosave-v1",null);n&&(ct=wn(n),qp=!1)}catch{}ct.structure||(ct.structure=$r());var Je="explore",Ue=null,Li=!0,Te="cutaway",dn=!1,zc="day",Pi=!1,Yp=!1,ca=!1,hr=[],ha=[],ur=new Map,Dn=null,Jn=null,di=null,Zp="iso",Kt=!1,Qr=null,qr=[],ze=new Es;ze.background=new Wt("#e7ede3");ze.fog=new To("#e7ede3",26,65);var kc=j("#canvasHost"),Ie;try{Ie=new na({antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch(n){throw j("#loading").innerHTML="<b>3D rendering is unavailable.</b><small>Use Chrome or Edge with hardware acceleration enabled.</small><small>Your saved layouts have not been changed.</small>",n}Ie.setPixelRatio(Math.min(devicePixelRatio,1.65));Ie.shadowMap.enabled=!0;Ie.shadowMap.type=Ml;Ie.toneMapping=Yo;Ie.toneMappingExposure=1.12;Ie.outputColorSpace=Ge;kc.append(Ie.domElement);Ie.domElement.setAttribute("aria-label","House scene. Use mouse to orbit and zoom; select furniture in Decorate.");var Zr=new We(39,1,.05,180),Di=new Ir(-7,7,7,-7,.05,100),Ze=Zr;Zr.position.set(8.2,9.4,12.7);var xe=new yc(Ze,Ie.domElement);xe.target.set(-.58,.65,-.15);xe.enableDamping=!0;xe.dampingFactor=.1;xe.minDistance=2;xe.maxDistance=28;xe.maxPolarAngle=Math.PI*.485;xe.enablePan=!0;xe.zoomToCursor=!0;var Jp=new Ls("#f5faf1","#828d70",2.2);ze.add(Jp);var Kn=new Pr("#fff3d8",3.2);Kn.position.set(-6,10,8);Kn.castShadow=!0;Kn.shadow.mapSize.set(2048,2048);Object.assign(Kn.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40});Kn.shadow.normalBias=.035;Kn.shadow.bias=-1e-4;Kn.shadow.radius=4;ze.add(Kn);var Kp=new Pr("#dcebea",.55);Kp.position.set(6,4,-4);ze.add(Kp);function Bc(n=ct.activeFloorId||"floor-1",t=!0){let e=In(ct),i=(ct.stairs||[]).map(s=>({...s,rise:ir(e.find(o=>o.id===s.from))+.2})),r=e[e.findIndex(s=>s.id===n)+1];return{incoming:i.filter(s=>s.to===n),outgoing:i.filter(s=>s.from===n),ceilingHoles:r?.structure.floorCuts||[],showIncoming:t}}var fn=Nc(ze,ct.structure,Bc()),Ks=new St;ze.add(Ks);var he=Rp(ze);he.root.visible=!1;var da=new St;da.visible=!1;ze.add(da);var jp=()=>JSON.stringify([ct.structure,ct.activeFloorId,ct.stairs,In(ct).map(n=>[ir(n),n.structure.floorCuts])]),Hp=jp(),dr=new Xo(12,120,"#9baea0","#c4cfc0");dr.position.y=_t+.008;dr.material.transparent=!0;dr.material.opacity=.18;dr.visible=!1;ze.add(dr);var Js=new $o(new Vn,4947297);ze.add(Js);Js.visible=!1;var cr=new St,jn=new St,Zs=new St,js=new St;ze.add(cr,jn,Zs,js);jn.visible=!1;js.visible=!1;var Zt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},fa=()=>({x:he.root.position.x,z:he.root.position.z}),Jr=1.7;function $u(){for(let n of ur.values())Ks.remove(n),aa(n);ur.clear();for(let n of ct.items){let t=oa(n);ur.set(n.id,t),Ks.add(t)}Ni(),Yu()}function Qp(){let n=jp();n!==Hp&&(Hp=n,Hu(ze,fn),fn=Nc(ze,ct.structure,Bc()),Fn(),ju(),fn.garden.visible=!Kt&&j("#gardenToggle").checked,fn.base.material.color.set(ze.background),am(),$c())}function qu(){bn(ct),Xu("house-studio-autosave-v1",ct)&&(j("#saveStatus").textContent="Saved on this device")}function pn(){bn(ct),hr.push(JSON.stringify(ct)),hr.length>45&&hr.shift(),ha=[],Vc()}function Vc(){j("#undoBtn").disabled=!hr.length,j("#redoBtn").disabled=!ha.length}function $e(n=!0){ct.structure||(ct.structure=$r()),bn(ct),Qp(),n?$u():(Ni(),Yu()),Kt?nm():qr.length&&Ju(),Fn(),$c(),Qr?.render(),qu(),Vc(),Ue&&Qs(),j("#pathResults").innerHTML="",Qn(!1)}function tm(){hr.length&&(Fi.cancelTool(),bn(ct),ha.push(JSON.stringify(ct)),ct=JSON.parse(hr.pop()),ct.structure||(ct.structure=$r()),Ue=null,Kt=!1,$e(),ae("Change undone."))}function Wu(){ha.length&&(Fi.cancelTool(),bn(ct),hr.push(JSON.stringify(ct)),ct=JSON.parse(ha.pop()),ct.structure||(ct.structure=$r()),Ue=null,Kt=!1,$e(),ae("Change restored."))}function Yu(){let n=ct.structure,t=n.room?.kind==="video-bedroom",e=n.room?.kind==="custom-room",i=t&&n.room.estimated;j("#layoutLabel").textContent=ct.name,j("#sceneSubline").textContent=e?`${In(ct).find(r=>r.id===ct.activeFloorId)?.name||"Ground floor"} \xB7 ${ct.items.length} ${ct.items.length===1?"item":"items"}`:Wr.find(r=>r.id===ct.preset)?.description||(t?"Your room. Your arrangement.":"Your furniture. Your arrangement."),j("#mainDimensions").textContent=`${(n.bounds.right-n.bounds.left).toFixed(2)} \xD7 ${(n.bounds.front-n.bounds.back).toFixed(2)}`,j("#primaryDimensionLabel").textContent=n.room?"room \xB7 metres":"main house \xB7 metres",j("#houseFactsTitle").textContent=n.room?"This room":"The house",j("#bathDimensions").textContent=n.room?`${n.room.height.toFixed(2)} m`:`${n.bathroom.w.toFixed(2)} \xD7 ${n.bathroom.d.toFixed(2)}`,j("#secondaryDimensionLabel").textContent=n.room?i?"ceiling \xB7 estimated":"ceiling height":"bath extension \xB7 metres",j("#balconyDimensions").textContent=n.balcony.enabled===!1?"Not in this room":`${(n.bounds.right-n.bounds.left).toFixed(2)} \xD7 ${n.balcony.depth.toFixed(2)} m`,j("#roofWallHeight").textContent=n.room?`${n.room.height.toFixed(2)} m${t?" \xB7 loft ceiling":""}`:"3.84 / 3.00 m",j("#bathroomFact").textContent=n.bathroom.enabled===!1?"None added":"Attached extension",j("#roomEstimate").hidden=!i,j("#roomEstimate").textContent="Estimated from your video \xB7 enter measured room sizes in Build",j("#gardenToggle").disabled=!!n.room,j("#standardAssumptions").hidden=!!n.room,j("#videoAssumptions").hidden=!t,j("#designerReferences").hidden=!!n.room,j("#customAssumptions").hidden=!e;for(let r of["bathroom","balcony"])j(`[data-action="${r}"]`).disabled=r==="bathroom"?n.bathroom.enabled===!1:n.balcony.enabled===!1;j('[data-action="entrance"]').lastChild.textContent=t?"Stair landing":"Front door",Le("[data-preset]").forEach(r=>r.classList.toggle("active",r.dataset.preset===ct.preset))}function em(n){Wr.some(t=>t.id===n)&&(pn(),Kt=!1,ct=Du(n),Ue=null,$e(),ed(),Ui("iso"),Ku(zc),ae(n==="my-two-floor-room"?"Your two-floor layout loaded. Use the floor tabs to explore it.":"Your supplied room restored. Undo is available."))}function Zu(n){Kt&&ts(),Fi.cancelTool(),Je=n,document.body.classList.remove("mode-explore","mode-build","mode-decorate","mode-simulate"),document.body.classList.add("mode-"+n),Le("[data-mode]").forEach(t=>t.classList.toggle("active",t.dataset.mode===n));for(let t of["explore","build","decorate","simulate"])j("#"+t+"Panel").hidden=t!==n;dr.visible=n==="decorate"&&Li,js.visible=n==="decorate",he.root.visible=n==="simulate",n!=="decorate"&&(Ue=null,Qs(),Ni()),n==="build"&&(dn=!1,Fn(),$c()),n==="decorate"&&(dn=!1,Fn(),Qu()),n==="simulate"?(dn=!1,Fn(),jr()):Qn(!1),j("#inputHint").textContent=n==="build"?"Choose a room size \xB7 click a wall to edit \xB7 draw a divider in Plan":n==="decorate"?"Click + to add \xB7 drag to move \xB7 select an item to resize":n==="simulate"?"Click the floor to walk \xB7 Drag empty space to orbit \xB7 Scroll to zoom":"Drag to look around \xB7 Scroll to zoom \xB7 Choose Build when you are ready"}function Hv(n){try{let t=JSON.parse(JSON.stringify(bn(ct)));wc(t),n(t),bn(t);let e=wn(t);return pn(),ct=e,Kt=!1,Ue=null,Fi.cancelTool(),$e(),!0}catch(t){return ae(t.message),Qr?.render(),!1}}function Gv(n){if(Fi.cancelTool(),!ct.floors&&n==="floor-1"){ts();return}Sc(ct,n),Kt=!1,Ue=null,$e(),ed(),Ui("iso"),Fi.select("floor")}function ts(){Kt=!1,Ju(),Fn(),Yu(),Ni(),Qr?.render(),Ui("iso")}function Ju(){for(let n of qr)Hu(n.group,n.house),n.furniture.traverse(t=>{t.userData.itemId&&aa(t)}),da.remove(n.group);qr=[]}function nm(){Ju(),bn(ct);for(let t of Ws(ct)){let e=new St;e.position.y=t.elevation,da.add(e);let i=Nc(e,t.structure,Bc(t.id,!1));i.base.visible=!1,i.garden.visible=!1;let r=new St;e.add(r);for(let s of t.items)r.add(oa(s));qr.push({group:e,house:i,furniture:r,floor:t})}let n=Bc();or(ct.structure,{holes:n.incoming.map(t=>Hr(t)),connections:n.outgoing.map(t=>Hr(t)),landings:[...n.incoming.map(t=>Xs(t,!0)),...n.outgoing.map(t=>Xs(t,!1))]})}function Wv(){if(Kt){ts();return}Fi.cancelTool(),Ue=null,Qn(!1),Kt=!0,nm(),Fn(),Ni(),Qr?.render(),Ui("iso")}function Hc(){let n=kc.clientWidth,t=kc.clientHeight;if(!n||!t)return;Ie.setSize(n,t),Zr.aspect=n/t,Zr.updateProjectionMatrix();let e=ct.structure.bounds,i=Math.max(e.right-e.left,e.front-e.back),r=Ws(ct),s=Kt?r.at(-1).elevation+ir(r.at(-1)):0,o=Kt?Math.max(i*.75,s*.65):ct.structure.room?i*.72:6.15;Di.left=-o*n/t,Di.right=o*n/t,Di.top=o,Di.bottom=-o,Di.updateProjectionMatrix()}new ResizeObserver(Hc).observe(kc);function Ui(n){ca=!1,Zp=n,Le("[data-view]").forEach(a=>a.classList.toggle("active",a.dataset.view===n)),j("#cameraTourBtn").innerHTML=Ii("play");let t=!!ct.structure.room,e=ct.structure.bounds,i=Math.max(e.right-e.left,e.front-e.back),r=Ws(ct),s=Kt?r.at(-1).elevation+ir(r.at(-1)):0,o=new L(t?(e.left+e.right)/2:-.6,Kt?s*.46:t?.85:.6,t?(e.back+e.front)/2:-.18);if(n==="top")Ze=Di,Ze.position.set(o.x,Math.max(18,s+12),o.z+.001),Ze.up.set(0,0,-1),Ze.lookAt(o),xe.object=Ze,xe.target.copy(o),xe.enableRotate=!1,Di.zoom=1,Di.updateProjectionMatrix(),dn=!1,Te="hidden",j("#wallSelect").value=Te,Fn(),di=null;else{Ze=Zr,xe.object=Ze,xe.enableRotate=!0,Ze.up.set(0,1,0);let a={iso:Kt?[i*.95,s+i*.65,i*1.8]:t?[i*.36,i*1.4,i*1.9]:[8.2,9.4,12.7],front:Kt?[0,s*.6,i*3]:t?[0,2.5,i*2.4]:[0,2.5,12],back:Kt?[0,s*.6,-i*3]:[0,3,-12]};di={from:Ze.position.clone(),to:new L(...a[n]),targetFrom:xe.target.clone(),targetTo:o,t:0},n==="front"||n==="back"?(Te="full",dn=!0):(Te="cutaway",dn=!1),Fn()}Hc(),xe.maxDistance=Kt?55:28,xe.update()}function Gp(n,t,e){n.full.visible=n.cut.visible=!0;let i=t.wallVisibility;n.structure.traverse(r=>{r.userData.wallSide&&(r.visible=Te==="full"||Te==="cutaway"&&i[r.userData.wallSide]==="full")});for(let[r,s]of Object.entries(n.wallGroups)){let o=Te==="full"?"full":Te==="hidden"?"hidden":i[r]||"low";s.full.visible=o==="full",s.low.visible=o==="low"}n.roof.visible=e,n.doors.visible=Te!=="hidden";for(let r of t.openings){let s=Te==="full"?"full":Te==="hidden"?"hidden":i[r.side]||"low";n.openingMeshes[r.id]&&(n.openingMeshes[r.id].visible=s!=="hidden")}n.lightsGroup.visible=Te==="full"}function Fn(){Gp(fn,ct.structure,dn);for(let n of["structure","full","cut","roof","garden","doors","lightsGroup"])fn[n].visible=fn[n].visible&&!Kt;fn.structure.visible=!Kt,fn.garden.visible=!Kt&&j("#gardenToggle").checked&&!ct.structure.room,Ks.visible=!Kt,da.visible=Kt;for(let n=0;n<qr.length;n++){let t=qr[n];Gp(t.house,t.floor.structure,dn&&n===qr.length-1)}dr.visible=!Kt&&Je==="decorate"&&Li,he.root.visible=!Kt&&Je==="simulate",Js.visible=!Kt&&!!Ue&&Je==="decorate",jn.visible=jn.visible&&!Kt,js.visible=!Kt&&Je==="decorate",j("#overviewBanner").hidden=!Kt,j("#roofBtn span").textContent=ct.structure.room?dn?"Ceiling on":"Ceiling off":dn?"Roof on":"Roof off",j("#roofBtn").classList.toggle("active",dn),j("#viewLabel").textContent=Kt?"WHOLE HOUSE":Zp==="top"?"FLOOR PLAN":Te==="full"?"EXTERIOR":Te==="hidden"?"OPEN PLAN":"CUTAWAY",Kt&&(j("#sceneSubline").textContent=`${In(ct).length} floors \xB7 choose a floor to edit`),j("#wallSelect").value=Te,Xv()}function Xv(){let n=ct.structure,t=[...$n.filter(e=>(n.bathroom.enabled!==!1||!e.startsWith("bath-"))&&e!==er(n)).map(e=>({key:e,label:e.startsWith("bath-")?"Bath \xB7 "+Ci[e.slice(5)]:Ci[e]+" wall"})),...n.partitions.map((e,i)=>({key:e.id,label:"Interior wall "+(i+1)}))];j("#wallVisibilityRows").innerHTML=t.map(({key:e,label:i})=>{let r=Te==="full"?"full":Te==="hidden"?"hidden":n.wallVisibility[e]||"low";return`<label>${i}<select data-wall-visibility="${Yr(e)}" aria-label="${Yr(i)} visibility">${[["full","Keep full"],["low","Low wall"],["hidden","Hide"]].map(([s,o])=>`<option value="${s}" ${r===s?"selected":""}>${o}</option>`).join("")}</select></label>`}).join(""),Le("[data-wall-visibility]").forEach(e=>e.onchange=()=>{let i=Te,r=e.value,s=e.dataset.wallVisibility;Te="cutaway",sd(o=>{if(i!=="cutaway")for(let a of t)o.wallVisibility[a.key]=i==="full"?"full":"hidden";o.wallVisibility[s]=r})})}function Ku(n){zc=n;let e={...{day:{bg:"#e7ede3",sun:"#fff3dc",intensity:3.2,hemi:2.2,pos:[-6,10,8],exposure:1.12},sunset:{bg:"#decbb4",sun:"#ffb56c",intensity:3,hemi:1.35,pos:[-9,3.4,5],exposure:1.12},night:{bg:"#1a2e32",sun:"#b9cee3",intensity:.6,hemi:.55,pos:[5,8,-7],exposure:1.15}}[n],...ct.structure.room&&n==="day"?{pos:[6,9,-2],sun:"#fff4dc",hemi:2.35}:{}};ze.background.set(e.bg),ze.fog.color.set(e.bg),fn.base.material.color.set(e.bg),Kn.color.set(e.sun),Kn.intensity=e.intensity,Kn.position.set(...e.pos),Jp.intensity=e.hemi,Ie.toneMappingExposure=e.exposure,document.body.classList.toggle("night",n==="night"),Le("[data-light]").forEach(i=>i.classList.toggle("active",i.dataset.light===n)),ju()}function ju(){fn.lights.forEach(n=>n.intensity=j("#lightsToggle").checked?zc==="night"?7:zc==="sunset"?4:1.3:0)}var Gu=new Map,ar;function $v(n){if(Gu.has(n))return Gu.get(n);try{ar||(ar=new na({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),ar.setSize(240,170),ar.setPixelRatio(1),ar.toneMapping=Yo,ar.toneMappingExposure=1.25);let t=new Es;t.background=new Wt("#edf1e9"),t.add(new Ls("#fff8e9","#b0b7a1",2.7));let e=new Pr("#fff5de",3);e.position.set(-3,5,4),t.add(e);let i=Pu(n,0,0),r=oa(i);r.position.set(0,0,0),t.add(r);let s=new Vn().setFromObject(r),o=s.getCenter(new L),a=s.getSize(new L),l=Math.max(a.x,a.y,a.z),c=new We(37,240/170,.01,100);c.position.copy(o).add(new L(1.5,1.25,1.8).multiplyScalar(l*.83)),c.lookAt(o),ar.render(t,c);let h=ar.domElement.toDataURL();return Gu.set(n,h),aa(r),h}catch{return""}}function qv(){j("#presetCards").innerHTML=Wr.map(n=>`<button class="preset-card ${ct.preset===n.id?"active":""}" data-preset="${n.id}"><img alt="Floor plan of ${Yr(n.name)}" src="${n.image}"><span><b>${n.name}</b><small>${n.subtitle}</small></span></button>`).join(""),Le("[data-preset]").forEach(n=>n.onclick=()=>em(n.dataset.preset))}var Oc="All",Yv=["All",...new Set(Ic.map(n=>n.cat))];function Qu(){let n=j("#searchInput").value.toLowerCase(),t=Ic.filter(e=>(Oc==="All"||e.cat===Oc)&&(e.name+" "+(e.keywords||"")).toLowerCase().includes(n));j("#catalogCount").textContent=`${t.length} ITEMS`,j("#categoryTabs").innerHTML=Yv.map(e=>`<button class="${e===Oc?"active":""}" data-category="${e}">${e}</button>`).join(""),j("#catalog").innerHTML=t.map(e=>`<button class="catalog-item" data-add="${e.type}"><img alt="" src="${$v(e.type)}"><span class="add-symbol">+</span><b>${e.name}</b><small>${e.w.toFixed(2)} \xD7 ${e.d.toFixed(2)} m</small></button>`).join("")||'<p class="empty-copy">No matching furniture.</p>',Le("[data-add]").forEach(e=>e.onclick=()=>Zv(e.dataset.add)),Le("[data-category]").forEach(e=>e.onclick=()=>{Oc=e.dataset.category,Qu()})}function Zv(n){if(Kt&&ts(),ct.items.length>=180){ae("This floor has reached the 180-item limit.");return}pn();let t=ct.structure.bounds,e=Pu(n,0,0),i=!1,r=[];for(let s=t.front-.35;s>t.back+.2;s-=.25)for(let o=t.left+.3;o<t.right-.2;o+=.25)r.push({x:o,z:s});for(let s of r)if(e.x=Math.round(s.x*100)/100,e.z=Math.round(s.z*100)/100,!Pc(e,ct.items).some(o=>!o.startsWith("Loft:"))){i=!0;break}i?ae(`${Re[n].name} added. Drag it to move, or use the size controls.`):(e.x=(t.left+t.right)/2,e.z=(t.back+t.front)/2,ae("Added at the room center. Overlaps are allowed.")),ct.items.push(e),ct.preset="custom",Ue=e.id,$e()}function fi(){return ct.items.find(n=>n.id===Ue)}function Ni(){let n=ur.get(Ue);Js.visible=!Kt&&!!n&&Je==="decorate",n&&(n.updateMatrixWorld(!0),Js.box.setFromObject(n),Js.material.color.set(Pc(fi(),ct.items).some(t=>t.startsWith("Overlaps"))?"#d06c51":"#3f7c59")),j("#inspector").hidden=!n||Je!=="decorate"}function Gc(n){Ue=n,Ni(),Qs()}function lr(n){let t=fi();t&&(pn(),n(t),ct.preset="custom",$e())}function Qs(){let n=fi(),t=j("#inspector");if(t.hidden=!n||Je!=="decorate",!n)return;let e=Re[n.type],i=Pc(n,ct.items),r=n.type==="roundTable";t.innerHTML=`<div class="inspector-head"><div><span class="eyebrow">SELECTED OBJECT</span><h3>${e.name}</h3></div><button id="closeInspector" class="icon-btn" aria-label="Deselect">${Ii("close")}</button></div><div class="row"><label class="field-label">Left / right \xB7 m<input id="objectX" type="number" min="-6" max="6" step=".1" value="${n.x.toFixed(2)}"></label><label class="field-label">Back / front \xB7 m<input id="objectZ" type="number" min="-6" max="6" step=".1" value="${n.z.toFixed(2)}"></label></div>${r?`<label class="field-label round-diameter-label">Round tabletop <span id="diameterReadout">${n.w.toFixed(2)} m across</span><input id="roundDiameter" type="range" min=".45" max="4" step=".05" value="${n.w}"></label><div class="row"><label class="field-label">Diameter \xB7 m<input id="tableDiameter" type="number" min=".45" max="4" step=".05" value="${n.w.toFixed(2)}"></label><label class="field-label">Height \xB7 m<input id="objectH" type="number" min=".1" max="3" step=".05" value="${n.h.toFixed(2)}"></label></div><p class="small-note">Drag to make the circular top smaller or bigger. The base and height stay proportionate.</p>`:`<div class="row"><label class="field-label">Width<input id="objectW" type="number" min=".1" max="4" step=".05" value="${n.w.toFixed(2)}"></label><label class="field-label">Depth<input id="objectD" type="number" min=".1" max="4" step=".05" value="${n.d.toFixed(2)}"></label><label class="field-label">Height<input id="objectH" type="number" min=".01" max="3" step=".05" value="${n.h.toFixed(2)}"></label></div>`}<label class="field-label">Rotation \xB7 degrees<input id="objectRotation" type="number" step="15" value="${Math.round(n.rot*180/Math.PI)}"></label><div class="swatches">${["#d9d7c8","#c6ac83","#a7b7a0","#425956","#343b3b","#d7a681","#eeeeea"].map(s=>`<button class="${n.color===s?"active":""}" style="background:${s}" data-color="${s}" title="Colour ${s}" aria-label="Colour ${s}"></button>`).join("")}<input id="customColor" type="color" value="${n.color}" aria-label="Custom colour" style="width:27px;height:27px;border:0;padding:0"></div>${e.kind==="sofabed"?`<button id="sofaToggle" class="btn wide secondary">${n.open?"Fold into sofa":"Unfold into bed"}</button>`:""}<div class="button-row"><button id="rotateObject" class="btn secondary" title="Rotate 90 degrees">${Ii("rotate")}90\xB0</button><button id="duplicateObject" class="icon-btn" title="Duplicate" aria-label="Duplicate">${Ii("copy")}</button><button id="deleteObject" class="icon-btn danger" title="Delete" aria-label="Delete">${Ii("trash")}</button></div>${i.length?i.map(s=>`<p class="warning">${s}</p>`).join(""):'<p class="good">\u2713 No object or wall overlap detected.</p>'}<p>Dimensions include the model frame. Resize to match your actual furniture. Arrow keys nudge by ${Li?"10":"2"} cm.</p>`,j("#closeInspector").onclick=()=>Gc(null);for(let[s,o,a,l]of[["objectX","x",-6,6],["objectZ","z",-6,6],["objectW","w",.1,4],["objectD","d",.1,4],["objectH","h",.01,3]])j("#"+s)&&(j("#"+s).onchange=c=>{let h=Number(c.target.value);if(!Number.isFinite(h)||h<a||h>l){ae(`Use a value from ${a} to ${l}.`),Qs();return}lr(u=>u[o]=h)});if(j("#objectRotation").onchange=s=>{let o=Number(s.target.value);Number.isFinite(o)&&lr(a=>a.rot=(o%360+360)%360*Math.PI/180)},Le("[data-color]").forEach(s=>s.onclick=()=>lr(o=>o.color=s.dataset.color)),j("#customColor").onchange=s=>lr(o=>o.color=s.target.value),j("#rotateObject").onclick=()=>im(),j("#duplicateObject").onclick=Jv,j("#deleteObject").onclick=rm,j("#sofaToggle")&&(j("#sofaToggle").onclick=()=>lr(s=>s.open=!s.open)),r){j("#tableDiameter").onchange=o=>{let a=Number(o.target.value);if(!Number.isFinite(a)||a<.45||a>4){ae("Use a diameter from 0.45 to 4 metres."),Qs();return}lr(l=>l.w=l.d=a)};let s=!1;j("#roundDiameter").oninput=o=>{s||(pn(),s=!0);let a=Number(o.target.value);n.w=n.d=a;let l=ur.get(n.id);Ks.remove(l),aa(l);let c=oa(n);ur.set(n.id,c),Ks.add(c),Ni(),j("#diameterReadout").textContent=a.toFixed(2)+" m across",j("#tableDiameter").value=a.toFixed(2)},j("#roundDiameter").onchange=()=>{s=!1,ct.preset="custom",$e(!1)}}}function im(){lr(n=>n.rot=(n.rot+Math.PI/2)%(Math.PI*2))}function Jv(){if(!fi()||ct.items.length>=180)return;pn();let n={...fi(),id:sr(),x:Math.min(6,fi().x+.35),z:Math.min(6,fi().z+.35)};ct.items.push(n),Ue=n.id,$e(),ae("Duplicated. Move the new item into place.")}function rm(){Ue&&(pn(),ct.items=ct.items.filter(n=>n.id!==Ue),Ue=null,$e(),ae("Object removed. Undo is available."))}var Wc=new Wo,Wp=new mt,Kv=new ln(new L(0,1,0),-_t),jv=new L;function td(n){let t=Ie.domElement.getBoundingClientRect();Wp.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),Wc.setFromCamera(Wp,Ze)}function Xc(n){return td(n),Wc.ray.intersectPlane(Kv,jv)?.clone()}function sm(n){td(n);let t=Wc.intersectObjects([...ur.values()],!0);for(let e of t){let i=e.object;for(;i&&!i.userData.itemId;)i=i.parent;if(i)return i.userData.itemId}return null}Ie.domElement.addEventListener("pointerdown",n=>{if(!(n.button!==0||Kt)&&(Jn={x:n.clientX,y:n.clientY,id:n.pointerId},!Kt&&Je==="decorate"&&!Pi)){let t=sm(n);if(t){Gc(t);let e=Xc(n),i=fi();e&&(Dn={id:t,dx:i.x-e.x,dz:i.z-e.z,started:!1},xe.enabled=!1,Ie.domElement.setPointerCapture(n.pointerId));return}}},!0);Ie.domElement.addEventListener("pointermove",n=>{if(!Dn||!Jn||Math.hypot(n.clientX-Jn.x,n.clientY-Jn.y)<4&&!Dn.started)return;Dn.started||(pn(),Dn.started=!0,Qn(!1));let t=Xc(n),e=fi();if(!t||!e)return;let i=Li?.1:.01;e.x=Math.max(-6,Math.min(6,Math.round((t.x+Dn.dx)/i)*i)),e.z=Math.max(-6,Math.min(6,Math.round((t.z+Dn.dz)/i)*i)),ur.get(e.id).position.set(e.x,Ye(e.x,e.z)+.015,e.z),Ni()});Ie.domElement.addEventListener("pointerup",n=>{if(n.button!==0||Kt)return;let t=Jn&&Math.hypot(n.clientX-Jn.x,n.clientY-Jn.y)>5;if(Dn){Dn.started&&(ct.preset="custom",$e(!1)),Dn=null,xe.enabled=!0,Jn=null;return}if(!t&&Jn){let e=Xc(n);Pi&&e?Qv(e):Je==="simulate"&&e?eb({x:e.x,z:e.z}):Je==="decorate"&&Gc(sm(n))}Jn=null});Ie.domElement.addEventListener("pointercancel",()=>{Dn?.started&&$e(!1),Dn=null,xe.enabled=!0,Jn=null});window.addEventListener("keydown",n=>{if(!(/INPUT|TEXTAREA|SELECT/.test(n.target.tagName)||document.querySelector("dialog[open]"))){if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"){n.preventDefault(),n.shiftKey?Wu():tm();return}if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="y"){n.preventDefault(),Wu();return}if(n.key==="Escape"){Gc(null),document.body.classList.contains("presentation")&&rd(!1),Pi&&lm();return}if(!(Je!=="decorate"||!fi())&&(n.key.toLowerCase()==="r"&&im(),(n.key==="Delete"||n.key==="Backspace")&&(n.preventDefault(),rm()),n.key.startsWith("Arrow"))){n.preventDefault();let t=Li?.1:.02;lr(e=>{n.key==="ArrowLeft"&&(e.x=Math.max(-6,e.x-t)),n.key==="ArrowRight"&&(e.x=Math.min(6,e.x+t)),n.key==="ArrowUp"&&(e.z=Math.max(-6,e.z-t)),n.key==="ArrowDown"&&(e.z=Math.min(6,e.z+t))})}}});function Kr(n){for(;n.children.length;){let t=n.children[0];n.remove(t),t.userData.disposable&&(t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose())}}function ua(n,t,e="#58845e",i=!1){let r=new we().setFromPoints(t.map(a=>new L(...a))),s=i?new Cr({color:e,dashSize:.1,gapSize:.07,depthTest:!1}):new Wn({color:e,depthTest:!1}),o=new wi(r,s);return o.userData.disposable=!0,o.renderOrder=10,i&&o.computeLineDistances(),n.add(o),o}function om(n,t,e,i,r,s=1){let o=document.createElement("canvas");o.width=512,o.height=128;let a=o.getContext("2d");a.fillStyle="#f9fcf5",a.beginPath(),a.roundRect(3,5,506,116,22),a.fill(),a.fillStyle="#294b3d",a.font="500 49px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,65);let l=new Tr(o);l.colorSpace=Ge;let c=new Ao(new As({map:l,depthTest:!1,transparent:!0}));return c.position.set(e,i,r),c.scale.set(1.2*s,.3*s,1),c.renderOrder=20,c.userData.disposable=!0,n.add(c),c}function la(n,t,e){ua(jn,[n,t]);for(let i of[n,t])ua(jn,[[i[0]-.06,i[1],i[2]-.06],[i[0]+.06,i[1],i[2]+.06]]);om(jn,e,(n[0]+t[0])/2,.5,(n[2]+t[2])/2,.85)}function am(){Kr(jn),Kr(js);let n=ct.structure,t=n.bounds,e=n.bathroom;la([t.left,.43,t.front+.88],[t.right,.43,t.front+.88],`${(t.right-t.left).toFixed(2)} m`),la([t.right+.7,.43,t.back],[t.right+.7,.43,t.front],`${(t.front-t.back).toFixed(2)} m`),e.enabled!==!1&&(la([e.x-e.w/2-.36,.43,e.z-e.d/2],[e.x-e.w/2-.36,.43,e.z+e.d/2],`${e.d.toFixed(2)} m`),la([e.x-e.w/2,.43,e.z+e.d/2+.28],[e.x+e.w/2,.43,e.z+e.d/2+.28],`${e.w.toFixed(2)} m`)),n.balcony.enabled!==!1&&la([t.left,.43,t.back-n.balcony.depth-.35],[t.right,.43,t.back-n.balcony.depth-.35],`${(t.right-t.left).toFixed(2)} m balcony`);for(let i of n.openings.filter(r=>r.kind==="door")){let r=ce(n,i.side),s=r.axis==="x"?i.at:r.fixed,o=r.axis==="x"?r.fixed:i.at,a=r.axis==="x"?i.w:.58,l=r.axis==="x"?.58:i.w;ua(js,[[s-a/2,_t+.019,o-l/2],[s+a/2,_t+.019,o-l/2],[s+a/2,_t+.019,o+l/2],[s-a/2,_t+.019,o+l/2],[s-a/2,_t+.019,o-l/2]],"#bb9561",!0)}}var Ys=[];function lm(){Kt&&ts(),Pi=!Pi,j("#measureBtn").classList.toggle("active",Pi),j("#measureReadout").hidden=!Pi,Ys=[],Kr(Zs),j("#measureReadout").textContent="Click two points on the floor.",Ie.domElement.style.cursor=Pi?"crosshair":""}function Qv(n){Ys.length===2&&(Ys=[],Kr(Zs)),n.y=_t+.035,Ys.push(n);let t=new ie(new Vo(.035,12,8),new $i({color:"#285747",depthTest:!1}));if(t.position.copy(n),t.userData.disposable=!0,Zs.add(t),Ys.length===2){let[e,i]=Ys,r=e.distanceTo(i);ua(Zs,[e.toArray(),i.toArray()],"#285747"),om(Zs,r.toFixed(2)+" m",(e.x+i.x)/2,.52,(e.z+i.z)/2),j("#measureReadout").textContent=`${r.toFixed(2)} m floor distance \xB7 click to start again`}}am();function Ln(n,t){j("#personStatus").textContent=n,j("#personDetail").textContent=t||"Click the floor to walk somewhere."}function Qn(n=!0){let t=Zt.action;t?.item&&Zt.phase!=="walking"&&Zt.phase!=="idle"&&he.root.position.set(t.x,Ye(t.x,t.z)+.015,t.z),Zt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},Kr(cr),he.reset();let e=fa();he.root.position.y=Ye(e.x,e.z)+.015,(n||Je==="simulate")&&(jr(),Ln("Ready to explore"))}function ed(){Qn(!1),he.root.position.set(0,_t+.015,ct.structure.room?.kind==="video-bedroom"?.45:1.3),he.root.rotation.y=0,jr(),Ln("Ready to explore")}function jr(){let n=fa(),t=Uu(ct.items,Jr),e=Fu(Jr),i=ct.structure,r=i.bounds,s=!!i.room,o=c=>c.x>r.left+e&&c.x<r.right-e&&c.z>r.back+e&&c.z<r.front-e&&Ye(c.x,c.z)>=_t-.03;if(!ra(n.x,n.z,t,e)&&(!s||o(n)))return;let a=s?[{x:0,z:.45},{x:r.left+.9,z:r.front-.6}]:[{x:0,z:1.3},{x:0,z:2},{x:0,z:3.5}];for(let c=s?r.back+.4:-2;c<(s?r.front-.3:2);c+=.2)for(let h=s?r.left+.4:-2;h<(s?r.right-.3:2);h+=.2)a.push({x:h,z:c});let l=a.find(c=>(!s||o(c))&&!ra(c.x,c.z,t,e));l&&he.root.position.set(l.x,Ye(l.x,l.z)+.015,l.z)}function tb(n){if(Kr(cr),cr.visible=j("#pathToggle").checked,!n?.length)return;ua(cr,n.map(i=>[i.x,Ye(i.x,i.z)+.035,i.z]),"#397b5e",!0);let t=n[n.length-1],e=new ie(new Bo(.12,.16,32),new $i({color:"#4d8d68",side:Se,depthTest:!1}));e.rotation.x=-Math.PI/2,e.position.set(t.x,Ye(t.x,t.z)+.04,t.z),e.userData.disposable=!0,cr.add(e)}function cm(n,t=null,e=!1){let i=Zt.routine,r=Zt.routineIndex;he.reset(),Zt={path:n,index:0,action:t,phase:"walking",elapsed:0,transition:null,routine:e&&i,routineIndex:r,wait:0},tb(n),Ln("Walking\u2026",t?.label||"Finding a little breathing room.")}function eb(n){Qn(!1),jr();let t=Dc(fa(),n,ct.items,Jr);if(!t){ae("No walkable route there. Try a clear floor area or move the blocking furniture."),Ln("That spot is blocked","Try another spot, or make more room.");return}cm(t)}function nd(n,t=!1){if(n==="tour"){Qn(!1),Zt.routine=!0,Zt.routineIndex=0,nd("desk",!0);return}if(t?(he.reset(),jr()):Qn(!1),n==="bed"){let s=ct.items.find(o=>Re[o.type].kind==="sofabed");s&&!s.open&&!ct.items.some(o=>["bed","loft"].includes(Re[o.type].kind))&&(pn(),s.open=!0,$u(),qu(),Vc())}let e=Nu(n,ct.items);if(!e.length){ae(`Add ${n==="bed"?"a bed":"a desk"} first.`),Ln("Destination not available"),Zt.routine=!1;return}let i=null,r=null;for(let s of e){let o=Dc(fa(),s,ct.items,Jr);o&&(!r||o.length<r.length)&&(i=s,r=o)}if(!r){ae("Route blocked. Move furniture, resize it, or check the door clearances."),Ln("Cannot reach "+n,"The walking route is blocked."),Zt.routine=!1;return}cm(r,i,t)}function nb(){Zt.phase="rest",Zt.elapsed=0,Zt.path=[],Kr(cr);let n=Zt.action;if(!n){Ln("Arrived");return}if(n.pose==="sleep"&&n.item){let t=ct.items.find(s=>s.id===n.item.id);if(!t){Qn();return}let e=Re[t.type].kind,i=Zn(t,0,e==="sofabed"?.65*t.d/Re[t.type].d:0),r=e==="loft"?t.h*1.88/2.25:e==="sofabed"?t.h*.45/.84:t.h*.55/Re[t.type].h;Zt.phase="settle",Zt.transition={from:he.root.position.clone(),to:new L(i.x,Ye(i.x,i.z)+r+.1,i.z),yaw:t.rot,pose:"sleep",loft:e==="loft",duration:e==="loft"?2.8:1.1},Ln(e==="loft"?"Climbing up\u2026":"Getting comfortable\u2026","A simplified pose transition; not an ergonomic test.")}else if(n.pose==="sit"&&n.item){let t=n.item;Zt.phase="settle",Zt.transition={from:he.root.position.clone(),to:new L(t.x,Ye(t.x,t.z)+.015,t.z),yaw:t.rot,pose:"sit",duration:.85},Ln("Taking a seat\u2026")}else Ln(n.label),Zt.wait=0}function ib(n,t){let e=he.root;if(e.scale.setScalar(Jr/1.7),Zt.phase==="walking"){let o=n*.92;for(;o>0&&Zt.index<Zt.path.length;){let a=Zt.path[Zt.index],l=a.x-e.position.x,c=a.z-e.position.z,h=Math.hypot(l,c);if(h<.001){Zt.index++;continue}e.rotation.y=Math.atan2(l,c);let u=Math.min(o,h);e.position.x+=l/h*u,e.position.z+=c/h*u,o-=u,u>=h-1e-4&&Zt.index++}e.position.y=Ye(e.position.x,e.position.z)+.015,he.legs[0].rotation.x=Math.sin(t*9)*.32,he.legs[1].rotation.x=-Math.sin(t*9)*.32,he.arms[0].rotation.x=-Math.sin(t*9)*.31,he.arms[1].rotation.x=Math.sin(t*9)*.31,he.body.position.y=Math.abs(Math.sin(t*9))*.018,Zt.index>=Zt.path.length&&(he.reset(),nb())}else if(Zt.phase==="settle"){let o=Zt.transition;Zt.elapsed+=n;let a=Math.min(1,Zt.elapsed/o.duration),l=a*a*(3-2*a);if(e.rotation.y=o.yaw,e.position.lerpVectors(o.from,o.to,l),o.pose==="sleep"){let c=o.loft?Math.max(0,(a-.65)/.35):l;he.body.rotation.x=-Math.PI/2*c,he.body.position.z=.72*c,he.body.position.y=0}else{he.body.position.y=-.32*l;for(let c of he.legs)c.rotation.x=-Math.PI/2*l;for(let c of he.arms)c.rotation.x=-.6*l}a===1&&(Zt.phase="rest",Zt.wait=0,Ln(o.pose==="sleep"?"Resting on the bed":"Working at the desk",o.pose==="sleep"?"Stop / stand up to get moving again.":"Taking a seat, six-block style."))}else if(Zt.phase==="rest"&&Zt.routine&&(Zt.wait+=n,Zt.wait>3)){let o=ct.structure.room?["desk","bed","entrance"]:["desk","bathroom","balcony","bed","entrance"];Zt.routineIndex=(Zt.routineIndex+1)%o.length;let a=Zt.action;a&&(he.reset(),e.position.set(a.x,Ye(a.x,a.z)+.015,a.z)),nd(o[Zt.routineIndex],!0)}let i=e.position.x,r=e.position.z,s=Math.min(1,n*5);for(let o of ct.structure.openings.filter(a=>a.kind==="door")){let a=fn.doorLeaves[o.id];if(!a)continue;let l=ce(ct.structure,o.side),c=i-(l.axis==="x"?o.at:l.fixed),h=r-(l.axis==="x"?l.fixed:o.at),u=Math.hypot(c,h)<1.2;o.id==="front-door"&&o.w>=1.3?a.position.x=ks.lerp(a.position.x,u?o.w/2-.06:0,s):a.rotation.y=ks.lerp(a.rotation.y,u?-1.4:0,s)}if(Yp&&Je==="simulate"&&Ze===Zr){let a=new L(i,1,r).sub(xe.target).multiplyScalar(n*2.1);xe.target.add(a),Ze.position.add(a)}}function rb(){jr();let n=fa(),t=["bed","desk","bathroom","balcony","entrance"].map(e=>{let i=Nu(e,ct.items),r=i.some(s=>Dc(n,s,ct.items,Jr));return{name:e,pass:r,exists:!!i.length}});return j("#pathResults").innerHTML=t.map(e=>`<div><span>${e.name[0].toUpperCase()+e.name.slice(1)}</span><b class="${e.pass?"pass":"fail"}">${e.pass?"\u2713 Reachable":e.exists?"Blocked":"Not placed"}</b></div>`).join(""),ae("Access checked from Blocky\u2019s current position."),t}function hm(){bn(ct);let n=new Blob([JSON.stringify(ct,null,2)],{type:"application/json"});um(n,"House-Studio-Layout.json"),ae("Layout exported. Keep this file as your portable backup.")}function um(n,t){let e=URL.createObjectURL(n),i=document.createElement("a");i.href=e,i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}function dm(){let n=$p("house-studio-layouts-v1",[]);return Array.isArray(n)?n:[]}function id(){let n=dm();j("#savedLayouts").innerHTML=n.length?n.map((t,e)=>`<div class="saved-layout"><button data-load="${e}">${Yr(t.name)}<small>${t.items?.length||0} objects</small></button><button class="icon-btn" data-remove-save="${e}" title="Delete saved copy" aria-label="Delete ${Yr(t.name)}">${Ii("trash")}</button></div>`).join(""):'<div class="empty-copy">No named copies yet.</div>',Le("[data-load]").forEach(t=>t.onclick=()=>{try{let e=wn(n[Number(t.dataset.load)]);e.structure||(e.structure=$r()),pn(),ct=e,Kt=!1,Ue=null,$e(),j("#layoutsDialog").close(),ae("Saved layout loaded.")}catch(e){ae(e.message)}}),Le("[data-remove-save]").forEach(t=>t.onclick=()=>{confirm("Remove this named copy? Your current layout stays unchanged.")&&(n.splice(Number(t.dataset.removeSave),1),Xu("house-studio-layouts-v1",n),id())})}function rd(n){document.body.classList.toggle("presentation",n),j("#exitPresent").hidden=!n,Ue=null,Ni(),j("#sidebar").classList.remove("mobile-open"),Hc()}function sb(){Ie.render(ze,Ze),Ie.domElement.toBlob(n=>{n&&um(n,"House-Studio-View.png")}),ae("Scene image saved.")}Le("[data-mode]").forEach(n=>n.onclick=()=>Zu(n.dataset.mode));Le("[data-light]").forEach(n=>n.onclick=()=>Ku(n.dataset.light));Le("[data-view]").forEach(n=>n.onclick=()=>Ui(n.dataset.view));Le("[data-action]").forEach(n=>n.onclick=()=>nd(n.dataset.action));j("#roofBtn").onclick=()=>{dn=!dn,dn&&Te==="hidden"&&(Te="full",j("#wallSelect").value=Te),Fn()};j("#wallSelect").onchange=n=>{Te=n.target.value,Fn()};j("#fitBtn").onclick=()=>Ui("iso");j("#lightsToggle").onchange=ju;j("#gardenToggle").onchange=n=>fn.garden.visible=n.target.checked;j("#measureBtn").onclick=lm;j("#dimensionBtn").onclick=()=>{jn.visible=!jn.visible,j("#dimensionBtn").classList.toggle("active",jn.visible)};j("#undoBtn").onclick=tm;j("#redoBtn").onclick=Wu;j("#snapToggle").onchange=n=>{Li=n.target.checked,dr.visible=Je==="decorate"&&Li,Qs()};j("#searchInput").oninput=Qu;j("#heightInput").oninput=n=>{Jr=Number(n.target.value)/100,j("#heightLabel").textContent=n.target.value+" cm",Qn()};j("#followToggle").onchange=n=>Yp=n.target.checked;j("#pathToggle").onchange=n=>cr.visible=n.target.checked;j("#stopPerson").onclick=()=>{let n=Zt.action;n?.item&&Zt.phase!=="walking"&&he.root.position.set(n.x,Ye(n.x,n.z)+.015,n.z),Qn()};j("#resetPerson").onclick=ed;j("#checkPaths").onclick=rb;j("#cameraTourBtn").onclick=()=>{Ze===Di&&Ui("iso"),ca=!ca,j("#cameraTourBtn").innerHTML=Ii(ca?"pause":"play")};j("#screenshotBtn").onclick=sb;j("#helpBtn").onclick=()=>j("#helpDialog").showModal();j("#referenceBtn").onclick=()=>{j("#helpDialog details").open=!ct.structure.room,j("#helpDialog").showModal()};Le("[data-close]").forEach(n=>n.onclick=()=>n.closest("dialog").close());Le("dialog").forEach(n=>n.addEventListener("click",t=>{if(t.target===n){let e=n.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&n.close()}}));j("#saveBtn").onclick=()=>{id(),j("#layoutsDialog").showModal()};j("#saveLayoutForm").onsubmit=n=>{n.preventDefault();let t=j("#layoutName").value.trim();if(!t)return;let e=dm();if(e.length>=25){ae("Export or remove a saved copy before adding more (limit 25).");return}bn(ct);let i=JSON.parse(JSON.stringify({...ct,name:t}));e.push(i),Xu("house-studio-layouts-v1",e)?(id(),ae("Named copy saved.")):ae("Browser storage is full or unavailable. Export JSON instead.")};j("#exportBtn").onclick=hm;j("#downloadLayoutBtn").onclick=hm;j("#importBtn").onclick=()=>j("#importFile").click();j("#importFile").onchange=async n=>{let t=n.target.files[0];if(n.target.value="",!!t){if(t.size>2e6){ae("Layout file is too large (maximum 2 MB).");return}try{let e=wn(JSON.parse(await t.text()));pn(),ct=e,Kt=!1,Ue=null,$e(),j("#layoutsDialog").close(),ae("Layout imported.")}catch(e){ae("Import stopped: "+e.message)}}};j("#presentBtn").onclick=()=>rd(!0);j("#exitPresent").onclick=()=>rd(!1);j("#mobilePanelBtn").onclick=()=>j("#sidebar").classList.toggle("mobile-open");function fm(n,t){let e={front:0,back:Math.PI,left:-Math.PI/2,right:Math.PI/2},i=(e[t.side]||0)-(e[n.side]||0),r=Math.abs(Math.sin(i))>.5;for(let s of ct.items)if(s.x>=n.x-n.w/2&&s.x<=n.x+n.w/2&&s.z>=n.z-n.d/2&&s.z<=n.z+n.d/2){let o=Zn({x:0,z:0,rot:i},s.x-n.x,s.z-n.z);s.x=t.x+o.x*t.w/(r?n.d:n.w),s.z=t.z+o.z*t.d/(r?n.w:n.d),s.rot=((s.rot+i)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)}}function pm(n,t){let e=n.bathroom,i=t.bathroom;if(e.side===i.side)for(let r of t.openings){if(!r.side.startsWith("bath-"))continue;let s=n.openings.find(a=>a.id===r.id&&a.side===r.side);if(!s)continue;let o=ce(t,r.side);r.at=o.axis==="x"?i.x+(s.at-e.x)*i.w/e.w:i.z+(s.at-e.z)*i.d/e.d}}function sd(n){let t=ct.structure,e=JSON.parse(JSON.stringify(t));try{n(e),ia(e),JSON.stringify(t.bathroom)!==JSON.stringify(e.bathroom)&&pm(t,e);let i=wn({...ct,structure:e}).structure;return pn(),ct.structure=i,JSON.stringify(t.bathroom)!==JSON.stringify(i.bathroom)&&fm(t.bathroom,i.bathroom),ct.preset="custom",$e(),!0}catch(i){return ae(i.message),$c(),!1}}function ob(n,t,e){let i=JSON.parse(JSON.stringify(ct.structure)),r=ct.structure,s=Li?.1:.01,o=f=>Math.round(Math.max(-5.5,Math.min(5.5,f))/s)*s,a=r.openings.find(f=>f.id===n);if(a){let f=ce(r,a.side),g=f.start+a.w/2+.1,m=f.end-a.w/2-.1;a.at=Math.max(g,Math.min(m,o(f.axis==="x"?t:e)));return}let l=r.partitions.find(f=>f.id===n);if(l){l.x=o(t),l.z=o(e);return}let c=r.fences?.find(f=>f.id===n);if(c){let f=t-(c.x1+c.x2)/2,g=e-(c.z1+c.z2)/2;c.x1+=f,c.x2+=f,c.z1+=g,c.z2+=g;return}let h=Fe.find(f=>n===f+"-wall");if(!h)return;let u=r.bounds,d=o(h==="left"||h==="right"?t:e);u[h]=h==="left"?Math.min(d,u.right-2):h==="right"?Math.max(d,u.left+2):h==="back"?Math.min(d,u.front-2):Math.max(d,u.back+2),ia(r),pm(i,r),fm(i.bathroom,r.bathroom)}function $c(){Fi.render()}function ab(n,t=!1){try{if(t)throw new Error("Wall move cancelled.");ct=wn(ct)}catch(e){ct=JSON.parse(n),hr.pop(),ae(e.message)}$e()}var Fi=zp({$:j,$$:Le,escapeHTML:Yr,scene:ze,renderer:Ie,controls:xe,ray:td,raycaster:Wc,pointAt:Xc,cloneStructure:()=>ct.structure.room?.kind==="custom-room"?Mc(ct.structure.bounds.right-ct.structure.bounds.left,ct.structure.bounds.front-ct.structure.bounds.back,ct.structure.room.height):ct.structure.room?Du("video-room").structure:$r(),toast:ae,view:Ui,edit:sd,checkpoint:pn,commit:$e,finishDrag:ab,rebuildStructure:Qp,moveStructure:ob,getState:()=>ct,getHouse:()=>fn,selectConnection:n=>Qr.selectConnection(n),getMode:()=>Kt?"overview":Je,getMeasure:()=>Pi,getSnap:()=>Li});Le("[data-keep-wall]").forEach(n=>n.onclick=()=>{Te="cutaway",sd(t=>{for(let e of $n)t.wallVisibility[e]=e===n.dataset.keepWall||e==="bath-"+n.dataset.keepWall?"full":"hidden";for(let e of t.partitions)t.wallVisibility[e.id]="low"})});if(document.modelContext?.registerTool){let n=new AbortController;window.addEventListener("pagehide",()=>n.abort(),{once:!0});for(let t of[{name:"read_house_layout",description:"Read the current house layout and furniture dimensions in metres.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>JSON.parse(JSON.stringify(ct))},{name:"load_house_preset",description:"Replace furniture with a starting preset, keeping the change available in undo.",inputSchema:{type:"object",properties:{preset:{type:"string",enum:Wr.map(e=>e.id)}},required:["preset"],additionalProperties:!1},execute:e=>{if(!e||!Wr.some(i=>i.id===e.preset))throw new Error("Unknown preset.");return em(e.preset),{name:ct.name,objects:ct.items.length}}}])try{Promise.resolve(document.modelContext.registerTool(t,{signal:n.signal})).catch(()=>{})}catch{}}function mm(){j("#newRoomDialog").showModal()}j("#newRoomBtn").onclick=mm;function od(){let n=Number(j("#newRoomWidth").value),t=Number(j("#newRoomDepth").value);j("#sizeWidthPreview").textContent=(n||0).toFixed(1)+" m",j("#sizeDepthPreview").textContent=(t||0).toFixed(1)+" m",j(".room-size-diagram > div").style.aspectRatio=`${Math.max(2,n)}/${Math.max(2,t)}`,Le("[data-room-size]").forEach(e=>e.classList.toggle("active",e.dataset.roomSize===`${n},${t}`))}Le("[data-room-size]").forEach(n=>n.onclick=()=>{let[t,e]=n.dataset.roomSize.split(",");j("#newRoomWidth").value=t,j("#newRoomDepth").value=e,od()});j("#newRoomWidth").oninput=od;j("#newRoomDepth").oninput=od;j("#newRoomForm").onsubmit=n=>{n.preventDefault();try{let t=Number(j("#newRoomWidth").value),e=Number(j("#newRoomDepth").value),i=Number(j("#newRoomHeight").value);if(![t,e,i].every(Number.isFinite)||t<2||t>10||e<2||e>10||i<2||i>3)throw new Error("Use a width and length from 2 to 10 m, and a ceiling from 2 to 3 m.");let r=wn({...Tu(t,e,i),name:j("#newRoomName").value.trim()||"My new room"});pn(),ct=r,Kt=!1,Ue=null,$e(),j("#newRoomDialog").close(),Zu("build"),Fi.select("floor"),Ui("iso"),ae("Your empty room is ready. Add a door or window, then choose Decorate.")}catch(t){ae(t.message)}};j("#manageFloorsBtn").onclick=j("#goToFloors").onclick=()=>{Zu("build"),j("#floorManager").scrollIntoView({block:"start",behavior:"smooth"})};j("#editCurrentFloor").onclick=ts;Qr=Bp({$:j,$$:Le,escapeHTML:Yr,getState:()=>ct,isOverview:()=>Kt,editProject:Hv,switchFloor:Gv,currentFloor:ts,toggleOverview:Wv,toast:ae});$u();qv();Qr.render();Fn();Ku("day");Vc();Hc();ct.structure.room&&(Zr.position.set(1.4,5.8,7.9),xe.target.set(0,.85,-.12));xe.update();qu();var Xp=new Go;function gm(){requestAnimationFrame(gm);let n=Math.min(Xp.getDelta(),.05),t=Xp.elapsedTime;if(di){di.t+=n;let e=Math.min(1,di.t/.65),i=e*e*(3-2*e);Ze.position.lerpVectors(di.from,di.to,i),xe.target.lerpVectors(di.targetFrom,di.targetTo,i),e===1&&(di=null)}xe.autoRotate=ca,xe.autoRotateSpeed=.6,xe.update(n),Je==="simulate"&&ib(n,t),Ie.render(ze,Ze)}gm();j("#loading").hidden=!0;qp&&mm();window.addEventListener("error",n=>{console.error(n.error),ae("Something went wrong. Export your layout, then reload the page.")});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
