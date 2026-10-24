(()=>{var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},id=0,eh=1,sd=2;var nh=1,Qa=2,$n=3,hi=0,je=1,We=2,di=0,Qi=1,ih=2,sh=3,rh=4,rd=5,Ci=100,od=101,ad=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,va=204,ba=205,pd=206,md=207,gd=208,_d=209,xd=210,yd=211,vd=212,bd=213,Md=214,tl=0,el=1,nl=2,ts=3,il=4,sl=5,rl=6,ol=7,oh=0,Sd=1,wd=2,fi=0,Td=1,Ed=2,Ad=3,yo=4,Cd=5,Rd=6,Id=7;var ah=300,hs=301,us=302,al=303,ll=304,vo=306,Ws=1e3,Ai=1001,Ma=1002,mn=1003,Pd=1004;var bo=1005;var In=1006,cl=1007;var Fi=1008;var Nn=1009,lh=1010,ch=1011,ar=1012,hl=1013,Oi=1014,Zn=1015,lr=1016,ul=1017,dl=1018,cr=1020,hh=35902,uh=35899,dh=1021,fh=1022,xn=1023,Xs=1026,hr=1027,ph=1028,fl=1029,mh=1030,pl=1031;var ml=1033,Mo=33776,So=33777,wo=33778,To=33779,gl=35840,_l=35841,xl=35842,yl=35843,vl=36196,bl=37492,Ml=37496,Sl=37808,wl=37809,Tl=37810,El=37811,Al=37812,Cl=37813,Rl=37814,Il=37815,Pl=37816,Ll=37817,Dl=37818,Ul=37819,Nl=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,kl=36283,Vl=36284,Hl=36285,Gl=36286;var Br=2300,Sa=2301,ya=2302,Gc=2400,Wc=2401,Xc=2402;var Ld=3200,Dd=3201;var gh=0,Ud=1,pi="",Oe="srgb",es="srgb-linear",zr="linear",ce="srgb";var Ki=7680;var qc=519,Nd=512,Fd=513,Od=514,_h=515,Bd=516,zd=517,kd=518,Vd=519,wa=35044;var xh="300 es",Rn=2e3,kr=2001;var Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=1234567,Ur=Math.PI/180,qs=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function yh(i,t){return(i%t+t)%t}function Mp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sp(i,t,e){return i!==t?(e-i)/(t-i):0}function Nr(i,t,e){return(1-e)*i+e*t}function wp(i,t,e,n){return Nr(i,t,1-Math.exp(-e*n))}function Tp(i,t=1){return t-Math.abs(yh(i,t*2)-t)}function Ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rp(i,t){return i+Math.random()*(t-i)}function Ip(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(wu=i);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lp(i){return i*Ur}function Dp(i){return i*qs}function Up(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Op(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ur={DEG2RAD:Ur,RAD2DEG:qs,generateUUID:Gn,clamp:jt,euclideanModulo:yh,mapLinear:Mp,inverseLerp:Sp,lerp:Nr,damp:wp,pingpong:Tp,smoothstep:Ep,smootherstep:Ap,randInt:Cp,randFloat:Rp,randFloatSpread:Ip,seededRandom:Pp,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Up,ceilPowerOfTwo:Np,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Op,normalize:ae,denormalize:Cn},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=1-a,p=c*f+l*d+h*m+u*_,S=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let R=Math.sqrt(w),A=Math.atan2(R,p*S);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}let x=a*S;if(c=c*g+f*x,l=l*g+d*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mc=new C,Tu=new gn,$t=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],S=s[1],w=s[4],x=s[7],R=s[2],A=s[5],D=s[8];return r[0]=o*_+a*S+c*R,r[3]=o*g+a*w+c*A,r[6]=o*p+a*x+c*D,r[1]=l*_+h*S+u*R,r[4]=l*g+h*w+u*A,r[7]=l*p+h*x+u*D,r[2]=f*_+d*S+m*R,r[5]=f*g+d*w+m*A,r[8]=f*p+d*x+m*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gc.makeScale(t,e)),this}rotate(t){return this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gc=new $t;function vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){let i=Vr("canvas");return i.style.display="block",i}var Eu={};function Ys(i){i in Eu||(Eu[i]=!0,console.warn(i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Au=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bp(){let i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:t,whitePoint:n,transfer:zr,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var ee=Bp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Vr("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zp=0,$s=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_c(s[o].image)):r.push(_c(s[o]))}else r=_c(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,xc=new C,nn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=In,o=Fi,a=xn,c=Nn,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Gn(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ah;nn.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,x=(d+1)/2,R=(p+1)/2,A=(h+f)/4,D=(u+_)/4,U=(m+g)/4;return w>x&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=D/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=D/r,s=U/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new nn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),$o.subVectors(this.max,wr),Cs.subVectors(t.a,wr),Rs.subVectors(t.b,wr),Is.subVectors(t.c,wr),bi.subVectors(Rs,Cs),Mi.subVectors(Is,Rs),Yi.subVectors(Cs,Is);let e=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-Yi.z,Yi.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,Yi.z,0,-Yi.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-Yi.y,Yi.x,0];return!yc(e,Cs,Rs,Is,$o)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,Cs,Rs,Is,$o))?!1:(Zo.crossVectors(bi,Mi),e=[Zo.x,Zo.y,Zo.z],yc(e,Cs,Rs,Is,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,Yo=new Pn,Cs=new C,Rs=new C,Is=new C,bi=new C,Mi=new C,Yi=new C,wr=new C,$o=new C,Zo=new C,$i=new C;function yc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=t.dot($i),l=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vp=new Pn,Tr=new C,vc=new C,ns=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(vc)),this.expandByPoint(Tr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},si=new C,bc=new C,Jo=new C,Si=new C,Mc=new C,Ko=new C,Sc=new C,Ri=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bc.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(bc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=Si.dot(this.direction),c=-Si.dot(Jo),l=Si.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bc).addScaledVector(Jo,f),d}intersectSphere(t,e){si.subVectors(t.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,s,r){Mc.subVectors(e,t),Ko.subVectors(n,t),Sc.crossVectors(Mc,Ko);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let c=a*this.direction.dot(Ko.crossVectors(Si,Ko));if(c<0)return null;let l=a*this.direction.dot(Mc.cross(Si));if(l<0||c+l>o)return null;let h=-a*Si.dot(Sc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Gp)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),wi.crossVectors(n,an),wi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),wi.crossVectors(n,an)),wi.normalize(),jo.crossVectors(an,wi),s[0]=wi.x,s[4]=jo.x,s[8]=an.x,s[1]=wi.y,s[5]=jo.y,s[9]=an.y,s[2]=wi.z,s[6]=jo.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],w=n[7],x=n[11],R=n[15],A=s[0],D=s[4],U=s[8],b=s[12],v=s[1],L=s[5],z=s[9],E=s[13],N=s[2],B=s[6],F=s[10],Z=s[14],k=s[3],I=s[7],W=s[11],it=s[15];return r[0]=o*A+a*v+c*N+l*k,r[4]=o*D+a*L+c*B+l*I,r[8]=o*U+a*z+c*F+l*W,r[12]=o*b+a*E+c*Z+l*it,r[1]=h*A+u*v+f*N+d*k,r[5]=h*D+u*L+f*B+d*I,r[9]=h*U+u*z+f*F+d*W,r[13]=h*b+u*E+f*Z+d*it,r[2]=m*A+_*v+g*N+p*k,r[6]=m*D+_*L+g*B+p*I,r[10]=m*U+_*z+g*F+p*W,r[14]=m*b+_*E+g*Z+p*it,r[3]=S*A+w*v+x*N+R*k,r[7]=S*D+w*L+x*B+R*I,r[11]=S*U+w*z+x*F+R*W,r[15]=S*b+w*E+x*Z+R*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=u*g*l-_*f*l+_*c*d-a*g*d-u*c*p+a*f*p,w=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,x=h*_*l-m*u*l+m*a*d-o*_*d-h*a*p+o*u*p,R=m*u*c-h*_*c-m*a*f+o*_*f+h*a*g-o*u*g,A=e*S+n*w+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return t[0]=S*D,t[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*D,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*D,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*D,t[4]=w*D,t[5]=(h*g*r-m*f*r+m*s*d-e*g*d-h*s*p+e*f*p)*D,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*D,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*D,t[8]=x*D,t[9]=(m*u*r-h*_*r-m*n*d+e*_*d+h*n*p-e*u*p)*D,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*D,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*D,t[12]=R*D,t[13]=(h*_*s-m*u*s+m*n*f-e*_*f-h*n*g+e*u*g)*D,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*D,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,S=c*l,w=c*h,x=c*u,R=n.x,A=n.y,D=n.z;return s[0]=(1-(_+p))*R,s[1]=(d+x)*R,s[2]=(m-w)*R,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(f+p))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(m+w)*D,s[9]=(g-S)*D,s[10]=(1-(f+_))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Rn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===kr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Rn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===kr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new C,En=new me,Hp=new C(0,0,0),Gp=new C(1,1,1),wi=new C,jo=new C,an=new C,Ru=new me,Iu=new gn,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wp=0,Pu=new C,Ls=new gn,ri=new me,Qo=new C,Er=new C,Xp=new C,qp=new gn,Lu=new C(1,0,0),Du=new C(0,1,0),Uu=new C(0,0,1),Nu={type:"added"},Yp={type:"removed"},Ds={type:"childadded",child:null},wc={type:"childremoved",child:null},ze=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Ln,n=new gn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new $t}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Pu.copy(t).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qo.copy(t):Qo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Er,Qo,this.up):ri.lookAt(Qo,Er,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ri),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nu),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yp),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nu),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new C(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new C,oi=new C,Tc=new C,ai=new C,Us=new C,Ns=new C,Fu=new C,Ec=new C,Ac=new C,Cc=new C,Rc=new le,Ic=new le,Pc=new le,li=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),oi.subVectors(n,e),Tc.subVectors(t,e);let o=An.dot(An),a=An.dot(oi),c=An.dot(Tc),l=oi.dot(oi),h=oi.dot(Tc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Rc.setScalar(0),Ic.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Ic.fromBufferAttribute(t,n),Pc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Ic,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),oi.subVectors(t,e),An.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),An.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,n),Ns.subVectors(r,n),Ec.subVectors(t,n);let c=Us.dot(Ec),l=Ns.dot(Ec);if(c<=0&&l<=0)return e.copy(n);Ac.subVectors(t,s);let h=Us.dot(Ac),u=Ns.dot(Ac);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Us,o);Cc.subVectors(t,r);let d=Us.dot(Cc),m=Ns.dot(Cc);if(m>=0&&d<=m)return e.copy(r);let _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ns,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Fu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Fu,a);let p=1/(g+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=yh(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Lc(o,r,t+1/3),this.g=Lc(o,r,t),this.b=Lc(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ee.workingToColorSpace(Ge.copy(this),t),Math.round(jt(Ge.r*255,0,255))*65536+Math.round(jt(Ge.g*255,0,255))*256+Math.round(jt(Ge.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Oe){ee.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(ta);let n=Nr(Ti.h,ta.h,e),s=Nr(Ti.s,ta.s,e),r=Nr(Ti.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Yt;Yt.NAMES=Wd;var $p=0,qn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Qi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=ba,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ii=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new C,ea=new ot,Zp=0,Ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}};var Gr=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wr=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jp=0,pn=new me,Dc=new ze,Fs=new C,ln=new Pn,Ar=new Pn,Fe=new C,Te=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Wr:Gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(ln.min,Ar.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,Ar.max),ln.expandByPoint(Fe)):(ln.expandByPoint(Ar.min),ln.expandByPoint(Ar.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),Fe.add(Fs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new C,c[U]=new C;let l=new C,h=new C,u=new C,f=new ot,d=new ot,m=new ot,_=new C,g=new C;function p(U,b,v){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[U].add(_),a[b].add(_),a[v].add(_),c[U].add(g),c[b].add(g),c[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,b=S.length;U<b;++U){let v=S[U],L=v.start,z=v.count;for(let E=L,N=L+z;E<N;E+=3)p(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let w=new C,x=new C,R=new C,A=new C;function D(U){R.fromBufferAttribute(s,U),A.copy(R);let b=a[U];w.copy(b),w.sub(R.multiplyScalar(R.dot(b))).normalize(),x.crossVectors(A,b);let L=x.dot(c[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,L)}for(let U=0,b=S.length;U<b;++U){let v=S[U],L=v.start,z=v.count;for(let E=L,N=L+z;E<N;E+=3)D(t.getX(E+0)),D(t.getX(E+1)),D(t.getX(E+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new me,Zi=new Ri,na=new ns,Bu=new C,ia=new C,sa=new C,ra=new C,Uc=new C,oa=new C,zu=new C,aa=new C,ve=class extends ze{constructor(t=new Te,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Uc.fromBufferAttribute(u,t),o?oa.addScaledVector(Uc,h):oa.addScaledVector(Uc.sub(e),h))}e.add(oa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(na.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(na,Bu)===null||Zi.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,R=w;x<R;x+=3){let A=a.getX(x),D=a.getX(x+1),U=a.getX(x+2);s=la(this,p,t,n,l,h,u,A,D,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let S=a.getX(g),w=a.getX(g+1),x=a.getX(g+2);s=la(this,o,t,n,l,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,R=w;x<R;x+=3){let A=x,D=x+1,U=x+2;s=la(this,p,t,n,l,h,u,A,D,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let S=g,w=g+1,x=g+2;s=la(this,o,t,n,l,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Kp(i,t,e,n,s,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(aa);return l<e.near||l>e.far?null:{distance:l,point:aa.clone(),object:i}}function la(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ia),i.getVertexPosition(c,sa),i.getVertexPosition(l,ra);let h=Kp(i,t,e,n,ia,sa,ra,zu);if(h){let u=new C;li.getBarycoord(zu,ia,sa,ra,u),s&&(h.uv=li.getInterpolatedAttribute(s,a,c,l,u,new ot)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,c,l,u,new ot)),o&&(h.normal=li.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new C,materialIndex:0};li.getNormal(ia,sa,ra,f.normal),h.face=f,h.barycoord=u}return h}var Yn=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function m(_,g,p,S,w,x,R,A,D,U,b){let v=x/D,L=R/U,z=x/2,E=R/2,N=A/2,B=D+1,F=U+1,Z=0,k=0,I=new C;for(let W=0;W<F;W++){let it=W*L-E;for(let q=0;q<B;q++){let lt=q*v-z;I[_]=lt*S,I[g]=it*w,I[p]=N,l.push(I.x,I.y,I.z),I[_]=0,I[g]=0,I[p]=A>0?1:-1,h.push(I.x,I.y,I.z),u.push(q/D),u.push(1-W/U),Z+=1}}for(let W=0;W<U;W++)for(let it=0;it<D;it++){let q=f+it+B*W,lt=f+it+B*(W+1),Nt=f+(it+1)+B*(W+1),bt=f+(it+1)+B*W;c.push(q,lt,bt),c.push(lt,Nt,bt),k+=6}a.addGroup(d,k,b),d+=k,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=ds(i[e]);for(let s in n)t[s]=n[s]}return t}function jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Xd={clone:ds,merge:Xe},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dn=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new C,ku=new ot,Vu=new ot,Be=class extends Xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Vu),e.subVectors(Vu,ku)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Bs=1,Ca=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Os,Bs,t,e);s.layers=this.layers,this.add(s);let r=new Be(Os,Bs,t,e);r.layers=this.layers,this.add(r);let o=new Be(Os,Bs,t,e);o.layers=this.layers,this.add(o);let a=new Be(Os,Bs,t,e);a.layers=this.layers,this.add(a);let c=new Be(Os,Bs,t,e);c.layers=this.layers,this.add(c);let l=new Be(Os,Bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},qr=class extends nn{constructor(t=[],e=hs,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ra=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:di});r.uniforms.tEquirect.value=e;let o=new ve(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=In),new Ca(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Kt=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},em={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(em)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Yr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ks=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wa,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Je=new C,$r=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},js=class extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zs,Cr=new C,ks=new C,Vs=new C,Hs=new ot,Rr=new ot,qd=new me,ca=new C,Ir=new C,ha=new C,Hu=new ot,Nc=new ot,Gu=new ot,Zr=class extends ze{constructor(t=new js){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ia(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new $r(n,3,0,!1)),zs.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=zs,this.material=t,this.center=new ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),qd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ua(ca.set(-.5,-.5,0),Vs,o,ks,s,r),ua(Ir.set(.5,-.5,0),Vs,o,ks,s,r),ua(ha.set(.5,.5,0),Vs,o,ks,s,r),Hu.set(0,0),Nc.set(1,0),Gu.set(1,1);let a=t.ray.intersectTriangle(ca,Ir,ha,!1,Cr);if(a===null&&(ua(Ir.set(-.5,.5,0),Vs,o,ks,s,r),Nc.set(0,1),a=t.ray.intersectTriangle(ca,ha,Ir,!1,Cr),a===null))return;let c=t.ray.origin.distanceTo(Cr);c<t.near||c>t.far||e.push({distance:c,point:Cr.clone(),uv:li.getInterpolation(Cr,ca,Ir,ha,Hu,Nc,Gu,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(i,t,e,n,s,r){Hs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Rr.x=r*Hs.x-s*Hs.y,Rr.y=s*Hs.x+r*Hs.y):Rr.copy(Hs),i.copy(t),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(qd)}var Fc=new C,nm=new C,im=new $t,en=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fc.subVectors(n,e).cross(nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||im.getNormalMatrix(t),s=this.coplanarPoint(Fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new ns,sm=new ot(.5,.5),da=new C,Qs=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],S=r[12],w=r[13],x=r[14],R=r[15];if(s[0].setComponents(l-o,d-h,p-m,R-S).normalize(),s[1].setComponents(l+o,d+h,p+m,R+S).normalize(),s[2].setComponents(l+a,d+u,p+_,R+w).normalize(),s[3].setComponents(l-a,d-u,p-_,R-w).normalize(),n)s[4].setComponents(c,f,g,x).normalize(),s[5].setComponents(l-c,d-f,p-g,R-x).normalize();else if(s[4].setComponents(l-c,d-f,p-g,R-x).normalize(),e===Rn)s[5].setComponents(l+c,d+f,p+g,R+x).normalize();else if(e===kr)s[5].setComponents(c,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);let e=sm.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Un=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pa=new C,La=new C,Wu=new me,Pr=new Ri,fa=new ns,Oc=new C,Xu=new C,Pi=class extends ze{constructor(t=new Te,e=new Un){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pa.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pa.distanceTo(La);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Wu.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){let p=h.getX(_),S=h.getX(_+1),w=pa(this,t,Pr,c,p,S,_);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=pa(this,t,Pr,c,_,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){let p=pa(this,t,Pr,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=pa(this,t,Pr,c,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Pa.fromBufferAttribute(a,s),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Pa,La,Oc,Xu)>n)return;Oc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Oc);if(!(l<t.near||l>t.far))return{distance:l,point:Xu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qu=new C,Yu=new C,Jr=class extends Pi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)qu.fromBufferAttribute(e,s),Yu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qu.distanceTo(Yu);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var is=class extends nn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Kr=class extends nn{constructor(t,e,n=Oi,s,r,o,a=mn,c=mn,l,h=Xs,u=1){if(h!==Xs&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jr=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Qr=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],g=n/2,p=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function S(){let x=new C,R=new C,A=0,D=(e-t)/n;for(let U=0;U<=r;U++){let b=[],v=U/r,L=v*(e-t)+t;for(let z=0;z<=s;z++){let E=z/s,N=E*c+a,B=Math.sin(N),F=Math.cos(N);R.x=L*B,R.y=-v*n+g,R.z=L*F,u.push(R.x,R.y,R.z),x.set(B,D,F).normalize(),f.push(x.x,x.y,x.z),d.push(E,1-v),b.push(m++)}_.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let v=_[b][U],L=_[b+1][U],z=_[b+1][U+1],E=_[b][U+1];(t>0||b!==0)&&(h.push(v,L,E),A+=3),(e>0||b!==r-1)&&(h.push(L,z,E),A+=3)}l.addGroup(p,A,0),p+=A}function w(x){let R=m,A=new ot,D=new C,U=0,b=x===!0?t:e,v=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;let L=m;for(let z=0;z<=s;z++){let N=z/s*c+a,B=Math.cos(N),F=Math.sin(N);D.x=b*F,D.y=g*v,D.z=b*B,u.push(D.x,D.y,D.z),f.push(0,v,0),A.x=B*.5+.5,A.y=F*.5*v+.5,d.push(A.x,A.y),m++}for(let z=0;z<s;z++){let E=R+z,N=L+z;x===!0?h.push(N,N+1,E):h.push(N+1,N,E),U+=3}l.addGroup(p,U,x===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Da=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let w=new C,x=new C,R=new C;for(let A=0;A<e.length;A+=3)d(e[A+0],w),d(e[A+1],x),d(e[A+2],R),c(w,x,R,S)}function c(S,w,x,R){let A=R+1,D=[];for(let U=0;U<=A;U++){D[U]=[];let b=S.clone().lerp(x,U/A),v=w.clone().lerp(x,U/A),L=A-U;for(let z=0;z<=L;z++)z===0&&U===A?D[U][z]=b:D[U][z]=b.clone().lerp(v,z/L)}for(let U=0;U<A;U++)for(let b=0;b<2*(A-U)-1;b++){let v=Math.floor(b/2);b%2===0?(f(D[U][v+1]),f(D[U+1][v]),f(D[U][v])):(f(D[U][v+1]),f(D[U+1][v+1]),f(D[U+1][v]))}}function l(S){let w=new C;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(S),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function h(){let S=new C;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let x=g(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;o.push(x,1-R)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let w=o[S+0],x=o[S+2],R=o[S+4],A=Math.max(w,x,R),D=Math.min(w,x,R);A>.9&&D<.1&&(w<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,w){let x=S*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function m(){let S=new C,w=new C,x=new C,R=new C,A=new ot,D=new ot,U=new ot;for(let b=0,v=0;b<r.length;b+=9,v+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),A.set(o[v+0],o[v+1]),D.set(o[v+2],o[v+3]),U.set(o[v+4],o[v+5]),R.copy(S).add(w).add(x).divideScalar(3);let L=g(R);_(A,v+0,S,L),_(D,v+2,w,L),_(U,v+4,x,L)}}function _(S,w,x,R){R<0&&S.x===1&&(o[w]=S.x-1),x.x===0&&x.z===0&&(o[w]=R/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],o=[],a=new C,c=new me;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ua=class extends tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ma=new C,Bc=new Mh,zc=new Mh,kc=new Mh,Na=class extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),l=ma);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,_,g),zc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,_,g),kc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),kc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Bc.calc(c),zc.calc(c),kc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $u(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function rm(i,t){let e=1-i;return e*e*t}function om(i,t){return 2*(1-i)*i*t}function am(i,t){return i*i*t}function Fr(i,t,e,n){return rm(i,t)+om(i,e)+am(i,n)}function lm(i,t){let e=1-i;return e*e*e*t}function cm(i,t){let e=1-i;return 3*e*e*i*t}function hm(i,t){return 3*(1-i)*i*i*t}function um(i,t){return i*i*i*t}function Or(i,t,e,n,s){return lm(i,t)+cm(i,e)+hm(i,n)+um(i,s)}var to=class extends cn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends cn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends cn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends cn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends cn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,s.x,r.x,o.x),Fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends cn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,s.x,r.x,o.x),Fr(t,s.y,r.y,o.y),Fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set($u(a,c.x,l.x,h.x,u.x),$u(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Yc=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Na,CubicBezierCurve:to,CubicBezierCurve3:Fa,EllipseCurve:tr,LineCurve:eo,LineCurve3:Oa,QuadraticBezierCurve:no,QuadraticBezierCurve3:Ba,SplineCurve:io}),za=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yc[s.type]().fromJSON(s))}return this}},so=class extends za{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new eo(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new no(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new to(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new tr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ss=class extends so{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new so().fromJSON(s))}return this}};function dm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=_m(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ro(r,o,e,a,c,l,0),o}function Yd(i,t,e,n,s){let r;if(s===Cm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zu(o/n|0,i[o],i[o+1],r);return r&&er(r,r.next)&&(ao(r),r=r.next),r}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(er(e,e.next)||we(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?pm(i,n,s,r):fm(i)){t.push(c.i,i.i,l.i),ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=mm(rs(i),t),ro(i,t,e,n,s,r,2)):o===2&&gm(i,t,e,n,s,r):ro(rs(i),t,e,n,s,r,1);break}}}function fm(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Dr(s,a,r,c,o,l,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),_=Math.max(a,c,l),g=Math.max(h,u,f),p=$c(d,m,t,e,n),S=$c(_,g,t,e,n),w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=S;){if(w.x>=d&&w.x<=_&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&Dr(a,h,c,u,l,f,w.x,w.y)&&we(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Dr(a,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=_&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&Dr(a,h,c,u,l,f,w.x,w.y)&&we(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Dr(a,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function mm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!er(n,s)&&Zd(n,e,e.next,s)&&oo(n,s)&&oo(s,n)&&(t.push(n.i,e.i,s.i),ao(e),ao(e.next),e=i=s),e=e.next}while(e!==i);return rs(e)}function gm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tm(o,a)){let c=Jd(o,a);o=rs(o,o.next),c=rs(c,c.next),ro(o,t,e,n,s,r,0),ro(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _m(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Yd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(wm(l))}s.sort(xm);for(let r=0;r<s.length;r++)e=ym(s[r],e);return e}function xm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ym(i,t){let e=vm(i,t);if(!e)return t;let n=Jd(e,i);return rs(n,n.next),rs(e,e.next)}function vm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(er(i,e))return e;do{if(er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&$d(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);oo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&bm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function bm(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Mm(i,t,e,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sm(s)}function Sm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function $c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $d(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Dr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&$d(i,t,e,n,s,r,o,a)}function Tm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Em(i,t)&&(oo(i,t)&&oo(t,i)&&Am(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||er(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function er(i,t){return i.x===t.x&&i.y===t.y}function Zd(i,t,e,n){let s=_a(we(i,t,e)),r=_a(we(i,t,n)),o=_a(we(e,n,i)),a=_a(we(e,n,t));return!!(s!==r&&o!==a||s===0&&ga(i,e,t)||r===0&&ga(i,n,t)||o===0&&ga(e,i,n)||a===0&&ga(e,t,n))}function ga(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function Em(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function Am(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jd(i,t){let e=Zc(i.i,i.x,i.y),n=Zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zu(i,t,e,n){let s=Zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Jc=class{static triangulate(t,e,n=2){return dm(t,e,n)}},ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ju(t),Ku(n,t);let o=t.length;e.forEach(Ju);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ku(n,e[c]);let a=Jc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ju(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var nr=class i extends Te{constructor(t=new ss([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Rm,w,x=!1,R,A,D,U;p&&(w=p.getSpacedPoints(h),x=!0,f=!1,R=p.computeFrenetFrames(h,!1),A=new C,D=new C,U=new C),f||(g=0,d=0,m=0,_=0);let b=a.extractPoints(l),v=b.shape,L=b.holes;if(!ji.isClockWise(v)){v=v.reverse();for(let st=0,Q=L.length;st<Q;st++){let tt=L[st];ji.isClockWise(tt)&&(L[st]=tt.reverse())}}function E(st){let tt=10000000000000001e-36,et=st[0];for(let gt=1;gt<=st.length;gt++){let ht=gt%st.length,_t=st[ht],Xt=_t.x-et.x,Ht=_t.y-et.y,T=Xt*Xt+Ht*Ht,y=Math.max(Math.abs(_t.x),Math.abs(_t.y),Math.abs(et.x),Math.abs(et.y)),G=tt*y*y;if(T<=G){st.splice(ht,1),gt--;continue}et=_t}}E(v),L.forEach(E);let N=L.length,B=v;for(let st=0;st<N;st++){let Q=L[st];v=v.concat(Q)}function F(st,Q,tt){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(Q,tt)}let Z=v.length;function k(st,Q,tt){let et,gt,ht,_t=st.x-Q.x,Xt=st.y-Q.y,Ht=tt.x-st.x,T=tt.y-st.y,y=_t*_t+Xt*Xt,G=_t*T-Xt*Ht;if(Math.abs(G)>Number.EPSILON){let J=Math.sqrt(y),rt=Math.sqrt(Ht*Ht+T*T),K=Q.x-Xt/J,Ut=Q.y+_t/J,mt=tt.x-T/rt,Pt=tt.y+Ht/rt,Lt=((mt-K)*T-(Pt-Ut)*Ht)/(_t*T-Xt*Ht);et=K+_t*Lt-st.x,gt=Ut+Xt*Lt-st.y;let ut=et*et+gt*gt;if(ut<=2)return new ot(et,gt);ht=Math.sqrt(ut/2)}else{let J=!1;_t>Number.EPSILON?Ht>Number.EPSILON&&(J=!0):_t<-Number.EPSILON?Ht<-Number.EPSILON&&(J=!0):Math.sign(Xt)===Math.sign(T)&&(J=!0),J?(et=-Xt,gt=_t,ht=Math.sqrt(y)):(et=_t,gt=Xt,ht=Math.sqrt(y/2))}return new ot(et/ht,gt/ht)}let I=[];for(let st=0,Q=B.length,tt=Q-1,et=st+1;st<Q;st++,tt++,et++)tt===Q&&(tt=0),et===Q&&(et=0),I[st]=k(B[st],B[tt],B[et]);let W=[],it,q=I.concat();for(let st=0,Q=N;st<Q;st++){let tt=L[st];it=[];for(let et=0,gt=tt.length,ht=gt-1,_t=et+1;et<gt;et++,ht++,_t++)ht===gt&&(ht=0),_t===gt&&(_t=0),it[et]=k(tt[et],tt[ht],tt[_t]);W.push(it),q=q.concat(it)}let lt;if(g===0)lt=ji.triangulateShape(B,L);else{let st=[],Q=[];for(let tt=0;tt<g;tt++){let et=tt/g,gt=d*Math.cos(et*Math.PI/2),ht=m*Math.sin(et*Math.PI/2)+_;for(let _t=0,Xt=B.length;_t<Xt;_t++){let Ht=F(B[_t],I[_t],ht);xt(Ht.x,Ht.y,-gt),et===0&&st.push(Ht)}for(let _t=0,Xt=N;_t<Xt;_t++){let Ht=L[_t];it=W[_t];let T=[];for(let y=0,G=Ht.length;y<G;y++){let J=F(Ht[y],it[y],ht);xt(J.x,J.y,-gt),et===0&&T.push(J)}et===0&&Q.push(T)}}lt=ji.triangulateShape(st,Q)}let Nt=lt.length,bt=m+_;for(let st=0;st<Z;st++){let Q=f?F(v[st],q[st],bt):v[st];x?(D.copy(R.normals[0]).multiplyScalar(Q.x),A.copy(R.binormals[0]).multiplyScalar(Q.y),U.copy(w[0]).add(D).add(A),xt(U.x,U.y,U.z)):xt(Q.x,Q.y,0)}for(let st=1;st<=h;st++)for(let Q=0;Q<Z;Q++){let tt=f?F(v[Q],q[Q],bt):v[Q];x?(D.copy(R.normals[st]).multiplyScalar(tt.x),A.copy(R.binormals[st]).multiplyScalar(tt.y),U.copy(w[st]).add(D).add(A),xt(U.x,U.y,U.z)):xt(tt.x,tt.y,u/h*st)}for(let st=g-1;st>=0;st--){let Q=st/g,tt=d*Math.cos(Q*Math.PI/2),et=m*Math.sin(Q*Math.PI/2)+_;for(let gt=0,ht=B.length;gt<ht;gt++){let _t=F(B[gt],I[gt],et);xt(_t.x,_t.y,u+tt)}for(let gt=0,ht=L.length;gt<ht;gt++){let _t=L[gt];it=W[gt];for(let Xt=0,Ht=_t.length;Xt<Ht;Xt++){let T=F(_t[Xt],it[Xt],et);x?xt(T.x,T.y+w[h-1].y,w[h-1].x+tt):xt(T.x,T.y,u+tt)}}}X(),j();function X(){let st=s.length/3;if(f){let Q=0,tt=Z*Q;for(let et=0;et<Nt;et++){let gt=lt[et];Et(gt[2]+tt,gt[1]+tt,gt[0]+tt)}Q=h+g*2,tt=Z*Q;for(let et=0;et<Nt;et++){let gt=lt[et];Et(gt[0]+tt,gt[1]+tt,gt[2]+tt)}}else{for(let Q=0;Q<Nt;Q++){let tt=lt[Q];Et(tt[2],tt[1],tt[0])}for(let Q=0;Q<Nt;Q++){let tt=lt[Q];Et(tt[0]+Z*h,tt[1]+Z*h,tt[2]+Z*h)}}n.addGroup(st,s.length/3-st,0)}function j(){let st=s.length/3,Q=0;ct(B,Q),Q+=B.length;for(let tt=0,et=L.length;tt<et;tt++){let gt=L[tt];ct(gt,Q),Q+=gt.length}n.addGroup(st,s.length/3-st,1)}function ct(st,Q){let tt=st.length;for(;--tt>=0;){let et=tt,gt=tt-1;gt<0&&(gt=st.length-1);for(let ht=0,_t=h+g*2;ht<_t;ht++){let Xt=Z*ht,Ht=Z*(ht+1),T=Q+et+Xt,y=Q+gt+Xt,G=Q+gt+Ht,J=Q+et+Ht;Zt(T,y,G,J)}}}function xt(st,Q,tt){c.push(st),c.push(Q),c.push(tt)}function Et(st,Q,tt){se(st),se(Q),se(tt);let et=s.length/3,gt=S.generateTopUV(n,s,et-3,et-2,et-1);P(gt[0]),P(gt[1]),P(gt[2])}function Zt(st,Q,tt,et){se(st),se(Q),se(et),se(Q),se(tt),se(et);let gt=s.length/3,ht=S.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);P(ht[0]),P(ht[1]),P(ht[3]),P(ht[1]),P(ht[2]),P(ht[3])}function se(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function P(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Im(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yc[s.type]().fromJSON(s)),new i(n,t.options)}},Rm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ot(r,o),new ot(a,c),new ot(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-u),new ot(f,1-m),new ot(_,1-p)]:[new ot(a,1-c),new ot(h,1-u),new ot(d,1-m),new ot(g,1-p)]}};function Im(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var os=class i extends Da{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ui=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let S=p*f-o;for(let w=0;w<l;w++){let x=w*u-r;m.push(x,-S,0),_.push(0,0,1),g.push(w/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let w=S+l*p,x=S+l*(p+1),R=S+1+l*(p+1),A=S+1+l*p;d.push(w,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},lo=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new C,m=new ot;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let S=p+g,w=S,x=S+n+1,R=S+n+2,A=S+1;a.push(w,x,A),a.push(x,R,A)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var co=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,f=new C,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let S=[],w=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+w*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(A+x,1-w),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let w=h[p][S+1],x=h[p][S],R=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(w,x,A),(p!==n-1||c<Math.PI)&&d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ho=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let _=m/s*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,S=(s+1)*d+m;o.push(_,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _n=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ka=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var uo=class extends Un{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function xa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ha=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,a=2*e-n;break;case Xc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wc:o=t,c=2*n-e;break;case Xc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,S=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,w=(-1-d)*g+(1.5+d)*_+.5*m,x=d*g-d*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+S*o[l+R]+w*o[c+R]+x*o[u+R];return r}},Ga=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Wa=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ha(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Br:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Pm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Sa;var Li=class extends hn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Br;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="number";var Ya=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)gn.slerpFlat(r,0,o,l-a,o,l,c);return r}},fo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends hn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Br;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="vector";var Za=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Kd=new Za,Ja=class{constructor(t){this.manager=t!==void 0?t:Kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},sr=class extends ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Vc=new me,ju=new C,Qu=new C,Ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(ju),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var td=new me,Lr=new C,Hc=new C,Kc=class extends Ka{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),Hc.copy(n.position),Hc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hc),n.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,n.coordinateSystem,n.reversedDepth)}},rr=class extends ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ls=class extends Xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jc=class extends Ka{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ja=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},po=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Sh="\\[\\]\\.:\\/",Lm=new RegExp("["+Sh+"]","g"),wh="[^"+Sh+"]",Dm="[^"+Sh.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",wh),Nm=/(WCOD+)?/.source.replace("WCOD",Dm),Fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),Bm=new RegExp("^"+Um+Nm+Fm+Om+"$"),zm=["material","materials","bones","map"],Qc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(t){let e=Bm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Qc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var ed=new me,mo=class{constructor(t,e,n=0,s=1/0){this.ray=new Ri(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ed.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ed),this}intersectObject(t,e=!0,n=[]){return th(t,this,n,e),n.sort(nd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)th(t[s],this,n,e);return n.sort(nd),n}};function nd(i,t){return i.distance-t.distance}function th(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)th(r[o],t,e,!0)}}var or=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var go=class extends Jr{constructor(t=10,e=10,n=4473924,s=8947848){n=new Yt(n),s=new Yt(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,m=-a;f<=e;f++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);let _=f===r?n:s;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}let h=new Te;h.setAttribute("position",new ie(c,3)),h.setAttribute("color",new ie(l,3));let u=new Un({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var _o=class extends Jr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Te;r.setIndex(new Ke(n,1)),r.setAttribute("position",new ie(s,3)),super(r,new Un({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};var xo=class extends Wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Th(i,t,e,n){let s=km(n);switch(e){case dh:return i*t;case ph:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case fh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case yl:return Math.max(i,16)*Math.max(t,8)/4;case gl:case xl:return Math.max(i,8)*Math.max(t,8)/2;case vl:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ol:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(i){switch(i){case Nn:case lh:return{byteLength:1,components:1};case ar:case ch:case lr:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case Oi:case hl:case Zn:return{byteLength:4,components:1};case hh:case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Mf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dg=`#define PI 3.141592653589793
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
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
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
#endif`,Vg=`struct PhysicalMaterial {
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
}`,Hg=`
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jg=`#if defined( USE_POINTS_UV )
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
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
}`,e_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,a_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,c_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,u_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,p_=`#define TOON
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
}`,m_=`#define TOON
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
}`,g_=`uniform float size;
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
}`,x_=`#include <common>
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
}`,y_=`uniform vec3 color;
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
}`,v_=`uniform float rotation;
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
}`,b_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Km,batching_vertex:jm,begin_vertex:Qm,beginnormal_vertex:tg,bsdfs:eg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:og,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:ug,common:dg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,colorspace_fragment:yg,colorspace_pars_fragment:vg,envmap_fragment:bg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ng,envmap_vertex:Tg,fog_vertex:Eg,fog_pars_vertex:Ag,fog_fragment:Cg,fog_pars_fragment:Rg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Pg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ug,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:zg,lights_physical_fragment:kg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Hg,lights_fragment_maps:Gg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:Jg,map_particle_fragment:Kg,map_particle_pars_fragment:jg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:o0,normal_fragment_maps:a0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:_0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:v0,dithering_pars_fragment:b0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:T0,shadowmap_vertex:E0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:I0,skinnormal_vertex:P0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:k0,worldpos_vertex:V0,background_vert:H0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:$0,depth_frag:Z0,distanceRGBA_vert:J0,distanceRGBA_frag:K0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:t_,linedashed_frag:e_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:s_,meshlambert_frag:r_,meshmatcap_vert:o_,meshmatcap_frag:a_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:h_,meshphong_frag:u_,meshphysical_vert:d_,meshphysical_frag:f_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:x_,shadow_frag:y_,sprite_vert:v_,sprite_frag:b_},Mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Jn={basic:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Xe([Mt.common,Mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Xe([Mt.lights,Mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Jn.physical={uniforms:Xe([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Wl={r:0,b:0,g:0},fs=new Ln,M_=new me;function S_(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function _(w){let x=!1,R=m(w);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,x){let R=m(x);R&&(R.isCubeTexture||R.mapping===vo)?(h===void 0&&(h=new ve(new Yn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ds(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(x.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M_.makeRotationFromEuler(fs)),h.material.toneMapped=ee.getTransfer(R.colorSpace)!==ce,(u!==R||f!==R.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,d=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new ve(new ui(2,2),new Dn({name:"BackgroundMaterial",uniforms:ds(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ee.getTransfer(R.colorSpace)!==ce,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,f=R.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(Wl,bh(i)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:g,dispose:S}}function w_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,L,z,E,N){let B=!1,F=u(E,z,L);r!==F&&(r=F,l(r.object)),B=d(v,E,z,N),B&&m(v,E,z,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(v,L,z,E),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,L,z){let E=z.wireframe===!0,N=n[v.id];N===void 0&&(N={},n[v.id]=N);let B=N[L.id];B===void 0&&(B={},N[L.id]=B);let F=B[E];return F===void 0&&(F=f(c()),B[E]=F),F}function f(v){let L=[],z=[],E=[];for(let N=0;N<e;N++)L[N]=0,z[N]=0,E[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:E,object:v,attributes:{},index:null}}function d(v,L,z,E){let N=r.attributes,B=L.attributes,F=0,Z=z.getAttributes();for(let k in Z)if(Z[k].location>=0){let W=N[k],it=B[k];if(it===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),W===void 0||W.attribute!==it||it&&W.data!==it.data)return!0;F++}return r.attributesNum!==F||r.index!==E}function m(v,L,z,E){let N={},B=L.attributes,F=0,Z=z.getAttributes();for(let k in Z)if(Z[k].location>=0){let W=B[k];W===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(W=v.instanceColor));let it={};it.attribute=W,W&&W.data&&(it.data=W.data),N[k]=it,F++}r.attributes=N,r.attributesNum=F,r.index=E}function _(){let v=r.newAttributes;for(let L=0,z=v.length;L<z;L++)v[L]=0}function g(v){p(v,0)}function p(v,L){let z=r.newAttributes,E=r.enabledAttributes,N=r.attributeDivisors;z[v]=1,E[v]===0&&(i.enableVertexAttribArray(v),E[v]=1),N[v]!==L&&(i.vertexAttribDivisor(v,L),N[v]=L)}function S(){let v=r.newAttributes,L=r.enabledAttributes;for(let z=0,E=L.length;z<E;z++)L[z]!==v[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function w(v,L,z,E,N,B,F){F===!0?i.vertexAttribIPointer(v,L,z,N,B):i.vertexAttribPointer(v,L,z,E,N,B)}function x(v,L,z,E){_();let N=E.attributes,B=z.getAttributes(),F=L.defaultAttributeValues;for(let Z in B){let k=B[Z];if(k.location>=0){let I=N[Z];if(I===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(I=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(I=v.instanceColor)),I!==void 0){let W=I.normalized,it=I.itemSize,q=t.get(I);if(q===void 0)continue;let lt=q.buffer,Nt=q.type,bt=q.bytesPerElement,X=Nt===i.INT||Nt===i.UNSIGNED_INT||I.gpuType===hl;if(I.isInterleavedBufferAttribute){let j=I.data,ct=j.stride,xt=I.offset;if(j.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)p(k.location+Et,j.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Et=0;Et<k.locationSize;Et++)g(k.location+Et);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Et=0;Et<k.locationSize;Et++)w(k.location+Et,it/k.locationSize,Nt,W,ct*bt,(xt+it/k.locationSize*Et)*bt,X)}else{if(I.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)p(k.location+j,I.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let j=0;j<k.locationSize;j++)g(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let j=0;j<k.locationSize;j++)w(k.location+j,it/k.locationSize,Nt,W,it*bt,it/k.locationSize*j*bt,X)}}else if(F!==void 0){let W=F[Z];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(k.location,W);break;case 3:i.vertexAttrib3fv(k.location,W);break;case 4:i.vertexAttrib4fv(k.location,W);break;default:i.vertexAttrib1fv(k.location,W)}}}}S()}function R(){U();for(let v in n){let L=n[v];for(let z in L){let E=L[z];for(let N in E)h(E[N].object),delete E[N];delete L[z]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let z in L){let E=L[z];for(let N in E)h(E[N].object),delete E[N];delete L[z]}delete n[v.id]}function D(v){for(let L in n){let z=n[L];if(z[v.id]===void 0)continue;let E=z[v.id];for(let N in E)h(E[N].object),delete E[N];delete z[v.id]}}function U(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function T_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function E_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==xn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Nn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zn&&!U)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function A_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,w=S*4,x=p.clippingState||null;c.value=x,x=h(m,f,w,d);for(let R=0;R!==w;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,x=d;w!==_;++w,x+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function C_(i){let t=new WeakMap;function e(o,a){return a===al?o.mapping=hs:a===ll&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===ll)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ra(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fr=4,jd=[.125,.215,.35,.446,.526,.582],gs=20,Eh=new ls,Qd=new Yt,Ah=null,Ch=0,Rh=0,Ih=!1,ms=(1+Math.sqrt(5))/2,dr=1/ms,tf=[new C(-ms,dr,0),new C(ms,dr,0),new C(-dr,0,ms),new C(dr,0,ms),new C(0,ms,-dr),new C(0,ms,dr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],R_=new C,Yl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=R_}=r;Ah=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Ch,Rh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Xl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:lr,format:xn,colorSpace:es,depthBuffer:!1},s=ef(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=P_(r,t,e)}return s}_compileMaterial(t){let e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Eh)}_sceneToCubeUV(t,e,n,s,r){let c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Qd),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Ii({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new ve(new Yn,_),p=!1,S=t.background;S?S.isColor&&(_.color.copy(S),t.background=null,p=!0):(_.color.copy(Qd),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let R=this._cubeSize;Xl(s,x*R,w>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Xl(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Eh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tf[(s-r-1)%tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):gs;g>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);let p=[],S=0;for(let D=0;D<gs;++D){let U=D/_,b=Math.exp(-U*U/2);p.push(b),D===0?S+=b:D<g&&(S+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=m,f.mipInt.value=w-n;let x=this._sizeLods[s],R=3*x*(s>w-fr?s-w+fr:0),A=4*(this._cubeSize-x);Xl(e,R,A,3*x,2*x),c.setRenderTarget(e),c.render(u,Eh)}};function I_(i){let t=[],e=[],n=[],s=i,r=i-fr+1+jd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fr?c=jd[o-i+fr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*d),w=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let A=0;A<d;A++){let D=A%3*2/3-1,U=A>2?0:-1,b=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];S.set(b,_*m*A),w.set(f,g*m*A);let v=[A,A,A,A,A,A];x.set(v,p*m*A)}let R=new Te;R.setAttribute("position",new Ke(S,_)),R.setAttribute("uv",new Ke(w,g)),R.setAttribute("faceIndex",new Ke(x,p)),t.push(R),s>fr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ef(i,t,e){let n=new Xn(i,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function P_(i,t,e){let n=new Float32Array(gs),s=new C(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function nf(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function sf(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function L_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===al||c===ll,h=c===hs||c===us;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Yl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Yl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function D_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U_(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let w=0,x=S.length;w<x;w+=3){let R=S[w+0],A=S[w+1],D=S[w+2];f.push(R,A,A,D,D,R)}}else if(m!==void 0){let S=m.array;_=m.version;for(let w=0,x=S.length/3-1;w<x;w+=3){let R=w+0,A=w+1,D=w+2;f.push(R,A,A,D,D,R)}}else return;let g=new(vh(f)?Wr:Gr)(f,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function N_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function F_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O_(i,t,e){let n=new WeakMap,s=new le;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;d===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let x=a.attributes.position.count*w,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*R*4*u),D=new Hr(A,x,R,u);D.type=Zn,D.needsUpdate=!0;let U=w*4;for(let v=0;v<u;v++){let L=g[v],z=p[v],E=S[v],N=x*R*4*v;for(let B=0;B<L.count;B++){let F=B*U;d===!0&&(s.fromBufferAttribute(L,B),A[N+F+0]=s.x,A[N+F+1]=s.y,A[N+F+2]=s.z,A[N+F+3]=0),m===!0&&(s.fromBufferAttribute(z,B),A[N+F+4]=s.x,A[N+F+5]=s.y,A[N+F+6]=s.z,A[N+F+7]=0),_===!0&&(s.fromBufferAttribute(E,B),A[N+F+8]=s.x,A[N+F+9]=s.y,A[N+F+10]=s.z,A[N+F+11]=E.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new ot(x,R)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function B_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Sf=new nn,rf=new Kr(1,1),wf=new Hr,Tf=new Aa,Ef=new qr,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $l(i,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function G_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),Le(e,n)}}function W_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;cf.set(n),i.uniformMatrix3fv(this.addr,!1,cf),Le(e,n)}}function X_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;lf.set(n),i.uniformMatrix4fv(this.addr,!1,lf),Le(e,n)}}function q_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function $_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function J_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rf.compareFunction=_h,r=rf):r=Sf,e.setTexture2D(t||r,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tf,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ef,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wf,s)}function sx(i){switch(i){case 5126:return z_;case 35664:return k_;case 35665:return V_;case 35666:return H_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return K_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,t){i.uniform1fv(this.addr,t)}function ox(i,t){let e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function ax(i,t){let e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function lx(i,t){let e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function cx(i,t){let e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hx(i,t){let e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ux(i,t){let e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function fx(i,t){i.uniform2iv(this.addr,t)}function px(i,t){i.uniform3iv(this.addr,t)}function mx(i,t){i.uniform4iv(this.addr,t)}function gx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function xx(i,t){i.uniform3uiv(this.addr,t)}function yx(i,t){i.uniform4uiv(this.addr,t)}function vx(i,t,e){let n=this.cache,s=t.length,r=$l(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sf,r[o])}function bx(i,t,e){let n=this.cache,s=t.length,r=$l(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tf,r[o])}function Mx(i,t,e){let n=this.cache,s=t.length,r=$l(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ef,r[o])}function Sx(i,t,e){let n=this.cache,s=t.length,r=$l(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wf,r[o])}function wx(i){switch(i){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}var Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}},Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function uf(i,t){i.seq.push(t),i.map[t.id]=t}function Tx(i,t,e){let n=i.name,s=n.length;for(Ph.lastIndex=0;;){let r=Ph.exec(n),o=Ph.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uf(e,l===void 0?new Lh(a,i,t):new Dh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Uh(a),uf(e,u)),e=u}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function df(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ex=37297,Ax=0;function Cx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ff=new $t;function Rx(i){ee._getMatrix(ff,ee.workingColorSpace,i);let t=`mat3( ${ff.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Cx(i.getShaderSource(t),a)}else return r}function Ix(i,t){let e=Rx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Px(i,t){let e;switch(t){case Td:e="Linear";break;case Ed:e="Reinhard";break;case Ad:e="Cineon";break;case yo:e="ACESFilmic";break;case Rd:e="AgX";break;case Id:e="Neutral";break;case Cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ql=new C;function Lx(){ee.getLuminanceCoefficients(ql);let i=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Ux(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Eo(i){return i!==""}function mf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(Fx,Bx)}var Ox=new Map;function Bx(i,t){let e=Qt[t];if(e===void 0){let n=Ox.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nh(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(i){return i.replace(zx,kx)}function kx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Hx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Wx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oh:t="ENVMAP_BLENDING_MULTIPLY";break;case Sd:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function Xx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Vx(e),l=Hx(e),h=Gx(e),u=Wx(e),f=Xx(e),d=Dx(e),m=Ux(r),_=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Eo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(g=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Ix("linearToOutputTexel",e.outputColorSpace),Lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),o=Nh(o),o=mf(o,e),o=gf(o,e),a=Nh(a),a=mf(a,e),a=gf(a,e),o=_f(o),a=_f(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+g+o,x=S+p+a,R=df(s,s.VERTEX_SHADER,w),A=df(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(L){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",E=s.getShaderInfoLog(R)||"",N=s.getShaderInfoLog(A)||"",B=z.trim(),F=E.trim(),Z=N.trim(),k=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{let W=pf(s,R,"vertex"),it=pf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+W+`
`+it)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||Z==="")&&(I=!1);I&&(L.diagnostics={runnable:k,programLog:B,vertexShader:{log:F,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(R),s.deleteShader(A),U=new pr(s,_),b=Nx(s,_)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Ex)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}var Yx=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oh(t),e.set(t,n)),n}},Oh=class{constructor(t){this.id=Yx++,this.code=t,this.usedTimes=0}};function $x(i,t,e,n,s,r,o){let a=new Zs,c=new Fh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,v,L,z,E){let N=z.fog,B=E.geometry,F=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),k=Z&&Z.mapping===vo?Z.image.height:null,I=m[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let W=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=W!==void 0?W.length:0,q=0;B.morphAttributes.position!==void 0&&(q=1),B.morphAttributes.normal!==void 0&&(q=2),B.morphAttributes.color!==void 0&&(q=3);let lt,Nt,bt,X;if(I){let re=Jn[I];lt=re.vertexShader,Nt=re.fragmentShader}else lt=b.vertexShader,Nt=b.fragmentShader,c.update(b),bt=c.getVertexShaderID(b),X=c.getFragmentShaderID(b);let j=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),xt=E.isInstancedMesh===!0,Et=E.isBatchedMesh===!0,Zt=!!b.map,se=!!b.matcap,P=!!Z,st=!!b.aoMap,Q=!!b.lightMap,tt=!!b.bumpMap,et=!!b.normalMap,gt=!!b.displacementMap,ht=!!b.emissiveMap,_t=!!b.metalnessMap,Xt=!!b.roughnessMap,Ht=b.anisotropy>0,T=b.clearcoat>0,y=b.dispersion>0,G=b.iridescence>0,J=b.sheen>0,rt=b.transmission>0,K=Ht&&!!b.anisotropyMap,Ut=T&&!!b.clearcoatMap,mt=T&&!!b.clearcoatNormalMap,Pt=T&&!!b.clearcoatRoughnessMap,Lt=G&&!!b.iridescenceMap,ut=G&&!!b.iridescenceThicknessMap,At=J&&!!b.sheenColorMap,kt=J&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,wt=!!b.specularColorMap,Jt=!!b.specularIntensityMap,O=rt&&!!b.transmissionMap,pt=rt&&!!b.thicknessMap,yt=!!b.gradientMap,Rt=!!b.alphaMap,dt=b.alphaTest>0,nt=!!b.alphaHash,Dt=!!b.extensions,qt=fi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qt=i.toneMapping);let pe={shaderID:I,shaderType:b.type,shaderName:b.name,vertexShader:lt,fragmentShader:Nt,defines:b.defines,customVertexShaderID:bt,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Et,batchingColor:Et&&E._colorsTexture!==null,instancing:xt,instancingColor:xt&&E.instanceColor!==null,instancingMorph:xt&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:es,alphaToCoverage:!!b.alphaToCoverage,map:Zt,matcap:se,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:k,aoMap:st,lightMap:Q,bumpMap:tt,normalMap:et,displacementMap:f&&gt,emissiveMap:ht,normalMapObjectSpace:et&&b.normalMapType===Ud,normalMapTangentSpace:et&&b.normalMapType===gh,metalnessMap:_t,roughnessMap:Xt,anisotropy:Ht,anisotropyMap:K,clearcoat:T,clearcoatMap:Ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:Pt,dispersion:y,iridescence:G,iridescenceMap:Lt,iridescenceThicknessMap:ut,sheen:J,sheenColorMap:At,sheenRoughnessMap:kt,specularMap:Ft,specularColorMap:wt,specularIntensityMap:Jt,transmission:rt,transmissionMap:O,thicknessMap:pt,gradientMap:yt,opaque:b.transparent===!1&&b.blending===Qi&&b.alphaToCoverage===!1,alphaMap:Rt,alphaTest:dt,alphaHash:nt,combine:b.combine,mapUv:Zt&&_(b.map.channel),aoMapUv:st&&_(b.aoMap.channel),lightMapUv:Q&&_(b.lightMap.channel),bumpMapUv:tt&&_(b.bumpMap.channel),normalMapUv:et&&_(b.normalMap.channel),displacementMapUv:gt&&_(b.displacementMap.channel),emissiveMapUv:ht&&_(b.emissiveMap.channel),metalnessMapUv:_t&&_(b.metalnessMap.channel),roughnessMapUv:Xt&&_(b.roughnessMap.channel),anisotropyMapUv:K&&_(b.anisotropyMap.channel),clearcoatMapUv:Ut&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(b.sheenRoughnessMap.channel),specularMapUv:Ft&&_(b.specularMap.channel),specularColorMapUv:wt&&_(b.specularColorMap.channel),specularIntensityMapUv:Jt&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:pt&&_(b.thicknessMap.channel),alphaMapUv:Rt&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(et||Ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!B.attributes.uv&&(Zt||Rt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ct,skinning:E.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:q,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Zt&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===We,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function p(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)v.push(L),v.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(v,b),w(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function w(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let v=m[b.type],L;if(v){let z=Jn[v];L=Xd.clone(z.uniforms)}else L=b.uniforms;return L}function R(b,v){let L;for(let z=0,E=h.length;z<E;z++){let N=h[z];if(N.cacheKey===v){L=N,++L.usedTimes;break}}return L===void 0&&(L=new qx(i,v,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function D(b){c.remove(b)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:U}}function Zx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Jx),n.length>1&&n.sort(f||yf),s.length>1&&s.sort(f||yf)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Kx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new vf,i.set(n,[o])):s>=r.length?(o=new vf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Yt};break;case"SpotLight":e={position:new C,direction:new C,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ty=0;function ey(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ny(i){let t=new jx,e=Qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new me,o=new me;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,w=0,x=0,R=0,A=0,D=0;l.sort(ey);for(let b=0,v=l.length;b<v;b++){let L=l[b],z=L.color,E=L.intensity,N=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*E,u+=z.g*E,f+=z.b*E;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],E);D++}else if(L.isDirectionalLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,k=e.get(L);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=L.shadow.matrix,S++}n.directional[d]=F,d++}else if(L.isSpotLight){let F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(z).multiplyScalar(E),F.distance=N,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[_]=F;let Z=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){let k=e.get(L);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=B,x++}_++}else if(L.isRectAreaLight){let F=t.get(L);F.color.copy(z).multiplyScalar(E),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=F,g++}else if(L.isPointLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let Z=L.shadow,k=e.get(L);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=F,m++}else if(L.isHemisphereLight){let F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(E),F.groundColor.copy(L.groundColor).multiplyScalar(E),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==d||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==S||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==R||U.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,U.directionalLength=d,U.pointLength=m,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=S,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=R,U.numLightProbes=D,n.version=ty++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let w=l[p];if(w.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(w.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(w.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function bf(i){let t=new ny(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function iy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new bf(i),t.set(s,[a])):r>=o.length?(a=new bf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(i,t,e){let n=new Qs,s=new ot,r=new ot,o=new le,a=new ka({depthPacking:Dd}),c=new Va,l={},h=e.maxTextureSize,u={[hi]:je,[je]:hi,[We]:We},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Te;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ve(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let p=this.type;this.render=function(A,D,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(di),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let E=p!==$n&&this.type===$n,N=p===$n&&this.type!==$n;for(let B=0,F=A.length;B<F;B++){let Z=A[B],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let I=k.getFrameExtents();if(s.multiply(I),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/I.x),s.x=r.x*I.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/I.y),s.y=r.y*I.y,k.mapSize.y=r.y)),k.map===null||E===!0||N===!0){let it=this.type!==$n?{minFilter:mn,magFilter:mn}:{};k.map!==null&&k.map.dispose(),k.map=new Xn(s.x,s.y,it),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let W=k.getViewportCount();for(let it=0;it<W;it++){let q=k.getViewport(it);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(o),k.updateMatrices(Z,it),n=k.getFrustum(),x(D,U,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&S(k,U),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,v,L)};function S(A,D){let U=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,U,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,U,d,_,null)}function w(A,D,U,b){let v=null,L=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=U.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let z=v.uuid,E=D.uuid,N=l[z];N===void 0&&(N={},l[z]=N);let B=N[E];B===void 0&&(B=v.clone(),N[E]=B,D.addEventListener("dispose",R)),v=B}if(v.visible=D.visible,v.wireframe=D.wireframe,b===$n?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:u[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=U}return v}function x(A,D,U,b,v){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===$n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let E=t.update(A),N=A.material;if(Array.isArray(N)){let B=E.groups;for(let F=0,Z=B.length;F<Z;F++){let k=B[F],I=N[k.materialIndex];if(I&&I.visible){let W=w(A,I,b,v);A.onBeforeShadow(i,A,D,U,E,W,k),i.renderBufferDirect(U,null,E,W,A,k),A.onAfterShadow(i,A,D,U,E,W,k)}}}else if(N.visible){let B=w(A,N,b,v);A.onBeforeShadow(i,A,D,U,E,B,null),i.renderBufferDirect(U,null,E,B,A,null),A.onAfterShadow(i,A,D,U,E,B,null)}}let z=A.children;for(let E=0,N=z.length;E<N;E++)x(z[E],D,U,b,v)}function R(A){A.target.removeEventListener("dispose",R);for(let U in l){let b=l[U],v=A.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var ay={[tl]:el,[nl]:rl,[il]:ol,[ts]:sl,[el]:tl,[rl]:nl,[ol]:il,[sl]:ts};function ly(i,t){function e(){let O=!1,pt=new le,yt=null,Rt=new le(0,0,0,0);return{setMask:function(dt){yt!==dt&&!O&&(i.colorMask(dt,dt,dt,dt),yt=dt)},setLocked:function(dt){O=dt},setClear:function(dt,nt,Dt,qt,pe){pe===!0&&(dt*=qt,nt*=qt,Dt*=qt),pt.set(dt,nt,Dt,qt),Rt.equals(pt)===!1&&(i.clearColor(dt,nt,Dt,qt),Rt.copy(pt))},reset:function(){O=!1,yt=null,Rt.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,yt=null,Rt=null,dt=null;return{setReversed:function(nt){if(pt!==nt){let Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;let qt=dt;dt=null,this.setClear(qt)}},getReversed:function(){return pt},setTest:function(nt){nt?j(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(nt){yt!==nt&&!O&&(i.depthMask(nt),yt=nt)},setFunc:function(nt){if(pt&&(nt=ay[nt]),Rt!==nt){switch(nt){case tl:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=nt}},setLocked:function(nt){O=nt},setClear:function(nt){dt!==nt&&(pt&&(nt=1-nt),i.clearDepth(nt),dt=nt)},reset:function(){O=!1,yt=null,Rt=null,dt=null,pt=!1}}}function s(){let O=!1,pt=null,yt=null,Rt=null,dt=null,nt=null,Dt=null,qt=null,pe=null;return{setTest:function(re){O||(re?j(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(re){pt!==re&&!O&&(i.stencilMask(re),pt=re)},setFunc:function(re,ni,Hn){(yt!==re||Rt!==ni||dt!==Hn)&&(i.stencilFunc(re,ni,Hn),yt=re,Rt=ni,dt=Hn)},setOp:function(re,ni,Hn){(nt!==re||Dt!==ni||qt!==Hn)&&(i.stencilOp(re,ni,Hn),nt=re,Dt=ni,qt=Hn)},setLocked:function(re){O=re},setClear:function(re){pe!==re&&(i.clearStencil(re),pe=re)},reset:function(){O=!1,pt=null,yt=null,Rt=null,dt=null,nt=null,Dt=null,qt=null,pe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,w=null,x=null,R=null,A=null,D=new Yt(0,0,0),U=0,b=!1,v=null,L=null,z=null,E=null,N=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Z=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=Z>=2);let I=null,W={},it=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),lt=new le().fromArray(it),Nt=new le().fromArray(q);function bt(O,pt,yt,Rt){let dt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(O,nt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<yt;Dt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(pt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return nt}let X={};X[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(ts),tt(!1),et(eh),j(i.CULL_FACE),st(di);function j(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ct(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function xt(O,pt){return u[O]!==pt?(i.bindFramebuffer(O,pt),u[O]=pt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Et(O,pt){let yt=d,Rt=!1;if(O){yt=f.get(pt),yt===void 0&&(yt=[],f.set(pt,yt));let dt=O.textures;if(yt.length!==dt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Dt=dt.length;nt<Dt;nt++)yt[nt]=i.COLOR_ATTACHMENT0+nt;yt.length=dt.length,Rt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(yt)}function Zt(O){return m!==O?(i.useProgram(O),m=O,!0):!1}let se={[Ci]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};se[ld]=i.MIN,se[cd]=i.MAX;let P={[hd]:i.ZERO,[ud]:i.ONE,[dd]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[Md]:i.ONE_MINUS_CONSTANT_ALPHA};function st(O,pt,yt,Rt,dt,nt,Dt,qt,pe,re){if(O===di){_===!0&&(ct(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),O!==rd){if(O!==g||re!==b){if((p!==Ci||x!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,x=Ci),re)switch(O){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,w=null,R=null,A=null,D.set(0,0,0),U=0,g=O,b=re}return}dt=dt||pt,nt=nt||yt,Dt=Dt||Rt,(pt!==p||dt!==x)&&(i.blendEquationSeparate(se[pt],se[dt]),p=pt,x=dt),(yt!==S||Rt!==w||nt!==R||Dt!==A)&&(i.blendFuncSeparate(P[yt],P[Rt],P[nt],P[Dt]),S=yt,w=Rt,R=nt,A=Dt),(qt.equals(D)===!1||pe!==U)&&(i.blendColor(qt.r,qt.g,qt.b,pe),D.copy(qt),U=pe),g=O,b=!1}function Q(O,pt){O.side===We?ct(i.CULL_FACE):j(i.CULL_FACE);let yt=O.side===je;pt&&(yt=!yt),tt(yt),O.blending===Qi&&O.transparent===!1?st(di):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Rt=O.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function et(O){O!==id?(j(i.CULL_FACE),O!==L&&(O===eh?i.cullFace(i.BACK):O===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),L=O}function gt(O){O!==z&&(F&&i.lineWidth(O),z=O)}function ht(O,pt,yt){O?(j(i.POLYGON_OFFSET_FILL),(E!==pt||N!==yt)&&(i.polygonOffset(pt,yt),E=pt,N=yt)):ct(i.POLYGON_OFFSET_FILL)}function _t(O){O?j(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Xt(O){O===void 0&&(O=i.TEXTURE0+B-1),I!==O&&(i.activeTexture(O),I=O)}function Ht(O,pt,yt){yt===void 0&&(I===null?yt=i.TEXTURE0+B-1:yt=I);let Rt=W[yt];Rt===void 0&&(Rt={type:void 0,texture:void 0},W[yt]=Rt),(Rt.type!==O||Rt.texture!==pt)&&(I!==yt&&(i.activeTexture(yt),I=yt),i.bindTexture(O,pt||X[O]),Rt.type=O,Rt.texture=pt)}function T(){let O=W[I];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(O){lt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function kt(O){Nt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Nt.copy(O))}function Ft(O,pt){let yt=l.get(pt);yt===void 0&&(yt=new WeakMap,l.set(pt,yt));let Rt=yt.get(O);Rt===void 0&&(Rt=i.getUniformBlockIndex(pt,O.name),yt.set(O,Rt))}function wt(O,pt){let Rt=l.get(pt).get(O);c.get(pt)!==Rt&&(i.uniformBlockBinding(pt,Rt,O.__bindingPointIndex),c.set(pt,Rt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},I=null,W={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,w=null,x=null,R=null,A=null,D=new Yt(0,0,0),U=0,b=!1,v=null,L=null,z=null,E=null,N=null,lt.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ct,bindFramebuffer:xt,drawBuffers:Et,useProgram:Zt,setBlending:st,setMaterial:Q,setFlipSided:tt,setCullFace:et,setLineWidth:gt,setPolygonOffset:ht,setScissorTest:_t,activeTexture:Xt,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:G,texImage2D:Lt,texImage3D:ut,updateUBOMapping:Ft,uniformBlockBinding:wt,texStorage2D:mt,texStorage3D:Pt,texSubImage2D:J,texSubImage3D:rt,compressedTexSubImage2D:K,compressedTexSubImage3D:Ut,scissor:At,viewport:kt,reset:Jt}}function cy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return d?new OffscreenCanvas(T,y):Vr("canvas")}function _(T,y,G){let J=1,rt=Ht(T);if((rt.width>G||rt.height>G)&&(J=G/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(J*rt.width),Ut=Math.floor(J*rt.height);u===void 0&&(u=m(K,Ut));let mt=y?m(K,Ut):u;return mt.width=K,mt.height=Ut,mt.getContext("2d").drawImage(T,0,0,K,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+K+"x"+Ut+")."),mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,y,G,J,rt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=y;if(y===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),y===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){let Ut=rt?zr:ee.getTransfer(J);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Ut===ce?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(T,y){let G;return T?y===null||y===Oi||y===cr?G=i.DEPTH24_STENCIL8:y===Zn?G=i.DEPTH32F_STENCIL8:y===ar&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===cr?G=i.DEPTH_COMPONENT24:y===Zn?G=i.DEPTH_COMPONENT32F:y===ar&&(G=i.DEPTH_COMPONENT16),G}function R(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==mn&&T.minFilter!==In?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){let y=T.target;y.removeEventListener("dispose",A),U(y),y.isVideoTexture&&h.delete(y)}function D(T){let y=T.target;y.removeEventListener("dispose",D),v(y)}function U(T){let y=n.get(T);if(y.__webglInit===void 0)return;let G=T.source,J=f.get(G);if(J){let rt=J[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&b(T),Object.keys(J).length===0&&f.delete(G)}n.remove(T)}function b(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let G=T.source,J=f.get(G);delete J[y.__cacheKey],o.memory.textures--}function v(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let rt=0;rt<y.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=T.textures;for(let J=0,rt=G.length;J<rt;J++){let K=n.get(G[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(T)}let L=0;function z(){L=0}function E(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function N(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function B(T,y){let G=n.get(T);if(T.isVideoTexture&&_t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,T,y);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function F(T,y){let G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){X(G,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Z(T,y){let G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){X(G,T,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function k(T,y){let G=n.get(T);if(T.version>0&&G.__version!==T.version){j(G,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}let I={[Ws]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},W={[mn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},it={[Nd]:i.NEVER,[Vd]:i.ALWAYS,[Fd]:i.LESS,[_h]:i.LEQUAL,[Od]:i.EQUAL,[kd]:i.GEQUAL,[Bd]:i.GREATER,[zd]:i.NOTEQUAL};function q(T,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===In||y.magFilter===cl||y.magFilter===bo||y.magFilter===Fi||y.minFilter===In||y.minFilter===cl||y.minFilter===bo||y.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,I[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,I[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,I[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,W[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,W[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==bo&&y.minFilter!==Fi||y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function lt(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));let J=y.source,rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));let K=N(y);if(K!==T.__cacheKey){rt[K]===void 0&&(rt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),rt[K].usedTimes++;let Ut=rt[T.__cacheKey];Ut!==void 0&&(rt[T.__cacheKey].usedTimes--,Ut.usedTimes===0&&b(y)),T.__cacheKey=K,T.__webglTexture=rt[K].texture}return G}function Nt(T,y,G){return Math.floor(Math.floor(T/G)/y)}function bt(T,y,G,J){let K=T.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,J,y.data);else{K.sort((ut,At)=>ut.start-At.start);let Ut=0;for(let ut=1;ut<K.length;ut++){let At=K[Ut],kt=K[ut],Ft=At.start+At.count,wt=Nt(kt.start,y.width,4),Jt=Nt(At.start,y.width,4);kt.start<=Ft+1&&wt===Jt&&Nt(kt.start+kt.count-1,y.width,4)===wt?At.count=Math.max(At.count,kt.start+kt.count-At.start):(++Ut,K[Ut]=kt)}K.length=Ut+1;let mt=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ut=0,At=K.length;ut<At;ut++){let kt=K[ut],Ft=Math.floor(kt.start/4),wt=Math.ceil(kt.count/4),Jt=Ft%y.width,O=Math.floor(Ft/y.width),pt=wt,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Jt,O,pt,yt,G,J,y.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function X(T,y,G){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let rt=lt(T,y),K=y.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+G);let Ut=n.get(K);if(K.version!==Ut.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);let mt=ee.getPrimaries(ee.workingColorSpace),Pt=y.colorSpace===pi?null:ee.getPrimaries(y.colorSpace),Lt=y.colorSpace===pi||mt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ut=_(y.image,!1,s.maxTextureSize);ut=Xt(y,ut);let At=r.convert(y.format,y.colorSpace),kt=r.convert(y.type),Ft=w(y.internalFormat,At,kt,y.colorSpace,y.isVideoTexture);q(J,y);let wt,Jt=y.mipmaps,O=y.isVideoTexture!==!0,pt=Ut.__version===void 0||rt===!0,yt=K.dataReady,Rt=R(y,ut);if(y.isDepthTexture)Ft=x(y.format===hr,y.type),pt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Ft,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ut.width,ut.height,0,At,kt,null));else if(y.isDataTexture)if(Jt.length>0){O&&pt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ft,Jt[0].width,Jt[0].height);for(let dt=0,nt=Jt.length;dt<nt;dt++)wt=Jt[dt],O?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,At,kt,wt.data):e.texImage2D(i.TEXTURE_2D,dt,Ft,wt.width,wt.height,0,At,kt,wt.data);y.generateMipmaps=!1}else O?(pt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ft,ut.width,ut.height),yt&&bt(y,ut,At,kt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ut.width,ut.height,0,At,kt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ft,Jt[0].width,Jt[0].height,ut.depth);for(let dt=0,nt=Jt.length;dt<nt;dt++)if(wt=Jt[dt],y.format!==xn)if(At!==null)if(O){if(yt)if(y.layerUpdates.size>0){let Dt=Th(wt.width,wt.height,y.format,y.type);for(let qt of y.layerUpdates){let pe=wt.data.subarray(qt*Dt/wt.data.BYTES_PER_ELEMENT,(qt+1)*Dt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,qt,wt.width,wt.height,1,At,pe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,ut.depth,At,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ft,wt.width,wt.height,ut.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,ut.depth,At,kt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ft,wt.width,wt.height,ut.depth,0,At,kt,wt.data)}else{O&&pt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ft,Jt[0].width,Jt[0].height);for(let dt=0,nt=Jt.length;dt<nt;dt++)wt=Jt[dt],y.format!==xn?At!==null?O?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,At,kt,wt.data):e.texImage2D(i.TEXTURE_2D,dt,Ft,wt.width,wt.height,0,At,kt,wt.data)}else if(y.isDataArrayTexture)if(O){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ft,ut.width,ut.height,ut.depth),yt)if(y.layerUpdates.size>0){let dt=Th(ut.width,ut.height,y.format,y.type);for(let nt of y.layerUpdates){let Dt=ut.data.subarray(nt*dt/ut.data.BYTES_PER_ELEMENT,(nt+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ut.width,ut.height,1,At,kt,Dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,At,kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ut.width,ut.height,ut.depth,0,At,kt,ut.data);else if(y.isData3DTexture)O?(pt&&e.texStorage3D(i.TEXTURE_3D,Rt,Ft,ut.width,ut.height,ut.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,At,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ut.width,ut.height,ut.depth,0,At,kt,ut.data);else if(y.isFramebufferTexture){if(pt)if(O)e.texStorage2D(i.TEXTURE_2D,Rt,Ft,ut.width,ut.height);else{let dt=ut.width,nt=ut.height;for(let Dt=0;Dt<Rt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Ft,dt,nt,0,At,kt,null),dt>>=1,nt>>=1}}else if(Jt.length>0){if(O&&pt){let dt=Ht(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Ft,dt.width,dt.height)}for(let dt=0,nt=Jt.length;dt<nt;dt++)wt=Jt[dt],O?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At,kt,wt):e.texImage2D(i.TEXTURE_2D,dt,Ft,At,kt,wt);y.generateMipmaps=!1}else if(O){if(pt){let dt=Ht(ut);e.texStorage2D(i.TEXTURE_2D,Rt,Ft,dt.width,dt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ft,At,kt,ut);g(y)&&p(J),Ut.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function j(T,y,G){if(y.image.length!==6)return;let J=lt(T,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);let K=n.get(rt);if(rt.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+G);let Ut=ee.getPrimaries(ee.workingColorSpace),mt=y.colorSpace===pi?null:ee.getPrimaries(y.colorSpace),Pt=y.colorSpace===pi||Ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,At=[];for(let nt=0;nt<6;nt++)!Lt&&!ut?At[nt]=_(y.image[nt],!0,s.maxCubemapSize):At[nt]=ut?y.image[nt].image:y.image[nt],At[nt]=Xt(y,At[nt]);let kt=At[0],Ft=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),Jt=w(y.internalFormat,Ft,wt,y.colorSpace),O=y.isVideoTexture!==!0,pt=K.__version===void 0||J===!0,yt=rt.dataReady,Rt=R(y,kt);q(i.TEXTURE_CUBE_MAP,y);let dt;if(Lt){O&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Jt,kt.width,kt.height);for(let nt=0;nt<6;nt++){dt=At[nt].mipmaps;for(let Dt=0;Dt<dt.length;Dt++){let qt=dt[Dt];y.format!==xn?Ft!==null?O?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,qt.width,qt.height,Ft,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,Jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,qt.width,qt.height,Ft,wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,Jt,qt.width,qt.height,0,Ft,wt,qt.data)}}}else{if(dt=y.mipmaps,O&&pt){dt.length>0&&Rt++;let nt=Ht(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ut){O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At[nt].width,At[nt].height,Ft,wt,At[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,At[nt].width,At[nt].height,0,Ft,wt,At[nt].data);for(let Dt=0;Dt<dt.length;Dt++){let pe=dt[Dt].image[nt].image;O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,pe.width,pe.height,Ft,wt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,Jt,pe.width,pe.height,0,Ft,wt,pe.data)}}else{O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ft,wt,At[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Ft,wt,At[nt]);for(let Dt=0;Dt<dt.length;Dt++){let qt=dt[Dt];O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,Ft,wt,qt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,Jt,Ft,wt,qt.image[nt])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),K.__version=rt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ct(T,y,G,J,rt,K){let Ut=r.convert(G.format,G.colorSpace),mt=r.convert(G.type),Pt=w(G.internalFormat,Ut,mt,G.colorSpace),Lt=n.get(y),ut=n.get(G);if(ut.__renderTarget=y,!Lt.__hasExternalTextures){let At=Math.max(1,y.width>>K),kt=Math.max(1,y.height>>K);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,K,Pt,At,kt,y.depth,0,Ut,mt,null):e.texImage2D(rt,K,Pt,At,kt,0,Ut,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,ut.__webglTexture,0,gt(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,ut.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(T,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let J=y.depthTexture,rt=J&&J.isDepthTexture?J.type:null,K=x(y.stencilBuffer,rt),Ut=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=gt(y);ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,K,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,T)}else{let J=y.textures;for(let rt=0;rt<J.length;rt++){let K=J[rt],Ut=r.convert(K.format,K.colorSpace),mt=r.convert(K.type),Pt=w(K.internalFormat,Ut,mt,K.colorSpace),Lt=gt(y);G&&ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Pt,y.width,y.height):ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let rt=J.__webglTexture,K=gt(y);if(y.depthTexture.format===Xs)ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(y.depthTexture.format===hr)ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Zt(T){let y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=J}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let J=T.texture.mipmaps;J&&J.length>0?Et(y.__webglFramebuffer[0],T):Et(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),xt(y.__webglDepthbuffer[J],T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,K)}}else{let J=T.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xt(y.__webglDepthbuffer,T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,y,G){let J=n.get(T);y!==void 0&&ct(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Zt(T)}function P(T){let y=T.texture,G=n.get(T),J=n.get(y);T.addEventListener("dispose",D);let rt=T.textures,K=T.isWebGLCubeRenderTarget===!0,Ut=rt.length>1;if(Ut||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[mt]=[];for(let Pt=0;Pt<y.mipmaps.length;Pt++)G.__webglFramebuffer[mt][Pt]=i.createFramebuffer()}else G.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let mt=0;mt<y.mipmaps.length;mt++)G.__webglFramebuffer[mt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let mt=0,Pt=rt.length;mt<Pt;mt++){let Lt=n.get(rt[mt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ht(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let mt=0;mt<rt.length;mt++){let Pt=rt[mt];G.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);let Lt=r.convert(Pt.format,Pt.colorSpace),ut=r.convert(Pt.type),At=w(Pt.internalFormat,Lt,ut,Pt.colorSpace,T.isXRRenderTarget===!0),kt=gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,G.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),q(i.TEXTURE_CUBE_MAP,y);for(let mt=0;mt<6;mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)ct(G.__webglFramebuffer[mt][Pt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt);else ct(G.__webglFramebuffer[mt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let mt=0,Pt=rt.length;mt<Pt;mt++){let Lt=rt[mt],ut=n.get(Lt),At=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(At=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,ut.__webglTexture),q(At,Lt),ct(G.__webglFramebuffer,T,Lt,i.COLOR_ATTACHMENT0+mt,At,0),g(Lt)&&p(At)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(mt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),q(mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)ct(G.__webglFramebuffer[Pt],T,y,i.COLOR_ATTACHMENT0,mt,Pt);else ct(G.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,mt,0);g(y)&&p(mt),e.unbindTexture()}T.depthBuffer&&Zt(T)}function st(T){let y=T.textures;for(let G=0,J=y.length;G<J;G++){let rt=y[G];if(g(rt)){let K=S(T),Ut=n.get(rt).__webglTexture;e.bindTexture(K,Ut),p(K),e.unbindTexture()}}}let Q=[],tt=[];function et(T){if(T.samples>0){if(ht(T)===!1){let y=T.textures,G=T.width,J=T.height,rt=i.COLOR_BUFFER_BIT,K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(T),mt=y.length>1;if(mt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let Pt=T.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Lt]);let ut=n.get(y[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,rt,i.NEAREST),c===!0&&(Q.length=0,tt.length=0,Q.push(i.COLOR_ATTACHMENT0+Lt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(K),tt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Lt]);let ut=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function gt(T){return Math.min(s.maxSamples,T.samples)}function ht(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(T){let y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Xt(T,y){let G=T.colorSpace,J=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==es&&G!==pi&&(ee.getTransfer(G)===ce?(J!==xn||rt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=se,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ht}function hy(i,t){function e(n,s=pi){let r,o=ee.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lh)return i.BYTE;if(n===ch)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===fh)return i.RGB;if(n===xn)return i.RGBA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===Mo||n===So||n===wo||n===To)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===_l||n===xl||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===bl||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===bl)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===wl||n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Vl||n===Hl||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Dn({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new Bh,p={},S=e.getContextAttributes(),w=null,x=null,R=[],A=[],D=new ot,U=null,b=new Be;b.viewport=new le;let v=new Be;v.viewport=new le;let L=[b,v],z=new ja,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=R[X];return j===void 0&&(j=new Js,R[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=R[X];return j===void 0&&(j=new Js,R[X]=j),j.getGripSpace()},this.getHand=function(X){let j=R[X];return j===void 0&&(j=new Js,R[X]=j),j.getHandSpace()};function B(X){let j=A.indexOf(X.inputSource);if(j===-1)return;let ct=R[j];ct!==void 0&&(ct.update(X.inputSource,X.frame,l||o),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<R.length;X++){let j=A[X];j!==null&&(A[X]=null,R[X].disconnect(j))}E=null,N=null,g.reset();for(let X in p)delete p[X];t.setRenderTarget(w),d=null,f=null,u=null,s=null,x=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,xt=null,Et=null;S.depth&&(Et=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=S.stencil?hr:Xs,xt=S.stencil?cr:Oi);let Zt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Xn(f.textureWidth,f.textureHeight,{format:xn,type:Nn,depthTexture:new Kr(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ct={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Xn(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(X){for(let j=0;j<X.removed.length;j++){let ct=X.removed[j],xt=A.indexOf(ct);xt>=0&&(A[xt]=null,R[xt].disconnect(ct))}for(let j=0;j<X.added.length;j++){let ct=X.added[j],xt=A.indexOf(ct);if(xt===-1){for(let Zt=0;Zt<R.length;Zt++)if(Zt>=A.length){A.push(ct),xt=Zt;break}else if(A[Zt]===null){A[Zt]=ct,xt=Zt;break}if(xt===-1)break}let Et=R[xt];Et&&Et.connect(ct)}}let k=new C,I=new C;function W(X,j,ct){k.setFromMatrixPosition(j.matrixWorld),I.setFromMatrixPosition(ct.matrixWorld);let xt=k.distanceTo(I),Et=j.projectionMatrix.elements,Zt=ct.projectionMatrix.elements,se=Et[14]/(Et[10]-1),P=Et[14]/(Et[10]+1),st=(Et[9]+1)/Et[5],Q=(Et[9]-1)/Et[5],tt=(Et[8]-1)/Et[0],et=(Zt[8]+1)/Zt[0],gt=se*tt,ht=se*et,_t=xt/(-tt+et),Xt=_t*-tt;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Xt),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Ht=se+_t,T=P+_t,y=gt-Xt,G=ht+(xt-Xt),J=st*P/T*Ht,rt=Q*P/T*Ht;X.projectionMatrix.makePerspective(y,G,J,rt,Ht,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let j=X.near,ct=X.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),z.near=v.near=b.near=j,z.far=v.far=b.far=ct,(E!==z.near||N!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),E=z.near,N=z.far),z.layers.mask=X.layers.mask|6,b.layers.mask=z.layers.mask&3,v.layers.mask=z.layers.mask&5;let xt=X.parent,Et=z.cameras;it(z,xt);for(let Zt=0;Zt<Et.length;Zt++)it(Et[Zt],xt);Et.length===2?W(z,b,v):z.projectionMatrix.copy(b.projectionMatrix),q(X,z,xt)};function q(X,j,ct){ct===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(X){return p[X]};let lt=null;function Nt(X,j){if(h=j.getViewerPose(l||o),m=j,h!==null){let ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let xt=!1;ct.length!==z.cameras.length&&(z.cameras.length=0,xt=!0);for(let P=0;P<ct.length;P++){let st=ct[P],Q=null;if(d!==null)Q=d.getViewport(st);else{let et=u.getViewSubImage(f,st);Q=et.viewport,P===0&&(t.setRenderTargetTextures(x,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(x))}let tt=L[P];tt===void 0&&(tt=new Be,tt.layers.enable(P),tt.viewport=new le,L[P]=tt),tt.matrix.fromArray(st.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(st.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(z.matrix.copy(tt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),xt===!0&&z.cameras.push(tt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let P=u.getDepthInformation(ct[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<ct.length;P++){let st=ct[P].camera;if(st){let Q=p[st];Q||(Q=new jr,p[st]=Q);let tt=u.getCameraImage(st);Q.sourceTexture=tt}}}}for(let ct=0;ct<R.length;ct++){let xt=A[ct],Et=R[ct];xt!==null&&Et!==void 0&&Et.update(xt,j,l||o)}lt&&lt(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let bt=new Mf;bt.setAnimationLoop(Nt),this.setAnimationLoop=function(X){lt=X},this.dispose=function(){}}},ps=new Ln,fy=new me;function py(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,bh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,w):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,x=S.envMapRotation;w&&(g.envMap.value=w,ps.copy(x),ps.x*=-1,ps.y*=-1,ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(ps)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function my(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){let x=w.program;n.uniformBlockBinding(S,x)}function l(S,w){let x=s[S.id];x===void 0&&(m(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",g));let R=w.program;n.updateUBOMapping(S,R);let A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){let w=u();S.__bindingPointIndex=w;let x=i.createBuffer(),R=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let w=s[S.id],x=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,D=x.length;A<D;A++){let U=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,v=U.length;b<v;b++){let L=U[b];if(d(L,A,b,R)===!0){let z=L.__offset,E=Array.isArray(L.value)?L.value:[L.value],N=0;for(let B=0;B<E.length;B++){let F=E[B],Z=_(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,z+N,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,w,x,R){let A=S.value,D=w+"_"+x;if(R[D]===void 0)return typeof A=="number"||typeof A=="boolean"?R[D]=A:R[D]=A.clone(),!0;{let U=R[D];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[D]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function m(S){let w=S.uniforms,x=0,R=16;for(let D=0,U=w.length;D<U;D++){let b=Array.isArray(w[D])?w[D]:[w[D]];for(let v=0,L=b.length;v<L;v++){let z=b[v],E=Array.isArray(z.value)?z.value:[z.value];for(let N=0,B=E.length;N<B;N++){let F=E[N],Z=_(F),k=x%R,I=k%Z.boundary,W=k+I;x+=I,W!==0&&R-W<Z.storage&&(x+=R-W),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}let A=x%R;return A>0&&(x+=R-A),S.__size=x,S.__cache={},this}function _(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){let w=S.target;w.removeEventListener("dispose",g);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ao=class{constructor(t={}){let{canvas:e=Hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,R=!1;this._outputColorSpace=Oe;let A=0,D=0,U=null,b=-1,v=null,L=new le,z=new le,E=null,N=new Yt(0),B=0,F=e.width,Z=e.height,k=1,I=null,W=null,it=new le(0,0,F,Z),q=new le(0,0,F,Z),lt=!1,Nt=new Qs,bt=!1,X=!1,j=new me,ct=new C,xt=new le,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function se(){return U===null?k:1}let P=n;function st(M,V){return e.getContext(M,V)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){let V="webgl2";if(P=st(V,M),P===null)throw st(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,tt,et,gt,ht,_t,Xt,Ht,T,y,G,J,rt,K,Ut,mt,Pt,Lt,ut,At,kt,Ft,wt,Jt;function O(){Q=new D_(P),Q.init(),Ft=new hy(P,Q),tt=new E_(P,Q,t,Ft),et=new ly(P,Q),tt.reversedDepthBuffer&&f&&et.buffers.depth.setReversed(!0),gt=new F_(P),ht=new Zx,_t=new cy(P,Q,et,ht,tt,Ft,gt),Xt=new C_(x),Ht=new L_(x),T=new Hm(P),wt=new w_(P,T),y=new U_(P,T,gt,wt),G=new B_(P,y,T,gt),ut=new O_(P,tt,_t),mt=new A_(ht),J=new $x(x,Xt,Ht,Q,tt,wt,mt),rt=new py(x,ht),K=new Kx,Ut=new iy(Q),Lt=new S_(x,Xt,Ht,et,G,d,c),Pt=new oy(x,G,tt),Jt=new my(P,gt,tt,et),At=new T_(P,Q,gt),kt=new N_(P,Q,gt),gt.programs=J.programs,x.capabilities=tt,x.extensions=Q,x.properties=ht,x.renderLists=K,x.shadowMap=Pt,x.state=et,x.info=gt}O();let pt=new zh(x,P);this.xr=pt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(F,Z,!1))},this.getSize=function(M){return M.set(F,Z)},this.setSize=function(M,V,Y=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=M,Z=V,e.width=Math.floor(M*k),e.height=Math.floor(V*k),Y===!0&&(e.style.width=M+"px",e.style.height=V+"px"),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(F*k,Z*k).floor()},this.setDrawingBufferSize=function(M,V,Y){F=M,Z=V,k=Y,e.width=Math.floor(M*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,M,V)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(it)},this.setViewport=function(M,V,Y,$){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,V,Y,$),et.viewport(L.copy(it).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,V,Y,$){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,V,Y,$),et.scissor(z.copy(q).multiplyScalar(k).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(M){et.setScissorTest(lt=M)},this.setOpaqueSort=function(M){I=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,Y=!0){let $=0;if(M){let H=!1;if(U!==null){let ft=U.texture.format;H=ft===ml||ft===pl||ft===fl}if(H){let ft=U.texture.type,Tt=ft===Nn||ft===Oi||ft===ar||ft===cr||ft===ul||ft===dl,It=Lt.getClearColor(),Ct=Lt.getClearAlpha(),zt=It.r,Vt=It.g,Ot=It.b;Tt?(m[0]=zt,m[1]=Vt,m[2]=Ot,m[3]=Ct,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=zt,_[1]=Vt,_[2]=Ot,_[3]=Ct,P.clearBufferiv(P.COLOR,0,_))}else $|=P.COLOR_BUFFER_BIT}V&&($|=P.DEPTH_BUFFER_BIT),Y&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Lt.dispose(),K.dispose(),Ut.dispose(),ht.dispose(),Xt.dispose(),Ht.dispose(),G.dispose(),wt.dispose(),Jt.dispose(),J.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Hn),pt.removeEventListener("sessionend",xu),Xi.stop()};function yt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=gt.autoReset,V=Pt.enabled,Y=Pt.autoUpdate,$=Pt.needsUpdate,H=Pt.type;O(),gt.autoReset=M,Pt.enabled=V,Pt.autoUpdate=Y,Pt.needsUpdate=$,Pt.type=H}function dt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){let V=M.target;V.removeEventListener("dispose",nt),Dt(V)}function Dt(M){qt(M),ht.remove(M)}function qt(M){let V=ht.get(M).programs;V!==void 0&&(V.forEach(function(Y){J.releaseProgram(Y)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,Y,$,H,ft){V===null&&(V=Et);let Tt=H.isMesh&&H.matrixWorld.determinant()<0,It=gp(M,V,Y,$,H);et.setMaterial($,Tt);let Ct=Y.index,zt=1;if($.wireframe===!0){if(Ct=y.getWireframeAttribute(Y),Ct===void 0)return;zt=2}let Vt=Y.drawRange,Ot=Y.attributes.position,te=Vt.start*zt,ue=(Vt.start+Vt.count)*zt;ft!==null&&(te=Math.max(te,ft.start*zt),ue=Math.min(ue,(ft.start+ft.count)*zt)),Ct!==null?(te=Math.max(te,0),ue=Math.min(ue,Ct.count)):Ot!=null&&(te=Math.max(te,0),ue=Math.min(ue,Ot.count));let Ce=ue-te;if(Ce<0||Ce===1/0)return;wt.setup(H,$,It,Y,Ct);let xe,fe=At;if(Ct!==null&&(xe=T.get(Ct),fe=kt,fe.setIndex(xe)),H.isMesh)$.wireframe===!0?(et.setLineWidth($.wireframeLinewidth*se()),fe.setMode(P.LINES)):fe.setMode(P.TRIANGLES);else if(H.isLine){let Bt=$.linewidth;Bt===void 0&&(Bt=1),et.setLineWidth(Bt*se()),H.isLineSegments?fe.setMode(P.LINES):H.isLineLoop?fe.setMode(P.LINE_LOOP):fe.setMode(P.LINE_STRIP)}else H.isPoints?fe.setMode(P.POINTS):H.isSprite&&fe.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Bt=H._multiDrawStarts,Me=H._multiDrawCounts,ne=H._multiDrawCount,rn=Ct?T.get(Ct).bytesPerElement:1,Es=ht.get($).currentProgram.getUniforms();for(let on=0;on<ne;on++)Es.setValue(P,"_gl_DrawID",on),fe.render(Bt[on]/rn,Me[on])}else if(H.isInstancedMesh)fe.renderInstances(te,Ce,H.count);else if(Y.isInstancedBufferGeometry){let Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,Bt);fe.renderInstances(te,Ce,Me)}else fe.render(te,Ce)};function pe(M,V,Y){M.transparent===!0&&M.side===We&&M.forceSinglePass===!1?(M.side=je,M.needsUpdate=!0,qo(M,V,Y),M.side=hi,M.needsUpdate=!0,qo(M,V,Y),M.side=We):qo(M,V,Y)}this.compile=function(M,V,Y=null){Y===null&&(Y=M),p=Ut.get(Y),p.init(V),w.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==Y&&M.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let $=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ft=H.material;if(ft)if(Array.isArray(ft))for(let Tt=0;Tt<ft.length;Tt++){let It=ft[Tt];pe(It,Y,H),$.add(It)}else pe(ft,Y,H),$.add(ft)}),p=w.pop(),$},this.compileAsync=function(M,V,Y=null){let $=this.compile(M,V,Y);return new Promise(H=>{function ft(){if($.forEach(function(Tt){ht.get(Tt).currentProgram.isReady()&&$.delete(Tt)}),$.size===0){H(M);return}setTimeout(ft,10)}Q.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let re=null;function ni(M){re&&re(M)}function Hn(){Xi.stop()}function xu(){Xi.start()}let Xi=new Mf;Xi.setAnimationLoop(ni),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(M){re=M,pt.setAnimationLoop(M),M===null?Xi.stop():Xi.start()},pt.addEventListener("sessionstart",Hn),pt.addEventListener("sessionend",xu),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(V),V=pt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,V,U),p=Ut.get(M,w.length),p.init(V),w.push(p),j.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Nt.setFromProjectionMatrix(j,Rn,V.reversedDepth),X=this.localClippingEnabled,bt=mt.init(this.clippingPlanes,X),g=K.get(M,S.length),g.init(),S.push(g),pt.enabled===!0&&pt.isPresenting===!0){let ft=x.xr.getDepthSensingMesh();ft!==null&&fc(ft,V,-1/0,x.sortObjects)}fc(M,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(I,W),Zt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Zt&&Lt.addToRenderList(g,M),this.info.render.frame++,bt===!0&&mt.beginShadows();let Y=p.state.shadowsArray;Pt.render(Y,M,V),bt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,H=g.transmissive;if(p.setupLights(),V.isArrayCamera){let ft=V.cameras;if(H.length>0)for(let Tt=0,It=ft.length;Tt<It;Tt++){let Ct=ft[Tt];vu($,H,M,Ct)}Zt&&Lt.render(M);for(let Tt=0,It=ft.length;Tt<It;Tt++){let Ct=ft[Tt];yu(g,M,Ct,Ct.viewport)}}else H.length>0&&vu($,H,M,V),Zt&&Lt.render(M),yu(g,M,V);U!==null&&D===0&&(_t.updateMultisampleRenderTarget(U),_t.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(x,M,V),wt.resetDefaultState(),b=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],bt===!0&&mt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function fc(M,V,Y,$){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Nt.intersectsSprite(M)){$&&xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);let Tt=G.update(M),It=M.material;It.visible&&g.push(M,Tt,It,Y,xt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Nt.intersectsObject(M))){let Tt=G.update(M),It=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xt.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),xt.copy(Tt.boundingSphere.center)),xt.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(It)){let Ct=Tt.groups;for(let zt=0,Vt=Ct.length;zt<Vt;zt++){let Ot=Ct[zt],te=It[Ot.materialIndex];te&&te.visible&&g.push(M,Tt,te,Y,xt.z,Ot)}}else It.visible&&g.push(M,Tt,It,Y,xt.z,null)}}let ft=M.children;for(let Tt=0,It=ft.length;Tt<It;Tt++)fc(ft[Tt],V,Y,$)}function yu(M,V,Y,$){let H=M.opaque,ft=M.transmissive,Tt=M.transparent;p.setupLightsView(Y),bt===!0&&mt.setGlobalState(x.clippingPlanes,Y),$&&et.viewport(L.copy($)),H.length>0&&Xo(H,V,Y),ft.length>0&&Xo(ft,V,Y),Tt.length>0&&Xo(Tt,V,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function vu(M,V,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Xn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?lr:Nn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let ft=p.state.transmissionRenderTarget[$.id],Tt=$.viewport||L;ft.setSize(Tt.z*x.transmissionResolutionScale,Tt.w*x.transmissionResolutionScale);let It=x.getRenderTarget(),Ct=x.getActiveCubeFace(),zt=x.getActiveMipmapLevel();x.setRenderTarget(ft),x.getClearColor(N),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Lt.render(Y);let Vt=x.toneMapping;x.toneMapping=fi;let Ot=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),bt===!0&&mt.setGlobalState(x.clippingPlanes,$),Xo(M,Y,$),_t.updateMultisampleRenderTarget(ft),_t.updateRenderTargetMipmap(ft),Q.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ue=0,Ce=V.length;ue<Ce;ue++){let xe=V[ue],fe=xe.object,Bt=xe.geometry,Me=xe.material,ne=xe.group;if(Me.side===We&&fe.layers.test($.layers)){let rn=Me.side;Me.side=je,Me.needsUpdate=!0,bu(fe,Y,$,Bt,Me,ne),Me.side=rn,Me.needsUpdate=!0,te=!0}}te===!0&&(_t.updateMultisampleRenderTarget(ft),_t.updateRenderTargetMipmap(ft))}x.setRenderTarget(It,Ct,zt),x.setClearColor(N,B),Ot!==void 0&&($.viewport=Ot),x.toneMapping=Vt}function Xo(M,V,Y){let $=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ft=M.length;H<ft;H++){let Tt=M[H],It=Tt.object,Ct=Tt.geometry,zt=Tt.group,Vt=Tt.material;Vt.allowOverride===!0&&$!==null&&(Vt=$),It.layers.test(Y.layers)&&bu(It,V,Y,Ct,Vt,zt)}}function bu(M,V,Y,$,H,ft){M.onBeforeRender(x,V,Y,$,H,ft),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(x,V,Y,$,M,ft),H.transparent===!0&&H.side===We&&H.forceSinglePass===!1?(H.side=je,H.needsUpdate=!0,x.renderBufferDirect(Y,V,$,H,M,ft),H.side=hi,H.needsUpdate=!0,x.renderBufferDirect(Y,V,$,H,M,ft),H.side=We):x.renderBufferDirect(Y,V,$,H,M,ft),M.onAfterRender(x,V,Y,$,H,ft)}function qo(M,V,Y){V.isScene!==!0&&(V=Et);let $=ht.get(M),H=p.state.lights,ft=p.state.shadowsArray,Tt=H.state.version,It=J.getParameters(M,H.state,ft,V,Y),Ct=J.getProgramCacheKey(It),zt=$.programs;$.environment=M.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(M.isMeshStandardMaterial?Ht:Xt).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,zt===void 0&&(M.addEventListener("dispose",nt),zt=new Map,$.programs=zt);let Vt=zt.get(Ct);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===Tt)return Su(M,It),Vt}else It.uniforms=J.getUniforms(M),M.onBeforeCompile(It,x),Vt=J.acquireProgram(It,Ct),zt.set(Ct,Vt),$.uniforms=It.uniforms;let Ot=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ot.clippingPlanes=mt.uniform),Su(M,It),$.needsLights=xp(M),$.lightsStateVersion=Tt,$.needsLights&&(Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.directionalShadowMap.value=H.state.directionalShadowMap,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotShadowMap.value=H.state.spotShadowMap,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMap.value=H.state.pointShadowMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function Mu(M){if(M.uniformsList===null){let V=M.currentProgram.getUniforms();M.uniformsList=pr.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function Su(M,V){let Y=ht.get(M);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function gp(M,V,Y,$,H){V.isScene!==!0&&(V=Et),_t.resetTextureUnits();let ft=V.fog,Tt=$.isMeshStandardMaterial?V.environment:null,It=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:es,Ct=($.isMeshStandardMaterial?Ht:Xt).get($.envMap||Tt),zt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Vt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ot=!!Y.morphAttributes.position,te=!!Y.morphAttributes.normal,ue=!!Y.morphAttributes.color,Ce=fi;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ce=x.toneMapping);let xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=xe!==void 0?xe.length:0,Bt=ht.get($),Me=p.state.lights;if(bt===!0&&(X===!0||M!==v)){let Ze=M===v&&$.id===b;mt.setState($,M,Ze)}let ne=!1;$.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Me.state.version||Bt.outputColorSpace!==It||H.isBatchedMesh&&Bt.batching===!1||!H.isBatchedMesh&&Bt.batching===!0||H.isBatchedMesh&&Bt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Bt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Bt.instancing===!1||!H.isInstancedMesh&&Bt.instancing===!0||H.isSkinnedMesh&&Bt.skinning===!1||!H.isSkinnedMesh&&Bt.skinning===!0||H.isInstancedMesh&&Bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Bt.instancingMorph===!1&&H.morphTexture!==null||Bt.envMap!==Ct||$.fog===!0&&Bt.fog!==ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==mt.numPlanes||Bt.numIntersection!==mt.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==Vt||Bt.morphTargets!==Ot||Bt.morphNormals!==te||Bt.morphColors!==ue||Bt.toneMapping!==Ce||Bt.morphTargetsCount!==fe)&&(ne=!0):(ne=!0,Bt.__version=$.version);let rn=Bt.currentProgram;ne===!0&&(rn=qo($,V,H));let Es=!1,on=!1,Sr=!1,Se=rn.getUniforms(),dn=Bt.uniforms;if(et.useProgram(rn.program)&&(Es=!0,on=!0,Sr=!0),$.id!==b&&(b=$.id,on=!0),Es||v!==M){et.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Se.setValue(P,"projectionMatrix",M.projectionMatrix),Se.setValue(P,"viewMatrix",M.matrixWorldInverse);let tn=Se.map.cameraPosition;tn!==void 0&&tn.setValue(P,ct.setFromMatrixPosition(M.matrixWorld)),tt.logarithmicDepthBuffer&&Se.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Se.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,on=!0,Sr=!0)}if(H.isSkinnedMesh){Se.setOptional(P,H,"bindMatrix"),Se.setOptional(P,H,"bindMatrixInverse");let Ze=H.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Se.setValue(P,"boneTexture",Ze.boneTexture,_t))}H.isBatchedMesh&&(Se.setOptional(P,H,"batchingTexture"),Se.setValue(P,"batchingTexture",H._matricesTexture,_t),Se.setOptional(P,H,"batchingIdTexture"),Se.setValue(P,"batchingIdTexture",H._indirectTexture,_t),Se.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&Se.setValue(P,"batchingColorTexture",H._colorsTexture,_t));let fn=Y.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ut.update(H,Y,rn),(on||Bt.receiveShadow!==H.receiveShadow)&&(Bt.receiveShadow=H.receiveShadow,Se.setValue(P,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(dn.envMap.value=Ct,dn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(dn.envMapIntensity.value=V.environmentIntensity),on&&(Se.setValue(P,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&_p(dn,Sr),ft&&$.fog===!0&&rt.refreshFogUniforms(dn,ft),rt.refreshMaterialUniforms(dn,$,k,Z,p.state.transmissionRenderTarget[M.id]),pr.upload(P,Mu(Bt),dn,_t)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pr.upload(P,Mu(Bt),dn,_t),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Se.setValue(P,"center",H.center),Se.setValue(P,"modelViewMatrix",H.modelViewMatrix),Se.setValue(P,"normalMatrix",H.normalMatrix),Se.setValue(P,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Ze=$.uniformsGroups;for(let tn=0,pc=Ze.length;tn<pc;tn++){let qi=Ze[tn];Jt.update(qi,rn),Jt.bind(qi,rn)}}return rn}function _p(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function xp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,V,Y){let $=ht.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ht.get(M.texture).__webglTexture=V,ht.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){let Y=ht.get(M);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};let yp=P.createFramebuffer();this.setRenderTarget=function(M,V=0,Y=0){U=M,A=V,D=Y;let $=!0,H=null,ft=!1,Tt=!1;if(M){let Ct=ht.get(M);if(Ct.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(Ct.__webglFramebuffer===void 0)_t.setupRenderTarget(M);else if(Ct.__hasExternalTextures)_t.rebindTextures(M,ht.get(M.texture).__webglTexture,ht.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ot=M.depthTexture;if(Ct.__boundDepthTexture!==Ot){if(Ot!==null&&ht.has(Ot)&&(M.width!==Ot.image.width||M.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(M)}}let zt=M.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Tt=!0);let Vt=ht.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Vt[V])?H=Vt[V][Y]:H=Vt[V],ft=!0):M.samples>0&&_t.useMultisampledRTT(M)===!1?H=ht.get(M).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[Y]:H=Vt,L.copy(M.viewport),z.copy(M.scissor),E=M.scissorTest}else L.copy(it).multiplyScalar(k).floor(),z.copy(q).multiplyScalar(k).floor(),E=lt;if(Y!==0&&(H=yp),et.bindFramebuffer(P.FRAMEBUFFER,H)&&$&&et.drawBuffers(M,H),et.viewport(L),et.scissor(z),et.setScissorTest(E),ft){let Ct=ht.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ct.__webglTexture,Y)}else if(Tt){let Ct=V;for(let zt=0;zt<M.textures.length;zt++){let Vt=ht.get(M.textures[zt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+zt,Vt.__webglTexture,Y,Ct)}}else if(M!==null&&Y!==0){let Ct=ht.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ct.__webglTexture,Y)}b=-1},this.readRenderTargetPixels=function(M,V,Y,$,H,ft,Tt,It=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=ht.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){et.bindFramebuffer(P.FRAMEBUFFER,Ct);try{let zt=M.textures[It],Vt=zt.format,Ot=zt.type;if(!tt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-$&&Y>=0&&Y<=M.height-H&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+It),P.readPixels(V,Y,$,H,Ft.convert(Vt),Ft.convert(Ot),ft))}finally{let zt=U!==null?ht.get(U).__webglFramebuffer:null;et.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(M,V,Y,$,H,ft,Tt,It=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=ht.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(V>=0&&V<=M.width-$&&Y>=0&&Y<=M.height-H){et.bindFramebuffer(P.FRAMEBUFFER,Ct);let zt=M.textures[It],Vt=zt.format,Ot=zt.type;if(!tt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.bufferData(P.PIXEL_PACK_BUFFER,ft.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+It),P.readPixels(V,Y,$,H,Ft.convert(Vt),Ft.convert(Ot),0);let ue=U!==null?ht.get(U).__webglFramebuffer:null;et.bindFramebuffer(P.FRAMEBUFFER,ue);let Ce=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Gd(P,Ce,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ft),P.deleteBuffer(te),P.deleteSync(Ce),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,Y=0){let $=Math.pow(2,-Y),H=Math.floor(M.image.width*$),ft=Math.floor(M.image.height*$),Tt=V!==null?V.x:0,It=V!==null?V.y:0;_t.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Tt,It,H,ft),et.unbindTexture()};let vp=P.createFramebuffer(),bp=P.createFramebuffer();this.copyTextureToTexture=function(M,V,Y=null,$=null,H=0,ft=null){ft===null&&(H!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=H,H=0):ft=0);let Tt,It,Ct,zt,Vt,Ot,te,ue,Ce,xe=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(Y!==null)Tt=Y.max.x-Y.min.x,It=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,Vt=Y.min.y,Ot=Y.isBox3?Y.min.z:0;else{let fn=Math.pow(2,-H);Tt=Math.floor(xe.width*fn),It=Math.floor(xe.height*fn),M.isDataArrayTexture?Ct=xe.depth:M.isData3DTexture?Ct=Math.floor(xe.depth*fn):Ct=1,zt=0,Vt=0,Ot=0}$!==null?(te=$.x,ue=$.y,Ce=$.z):(te=0,ue=0,Ce=0);let fe=Ft.convert(V.format),Bt=Ft.convert(V.type),Me;V.isData3DTexture?(_t.setTexture3D(V,0),Me=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(_t.setTexture2DArray(V,0),Me=P.TEXTURE_2D_ARRAY):(_t.setTexture2D(V,0),Me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);let ne=P.getParameter(P.UNPACK_ROW_LENGTH),rn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Es=P.getParameter(P.UNPACK_SKIP_PIXELS),on=P.getParameter(P.UNPACK_SKIP_ROWS),Sr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ot);let Se=M.isDataArrayTexture||M.isData3DTexture,dn=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){let fn=ht.get(M),Ze=ht.get(V),tn=ht.get(fn.__renderTarget),pc=ht.get(Ze.__renderTarget);et.bindFramebuffer(P.READ_FRAMEBUFFER,tn.__webglFramebuffer),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,pc.__webglFramebuffer);for(let qi=0;qi<Ct;qi++)Se&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ht.get(M).__webglTexture,H,Ot+qi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ht.get(V).__webglTexture,ft,Ce+qi)),P.blitFramebuffer(zt,Vt,Tt,It,te,ue,Tt,It,P.DEPTH_BUFFER_BIT,P.NEAREST);et.bindFramebuffer(P.READ_FRAMEBUFFER,null),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||ht.has(M)){let fn=ht.get(M),Ze=ht.get(V);et.bindFramebuffer(P.READ_FRAMEBUFFER,vp),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,bp);for(let tn=0;tn<Ct;tn++)Se?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,H,Ot+tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,H),dn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ze.__webglTexture,ft,Ce+tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ze.__webglTexture,ft),H!==0?P.blitFramebuffer(zt,Vt,Tt,It,te,ue,Tt,It,P.COLOR_BUFFER_BIT,P.NEAREST):dn?P.copyTexSubImage3D(Me,ft,te,ue,Ce+tn,zt,Vt,Tt,It):P.copyTexSubImage2D(Me,ft,te,ue,zt,Vt,Tt,It);et.bindFramebuffer(P.READ_FRAMEBUFFER,null),et.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dn?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Me,ft,te,ue,Ce,Tt,It,Ct,fe,Bt,xe.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,ft,te,ue,Ce,Tt,It,Ct,fe,xe.data):P.texSubImage3D(Me,ft,te,ue,Ce,Tt,It,Ct,fe,Bt,xe):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ft,te,ue,Tt,It,fe,Bt,xe.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ft,te,ue,xe.width,xe.height,fe,xe.data):P.texSubImage2D(P.TEXTURE_2D,ft,te,ue,Tt,It,fe,Bt,xe);P.pixelStorei(P.UNPACK_ROW_LENGTH,ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Es),P.pixelStorei(P.UNPACK_SKIP_ROWS,on),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Sr),ft===0&&V.generateMipmaps&&P.generateMipmap(Me),et.unbindTexture()},this.initRenderTarget=function(M){ht.get(M).__webglFramebuffer===void 0&&_t.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_t.setTextureCube(M,0):M.isData3DTexture?_t.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_t.setTexture2DArray(M,0):_t.setTexture2D(M,0),et.unbindTexture()},this.resetState=function(){A=0,D=0,U=null,et.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Af={type:"change"},Hh={type:"start"},Rf={type:"end"},Zl=new Ri,Cf=new en,gy=Math.cos(70*ur.DEG2RAD),De=new C,sn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vh=1e-6,Jl=class extends xo{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new gn,this._lastTargetPosition=new C,this._quat=new gn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new C,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new C,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xy.bind(this),this._onPointerDown=_y.bind(this),this._onPointerUp=yy.bind(this),this._onContextMenu=Ey.bind(this),this._onMouseWheel=My.bind(this),this._onKeyDown=Sy.bind(this),this._onTouchStart=wy.bind(this),this._onTouchMove=Ty.bind(this),this._onMouseDown=vy.bind(this),this._onMouseMove=by.bind(this),this._interceptControlDown=Ay.bind(this),this._interceptControlUp=Cy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Af),this.update(),this.state=de.NONE}update(t=null){let e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=De.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<gy?this.object.lookAt(this.target):(Cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(Cf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vh||this._lastTargetPosition.distanceToSquared(this.target)>Vh?(this.dispatchEvent(Af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function _y(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function xy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function yy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rf),this.state=de.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Hh)}function by(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function My(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Hh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rf))}function Sy(i){this.enabled!==!1&&this._handleKeyDown(i)}function wy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Hh)}function Ty(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function Ey(i){this.enabled!==!1&&i.preventDefault()}function Ay(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gr={format:"house-studio-3d",version:1,name:"My little house",preset:"my-little-house",items:[{id:"item-mu824cnw-109",type:"basin",x:-2.7,z:.30000000000000004,rot:3.141592653589793,w:.6,d:.43,h:.84,color:"#c6ac83",open:!1},{id:"item-mu824cnw-110",type:"toilet",x:-3.3000000000000003,z:-2,rot:0,w:.38,d:.66,h:.78,color:"#eeeeea",open:!1},{id:"item-mu824cnw-112",type:"outdoor",x:-.65,z:-2.91,rot:0,w:1.15,d:.45,h:.75,color:"#bda178",open:!1},{id:"item-mu824cnw-113",type:"plant",x:-1.82,z:-2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-114",type:"plant",x:2.65,z:2.9,rot:0,w:.35,d:.35,h:.9,color:"#bac8ae",open:!1},{id:"item-mu824cnw-117",type:"chair",x:1.1,z:-.8,rot:1.5707963267948966,w:.59,d:.59,h:1.05,color:"#425956",open:!1},{id:"item-mu824cnw-118",type:"wardrobe",x:-1.9000000000000001,z:-.5,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu825pvw-126",type:"wardrobe",x:-1.9000000000000001,z:.6000000000000001,rot:1.5707963267948966,w:1.1,d:.55,h:2.15,color:"#343b3b",open:!1},{id:"item-mu8265dy-129",type:"desk160",x:1.8,z:-.8,rot:4.71238898038469,w:1.6,d:.75,h:.75,color:"#343b3b",open:!1},{id:"item-mu8276v5-130",type:"lamp",x:-3.3000000000000003,z:.30000000000000004,rot:0,w:.32,d:.32,h:1.55,color:"#ebdfc7",open:!1},{id:"item-mvlvr14r-44",type:"bed5",x:1.3,z:1.2000000000000002,rot:3.141592653589793,w:1.624,d:2.1,h:.88,color:"#d9d7c8"}],structure:{bounds:{left:-2.25,right:2.25,back:-2.375,front:2.375},bathroom:{x:-3,z:-.9,w:1.5,d:3},balcony:{depth:1},openings:[{id:"front-door",kind:"door",side:"back",at:1.1,w:2,h:2,sill:0},{id:"right-window",kind:"window",side:"right",at:-.7000000000000001,w:1,h:1.1,sill:1},{id:"left-window",kind:"window",side:"left",at:1.7000000000000002,w:1,h:1.1,sill:1},{id:"rear-window",kind:"window",side:"back",at:-1,w:1,h:1.1,sill:1},{id:"bath-window",kind:"window",side:"bath-left",at:-.95,w:.6,h:.45,sill:2.1},{id:"door-mu81p2c9",kind:"door",side:"front",at:-1.55,w:.8,h:2,sill:0},{id:"door-mu8209r5",kind:"door",side:"left",at:-1.55,w:.8,h:2,sill:0}],partitions:[],colors:{wall:"#eeeae0",floor:"#c5bfb4",foundation:"#b2b4a7",bathWall:"#e0ded4",bathFloor:"#2f302c",roof:"#454d48",bathRoof:"#525e55",balcony:"#a58b67",rail:"#866e50",door:"#9a8262",window:"#9dbab6",frame:"#38433f",trim:"#d8d3c8",garden:"#9ba990"}}};var Re=["front","back","left","right"],Fn=[...Re,...Re.map(i=>"bath-"+i)],Ry={front:"back",back:"front",left:"right",right:"left"},Bi={front:"Front",back:"Back",left:"Left",right:"Right"},mi=[{id:"marble",name:"Veined marble",detail:"Soft, flowing veins",scale:.8,roughness:.24},{id:"stone",name:"Natural stone",detail:"Layered mineral texture",scale:.6,roughness:.82},{id:"wood",name:"Wood planks",detail:"Long grain & board joints",scale:1.2,roughness:.64},{id:"herringbone",name:"Herringbone wood",detail:"Interlocking parquet",scale:1.2,roughness:.64},{id:"matte",name:"Matt porcelain",detail:"Soft, unpolished tiles",scale:.6,roughness:.98},{id:"concrete",name:"Microcement",detail:"Continuous, fine texture",scale:1.5,roughness:.96},{id:"terrazzo",name:"Terrazzo",detail:"Fine stone chips",scale:.6,roughness:.48},{id:"tiles",name:"Ceramic tiles",detail:"Classic square grout grid",scale:.3,roughness:.32}],Iy=Object.fromEntries(Fn.map(i=>[i,i==="back"||i==="bath-back"?"full":"low"]));function oe(i,t){let e=i.bathroom,n=t.startsWith("bath-")?{left:e.x-e.w/2,right:e.x+e.w/2,back:e.z-e.d/2,front:e.z+e.d/2}:i.bounds,s=t.replace("bath-","");return s==="front"||s==="back"?{axis:"x",start:n.left,end:n.right,fixed:s==="front"?n.front:n.back,side:t}:{axis:"z",start:n.back,end:n.front,fixed:s==="left"?n.left:n.right,side:t}}function zi(i){return i.bathroom.side?"bath-"+Ry[i.bathroom.side]:null}function If(i){return Fn.filter(t=>t!==zi(i)).map(t=>oe(i,t))}function Kn(i,t){let e=oe(i,t),n=[e.start,...(i.wallSplits?.[t]||[]).filter(s=>s>e.start+.05&&s<e.end-.05),e.end].sort((s,r)=>s-r);return n.slice(1).map((s,r)=>({...e,id:`segment-${t}-${r}`,index:r,start:n[r],end:s}))}function Kl(i,t){return Re.flatMap(e=>Kn(i,e)).find(e=>e.id===t)}function Ro(i){let t=i.bathroom,e=i.bounds;if(!Re.includes(t.side)){t.side=Re.reduce((a,c)=>{let l={left:Math.abs(t.x+t.w/2-e.left),right:Math.abs(t.x-t.w/2-e.right),front:Math.abs(t.z-t.d/2-e.front),back:Math.abs(t.z+t.d/2-e.back)};return l[c]<l[a]?c:a},"left");let o=t.side==="left"||t.side==="right";t.start=o?t.z-t.d/2:t.x-t.w/2,t.end=t.start+(o?t.d:t.w),t.depth=o?t.w:t.d}let n=oe(i,t.side),s=Math.min(n.end-n.start,Math.max(.8,t.end-t.start));t.start=Math.min(n.end-s,Math.max(n.start,t.start)),t.end=t.start+s;let r=(t.start+t.end)/2;return n.axis==="z"?(t.w=t.depth,t.d=s,t.x=n.fixed+(t.side==="left"?-1:1)*t.depth/2,t.z=r):(t.w=s,t.d=t.depth,t.x=r,t.z=n.fixed+(t.side==="back"?-1:1)*t.depth/2),t}function Io(i){let t=JSON.parse(JSON.stringify(i));Ro(t),t.wallSplits=Object.fromEntries(Re.map(r=>[r,[...new Set(t.wallSplits?.[r]||[])].sort((o,a)=>o-a)])),t.segmentColors||(t.segmentColors={}),t.finishes||(t.finishes={});for(let r of["floor","bathFloor"])t.finishes[r]={material:r==="floor"?"marble":"tiles",scale:r==="floor"?.8:.3,rotation:0,...t.finishes[r]};t.wallVisibility={...Iy,...t.wallVisibility};let e=t.bathroom,n=oe(t,e.side);for(let r of[e.start,e.end])r>n.start+.05&&r<n.end-.05&&!t.wallSplits[e.side].some(o=>Math.abs(o-r)<.03)&&t.wallSplits[e.side].push(r);t.wallSplits[e.side].sort((r,o)=>r-o);let s=zi(t);for(let r of t.openings.filter(o=>o.side===s))t.openings.some(o=>o.side===e.side&&o.kind===r.kind&&Math.abs(o.at-r.at)<.1)||t.openings.push({...r,side:e.side});return t.openings=t.openings.filter(r=>r.side!==s),t}function Pf(i,t,e){var a;if(!Re.includes(t)||!Number.isFinite(e))throw new Error("Choose an exterior wall and a split position.");let n=oe(i,t);if(e<n.start+.25||e>n.end-.25)throw new Error("Leave at least 25 cm at either end of the wall.");if(i.wallSplits||(i.wallSplits={}),(a=i.wallSplits)[t]||(a[t]=[]),i.wallSplits[t].length>=12)throw new Error("This wall already has 12 split points.");if(i.wallSplits[t].some(c=>Math.abs(c-e)<.05))throw new Error("There is already a split here.");let s=Kn(i,t).find(c=>e>c.start&&e<c.end);if(!s||e-s.start<.25||s.end-e<.25)throw new Error("Leave at least 25 cm in each wall section.");let r=Kn(i,t),o={...i.segmentColors};i.wallSplits[t].push(e),i.wallSplits[t].sort((c,l)=>c-l),i.segmentColors||(i.segmentColors={});for(let c of Kn(i,t)){let l=r.find(h=>(c.start+c.end)/2>=h.start&&(c.start+c.end)/2<=h.end);o[l?.id]&&(i.segmentColors[c.id]=o[l.id])}return Kn(i,t).find(c=>Math.abs(c.start-e)<.001)}function Gh(i,t,e,n,s=i.bathroom.depth||1.5){let r=oe(i,t);if(!Re.includes(t)||![e,n,s].every(Number.isFinite)||e<r.start-.001||n>r.end+.001||n-e<.8||s<.8||s>4)throw new Error("Choose at least 80 cm of wall and an extension depth from 0.8 to 4 m.");let o={...i.bathroom};i.bathroom={...o,side:t,start:e,end:n,depth:s},Ro(i);let a=i.bathroom;if(Math.max(Math.abs(a.x-a.w/2),Math.abs(a.x+a.w/2),Math.abs(a.z-a.d/2),Math.abs(a.z+a.d/2))>6)throw i.bathroom=o,new Error("The extension must stay within the 12 m planning area.");for(let l of i.openings.filter(h=>h.side.startsWith("bath-")))l.side="bath-"+t,l.at=(e+n)/2,l.w=Math.min(l.w,n-e-.3);if(i.openings=i.openings.filter(l=>l.id!=="bath-access-auto"||l.side===t),!i.openings.some(l=>l.kind==="door"&&l.side===t&&l.at-l.w/2>=e+.05&&l.at+l.w/2<=n-.05)){let l=Math.min(.8,n-e-.2),h=i.openings.filter(d=>d.side===t),f=[(e+n)/2,...Array.from({length:Math.ceil((n-e)*10)},(d,m)=>e+.1+l/2+m*.1)].find(d=>d-l/2>=e+.05&&d+l/2<=n-.05&&!h.some(m=>Math.abs(m.at-d)<(m.w+l)/2+.05));f!==void 0&&i.openings.push({id:"bath-access-auto",kind:"door",side:t,at:f,w:l,h:2,sill:0})}let c=Io(i);return Object.assign(i,c),i.bathroom}function Wh(i){let t=[];for(let n of i.openings){let s=oe(i,n.side);(n.at-n.w/2<s.start+.02||n.at+n.w/2>s.end-.02)&&t.push(`${n.id}: opening extends beyond its wall.`)}let e=i.bathroom;return e.side&&!i.openings.some(n=>n.side===e.side&&n.kind==="door"&&n.at-n.w/2>=e.start&&n.at+n.w/2<=e.end)&&t.push("Add a door within the bathroom wall section to connect the rooms."),t}var Wt=.38;var Ql=[{type:"bed3",name:"3 ft single bed",cat:"Sleep",w:.9144+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed35",name:"3.5 ft single bed",cat:"Sleep",w:1.0668+.1,d:2.1,h:.82,kind:"bed",color:"#d9d7c8"},{type:"bed5",name:"5 ft queen bed",cat:"Sleep",w:1.524+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"bed6",name:"6 ft king bed",cat:"Sleep",w:1.8288+.1,d:2.1,h:.88,kind:"bed",color:"#d9d7c8"},{type:"loft35",name:"3.5 ft loft bed",cat:"Sleep",w:1.17,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"loft5",name:"5 ft loft bed",cat:"Sleep",w:1.63,d:2.14,h:2.25,kind:"loft",color:"#c6ac83"},{type:"sofabed",name:"Convertible sofa bed",cat:"Sleep",w:1.55,d:.88,h:.84,kind:"sofabed",color:"#a7b7a0"},{type:"nightstand",name:"Bedside table",cat:"Storage",w:.4,d:.38,h:.48,kind:"nightstand",color:"#c6ac83"},{type:"desk140",name:"140 cm work desk",cat:"Work",w:1.4,d:.65,h:.75,kind:"desk",color:"#c6ac83"},{type:"desk160",name:"160 cm gaming desk",cat:"Work",w:1.6,d:.75,h:.75,kind:"gaming",color:"#343b3b"},{type:"chair",name:"Office chair",cat:"Work",w:.59,d:.59,h:1.05,kind:"chair",color:"#425956"},{type:"shelf",name:"Open bookshelf",cat:"Storage",w:.75,d:.32,h:1.65,kind:"shelf",color:"#c6ac83"},{type:"wardrobe",name:"Sliding wardrobe",cat:"Storage",w:1.1,d:.55,h:2.15,kind:"wardrobe",color:"#e7e6dc"},{type:"cabinet",name:"Low cabinet",cat:"Storage",w:1.2,d:.38,h:.64,kind:"cabinet",color:"#c6ac83"},{type:"sofa",name:"Two-seat sofa",cat:"Living",w:1.5,d:.78,h:.8,kind:"sofa",color:"#a7b7a0"},{type:"coffee",name:"Low coffee table",cat:"Living",w:.75,d:.45,h:.38,kind:"coffee",color:"#c6ac83"},{type:"tv",name:"TV & media cabinet",cat:"Living",w:1.2,d:.35,h:1.25,kind:"tv",color:"#c6ac83"},{type:"table",name:"Compact dining table",cat:"Living",w:.8,d:.7,h:.75,kind:"table",color:"#c6ac83"},{type:"stool",name:"Oak stool",cat:"Living",w:.35,d:.35,h:.46,kind:"stool",color:"#c6ac83"},{type:"fridge",name:"Compact refrigerator",cat:"Kitchen",w:.55,d:.52,h:1.2,kind:"fridge",color:"#e5e8e4"},{type:"pantry",name:"Mini pantry & sink",cat:"Kitchen",w:1.2,d:.58,h:.88,kind:"pantry",color:"#e7e6dc"},{type:"basin",name:"Vanity & basin",cat:"Bath",w:.6,d:.43,h:.84,kind:"basin",color:"#c6ac83"},{type:"toilet",name:"Toilet",cat:"Bath",w:.38,d:.66,h:.78,kind:"toilet",color:"#eeeeea"},{type:"shower",name:"Glass shower",cat:"Bath",w:1.2,d:.8,h:2.15,kind:"shower",color:"#b9cfcc"},{type:"plant",name:"Potted plant",cat:"Garden",w:.35,d:.35,h:.9,kind:"plant",color:"#bac8ae"},{type:"tallplant",name:"Tall indoor plant",cat:"Garden",w:.48,d:.48,h:1.5,kind:"plant",color:"#526d53"},{type:"outdoor",name:"Balcony bench",cat:"Garden",w:1.15,d:.45,h:.75,kind:"outdoor",color:"#bda178"},{type:"rug",name:"Woven area rug",cat:"Decor",w:1.5,d:1.2,h:.015,kind:"rug",color:"#c9c4aa"},{type:"lamp",name:"Floor lamp",cat:"Decor",w:.32,d:.32,h:1.55,kind:"lamp",color:"#ebdfc7"}],Ee=Object.fromEntries(Ql.map(i=>[i.type,i])),Py=0,Lo=()=>`item-${Date.now().toString(36)}-${++Py}`;function $h(i,t,e,n=0,s={}){let r=Ee[i];return{id:Lo(),type:i,x:t,z:e,rot:n,w:r.w,d:r.d,h:r.h,color:r.color,...s}}var _s=[{id:"my-little-house",name:"My little house",subtitle:"Your supplied room",description:"A work nook, queen bed & attached bathroom."}];var jn=[];function Qe(i,t,e,n){jn.push({x:i,z:t,w:e,d:n,rot:0})}Qe(-1.625,2.3,1.25,.15);Qe(1.625,2.3,1.25,.15);Qe((-2.25+1.25)/2,-2.3,3.5,.15);Qe(2.15,-2.3,.2,.15);Qe(2.175,0,.15,4.75);Qe(-2.175,(-2.375-.35)/2,.15,2.025);Qe(-2.175,(.45+2.375)/2,.15,1.925);Qe(-3.675,-.875,.15,3);Qe(-3,-2.3,1.5,.15);Qe(-3,.55,1.5,.15);Qe(-.5,-3.33,3.5,.07);Qe(2.15,-3.33,.2,.07);Qe(-2.21,-2.875,.07,1);Qe(2.21,-2.875,.07,1);Qe(.5,2.3,1,.045);var qh=[{name:"Front door",x:0,z:2.19,w:2,d:.75,rot:0},{name:"Rear door",x:1.65,z:-2.18,w:.8,d:.7,rot:0},{name:"Bathroom door",x:-2.16,z:.05,w:.85,d:.8,rot:0}],yn=null;function Lf(i){yn=i,jn.length=0,qh.length=0;let t=r=>{let o=oe(i,r),a=o.axis==="x",{start:c,end:l,fixed:h}=o,u=i.openings.filter(d=>d.side===r&&d.kind==="door").map(d=>({a:Math.max(c,d.at-d.w/2),b:Math.min(l,d.at+d.w/2)})).filter(d=>d.b>d.a).sort((d,m)=>d.a-m.a),f=c;for(let d of[...u,{a:l,b:l}]){if(d.a-f>.01){let m=(f+d.a)/2;jn.push(a?{x:m,z:h,w:d.a-f,d:.15,rot:0}:{x:h,z:m,w:.15,d:d.a-f,rot:0})}f=Math.max(f,d.b)}for(let d of i.openings.filter(m=>m.side===r&&m.kind==="door"))qh.push({name:d.id,x:a?d.at:h,z:a?h:d.at,w:a?d.w:.72,d:a?.72:d.w,rot:0})};for(let r of If(i))t(r.side);let e=i.openings.find(r=>r.id==="front-door"&&r.kind==="door"&&r.w>=1.3);if(e){let r=oe(i,e.side);jn.push(r.axis==="x"?{x:e.at+e.w/4,z:r.fixed,w:e.w/2,d:.05,rot:0}:{x:r.fixed,z:e.at+e.w/4,w:.05,d:e.w/2,rot:0})}let n=i.bounds,s=i.balcony.depth;jn.push({x:(n.left+n.right)/2-.52,z:n.back-s+.04,w:n.right-n.left-1.05,d:.07,rot:0});for(let r of[n.left,n.right])jn.push({x:r,z:n.back-s/2,w:.07,d:s,rot:0});for(let r of i.partitions)jn.push({x:r.x,z:r.z,w:r.w,d:r.d,rot:r.rot||0})}function On(i,t,e){let n=Math.cos(i.rot||0),s=Math.sin(i.rot||0);return{x:i.x+t*n+e*s,z:i.z-t*s+e*n}}function Ly(i,t,e){let n=Math.cos(i.rot||0),s=Math.sin(i.rot||0),r=t-i.x,o=e-i.z;return{x:r*n-o*s,z:r*s+o*n}}function Xh(i,t,e=0){let n=[i.rot||0,(i.rot||0)+Math.PI/2,t.rot||0,(t.rot||0)+Math.PI/2],s=a=>[[-a.w/2,-a.d/2],[a.w/2,-a.d/2],[a.w/2,a.d/2],[-a.w/2,a.d/2]].map(c=>On(a,...c)),r=s(i),o=s(t);return n.every(a=>{let c=Math.cos(a),l=-Math.sin(a),h=r.map(f=>f.x*c+f.z*l),u=o.map(f=>f.x*c+f.z*l);return Math.max(...h)+e>Math.min(...u)+.008&&Math.max(...u)+e>Math.min(...h)+.008})}function jl(i,t=!1,e=1.7){let n=Ee[i.type]?.kind;if(!n||n==="rug")return[];if(n==="loft"){let s=i.w/Ee[i.type].w,r=i.d/Ee[i.type].d,a=[[-i.w/2+.045*s,-i.d/2+.045*r],[i.w/2-.045*s,-i.d/2+.045*r],[-i.w/2+.045*s,i.d/2-.045*r],[i.w/2-.045*s,i.d/2-.045*r]].map(([c,l])=>({...On(i,c,l),w:.09*s,d:.09*r,rot:i.rot}));return a.push({...On(i,i.w/2-.23*s,i.d/2+.2*r),w:.42*s,d:.46*r,rot:i.rot}),t&&e>i.h*(1.53/2.25)&&a.push({...i}),a}if(n==="sofabed"&&i.open){let s=i.d/Ee[i.type].d;return[{...i,...On(i,0,.52*s),d:i.d+1.04*s}]}return t&&n==="shower"?[]:[i]}function tc(i,t){let e=[],n=jl(i);return n.some(s=>jn.some(r=>Xh(s,r)))&&e.push("Overlaps a wall or balcony railing."),n.some(s=>t.some(r=>r.id!==i.id&&jl(r).some(o=>Xh(s,o))))&&e.push("Overlaps another object."),n.some(s=>qh.some(r=>Xh(s,r)))&&e.push("Occupies a door clearance zone."),Ee[i.type].kind==="loft"&&e.push(`Loft: mattress about ${(i.h*1.88/2.25).toFixed(2)} m high. Check ceiling, guardrails & ladder.`),(Math.abs(i.x)>6||Math.abs(i.z)>6)&&e.push("Outside the illustrated garden area."),e}var Zh=i=>.3*i/1.7;function Po(i,t,e,n=.3){return e.some(s=>{let r=Ly(s,i,t),o=Math.max(Math.abs(r.x)-s.w/2,0),a=Math.max(Math.abs(r.z)-s.d/2,0);return o*o+a*a<n*n})}function Jh(i,t=1.7){return[...jn,...i.flatMap(e=>jl(e,!0,t))]}function qe(i,t){if(yn){let e=yn.bounds,n=yn.bathroom,s=yn.balcony.depth;return i>=e.left&&i<=e.right&&t>=e.back-s&&t<=e.front||i>=n.x-n.w/2&&i<=n.x+n.w/2&&t>=n.z-n.d/2&&t<=n.z+n.d/2?Wt:Math.abs(i-(e.left+e.right)/2)<1&&t>=e.front&&t<e.front+.825?Math.max(.02,Wt*(1-(t-e.front)/.825)):i>e.right-1.15&&i<e.right-.05&&t<e.back-s&&t>e.back-s-.825?Math.max(.02,Wt*(1-(e.back-s-t)/.825)):.025}return i>=-2.25&&i<=2.25&&t>=-3.375&&t<=2.375||i>=-3.75&&i<-2.25&&t>=-2.375&&t<=.625?Wt:Math.abs(i)<1.3&&t>=2.375&&t<3.2?Math.max(.02,Wt*(1-(t-2.375)/.825)):i>1.13&&i<2.16&&t<-3.375&&t>-4.2?Math.max(.02,Wt*(1-(-t-3.375)/.825)):.025}function Dy(i,t){return Math.abs(qe(i.x,i.z)-qe(t.x,t.z))<.14}var Yh=class{constructor(){this.v=[]}push(t){let e=this.v,n=e.push(t)-1;for(;n;){let s=n-1>>1;if(e[s].f<=t.f)break;e[n]=e[s],n=s}e[n]=t}pop(){let t=this.v,e=t[0],n=t.pop();if(t.length){let s=0;for(;s*2+1<t.length;){let r=s*2+1;if(r+1<t.length&&t[r+1].f<t[r].f&&r++,t[r].f>=n.f)break;t[s]=t[r],s=r}t[s]=n}return e}};function ec(i,t,e,n=1.7){if(![i.x,i.z,t.x,t.z].every(x=>Number.isFinite(x)&&Math.abs(x)<=6))return null;let s=.1,r=-6,o=6,a=121,c=Jh(e,n),l=Zh(n),h=(x,R)=>Math.round((R-r)/s)*a+Math.round((x-r)/s),u=x=>({x:r+x%a*s,z:r+Math.floor(x/a)*s}),f=h(i.x,i.z),d=h(t.x,t.z);if(f<0||f>=a*a||d<0||d>=a*a||Po(t.x,t.z,c,l))return null;let m=new Int8Array(a*a);m.fill(-1);function _(x){if(x<0||x>=a*a)return!1;if(m[x]<0){let R=u(x);m[x]=Po(R.x,R.z,c,l)?1:0}return!m[x]}if(!_(f)||!_(d))return null;let g=new Float32Array(a*a);g.fill(1/0),g[f]=0;let p=new Int32Array(a*a);p.fill(-1);let S=new Uint8Array(a*a),w=new Yh;for(w.push({i:f,f:0});w.v.length;){let x=w.pop().i;if(S[x])continue;if(S[x]=1,x===d){let U=[t];for(let b=d;b!==f;b=p[b])U.push(u(b));return U.push(i),U.reverse()}let R=u(x),A=x%a,D=Math.floor(x/a);for(let[U,b]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let v=A+U,L=D+b;if(v<0||v>=a||L<0||L>=a)continue;let z=L*a+v;if(S[z]||!_(z)||U&&b&&(!_(D*a+v)||!_(L*a+A)))continue;let E=u(z);if(!Dy(R,E))continue;let N=g[x]+Math.hypot(U,b);N>=g[z]||(g[z]=N,p[z]=x,w.push({i:z,f:N+Math.hypot(E.x-t.x,E.z-t.z)/s}))}}return null}function Kh(i,t){if(yn){let e=yn.bounds,n=yn.bathroom;if(i==="bathroom")return[{x:n.x,z:n.z,pose:"stand",label:"In the bathroom"}];if(i==="balcony")return[{x:e.right-.6,z:e.back-yn.balcony.depth/2,pose:"stand",label:"Taking a balcony break"}];if(i==="entrance"){let s=yn.openings.find(r=>r.kind==="door"&&r.side==="front")||yn.openings.find(r=>r.id==="front-door");if(s){let r=oe(yn,s.side),o={front:-1,back:1,left:1,right:-1}[s.side];return[{x:r.axis==="x"?s.at:r.fixed+o*.4,z:r.axis==="x"?r.fixed+o*.4:s.at,pose:"stand",label:"At the entrance"}]}return[]}}if(i==="bathroom")return[{x:-2.64,z:.05,pose:"stand",label:"In the bathroom"}];if(i==="balcony")return[{x:1.55,z:-2.88,pose:"stand",label:"Taking a balcony break"}];if(i==="entrance")return[{x:-.5,z:2.02,pose:"stand",label:"At the front door"}];if(i==="bed"){let e=t.find(s=>["bed","loft","sofabed"].includes(Ee[s.type].kind));if(!e)return[];if(Ee[e.type].kind==="loft")return[{...On(e,e.w/2-.23*e.w/Ee[e.type].w,e.d/2+.83*e.d/Ee[e.type].d),pose:"sleep",item:e,label:"Climbing to bed"}];let n=jl(e)[0];return[[-n.w/2-.42,.15],[n.w/2+.42,.15],[0,n.d/2+.42]].map(s=>({...On(n,...s),pose:"sleep",item:e,label:"Resting on the bed"}))}if(i==="desk"){let e=t.find(r=>["desk","gaming"].includes(Ee[r.type].kind));if(!e)return[];let s=t.filter(r=>Ee[r.type].kind==="chair").sort((r,o)=>Math.hypot(r.x-e.x,r.z-e.z)-Math.hypot(o.x-e.x,o.z-e.z))[0];return s&&Math.hypot(s.x-e.x,s.z-e.z)<1.8?[[-.72,0],[.72,0],[0,.72],[0,-.72]].map(r=>({...On(s,...r),pose:"sit",item:s,label:"Working at the desk"})):[{...On(e,0,e.d/2+.45),pose:"stand",label:"At the desk (add a chair to sit)"}]}return[]}function xs(i){if(!i||i.format!=="house-studio-3d"||i.version!==1||!Array.isArray(i.items)||i.items.length>180)throw new Error("Not a supported House Studio layout (maximum 180 items).");let t=new Set,e=i.items.map(s=>{if(!s||!Ee[s.type]||typeof s.id!="string"||s.id.length>100||t.has(s.id))throw new Error("Invalid or duplicate furniture ID.");t.add(s.id);for(let r of["x","z","rot","w","d","h"])if(typeof s[r]!="number"||!Number.isFinite(s[r]))throw new Error("Furniture dimensions must be finite numbers.");if(Math.abs(s.x)>6||Math.abs(s.z)>6||s.w<.1||s.w>4||s.d<.1||s.d>4||s.h<.01||s.h>3||Math.abs(s.rot)>100)throw new Error("Furniture dimensions or positions are outside the supported range.");if(!/^#[0-9a-f]{6}$/i.test(s.color))throw new Error("Invalid furniture colour.");return{id:s.id,type:s.type,x:s.x,z:s.z,rot:s.rot,w:s.w,d:s.d,h:s.h,color:s.color,open:!!s.open}}),n;if(i.structure!==void 0){let s=i.structure;if(!s||typeof s!="object"||!s.bounds||!s.bathroom||!s.balcony||!s.colors||!Array.isArray(s.openings)||!Array.isArray(s.partitions)||s.openings.length>40||s.partitions.length>30)throw new Error("Invalid structural layout.");for(let[c,l]of[[s.bounds,["left","right","back","front"]],[s.bathroom,["x","z","w","d"]],[s.balcony,["depth"]]])for(let h of l)if(!Number.isFinite(c[h])||Math.abs(c[h])>6)throw new Error("Invalid structural dimensions.");if(s.bounds.right-s.bounds.left<2||s.bounds.front-s.bounds.back<2||s.bathroom.w<.8||s.bathroom.d<.8||s.balcony.depth<.5||s.balcony.depth>3)throw new Error("Structural dimensions are too small or out of range.");let r=["wall","floor","foundation","bathWall","bathFloor","roof","bathRoof","balcony","rail","door","window","frame","trim","garden"];for(let c of r)if(!/^#[0-9a-f]{6}$/i.test(s.colors[c]||""))throw new Error("Invalid structural color.");let o=new Set;for(let c of s.openings){if(!c||typeof c.id!="string"||c.id.length>60||o.has(c.id)||!["door","window"].includes(c.kind)||!["front","back","left","right","bath-front","bath-back","bath-left","bath-right"].includes(c.side)||!["at","w","h","sill"].every(l=>Number.isFinite(c[l]))||Math.abs(c.at)>6||c.w<.4||c.w>3||c.h<.3||c.h>2.7||c.sill<0||c.sill+c.h>3)throw new Error("Invalid door or window.");o.add(c.id)}for(let c of s.partitions){if(!c||typeof c.id!="string"||c.id.length>60||o.has(c.id)||!["x","z","w","d","h","rot"].every(l=>Number.isFinite(c[l]))||Math.abs(c.x)>6||Math.abs(c.z)>6||c.w<.1||c.d<.1||c.h<.3||c.h>3||c.w>6||c.d>6||!/^#[0-9a-f]{6}$/i.test(c.color))throw new Error("Invalid partition.");o.add(c.id)}for(let[c,l]of Object.entries(s.colors))if(!/^#[0-9a-f]{6}$/i.test(l))throw new Error("Invalid structural color.");if(s.bathroom.side!==void 0&&(!Re.includes(s.bathroom.side)||!["start","end","depth"].every(c=>Number.isFinite(s.bathroom[c]))||s.bathroom.end-s.bathroom.start<.8||s.bathroom.depth<.8||s.bathroom.depth>4))throw new Error("Invalid bathroom attachment.");if(s.wallSplits!==void 0){if(!s.wallSplits||typeof s.wallSplits!="object"||Array.isArray(s.wallSplits))throw new Error("Invalid wall splits.");for(let[c,l]of Object.entries(s.wallSplits))if(!Re.includes(c)||!Array.isArray(l)||l.length>12||l.some(h=>!Number.isFinite(h)||Math.abs(h)>6))throw new Error("Invalid wall splits.")}if(s.segmentColors!==void 0){if(!s.segmentColors||typeof s.segmentColors!="object"||Array.isArray(s.segmentColors))throw new Error("Invalid segment colors.");for(let[c,l]of Object.entries(s.segmentColors))if(!/^segment-(front|back|left|right)-\d{1,2}$/.test(c)||!/^#[0-9a-f]{6}$/i.test(l))throw new Error("Invalid wall section color.")}if(s.finishes!==void 0){if(!s.finishes||typeof s.finishes!="object"||Array.isArray(s.finishes))throw new Error("Invalid floor finishes.");for(let[c,l]of Object.entries(s.finishes))if(!["floor","bathFloor"].includes(c)||!l||!mi.some(h=>h.id===l.material)||!Number.isFinite(l.scale)||l.scale<.15||l.scale>3||!Number.isFinite(l.rotation)||Math.abs(l.rotation)>360)throw new Error("Invalid floor finish.")}if(s.wallVisibility!==void 0){if(!s.wallVisibility||typeof s.wallVisibility!="object"||Array.isArray(s.wallVisibility))throw new Error("Invalid wall visibility.");for(let[c,l]of Object.entries(s.wallVisibility))if(![...Fn,...s.partitions.map(h=>h.id)].includes(c)||!["full","low","hidden"].includes(l))throw new Error("Invalid wall visibility.")}n=Io(s);let a=n.bathroom;if(Math.max(Math.abs(a.x-a.w/2),Math.abs(a.x+a.w/2),Math.abs(a.z-a.d/2),Math.abs(a.z+a.d/2))>6)throw new Error("The attached bathroom must stay within the 12 m planning area.");if(Object.values(n.wallSplits).some(c=>c.length>12))throw new Error("Maximum 12 split points per exterior wall.")}return{format:"house-studio-3d",version:1,name:typeof i.name=="string"?i.name.slice(0,60):"Imported layout",preset:_s.some(s=>s.id===i.preset)?i.preset:"custom",items:e,...n?{structure:n}:{}}}var Do=new C;function vn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Do.copy(t),Do[n]=0,Do.normalize();let l=.5*o/(o+a),h=1-Do.angleTo(i)/c;return Math.sign(Do[e])===1?h*l:a/(o+a)+l+l*(1-h)}var nc=class i extends Yn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new C,l=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new C,g=.5/o;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[S+0]=vn(_,l,"z","y",r,n),d[S+1]=1-vn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),d[S+0]=1-vn(_,l,"z","y",r,n),d[S+1]=1-vn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),d[S+0]=1-vn(_,l,"x","z",r,t),d[S+1]=vn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[S+0]=1-vn(_,l,"x","z",r,t),d[S+1]=1-vn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[S+0]=1-vn(_,l,"x","y",r,t),d[S+1]=1-vn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),d[S+0]=vn(_,l,"x","y",r,t),d[S+1]=1-vn(_,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var jh=new Map,Qh=new Map;function Vi(i,t=.75,e=0){let n=`${i}:${t}:${e}`;if(!jh.has(n)){let s=new _n({color:i,roughness:t,metalness:e});s.userData.shared=!0,jh.set(n,s)}return jh.get(n)}var ys=new _n({color:"#9dbab6",transparent:!0,opacity:.27,roughness:.15,metalness:.2,depthWrite:!1,side:We});ys.userData.shared=!0;function vt(i,t,e,n,s,r,o,a="#fff",c=0){let l=`${t.toFixed(4)},${e.toFixed(4)},${n.toFixed(4)},${c}`;if(!Qh.has(l)){let u=c?new nc(t,e,n,2,Math.min(c,t/3,e/3,n/3)):new Yn(t,e,n);u.userData.shared=!0,Qh.set(l,u)}let h=new ve(Qh.get(l),typeof a=="string"?Vi(a):a);return h.position.set(s,r,o),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function Ye(i,t,e,n,s,r,o,a,c=16){let l=new ve(new Qr(t,e,n,c),typeof a=="string"?Vi(a):a);return l.position.set(s,r,o),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function tu(i,t,e,n,s,r,o=[1,1,1]){let a=new ve(new os(t,1),Vi(r));return a.position.set(e,n,s),a.scale.set(...o),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function ki(i,t,e,n,s){let r=new C(...t),o=new C(...e),a=Ye(i,n,n,r.distanceTo(o),0,0,0,s,8);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new C(0,1,0),o.sub(r).normalize()),a}function ic(i,t,e,n,s="#b59a72",r=.05){for(let o of[-t/2+.055,t/2-.055])for(let a of[-e/2+.055,e/2-.055])vt(i,r,n,r,o,n/2,a,s,.009)}function eu(i){let t=Ee[i.type],e=t.kind,n=new Kt,s=t.w,r=t.d,o=t.h,a=i.color,c="#bda17a",l="#37433f",h="#ecebdc";if(n.userData.itemId=i.id,e==="bed"||e==="loft"){let u=e==="loft",f=u?1.88:.55,d=f-.25;if(u){for(let _ of[-s/2+.045,s/2-.045])for(let g of[-r/2+.045,r/2-.045])vt(n,.09,2.25,.09,_,1.125,g,a,.008);vt(n,s,.09,.07,0,2.2,-r/2,a);for(let _ of[-s/2,s/2])vt(n,.065,.07,r,_,2.2,0,a),vt(n,.04,.07,r,_,2.04,0,a);vt(n,s-.44,.07,.07,-.22,2.2,r/2,a);for(let _=.16;_<1.9;_+=.25)vt(n,.34,.04,.08,s/2-.23,_,r/2+.19,a);for(let _ of[s/2-.41,s/2-.05])ki(n,[_,.02,r/2+.4],[_,1.94,r/2+.02],.025,a)}else ic(n,s,r,.22,c,.075),vt(n,s,o,.085,0,o/2,-r/2+.03,c,.03),vt(n,s-.1,.35,.05,0,o-.22,-r/2+.081,a,.05);vt(n,s,.16,r,0,d-.02,0,c,.035),vt(n,s-.1,.22,r-.12,0,f-.11,.01,h,.065),vt(n,s-.13,.042,r*.6,0,f+.014,r*.13,a,.025),vt(n,s-.13,.028,.24,0,f+.034,r*.09,new _n({color:a,roughness:1}),.015);let m=s>1.4?2:1;for(let _=0;_<m;_++)vt(n,(s-.23)/m,.11,.39,(_-(m-1)/2)*(s-.12)/m,f+.045,-r/2+.34,"#f5f3e8",.055);if(!u)for(let _ of[-s*.24,s*.24])vt(n,s*.42,.15,.018,_,.275,r/2+.006,c,.015),vt(n,.11,.012,.012,_,.3,r/2+.02,l)}else if(e==="sofa"||e==="sofabed"||e==="outdoor"){let u=e==="outdoor";ic(n,s,r,.19,l,.045),vt(n,s-.03,.2,r,0,.27,0,u?c:a,.055),vt(n,s,.49,.15,0,.57,-r/2+.075,a,.06);for(let f of[-s/2+.075,s/2-.075])vt(n,.15,.38,r,f,.45,0,a,.04);for(let f of[-s*.22,s*.22])vt(n,s*.42,.13,r-.23,f,.42,.045,u?"#d9d7c4":a,.055);if(!u)for(let f of[-s*.22,s*.22]){let d=vt(n,s*.38,.3,.14,f,.63,-r/2+.19,a,.055);d.rotation.x=-.12}if(e==="sofabed"&&i.open){for(let f of[-s/2+.09,s/2-.09])vt(n,.045,.21,.045,f,.105,r/2+.96,l);vt(n,s-.14,.28,1.04,0,.29,r/2+.52,a,.05),vt(n,s-.19,.03,1,0,.443,r/2+.5,"#e7e4d7",.02)}}else if(["desk","gaming","table","coffee","stool","outdoor"].includes(e)){let u=e==="gaming";if(ic(n,s,r,o-.055,u?l:c,u?.055:.045),vt(n,s,.06,r,0,o-.03,0,a,.015),e==="desk"||u){vt(n,.23,.014,.16,0,o+.014,-r*.12,l,.005),vt(n,.04,.19,.04,0,o+.105,-r*.21,l),vt(n,.58,.35,.025,0,o+.32,-r*.23,l,.008);let f=new _n({color:u?"#315251":"#829f99",emissive:u?"#407787":"#51786c",emissiveIntensity:.3,roughness:.3});vt(n,.546,.313,.005,0,o+.32,-r*.23+.017,f,.003),vt(n,.38,.015,.13,-.06,o+.014,.11,"#454e49",.008);for(let d=0;d<8;d++)vt(n,.032,.004,.08,-.21+d*.043,o+.024,.1,"#bac7bb",.003);if(vt(n,.06,.025,.09,.23,o+.02,.13,l,.012),u){vt(n,.2,.45,.43,s/2-.2,.29,-.04,l,.018);for(let d of[.2,.37]){let m=Ye(n,.064,.064,.01,s/2-.2,d,.185,"#66bdbc");m.rotation.x=Math.PI/2}}else Ye(n,.036,.03,.085,-s/2+.14,o+.044,.07,"#e5e7df")}}else if(e==="chair"){Ye(n,.035,.035,.35,0,.2,0,l);for(let u=0;u<5;u++){let f=u*Math.PI*2/5;ki(n,[0,.09,0],[Math.sin(f)*.25,.065,Math.cos(f)*.25],.018,l),tu(n,.033,Math.sin(f)*.25,.04,Math.cos(f)*.25,l)}vt(n,.46,.085,.45,0,.47,0,a,.055),vt(n,.46,.52,.065,0,.77,-.2,a,.045);for(let u of[-.25,.25])vt(n,.028,.18,.03,u,.53,0,l),vt(n,.06,.035,.25,u,.63,.01,l,.012)}else if(["wardrobe","shelf","cabinet","nightstand","tv","pantry","basin"].includes(e)){let u=e==="tv"?.48:e==="pantry"?.83:e==="basin"?.66:o,f=e==="shelf";ic(n,s,r,.1,l,.035),vt(n,s,.045,r,0,.11,0,a,.008),vt(n,s,.045,r,0,u-.02,0,a,.008);for(let d of[-s/2+.017,s/2-.017])vt(n,.035,u-.14,r,d,u/2+.03,0,a,.005);if(vt(n,s-.03,u-.1,.025,0,u/2+.025,-r/2+.012,a),f)for(let d=.45;d<u-.1;d+=.39){vt(n,s-.05,.027,r,0,d,0,a);for(let m=0;m<5;m++)vt(n,.055,.18+m%3*.045,.16,-s*.32+m*.073,d+.1+m%3*.022,0,["#879d8c","#d6c7a7","#b4bbb2","#dedbd0","#657b79"][m])}else{let d=s>.8?2:1;for(let m=0;m<d;m++){let _=(m-(d-1)/2)*(s/d);vt(n,s/d-.027,u-.17,.025,_,u/2+.02,r/2-.012,a,.008),vt(n,.013,e==="wardrobe"?.38:.08,.018,_+s/d*.31,u/2+.05,r/2+.01,l,.004)}}if(e==="tv"&&(vt(n,.32,.02,.17,0,.5,0,l),vt(n,.045,.13,.04,0,.56,0,l),vt(n,1.07,.6,.045,0,.91,0,l,.012),vt(n,1.01,.54,.007,0,.91,.028,"#4a6664",.009)),e==="pantry"||e==="basin"){vt(n,s+.03,.05,r+.02,0,u+.02,0,"#f1efe5",.013);let d=e==="basin"?s-.12:.39,m=e==="basin"?0:-s*.22;if(vt(n,d,.045,r-.12,m,u+.05,0,"#748d88",.018),vt(n,d-.055,.008,r-.17,m,u+.075,0,"#bbd1c9",.015),ki(n,[m,u+.07,-r*.28],[m,u+.24,-r*.28],.015,l),ki(n,[m,u+.24,-r*.28],[m,u+.24,-r*.08],.015,l),e==="pantry"){vt(n,.39,.018,r-.13,s*.26,u+.058,0,l,.01);for(let _ of[-.1,.1])Ye(n,.07,.07,.003,s*.26,u+.069,_,"#63756d")}}}else if(e==="fridge")vt(n,s,o,r,0,o/2,0,a,.035),vt(n,s-.028,o*.72,.035,0,o*.39,r/2,a,.014),vt(n,s-.028,o*.23,.035,0,o*.89,r/2,a,.014),vt(n,.015,.2,.023,-s*.36,o*.61,r/2+.028,l,.005);else if(e==="toilet"){vt(n,.34,.5,.17,0,.45,-r/2+.075,a,.035),vt(n,.34,.055,.19,0,.73,-r/2+.075,"#f5f4f0",.015);let u=tu(n,.23,0,.34,.075,a,[.82,.47,1.14]);Ye(n,.1,.13,.27,0,.16,.01,a);let f=new ve(new ho(.145,.031,7,24),Vi("#f4f3ed"));f.rotation.x=Math.PI/2,f.scale.y=1.3,f.position.set(0,.435,.076),n.add(f),vt(n,.035,.008,.06,.09,.762,-r/2+.07,"#a4b0ab",.003)}else if(e==="shower"){vt(n,s,.035,r,0,.019,0,"#d5dcd4",.008),vt(n,.09,.003,.09,0,.04,0,l),vt(n,.018,o,r,-s/2,.035+o/2,0,ys),vt(n,.018,o,r,s/2,.035+o/2,0,ys),vt(n,s*.46,o,.018,-s*.27,.035+o/2,r/2,ys);for(let u of[-s/2,s/2])vt(n,.022,o,.022,u,o/2,r/2,l);ki(n,[s*.23,1.1,-r/2+.04],[s*.23,2.03,-r/2+.04],.013,l),ki(n,[s*.23,2.03,-r/2+.04],[s*.23,2.03,-r/2+.23],.013,l),Ye(n,.1,.1,.018,s*.23,2.01,-r/2+.23,l),vt(n,.16,.025,.05,s*.23,1.07,-r/2+.08,l,.01)}else if(e==="plant"){Ye(n,s*.34,s*.27,o*.28,0,o*.14,0,a),Ye(n,s*.29,s*.29,.02,0,o*.283,0,"#5b5742"),ki(n,[0,o*.28,0],[.02,o*.84,0],.009,"#786c42");for(let u=0;u<9;u++){let f=u*2.4,d=o*(.36+u*.06);ki(n,[0,d-.04,0],[Math.sin(f)*s*.28,d+.08,Math.cos(f)*s*.28],.007,"#7a8957");let m=tu(n,s*.25,Math.sin(f)*s*.33,d+.085,Math.cos(f)*s*.33,["#507454","#6f8b59","#869b69"][u%3],[.65,.45,1.6]);m.rotation.y=-f}}else if(e==="rug"){vt(n,s,.012,r,0,.01,0,a,.004);for(let u of[-r/2+.07,r/2-.07])vt(n,s-.05,.002,.025,0,.017,u,"#ebe6d2");for(let u=0;u<30;u++)vt(n,.002,.001,r-.04,-s/2+.02+u*(s-.04)/29,.017,0,"#d8d3be")}else e==="lamp"&&(Ye(n,.14,.15,.035,0,.02,0,l),Ye(n,.014,.014,o-.2,0,(o-.2)/2,0,l),Ye(n,.11,.17,.27,0,o-.16,0,a),Ye(n,.15,.15,.009,0,o-.295,0,"#fff3cc"));return n.scale.set(i.w/s,i.h/o,i.d/r),n.position.set(i.x,qe(i.x,i.z)+.015,i.z),n.rotation.y=i.rot,n}function Df(i){let t=new Kt,e=new Kt;t.add(e),i.add(t);let n=vt(e,.24,.28,.24,0,1.56,0,"#d9b999",.013),s=vt(e,.35,.57,.23,0,1.12,0,"#e0a76b",.014),r=[],o=[];for(let a of[-1,1]){let c=new Kt;c.position.set(a*.235,1.37,0),vt(c,.12,.56,.16,0,-.265,0,"#d9b999",.012),e.add(c),r.push(c);let l=new Kt;l.position.set(a*.1,.835,0),vt(l,.16,.835,.19,0,-.4175,0,"#405b55",.012),e.add(l),o.push(l)}return t.position.set(0,Wt+.015,1.4),{root:t,body:e,head:n,torso:s,arms:r,legs:o,reset(){e.rotation.set(0,0,0),e.position.set(0,0,0);for(let a of[...r,...o])a.rotation.set(0,0,0)}}}function nu(i){i.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),t.material&&!t.material.userData.shared&&t.material.dispose()})}var Uf={house:"m3 10 9-7 9 7v11H3Z M9 21v-8h6v8",orbit:"M21 12a9 9 0 1 1-9-9 M15 3h6v6 M7 12h10 M12 7v10",chair:"M6 12V4h12v8 M4 12h16v5H4Z M6 17v4 M18 17v4",person:"M10 3h4v4h-4z M8 10h8v6H8z M5 10v6 M19 10v6 M9 16v6 M15 16v6",save:"M4 3h13l4 4v14H3V3Z M7 3v7h10V3 M7 21v-7h10v7",expand:"M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5",collapse:"M3 8h5V3 M16 3v5h5 M21 16h-5v5 M8 21v-5H3",help:"M9 8a3 3 0 0 1 6 0c0 3-3 2-3 5 M12 17h.01 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",sun:"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M18 18l1 1 M5 19l1-1 M18 6l1-1",sunset:"M3 17h18 M4 21h16 M7 17a5 5 0 0 1 10 0 M12 3v6 M9 6l3 3 3-3 M3 10l2 2 M21 10l-2 2",moon:"M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z",arrow:"M4 12h16 M14 6l6 6-6 6",search:"M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0 M15 15l6 6",bed:"M3 18V7 M21 18V9 M3 14h18 M3 9h6v5 M9 9h12 M3 18v3 M21 18v3",monitor:"M3 4h18v13H3Z M12 17v4 M8 21h8",bath:"M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z M5 12V5a2 2 0 0 1 4 0 M6 20v2 M18 20v2",leaf:"M20 3C6 3 3 9 5 16s15 5 15-13Z M5 21l10-11",door:"M5 21V3h14v18 M2 21h20 M14 12h.1",route:"M6 6h10a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h10 M5 3h3v6H5Z M17 19h3v4h-3z",reset:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",download:"M12 3v12 M7 10l5 5 5-5 M4 16v5h16v-5",upload:"M12 16V3 M7 8l5-5 5 5 M4 16v5h16v-5",roof:"m2 12 10-9 10 9 M5 11v10h14V11",walls:"M3 4h18v16H3Z M3 9h18 M3 15h18 M9 4v5 M15 9v6 M8 15v5",ruler:"m3 17 14-14 4 4L7 21Z M7 13l2 2 M11 9l2 2 M15 5l2 2",dimensions:"M4 7V3h16v4 M4 17v4h16v-4 M8 12h8 M4 10v4 M20 10v4",cube:"m12 3 9 5v9l-9 5-9-5V8Z M3 8l9 5 9-5 M12 13v9",plan:"M3 3h18v18H3Z M3 12h9V3 M12 21v-5",focus:"M3 8V3h5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5 M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",undo:"M3 10h11a6 6 0 0 1 0 12 M8 5l-5 5 5 5",redo:"M21 10H10a6 6 0 0 0 0 12 M16 5l5 5-5 5",play:"m8 4 12 8-12 8Z",pause:"M7 4v16 M17 4v16",camera:"M3 7h4l2-3h6l2 3h4v14H3Z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0",close:"M6 6l12 12 M18 6 6 18",copy:"M8 8h13v13H8Z M16 8V3H3v13h5",trash:"M3 6h18 M6 6l1 15h10l1-15 M9 6V3h6v3 M10 10v7 M14 10v7",rotate:"M3 10a9 9 0 1 1 2 9 M3 3v7h7",check:"m5 12 4 4 10-10"},gi=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Uf[i]||Uf.cube}"/></svg>`;function Nf(i=document){i.querySelectorAll("[data-icon]").forEach(t=>{t.innerHTML=gi(t.dataset.icon)})}var iu=new Map;function Uy(i){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}function sc(i,t,e=19){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),c=o*o*(3-2*o),l=(f,d)=>((Math.imul(f+e,374761393)^Math.imul(d-e,668265263))>>>0)/4294967296,h=l(n,s)*(1-a)+l(n+1,s)*a,u=l(n,s+1)*(1-a)+l(n+1,s+1)*a;return h*(1-c)+u*c}function Ff(i,t){return sc(i/151,t/151)*.53+sc(i/68,t/68,71)*.27+sc(i/29,t/29,137)*.14+sc(i/11,t/11,251)*.06}function Of(i){if(iu.has(i))return iu.get(i);let t=document.createElement("canvas"),e=512;t.width=t.height=e;let n=t.getContext("2d"),s=Uy(271+mi.findIndex(c=>c.id===i)*7919),r=(c,l=1)=>`rgba(${c},${c},${c},${l})`;n.fillStyle="#f7f7f7",n.fillRect(0,0,e,e);let o=n.getImageData(0,0,e,e);for(let c=0;c<e;c++)for(let l=0;l<e;l++){let h=Math.sin(l*.021+Math.sin(c*.013)*2)+Math.sin(c*.031-l*.014)+Math.cos((l+c)*.014),u=i==="marble"||i==="stone"?Ff(l,c):.5,f=i==="stone"?212+u*42:i==="concrete"?238+h*2:i==="marble"?234+u*24:246,d=i==="concrete"||i==="stone"?9:3,m=Math.max(0,Math.min(255,f+(s()-.5)*d)),_=(c*e+l)*4;o.data[_]=o.data[_+1]=o.data[_+2]=m,o.data[_+3]=255}if(n.putImageData(o,0,0),i==="marble"||i==="stone")for(let c=0;c<(i==="marble"?9:5);c++){let l=s()*e*1.8-e*.4,h=s()*7,u=s()*.9-.45,f=Array.from({length:65},(d,m)=>{let _=m*e/64;return[l+u*_+(Ff(_+h*101,h*79)-.5)*170+Math.sin(_*.07+h)*2,_]});for(let[d,m]of[[18,.018],[5,.065],[.7,.24]])n.beginPath(),f.forEach(([_,g],p)=>p?n.lineTo(_,g):n.moveTo(_,g)),n.strokeStyle=r(i==="marble"?116:150,m),n.lineWidth=d,n.stroke();if(c%2===0){let[d,m]=f[20];n.beginPath(),n.moveTo(d,m),n.bezierCurveTo(d-12,m+40,d-70,m+50,d-87,m+115),n.lineWidth=.6,n.strokeStyle=r(130,.18),n.stroke()}}let a=(c,l,h,u,f)=>{n.save(),n.beginPath(),n.rect(c,l,h,u),n.clip(),n.fillStyle=r(217+Math.floor(f*30)),n.fillRect(c,l,h,u);for(let d=0;d<32;d++){let m=l+d*u/30;n.beginPath();for(let _=0;_<=h;_+=8){let g=m+Math.sin(_*.025+f*8+d*.3)*u*.027;_?n.lineTo(c+_,g):n.moveTo(c+_,g)}n.strokeStyle=r(120,.05+d%4*.012),n.lineWidth=.45+d%3*.35,n.stroke()}n.strokeStyle=r(95,.24),n.lineWidth=1.8,n.strokeRect(c,l,h,u),n.restore()};if(i==="wood")for(let c=0;c<4;c++){let l=c%2?e*.38:0;for(let h=-1;h<2;h++)a(h*e+l,c*e/4,e,e/4,s())}if(i==="herringbone"){n.save(),n.translate(e/2,e/2),n.rotate(Math.PI/4);let c=e/8;for(let l=-12;l<12;l++)for(let h=-12;h<12;h++)((l-h)%6+6)%6===0&&a(l*c,h*c,3*c,c,s()),((l-h)%6+6)%6===3&&(n.save(),n.translate((l+1)*c,h*c),n.rotate(Math.PI/2),a(0,0,3*c,c,s()),n.restore());n.restore()}if(i==="terrazzo")for(let c=0;c<850;c++){let l=s()*e,h=s()*e,u=1.3+s()*5;n.beginPath();for(let f=0;f<5;f++){let d=f/5*Math.PI*2,m=u*(.5+s()*.5);f?n.lineTo(l+Math.cos(d)*m,h+Math.sin(d)*m):n.moveTo(l+Math.cos(d)*m,h+Math.sin(d)*m)}n.closePath(),n.fillStyle=r(125+Math.floor(s()*125),.45),n.fill()}return["marble","stone","tiles","matte"].includes(i)&&(n.strokeStyle=r(i==="tiles"?130:170,.45),n.lineWidth=i==="tiles"?5:2.3,n.strokeRect(0,0,e,e),n.strokeStyle="rgba(255,255,255,.45)",n.lineWidth=1,n.strokeRect(3,3,e-6,e-6)),iu.set(i,t),t}function Bf(i,t,e,n){let s=mi.find(d=>d.id===i.material)||mi[0],r=new is(Of(s.id));r.wrapS=r.wrapT=Ws,r.repeat.set(e/i.scale,n/i.scale),r.center.set(.5,.5),r.rotation=i.rotation*Math.PI/180,r.colorSpace=Oe,r.anisotropy=4;let o=Math.cos(r.rotation),a=Math.sin(r.rotation),c=o*e/i.scale,l=-a*n/i.scale,h=a*e/i.scale,u=o*n/i.scale;r.matrixAutoUpdate=!1,r.matrix.set(c,l,.5-(c+l)/2,h,u,.5-(h+u)/2,0,0,1);let f=new _n({color:t,map:r,roughness:s.roughness,metalness:0});return f.userData.floorTexture=!0,f}function zf(i,t){let e=Of(i),n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,96,96),s.globalCompositeOperation="multiply";let r=["marble","stone","matte","tiles"].includes(i)?2:1;for(let o=0;o<r;o++)for(let a=0;a<r;a++)s.drawImage(e,a*96/r,o*96/r,96/r,96/r);return n.toDataURL()}var Ny=Io(gr.structure);var _i=()=>JSON.parse(JSON.stringify(Ny));function su(i,t){Lf(t);let e=new Kt,n=new Kt,s=new Kt,r=new Kt,o=new Kt,a=new Kt,c=new Kt;i.add(e,n,s,r,o,a,c);let l=t.bounds,h=t.bathroom,u=t.colors,f=l.right-l.left,d=l.front-l.back,m=(l.left+l.right)/2,_=(l.front+l.back)/2,g=.15;function p(I,W){return I.userData.structureId=W,I}function S(I,W,it,q,lt,Nt,bt,X,j,ct=0){let xt=vt(I,W,it,q,lt,Nt,bt,X,ct);return j&&p(xt,j),xt}let w={};function x(I,W,it,q,lt,Nt){let bt=Bf(t.finishes[lt],u[lt],I,W),X=new ve(new ui(I,W),bt);X.rotation.x=-Math.PI/2,X.position.set(it,Wt+.008,q),X.receiveShadow=!0,p(X,Nt),e.add(X)}S(e,f,.36,d,m,.18,_,u.foundation,"floor",.025),x(f-.15,d-.15,m,_,"floor","floor"),S(e,h.w,.36,h.d,h.x,.18,h.z,u.foundation,"bathroom"),x(h.w-.15,h.d-.15,h.x,h.z,"bathFloor","bathroom");let R=l.back-t.balcony.depth/2;S(e,f,.12,t.balcony.depth,m,Wt-.07,R,u.balcony,"balcony",.008);for(let I=l.back-t.balcony.depth+.07;I<l.back;I+=.17)S(e,f-.08,.004,.009,m,Wt-.007,I,u.rail,"balcony");let A=l.back-t.balcony.depth+.055;for(let I=l.left+.1;I<l.right-.05;I+=.23)I>l.right-1.1&&I<l.right-.17||S(e,.035,.82,.035,I,Wt+.42,A,u.rail,"balcony");S(e,f-.9,.055,.07,m-.43,Wt+.86,A,u.rail,"balcony");for(let I of[l.left+.04,l.right-.04]){S(e,.05,.08,t.balcony.depth,I,Wt+.86,R,u.rail,"balcony");for(let W=A+.1;W<l.back-.05;W+=.23)S(e,.04,.8,.04,I,Wt+.42,W,u.rail,"balcony")}let D=[];for(let[I,W]of[[m-.9,_-.6],[m+.9,_+.8],[h.x,h.z],[m,R]]){Ye(c,.065,.065,.05,I,Wt+2.77,W,"#f5e8d3");let it=new rr("#ffdfaa",0,5,2);it.position.set(I,Wt+2.5,W),c.add(it),D.push(it)}let U={},b={};function v(I,W,it,q,lt,Nt,bt,X,j){let ct=[it,q,...Nt.flatMap(xt=>[Math.max(it,xt.at-xt.w/2),Math.min(q,xt.at+xt.w/2)])].filter(xt=>xt>=it&&xt<=q).sort((xt,Et)=>xt-Et);for(let xt=1;xt<ct.length;xt++){let Et=ct[xt-1],Zt=ct[xt];if(Zt-Et<.002)continue;let se=(Et+Zt)/2,P=Nt.find(Q=>se>Q.at-Q.w/2&&se<Q.at+Q.w/2),st=P?[[0,P.sill],[P.sill+P.h,X]]:[[0,X]];for(let[Q,tt]of st){if(tt-Q<.002)continue;let et=W==="x"?Zt-Et:g,gt=W==="x"?g:Zt-Et,ht=W==="x"?se:lt,_t=W==="x"?lt:se;S(I,et,tt-Q,gt,ht,Wt+(tt+Q)/2,_t,bt,j)}}}function L(I){let W=oe(t,I.side),it=W.axis==="x",q=it?[I.at,W.fixed]:[W.fixed,I.at],lt=q[0],Nt=q[1],bt=new Kt;bt.position.set(lt,Wt+I.sill,Nt),it||(bt.rotation.y=-Math.PI/2),a.add(bt),bt.userData.structureId=I.id,U[I.id]=bt;let X=u.frame,j=I.color||(I.kind==="window"?u.window:u.door);for(let ct of[-I.w/2,I.w/2])S(bt,.055,I.h,.1,ct,I.h/2,0,X,I.id);for(let ct of[0,I.h])S(bt,I.w+.06,.055,.1,0,ct,0,X,I.id);if(I.kind==="window")S(bt,I.w-.06,I.h-.08,.024,0,I.h/2,0,new _n({color:j,transparent:!0,opacity:.32,depthWrite:!1,side:We}),I.id),S(bt,.027,I.h,.09,0,I.h/2,0,X,I.id);else if(I.id==="front-door"&&I.w>=1.3){let ct=I.w/2-.04,xt=new Kt;bt.add(xt),S(xt,ct,I.h-.08,.029,-I.w/4,I.h/2,0,I.color?j:ys,I.id),S(xt,.025,I.h-.05,.05,-I.w/2+.035,I.h/2,0,X,I.id),S(xt,.025,.16,.05,-.06,I.h*.51,.045,X,I.id),S(bt,ct,I.h-.08,.029,I.w/4,I.h/2,-.015,I.color?j:ys,I.id),S(bt,.028,I.h-.05,.05,I.w/2-.04,I.h/2,0,X,I.id),b[I.id]=xt}else{let ct=new Kt;ct.position.x=-I.w/2+.04,bt.add(ct),S(ct,I.w-.08,I.h-.08,.032,I.w/2-.04,I.h/2,0,j,I.id),S(ct,.022,.13,.08,I.w-.2,I.h*.51,.05,X,I.id),b[I.id]=ct}}for(let I of Fn.filter(W=>W!==zi(t))){let W=oe(t,I),it=t.openings.filter(X=>X.side===I&&X.at+X.w/2>W.start&&X.at-X.w/2<W.end),q=I.startsWith("bath-"),lt=q?2.74:3,Nt=new Kt,bt=new Kt;n.add(Nt),s.add(bt),w[I]={full:Nt,low:bt};for(let X of q?[{...W,id:I+"-wall"}]:Kn(t,I)){let j=X.id,ct=t.segmentColors?.[j]||(q?u.bathWall:u[I+"Wall"]||u.wall);v(Nt,W.axis,X.start,X.end,W.fixed,it,ct,lt,j);let xt=it.filter(Et=>Et.kind==="door").map(Et=>({...Et,h:.65,sill:0}));v(bt,W.axis,X.start,X.end,W.fixed,xt,ct,.64,j)}}for(let I of t.openings)L(I);for(let I of t.partitions){let W=new Kt,it=new Kt;n.add(W),s.add(it),w[I.id]={full:W,low:it};let q=S(W,I.w,I.h,I.d,I.x,Wt+I.h/2,I.z,I.color||u.wall,I.id),lt=S(it,I.w,Math.min(.65,I.h),I.d,I.x,Wt+Math.min(.65,I.h)/2,I.z,I.color||u.wall,I.id);q.rotation.y=lt.rotation.y=I.rot||0}let z=.84,E=f/2+.35,N=Math.atan2(z,f/2),B=d+.65;for(let I of[-1,1]){let W=S(r,Math.hypot(E,z),.13,B,m+I*E/2,Wt+3+z/2,_,u.roof,"roof");W.rotation.z=-I*N}for(let I of[l.back,l.front]){let W=new ss;W.moveTo(l.left,0),W.lineTo(l.right,0),W.lineTo(m,z),W.closePath();let it=new ve(new nr(W,{depth:.13,bevelEnabled:!1}),Vi(u.wall));it.position.set(0,Wt+3,I-.065),it.castShadow=!0,p(it,"roof"),r.add(it)}S(r,h.w+.3,.11,h.d+.4,h.x,Wt+2.86,h.z,u.bathRoof,"bath-roof");let F=S(r,f,.1,t.balcony.depth+.2,m,Wt+2.8,R,u.roof,"roof");F.rotation.x=-.07;let Z=new Kt;Z.position.set(m,Wt,l.front),a.add(Z);for(let I=0;I<3;I++){let W=3-I;S(e,1.85,.126*W,.29,m,.063*W,l.front+.19+I*.27,u.foundation,"floor"),S(e,.9,.126*W,.29,l.right-.5,.063*W,A-.22-I*.27,u.balcony,"balcony")}S(o,13,.12,13,-.2,-.08,0,u.garden,"garden",.07);for(let I=l.front+1;I<6;I+=.5)S(o,1.2,.03,.31,m,.02,I,"#d6d7c8","garden",.01);for(let[I,W]of[[-5,-3.8],[5,-4],[5,3.6],[-4.9,4]]){let it=Ye(o,.07,.13,1.4,I,.7,W,"#807556",9),q=new ve(new os(.75,1),Vi("#71885e"));q.position.set(I,1.75,W),o.add(q),it.userData.structureId="garden"}let k=new ve(new ui(200,200),Vi("#e7ede3"));return k.rotation.x=-Math.PI/2,k.position.y=-.15,k.receiveShadow=!0,i.add(k),{structure:e,full:n,cut:s,roof:r,garden:o,doors:a,lightsGroup:c,lights:D,base:k,openingMeshes:U,doorLeaves:b,wallGroups:w,front:U["front-door"]||new Kt,rear:U["rear-door"]||new Kt,bath:U["bath-inner"]||new Kt,frontLeaf:b["front-door"]||new Kt,rearPivot:b["rear-door"]||new Kt,bathLeaf:b["bath-inner"]||new Kt}}function kf(i,t){for(let e of["structure","full","cut","roof","garden","doors","lightsGroup"])i.remove(t[e]),t[e].traverse(n=>{n.geometry&&!n.geometry.userData.shared&&n.geometry.dispose(),n.material&&!n.material.userData.shared&&(n.material.userData.floorTexture&&n.material.map?.dispose(),n.material.dispose())});i.remove(t.base),t.base.geometry.dispose()}function Vf(i){let{$:t,$$:e,escapeHTML:n}=i,s="floor",r=null,o=null,a=null,c=0,l=new Pi(new Te,new Un({color:"#3e886b",depthTest:!1}));l.renderOrder=20,l.visible=!1,i.scene.add(l);let h={wall:"General walls",floor:"Main floor",foundation:"Foundation",bathWall:"Bathroom walls",bathFloor:"Bathroom floor",roof:"Main roof",bathRoof:"Bathroom roof",balcony:"Balcony deck",rail:"Balcony rails",door:"Doors",window:"Window glass",frame:"Frames",trim:"Wall trim",garden:"Garden"},u=()=>i.getState(),f=()=>u().structure,d=(E,N,B,F=-6,Z=6,k=.05)=>`<label class="field-label">${N}<input type="number" data-build-field="${E}" min="${F}" max="${Z}" step="${k}" value="${Number(B).toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}"></label>`,m=(E,N,B)=>`<label class="field-label">${N}<input type="color" data-build-color="${E}" value="${B}"></label>`,_=(E,N,B="secondary")=>`<button id="${E}" class="btn ${B} wide">${N}</button>`;function g(E){s=E,w(),z()}function p(E){l.geometry.dispose(),l.geometry=new Te().setFromPoints(E.map(N=>new C(N.x,N.y??Wt+.035,N.z))),l.visible=!0}function S(E){let N=E.axis==="x",B={x:N?E.start:E.fixed,z:N?E.fixed:E.start},F={x:N?E.end:E.fixed,z:N?E.fixed:E.end};p([B,F,{...F,y:Wt+3.02},{...B,y:Wt+3.02},B])}function w(){r=null,o=null,l.visible=!1,i.controls.enabled=!0,i.renderer.domElement.style.cursor="",t("#buildToolHint").hidden=!0,t("#splitWallTool").classList.remove("active"),t("#addPartition").classList.remove("active")}function x(E){w(),r=E,t("#buildToolHint").hidden=!1,t("#buildToolText").textContent=E==="split"?"Click a point on an outside wall to split it.":"Click the start and end of your new wall.",t("#"+(E==="split"?"splitWallTool":"addPartition")).classList.add("active"),i.renderer.domElement.style.cursor="crosshair",E==="draw"&&i.view("top")}function R(E){for(;E;){if(!E.visible)return!1;E=E.parent}return!0}function A(E){i.ray(E);let N=i.getHouse();for(let B of i.raycaster.intersectObjects([N.structure,N.full,N.cut,N.doors,N.roof,N.garden],!0)){if(!R(B.object))continue;let F=B.object;for(;F;){if(F.userData.structureId)return{id:F.userData.structureId,point:B.point};F=F.parent}}return null}function D(E){let N=i.pointAt(E);if(!N)return null;let B=i.getSnap()?.1:.01,F=Math.round(N.x/B)*B,Z=Math.round(N.z/B)*B,k=f().bounds;for(let I of["left","right"])Math.abs(F-k[I])<.13&&(F=k[I]);for(let I of["front","back"])Math.abs(Z-k[I])<.13&&(Z=k[I]);return{x:Math.max(-6,Math.min(6,F)),z:Math.max(-6,Math.min(6,Z))}}function U(E){let N=f(),B=A(E),F=B&&Kl(N,B.id),Z=F?.side||(B?.id.endsWith("-wall")?B.id.replace("-wall",""):null);if(Re.includes(Z)){let W=oe(N,Z);return{side:Z,at:B.point[W.axis]}}let k=i.pointAt(E);if(!k)return null;let I=Re.map(W=>{let it=oe(N,W);return{side:W,at:k[it.axis],distance:Math.abs((it.axis==="x"?k.z:k.x)-it.fixed),v:it}}).filter(W=>W.at>=W.v.start&&W.at<=W.v.end).sort((W,it)=>W.distance-it.distance);return I[0]?.distance<.32?I[0]:null}function b(E,N,B=!0){try{let F=i.getSnap()?.1:.01,Z=B?Math.round(N/F)*F:N,k;i.edit(W=>k=Pf(W,E,Z))&&(s=k.id,w(),z(),i.toast("Wall split. Select either section to edit or extend it."))}catch(F){i.toast(F.message)}}function v(E){let N=f(),B=N.finishes[E];return`<div class="finish-heading"><h3>Floor finish</h3><span>Pattern + color</span></div><div class="finish-grid">${mi.map(F=>`<button class="finish-card ${B.material===F.id?"active":""}" data-floor-material="${F.id}" title="${F.detail}" aria-pressed="${B.material===F.id}"><img alt="" src="${zf(F.id,N.colors[E])}"><span>${F.name}</span></button>`).join("")}</div>${m("colors."+E,"Floor color \xB7 pattern stays",N.colors[E])}<div class="row">${d("finish.scale",B.material==="wood"||B.material==="herringbone"?"Pattern size \xB7 m":"Tile / pattern size \xB7 m",B.scale,.15,3,.05)}<label class="field-label">Pattern direction<select data-build-field="finish.rotation">${[0,45,90,135,180,270].map(F=>`<option value="${F}" ${B.rotation===F?"selected":""}>${F}\xB0</option>`).join("")}</select></label></div><p class="small-note">Color changes tint the same texture. Size and direction change the pattern independently.</p>`}function L(E){let N=E.end-E.start;return`<div class="editor-divider"></div><h3>Split this wall</h3><p class="small-note">Split by a distance from this section\u2019s start, or use the Split wall tool in the scene.</p><label class="field-label">Distance from start \xB7 m<input id="splitDistance" type="number" min=".25" max="${Math.max(.25,N-.25)}" step=".05" value="${(N/2).toFixed(2)}"></label>${_("splitSelected","Split into two sections")}<div class="editor-divider"></div><h3>Bathroom extension</h3><p class="small-note">Extend this wall section out from the main room. It stays attached as the house changes. The existing bathroom and fixtures follow the new section.</p><label class="field-label">Outward depth \xB7 m<input id="extensionDepth" type="number" min=".8" max="4" step=".1" value="${f().bathroom.depth}"></label>${_("extendBathroom","Extend section as bathroom","primary")}`}function z(){let E=f(),N=E.bounds,B=E.bathroom,F=E.openings.find(q=>q.id===s)||E.partitions.find(q=>q.id===s),Z=Kl(E,s),k=(q,lt,Nt=!1)=>`<button data-build-select="${n(q)}" class="${s===q?"active ":""}${Nt?"segment-row":""}"><span>${n(lt)}</span><small>${s===q?"EDITING":"\u2192"}</small></button>`;t("#buildList").innerHTML=k("floor","Main floor / footprint")+Re.map(q=>k(q+"-wall",Bi[q]+" wall")+(Kn(E,q).length>1?Kn(E,q).map(lt=>k(lt.id,`Section ${lt.index+1} \xB7 ${(lt.end-lt.start).toFixed(2)} m`,!0)).join(""):"")).join("")+k("bathroom","Attached bathroom")+k("balcony","Balcony")+k("roof","Main roof")+k("bath-roof","Bathroom roof")+k("garden","Garden / surroundings")+E.openings.map(q=>k(q.id,`${q.kind==="door"?"Door":"Window"} \xB7 ${q.side}`)).join("")+E.partitions.map((q,lt)=>k(q.id,`Interior wall ${lt+1}`)).join(""),e("[data-build-select]").forEach(q=>q.onclick=()=>g(q.dataset.buildSelect)),t("#buildPalette").innerHTML=Object.entries(h).map(([q,lt])=>`<label><input type="color" value="${E.colors[q]}" data-palette="${q}"><span>${lt}</span></label>`).join(""),e("[data-palette]").forEach(q=>q.onchange=()=>i.edit(lt=>lt.colors[q.dataset.palette]=q.value));let I="",W="",it=null;if(s==="floor")I="Main floor",it="floor",W=v("floor")+`<div class="editor-divider"></div><h3>Room footprint</h3><div class="row">${d("bounds.left","Left X",N.left,-5,2)}${d("bounds.right","Right X",N.right,-2,5)}</div><div class="row">${d("bounds.back","Back Z",N.back,-5,2)}${d("bounds.front","Front Z",N.front,-2,5)}</div><p class="small-note">${(N.right-N.left).toFixed(2)} \xD7 ${(N.front-N.back).toFixed(2)} m. The attached bathroom follows its wall.</p>`;else if(Z||Re.some(q=>s===q+"-wall")){let q=Z?.side||s.replace("-wall",""),lt=Z||oe(E,q);I=Bi[q]+(Z?` wall \xB7 section ${Z.index+1}`:" wall"),W=`<p class="small-note">${(lt.end-lt.start).toFixed(2)} m along the ${Bi[q].toLowerCase()} wall${Z?". This section has its own color and can become the bathroom extension.":". Move the wall to resize the house."}</p>`,Z||(W+=d("bounds."+q,"Wall position \xB7 "+(lt.axis==="x"?"Z":"X"),N[q],-5,5)),W+=m(Z?"segment.color":"colors."+q+"Wall",Z?"This section color":"This wall color",E.segmentColors[Z?.id]||E.colors[q+"Wall"]||E.colors.wall)+L(lt),r||S(lt)}else if(s==="bathroom"){I="Attached bathroom",it="bathFloor";let q=oe(E,B.side);W=`<p class="attachment-note">Attached to the ${Bi[B.side].toLowerCase()} wall \xB7 ${(B.end-B.start).toFixed(2)} m section</p><p class="small-note">Resize the section and outward depth here. To attach it elsewhere, split an exterior wall and choose a section.</p><div class="row">${d("bathroom.start","Section start \xB7 "+q.axis.toUpperCase(),B.start,q.start,q.end-.8)}${d("bathroom.end","Section end \xB7 "+q.axis.toUpperCase(),B.end,q.start+.8,q.end)}</div>${d("bathroom.depth","Outward depth \xB7 m",B.depth,.8,4,.1)}${m("colors.bathWall","Bathroom walls",E.colors.bathWall)}<div class="editor-divider"></div>${v("bathFloor")}`}else if(s.startsWith("bath-")&&s.endsWith("-wall"))I="Bathroom "+s.replace("bath-","").replace("-wall","")+" wall",W=m("colors.bathWall","Bathroom walls",E.colors.bathWall)+_("editBathFloor","Edit bathroom floor");else if(s==="balcony")I="Back balcony",W=d("balcony.depth","Depth",E.balcony.depth,.5,3)+m("colors.balcony","Deck color",E.colors.balcony)+m("colors.rail","Rail color",E.colors.rail);else if(s==="roof"||s==="bath-roof"){I=s==="roof"?"Main roof":"Bathroom roof";let q=s==="roof"?"roof":"bathRoof";W=m("colors."+q,"Roof color",E.colors[q])}else if(s==="garden")I="Garden",W=m("colors.garden","Ground color",E.colors.garden);else if(F?.kind){let q=oe(E,F.side);I=F.kind==="door"?"Door":"Window",W=`<label class="field-label">Wall<select data-build-field="opening.side">${Fn.filter(lt=>lt!==zi(E)).map(lt=>`<option value="${lt}" ${F.side===lt?"selected":""}>${lt}</option>`).join("")}</select></label><div class="row">${d("opening.at",q.axis.toUpperCase()+" position",F.at)}${d("opening.w","Width",F.w,.4,3)}</div><div class="row">${d("opening.h","Height",F.h,.3,(F.side.startsWith("bath-"),2.7))}${d("opening.sill","Sill height",F.sill,0,2.5)}</div>${m("opening.color","Individual color",F.color||E.colors[F.kind])}${_("deleteStructure","Delete "+F.kind)}`}else if(F)I="Interior wall",W=`<div class="row">${d("partition.x","Center X",F.x)}${d("partition.z","Center Z",F.z)}</div><div class="row">${d("partition.w","Length",F.w,.1,6)}${d("partition.d","Thickness",F.d,.1,6)}</div><div class="row">${d("partition.h","Height",F.h,.3,3)}${d("partition.deg","Rotation \xB0",(F.rot||0)*180/Math.PI,-360,360,15)}</div>${m("partition.color","Wall color",F.color)}${_("deleteStructure","Delete wall")}`;else return s="floor",z();!Z&&!Re.some(q=>s===q+"-wall")&&!r&&(l.visible=!1),t("#buildInspectorTitle").textContent=I,t("#buildInspector").innerHTML=W+Wh(E).map(q=>`<p class="warning">${n(q)}</p>`).join(""),e("[data-build-field]").forEach(q=>q.onchange=()=>{let[lt,Nt]=q.dataset.buildField.split("."),bt=q.tagName==="SELECT"&&lt==="opening"?q.value:Number(q.value);if(typeof bt=="number"&&(!Number.isFinite(bt)||q.min!==""&&bt<Number(q.min)||q.max!==""&&bt>Number(q.max))){i.toast("Check the allowed dimension range."),z();return}i.edit(X=>{if(lt==="bathroom"){let ct=X.bathroom;Gh(X,ct.side,Nt==="start"?bt:ct.start,Nt==="end"?bt:ct.end,Nt==="depth"?bt:ct.depth);return}let j=lt==="finish"?X.finishes[it]:lt==="opening"?X.openings.find(ct=>ct.id===s):lt==="partition"?X.partitions.find(ct=>ct.id===s):X[lt];if(j&&(Nt==="deg"?j.rot=bt*Math.PI/180:j[Nt]=bt,lt==="opening"&&Nt==="side")){let ct=oe(X,bt);j.at=Math.min(ct.end-j.w/2-.1,Math.max(ct.start+j.w/2+.1,j.at))}})}),e("[data-build-color]").forEach(q=>q.onchange=()=>{let[lt,Nt]=q.dataset.buildColor.split(".");i.edit(bt=>{lt==="segment"?bt.segmentColors[s]=q.value:lt==="opening"?bt.openings.find(X=>X.id===s).color=q.value:lt==="partition"?bt.partitions.find(X=>X.id===s).color=q.value:bt.colors[Nt]=q.value})}),e("[data-floor-material]").forEach(q=>q.onclick=()=>i.edit(lt=>{let Nt=mi.find(bt=>bt.id===q.dataset.floorMaterial);lt.finishes[it].material=Nt.id,lt.finishes[it].scale=Nt.scale})),t("#splitSelected")&&(t("#splitSelected").onclick=()=>{let q=Z||oe(E,s.replace("-wall","")),lt=Number(t("#splitDistance").value);if(!Number.isFinite(lt)||lt<.25||lt>q.end-q.start-.25){i.toast("Leave at least 25 cm in each section.");return}b(q.side,q.start+lt,!1)}),t("#extendBathroom")&&(t("#extendBathroom").onclick=()=>{let q=Z||oe(E,s.replace("-wall","")),lt=Number(t("#extensionDepth").value);i.edit(Nt=>Gh(Nt,q.side,q.start,q.end,lt))&&(s="bathroom",z(),i.toast("Bathroom extended from that section. Its shared wall stays connected."))}),t("#editBathFloor")&&(t("#editBathFloor").onclick=()=>g("bathroom")),t("#deleteStructure")&&(t("#deleteStructure").onclick=()=>{i.edit(q=>{q.openings=q.openings.filter(lt=>lt.id!==s),q.partitions=q.partitions.filter(lt=>lt.id!==s),delete q.wallVisibility[s]}),s="floor",z()})}t("#splitWallTool").onclick=()=>x("split"),t("#addPartition").onclick=()=>x("draw"),t("#cancelBuildTool").onclick=w;for(let E of["Door","Window"])t("#add"+E).onclick=()=>{let N=f();if(N.openings.length>=40){i.toast("Maximum 40 openings.");return}let B=Kl(N,s),F=B?.side||(Re.includes(s.replace("-wall",""))?s.replace("-wall",""):"front"),Z=B||oe(N,F),k=`${E.toLowerCase()}-${Date.now().toString(36)}`;i.edit(I=>I.openings.push({id:k,kind:E.toLowerCase(),side:F,at:(Z.start+Z.end)/2,w:E==="Door"?.8:1,h:E==="Door"?2:1.1,sill:E==="Door"?0:1}))&&g(k)};return t("#resetStructure").onclick=()=>{confirm("Restore the supplied house structure and finishes? Your furniture stays. Undo is available.")&&(i.edit(E=>Object.assign(E,i.cloneStructure())),g("floor"))},i.renderer.domElement.addEventListener("pointerdown",E=>{if(i.getMode()!=="build"||E.button!==0||i.getMeasure())return;if(r){E.stopImmediatePropagation(),E.preventDefault(),i.controls.enabled=!1,i.renderer.domElement.setPointerCapture(E.pointerId);return}let N=A(E);if(!N)return;g(N.id);let B=i.pointAt(E),F=f();if(!B)return;let Z=F.openings.find(W=>W.id===s)||F.partitions.find(W=>W.id===s),k=Re.find(W=>s===W+"-wall");if(!Z&&!k)return;let I=Z&&!Z.kind?Z:B;a={id:s,pointer:E.pointerId,x:E.clientX,y:E.clientY,offsetX:I.x-B.x,offsetZ:I.z-B.z,before:JSON.stringify(u()),started:!1},i.controls.enabled=!1,i.renderer.domElement.setPointerCapture(E.pointerId)},!0),i.renderer.domElement.addEventListener("pointermove",E=>{if(i.getMode()!=="build")return;if(r==="draw"&&o){let B=D(E);B&&(p([o,B]),t("#buildToolText").textContent=`Wall length ${Math.hypot(B.x-o.x,B.z-o.z).toFixed(2)} m \xB7 click to finish`)}if(r==="split"){let B=U(E);if(B){let F=oe(f(),B.side),Z=i.getSnap()?.1:.01,k=Math.round(B.at/Z)*Z;p([{x:F.axis==="x"?k:F.fixed,z:F.axis==="x"?F.fixed:k},{x:F.axis==="x"?k:F.fixed,z:F.axis==="x"?F.fixed:k,y:Wt+3.12}])}}if(!a||E.pointerId!==a.pointer)return;if(!a.started){if(Math.hypot(E.clientX-a.x,E.clientY-a.y)<5)return;i.checkpoint(),a.started=!0}let N=i.pointAt(E);N&&(i.moveStructure(a.id,N.x+a.offsetX,N.z+a.offsetZ),performance.now()-c>85&&(i.rebuildStructure(),c=performance.now()))}),i.renderer.domElement.addEventListener("pointerup",E=>{if(i.getMode()==="build"){if(r){if(E.stopImmediatePropagation(),E.preventDefault(),i.controls.enabled=!0,r==="split"){let N=U(E);N?b(N.side,N.at):i.toast("Click an exterior wall, or enter a precise split in its inspector.")}else{let N=D(E);if(!N)return;if(!o)o=N,t("#buildToolText").textContent="Start set. Click the end of the new wall.";else{let B=Math.hypot(N.x-o.x,N.z-o.z);if(B<.25||B>6){i.toast("Draw a wall between 0.25 and 6 m long.");return}let F=o,Z=Lo();i.edit(k=>k.partitions.push({id:Z,x:(F.x+N.x)/2,z:(F.z+N.z)/2,w:B,d:.15,h:3,rot:-Math.atan2(N.z-F.z,N.x-F.x),color:k.colors.wall}))&&g(Z)}}return}a&&E.pointerId===a.pointer&&(a.started&&(u().preset="custom",i.commit()),a=null,i.controls.enabled=!0)}},!0),i.renderer.domElement.addEventListener("pointercancel",()=>{a=null,i.controls.enabled=!0}),window.addEventListener("keydown",E=>{E.key==="Escape"&&r&&(w(),z())}),{render:z,cancelTool:w,select:g}}var at=i=>document.querySelector(i),Ne=i=>[...document.querySelectorAll(i)],Oo=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);Nf();var Hf;function _e(i){at("#toast").textContent=i,at("#toast").classList.add("show"),clearTimeout(Hf),Hf=setTimeout(()=>at("#toast").classList.remove("show"),4200)}var Fy=!0;function qf(i,t){try{return JSON.parse(localStorage.getItem(i))??t}catch{return t}}function cu(i,t){try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return Fy=!1,at("#saveStatus").textContent="Export JSON to save",!1}}var St=xs({...gr,structure:_i()});try{let i=qf("house-studio-autosave-v1",null);i&&(St=xs(i))}catch{}St.structure||(St.structure=_i());var un="explore",$e=null,Wi=!0,be="cutaway",Sn=!1,ou="day",xi=!1,Yf=!1,No=!1,bs=[],Bo=[],yr=new Map,bn=null,Bn=null,Qn=null,$f="iso",Ue=new Ks;Ue.background=new Yt("#e7ede3");Ue.fog=new Yr("#e7ede3",26,65);var oc=at("#canvasHost"),Ae;try{Ae=new Ao({antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch(i){throw at("#loading").innerHTML="<b>3D rendering is unavailable.</b><small>Use Chrome or Edge with hardware acceleration enabled.</small><small>Your saved layouts have not been changed.</small>",i}Ae.setPixelRatio(Math.min(devicePixelRatio,1.65));Ae.shadowMap.enabled=!0;Ae.shadowMap.type=Qa;Ae.toneMapping=yo;Ae.toneMappingExposure=1.12;Ae.outputColorSpace=Oe;oc.append(Ae.domElement);Ae.domElement.setAttribute("aria-label","House scene. Use mouse to orbit and zoom; select furniture in Decorate.");var vr=new Be(39,1,.05,180),yi=new ls(-7,7,7,-7,.05,100),ke=vr;vr.position.set(8.2,9.4,12.7);var ge=new Jl(ke,Ae.domElement);ge.target.set(-.58,.65,-.15);ge.enableDamping=!0;ge.dampingFactor=.1;ge.minDistance=2;ge.maxDistance=28;ge.maxPolarAngle=Math.PI*.485;ge.enablePan=!0;ge.zoomToCursor=!0;var Zf=new sr("#f5faf1","#828d70",2.2);Ue.add(Zf);var zn=new cs("#fff3d8",3.2);zn.position.set(-6,10,8);zn.castShadow=!0;zn.shadow.mapSize.set(2048,2048);Object.assign(zn.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40});zn.shadow.normalBias=.035;zn.shadow.bias=-1e-4;zn.shadow.radius=4;Ue.add(zn);var Jf=new cs("#dcebea",.55);Jf.position.set(6,4,-4);Ue.add(Jf);var Ve=su(Ue,St.structure),au=new Kt;Ue.add(au);var he=Df(Ue);he.root.visible=!1;var Gf=JSON.stringify(St.structure),Ts=new go(12,120,"#9baea0","#c4cfc0");Ts.position.y=Wt+.008;Ts.material.transparent=!0;Ts.material.opacity=.18;Ts.visible=!1;Ue.add(Ts);var Fo=new _o(new Pn,4947297);Ue.add(Fo);Fo.visible=!1;var Gi=new Kt,vi=new Kt,xr=new Kt,zo=new Kt;Ue.add(Gi,vi,xr,zo);vi.visible=!1;zo.visible=!1;var Gt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},Vo=()=>({x:he.root.position.x,z:he.root.position.z}),Ms=1.7;function Ho(){for(let i of yr.values())au.remove(i),nu(i);yr.clear();for(let i of St.items){let t=eu(i);yr.set(i.id,t),au.add(t)}Mr(),jf()}function ac(){let i=JSON.stringify(St.structure);i!==Gf&&(Gf=i,kf(Ue,Ve),Ve=su(Ue,St.structure),ei(),hu(),Ve.garden.visible=at("#gardenToggle").checked,Ve.base.material.color.set(Ue.background),rp(),_u())}function Go(){cu("house-studio-autosave-v1",St)&&(at("#saveStatus").textContent="Saved on this device")}function kn(){bs.push(JSON.stringify(St)),bs.length>45&&bs.shift(),Bo=[],br()}function br(){at("#undoBtn").disabled=!bs.length,at("#redoBtn").disabled=!Bo.length}function Vn(i=!0){St.structure||(St.structure=_i()),i?Ho():(Mr(),jf()),ac(),Go(),br(),$e&&Wo(),at("#pathResults").innerHTML="",wn(!1)}function Kf(){bs.length&&(Bo.push(JSON.stringify(St)),St=JSON.parse(bs.pop()),St.structure||(St.structure=_i()),$e=null,Ho(),ac(),Go(),br(),wn(!1),_e("Change undone."))}function lu(){Bo.length&&(bs.push(JSON.stringify(St)),St=JSON.parse(Bo.pop()),St.structure||(St.structure=_i()),$e=null,Ho(),ac(),Go(),br(),wn(!1),_e("Change restored."))}function jf(){at("#layoutLabel").textContent=St.name,at("#sceneSubline").textContent=_s.find(t=>t.id===St.preset)?.description||"Your furniture. Your arrangement.";let i=St.structure;i&&(at("#mainDimensions").textContent=`${(i.bounds.right-i.bounds.left).toFixed(2)} \xD7 ${(i.bounds.front-i.bounds.back).toFixed(2)}`,at("#bathDimensions").textContent=`${i.bathroom.w.toFixed(2)} \xD7 ${i.bathroom.d.toFixed(2)}`,at("#balconyDimensions").textContent=`${(i.bounds.right-i.bounds.left).toFixed(2)} \xD7 ${i.balcony.depth.toFixed(2)} m`),Ne("[data-preset]").forEach(t=>t.classList.toggle("active",t.dataset.preset===St.preset))}function Qf(i){_s.some(t=>t.id===i)&&(kn(),St=xs({...gr,preset:i,structure:_i()}),$e=null,Vn(),ap(),_e("Your supplied room restored. Undo is available."))}function Oy(i){pp.cancelTool(),un=i,document.body.classList.remove("mode-explore","mode-build","mode-decorate","mode-simulate"),document.body.classList.add("mode-"+i),Ne("[data-mode]").forEach(t=>t.classList.toggle("active",t.dataset.mode===i));for(let t of["explore","build","decorate","simulate"])at("#"+t+"Panel").hidden=t!==i;Ts.visible=i==="decorate"&&Wi,zo.visible=i==="decorate",he.root.visible=i==="simulate",i!=="decorate"&&($e=null,Wo(),Mr()),i==="build"&&(Sn=!1,ei(),_u()),i==="decorate"&&(Sn=!1,ei(),uu()),i==="simulate"?(Sn=!1,ei(),ws()):wn(!1),at("#inputHint").textContent=i==="build"?"Select a surface \xB7 split a wall section \xB7 draw a partition in Plan":i==="decorate"?"Drag furniture to move \xB7 R rotate \xB7 Arrow keys nudge \xB7 Delete remove":i==="simulate"?"Click the floor to walk \xB7 Drag empty space to orbit \xB7 Scroll to zoom":"Drag to orbit \xB7 Scroll to zoom \xB7 Right-drag to pan"}function lc(){let i=oc.clientWidth,t=oc.clientHeight;if(!i||!t)return;Ae.setSize(i,t),vr.aspect=i/t,vr.updateProjectionMatrix();let e=6.15;yi.left=-e*i/t,yi.right=e*i/t,yi.top=e,yi.bottom=-e,yi.updateProjectionMatrix()}new ResizeObserver(lc).observe(oc);function cc(i){No=!1,$f=i,Ne("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view===i)),at("#cameraTourBtn").innerHTML=gi("play");let t=new C(-.6,.6,-.18);if(i==="top")ke=yi,ke.position.set(-.6,18,-.179),ke.up.set(0,0,-1),ke.lookAt(t),ge.object=ke,ge.target.copy(t),ge.enableRotate=!1,yi.zoom=1,yi.updateProjectionMatrix(),Sn=!1,be="hidden",at("#wallSelect").value=be,ei(),Qn=null;else{ke=vr,ge.object=ke,ge.enableRotate=!0,ke.up.set(0,1,0);let e={iso:[8.2,9.4,12.7],front:[0,2.5,12],back:[0,3,-12]};Qn={from:ke.position.clone(),to:new C(...e[i]),targetFrom:ge.target.clone(),targetTo:t,t:0},i==="front"||i==="back"?(be="full",Sn=!0,at("#wallSelect").value=be,ei()):(be="cutaway",Sn=!1,at("#wallSelect").value=be,ei())}lc(),ge.update()}function ei(){Ve.full.visible=Ve.cut.visible=!0;let i=St.structure.wallVisibility;for(let[t,e]of Object.entries(Ve.wallGroups)){let n=be==="full"?"full":be==="hidden"?"hidden":i[t]||"low";e.full.visible=n==="full",e.low.visible=n==="low"}Ve.roof.visible=Sn,Ve.doors.visible=be!=="hidden";for(let t of St.structure.openings){let e=be==="full"?"full":be==="hidden"?"hidden":i[t.side]||"low";Ve.openingMeshes[t.id]&&(Ve.openingMeshes[t.id].visible=e!=="hidden")}Ve.lightsGroup.visible=be==="full",at("#roofBtn span").textContent=Sn?"Roof on":"Roof off",at("#roofBtn").classList.toggle("active",Sn),at("#viewLabel").textContent=$f==="top"?"FLOOR PLAN":be==="full"?"EXTERIOR":be==="hidden"?"OPEN PLAN":"CUTAWAY",at("#wallSelect").value=be,By()}function By(){let i=St.structure,t=[...Fn.filter(e=>e!==zi(i)).map(e=>({key:e,label:e.startsWith("bath-")?"Bath \xB7 "+Bi[e.slice(5)]:Bi[e]+" wall"})),...i.partitions.map((e,n)=>({key:e.id,label:"Interior wall "+(n+1)}))];at("#wallVisibilityRows").innerHTML=t.map(({key:e,label:n})=>{let s=be==="full"?"full":be==="hidden"?"hidden":i.wallVisibility[e]||"low";return`<label>${n}<select data-wall-visibility="${Oo(e)}" aria-label="${Oo(n)} visibility">${[["full","Keep full"],["low","Low wall"],["hidden","Hide"]].map(([r,o])=>`<option value="${r}" ${s===r?"selected":""}>${o}</option>`).join("")}</select></label>`}).join(""),Ne("[data-wall-visibility]").forEach(e=>e.onchange=()=>{let n=be,s=e.value,r=e.dataset.wallVisibility;be="cutaway",gu(o=>{if(n!=="cutaway")for(let a of t)o.wallVisibility[a.key]=n==="full"?"full":"hidden";o.wallVisibility[r]=s})})}function tp(i){ou=i;let e={day:{bg:"#e7ede3",sun:"#fff3dc",intensity:3.2,hemi:2.2,pos:[-6,10,8],exposure:1.12},sunset:{bg:"#decbb4",sun:"#ffb56c",intensity:3,hemi:1.35,pos:[-9,3.4,5],exposure:1.12},night:{bg:"#1a2e32",sun:"#b9cee3",intensity:.6,hemi:.55,pos:[5,8,-7],exposure:1.15}}[i];Ue.background.set(e.bg),Ue.fog.color.set(e.bg),Ve.base.material.color.set(e.bg),zn.color.set(e.sun),zn.intensity=e.intensity,zn.position.set(...e.pos),Zf.intensity=e.hemi,Ae.toneMappingExposure=e.exposure,document.body.classList.toggle("night",i==="night"),Ne("[data-light]").forEach(n=>n.classList.toggle("active",n.dataset.light===i)),hu()}function hu(){Ve.lights.forEach(i=>i.intensity=at("#lightsToggle").checked?ou==="night"?7:ou==="sunset"?4:1.3:0)}var ru=new Map,Hi;function zy(i){if(ru.has(i))return ru.get(i);try{Hi||(Hi=new Ao({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),Hi.setSize(240,170),Hi.setPixelRatio(1),Hi.toneMapping=yo,Hi.toneMappingExposure=1.25);let t=new Ks;t.background=new Yt("#edf1e9"),t.add(new sr("#fff8e9","#b0b7a1",2.7));let e=new cs("#fff5de",3);e.position.set(-3,5,4),t.add(e);let n=$h(i,0,0),s=eu(n);s.position.set(0,0,0),t.add(s);let r=new Pn().setFromObject(s),o=r.getCenter(new C),a=r.getSize(new C),c=Math.max(a.x,a.y,a.z),l=new Be(37,240/170,.01,100);l.position.copy(o).add(new C(1.5,1.25,1.8).multiplyScalar(c*.83)),l.lookAt(o),Hi.render(t,l);let h=Hi.domElement.toDataURL();return ru.set(i,h),nu(s),h}catch{return""}}function ky(){at("#presetCards").innerHTML=_s.map(i=>`<button class="preset-card ${St.preset===i.id?"active":""}" data-preset="${i.id}"><img alt="Floor plan of your supplied room" src="assets/default-layout.svg"><span><b>${i.name}</b><small>${i.subtitle}</small></span></button>`).join(""),Ne("[data-preset]").forEach(i=>i.onclick=()=>Qf(i.dataset.preset))}var rc="All",Vy=["All",...new Set(Ql.map(i=>i.cat))];function uu(){let i=at("#searchInput").value.toLowerCase(),t=Ql.filter(e=>(rc==="All"||e.cat===rc)&&e.name.toLowerCase().includes(i));at("#catalogCount").textContent=`${t.length} ITEMS`,at("#categoryTabs").innerHTML=Vy.map(e=>`<button class="${e===rc?"active":""}" data-category="${e}">${e}</button>`).join(""),at("#catalog").innerHTML=t.map(e=>`<button class="catalog-item" data-add="${e.type}"><img alt="" src="${zy(e.type)}"><span class="add-symbol">+</span><b>${e.name}</b><small>${e.w.toFixed(2)} \xD7 ${e.d.toFixed(2)} m</small></button>`).join("")||'<p class="empty-copy">No matching furniture.</p>',Ne("[data-add]").forEach(e=>e.onclick=()=>Hy(e.dataset.add)),Ne("[data-category]").forEach(e=>e.onclick=()=>{rc=e.dataset.category,uu()})}function Hy(i){if(St.items.length>=180){_e("This layout has reached the 180-item limit.");return}kn();let t=$h(i,0,.5),e=!1,n=[];for(let s=1.5;s>-2;s-=.25)for(let r=-1.8;r<2;r+=.25)n.push({x:r,z:s});for(let s of n)if(t.x=Math.round(s.x*10)/10,t.z=Math.round(s.z*10)/10,!tc(t,St.items).some(r=>!r.startsWith("Loft:"))){e=!0;break}e?_e(`${Ee[i].name} added.`):(t.x=3.25,t.z=.6,_e("Added beside the house. Drag it into position.")),St.items.push(t),St.preset="custom",St.name="My little house",$e=t.id,Vn()}function ti(){return St.items.find(i=>i.id===$e)}function Mr(){let i=yr.get($e);Fo.visible=!!i&&un==="decorate",i&&(i.updateMatrixWorld(!0),Fo.box.setFromObject(i),Fo.material.color.set(tc(ti(),St.items).some(t=>t.startsWith("Overlaps"))?"#d06c51":"#3f7c59")),at("#inspector").hidden=!i||un!=="decorate"}function hc(i){$e=i,Mr(),Wo()}function vs(i){let t=ti();t&&(kn(),i(t),St.preset="custom",Vn())}function Wo(){let i=ti(),t=at("#inspector");if(t.hidden=!i||un!=="decorate",!i)return;let e=Ee[i.type],n=tc(i,St.items);t.innerHTML=`<div class="inspector-head"><div><span class="eyebrow">SELECTED OBJECT</span><h3>${e.name}</h3></div><button id="closeInspector" class="icon-btn" aria-label="Deselect">${gi("close")}</button></div><div class="row"><label class="field-label">X \xB7 metres<input id="objectX" type="number" min="-6" max="6" step=".1" value="${i.x.toFixed(2)}"></label><label class="field-label">Z \xB7 metres<input id="objectZ" type="number" min="-6" max="6" step=".1" value="${i.z.toFixed(2)}"></label></div><div class="row"><label class="field-label">Width<input id="objectW" type="number" min=".1" max="4" step=".05" value="${i.w.toFixed(2)}"></label><label class="field-label">Depth<input id="objectD" type="number" min=".1" max="4" step=".05" value="${i.d.toFixed(2)}"></label><label class="field-label">Height<input id="objectH" type="number" min=".01" max="3" step=".05" value="${i.h.toFixed(2)}"></label></div><label class="field-label">Rotation \xB7 degrees<input id="objectRotation" type="number" step="15" value="${Math.round(i.rot*180/Math.PI)}"></label><div class="swatches">${["#d9d7c8","#c6ac83","#a7b7a0","#425956","#343b3b","#d7a681","#eeeeea"].map(s=>`<button class="${i.color===s?"active":""}" style="background:${s}" data-color="${s}" title="Colour ${s}" aria-label="Colour ${s}"></button>`).join("")}<input id="customColor" type="color" value="${i.color}" aria-label="Custom colour" style="width:27px;height:27px;border:0;padding:0"></div>${e.kind==="sofabed"?`<button id="sofaToggle" class="btn wide secondary">${i.open?"Fold into sofa":"Unfold into bed"}</button>`:""}<div class="button-row"><button id="rotateObject" class="btn secondary" title="Rotate 90 degrees">${gi("rotate")}90\xB0</button><button id="duplicateObject" class="icon-btn" title="Duplicate" aria-label="Duplicate">${gi("copy")}</button><button id="deleteObject" class="icon-btn danger" title="Delete" aria-label="Delete">${gi("trash")}</button></div>${n.length?n.map(s=>`<p class="warning">${s}</p>`).join(""):'<p class="good">\u2713 No object or wall overlap detected.</p>'}<p>Dimensions include the model frame. Resize to match your actual furniture. Arrow keys nudge by ${Wi?"10":"2"} cm.</p>`,at("#closeInspector").onclick=()=>hc(null);for(let[s,r,o,a]of[["objectX","x",-6,6],["objectZ","z",-6,6],["objectW","w",.1,4],["objectD","d",.1,4],["objectH","h",.01,3]])at("#"+s).onchange=c=>{let l=Number(c.target.value);if(!Number.isFinite(l)||l<o||l>a){_e(`Use a value from ${o} to ${a}.`),Wo();return}vs(h=>h[r]=l)};at("#objectRotation").onchange=s=>{let r=Number(s.target.value);Number.isFinite(r)&&vs(o=>o.rot=(r%360+360)%360*Math.PI/180)},Ne("[data-color]").forEach(s=>s.onclick=()=>vs(r=>r.color=s.dataset.color)),at("#customColor").onchange=s=>vs(r=>r.color=s.target.value),at("#rotateObject").onclick=()=>ep(),at("#duplicateObject").onclick=Gy,at("#deleteObject").onclick=np,at("#sofaToggle")&&(at("#sofaToggle").onclick=()=>vs(s=>s.open=!s.open))}function ep(){vs(i=>i.rot=(i.rot+Math.PI/2)%(Math.PI*2))}function Gy(){if(!ti()||St.items.length>=180)return;kn();let i={...ti(),id:Lo(),x:Math.min(6,ti().x+.35),z:Math.min(6,ti().z+.35)};St.items.push(i),$e=i.id,Vn(),_e("Duplicated. Move the new item into place.")}function np(){$e&&(kn(),St.items=St.items.filter(i=>i.id!==$e),$e=null,Vn(),_e("Object removed. Undo is available."))}var uc=new mo,Wf=new ot,Wy=new en(new C(0,1,0),-Wt),Xy=new C;function du(i){let t=Ae.domElement.getBoundingClientRect();Wf.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),uc.setFromCamera(Wf,ke)}function dc(i){return du(i),uc.ray.intersectPlane(Wy,Xy)?.clone()}function ip(i){du(i);let t=uc.intersectObjects([...yr.values()],!0);for(let e of t){let n=e.object;for(;n&&!n.userData.itemId;)n=n.parent;if(n)return n.userData.itemId}return null}Ae.domElement.addEventListener("pointerdown",i=>{if(i.button===0&&(Bn={x:i.clientX,y:i.clientY,id:i.pointerId},un==="decorate"&&!xi)){let t=ip(i);if(t){hc(t);let e=dc(i),n=ti();e&&(bn={id:t,dx:n.x-e.x,dz:n.z-e.z,started:!1},ge.enabled=!1,Ae.domElement.setPointerCapture(i.pointerId));return}}},!0);Ae.domElement.addEventListener("pointermove",i=>{if(!bn||!Bn||Math.hypot(i.clientX-Bn.x,i.clientY-Bn.y)<4&&!bn.started)return;bn.started||(kn(),bn.started=!0,wn(!1));let t=dc(i),e=ti();if(!t||!e)return;let n=Wi?.1:.01;e.x=Math.max(-6,Math.min(6,Math.round((t.x+bn.dx)/n)*n)),e.z=Math.max(-6,Math.min(6,Math.round((t.z+bn.dz)/n)*n)),yr.get(e.id).position.set(e.x,qe(e.x,e.z)+.015,e.z),Mr()});Ae.domElement.addEventListener("pointerup",i=>{if(i.button!==0)return;let t=Bn&&Math.hypot(i.clientX-Bn.x,i.clientY-Bn.y)>5;if(bn){bn.started&&(St.preset="custom",Vn(!1)),bn=null,ge.enabled=!0,Bn=null;return}if(!t&&Bn){let e=dc(i);xi&&e?qy(e):un==="simulate"&&e?$y({x:e.x,z:e.z}):un==="decorate"&&hc(ip(i))}Bn=null});Ae.domElement.addEventListener("pointercancel",()=>{bn?.started&&Vn(!1),bn=null,ge.enabled=!0,Bn=null});window.addEventListener("keydown",i=>{if(!(/INPUT|TEXTAREA|SELECT/.test(i.target.tagName)||document.querySelector("dialog[open]"))){if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"){i.preventDefault(),i.shiftKey?lu():Kf();return}if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="y"){i.preventDefault(),lu();return}if(i.key==="Escape"){hc(null),document.body.classList.contains("presentation")&&mu(!1),xi&&op();return}if(!(un!=="decorate"||!ti())&&(i.key.toLowerCase()==="r"&&ep(),(i.key==="Delete"||i.key==="Backspace")&&(i.preventDefault(),np()),i.key.startsWith("Arrow"))){i.preventDefault();let t=Wi?.1:.02;vs(e=>{i.key==="ArrowLeft"&&(e.x=Math.max(-6,e.x-t)),i.key==="ArrowRight"&&(e.x=Math.min(6,e.x+t)),i.key==="ArrowUp"&&(e.z=Math.max(-6,e.z-t)),i.key==="ArrowDown"&&(e.z=Math.min(6,e.z+t))})}}});function Ss(i){for(;i.children.length;){let t=i.children[0];i.remove(t),t.userData.disposable&&(t.geometry?.dispose(),t.material?.map?.dispose(),t.material?.dispose())}}function ko(i,t,e="#58845e",n=!1){let s=new Te().setFromPoints(t.map(a=>new C(...a))),r=n?new uo({color:e,dashSize:.1,gapSize:.07,depthTest:!1}):new Un({color:e,depthTest:!1}),o=new Pi(s,r);return o.userData.disposable=!0,o.renderOrder=10,n&&o.computeLineDistances(),i.add(o),o}function sp(i,t,e,n,s,r=1){let o=document.createElement("canvas");o.width=512,o.height=128;let a=o.getContext("2d");a.fillStyle="#f9fcf5",a.beginPath(),a.roundRect(3,5,506,116,22),a.fill(),a.fillStyle="#294b3d",a.font="500 49px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,65);let c=new is(o);c.colorSpace=Oe;let l=new Zr(new js({map:c,depthTest:!1,transparent:!0}));return l.position.set(e,n,s),l.scale.set(1.2*r,.3*r,1),l.renderOrder=20,l.userData.disposable=!0,i.add(l),l}function Uo(i,t,e){ko(vi,[i,t]);for(let n of[i,t])ko(vi,[[n[0]-.06,n[1],n[2]-.06],[n[0]+.06,n[1],n[2]+.06]]);sp(vi,e,(i[0]+t[0])/2,.5,(i[2]+t[2])/2,.85)}function rp(){Ss(vi),Ss(zo);let i=St.structure,t=i.bounds,e=i.bathroom;Uo([t.left,.43,t.front+.88],[t.right,.43,t.front+.88],`${(t.right-t.left).toFixed(2)} m`),Uo([t.right+.7,.43,t.back],[t.right+.7,.43,t.front],`${(t.front-t.back).toFixed(2)} m`),Uo([e.x-e.w/2-.36,.43,e.z-e.d/2],[e.x-e.w/2-.36,.43,e.z+e.d/2],`${e.d.toFixed(2)} m`),Uo([e.x-e.w/2,.43,e.z+e.d/2+.28],[e.x+e.w/2,.43,e.z+e.d/2+.28],`${e.w.toFixed(2)} m`),Uo([t.left,.43,t.back-i.balcony.depth-.35],[t.right,.43,t.back-i.balcony.depth-.35],`${(t.right-t.left).toFixed(2)} m balcony`);for(let n of i.openings.filter(s=>s.kind==="door")){let s=oe(i,n.side),r=s.axis==="x"?n.at:s.fixed,o=s.axis==="x"?s.fixed:n.at,a=s.axis==="x"?n.w:.58,c=s.axis==="x"?.58:n.w;ko(zo,[[r-a/2,Wt+.019,o-c/2],[r+a/2,Wt+.019,o-c/2],[r+a/2,Wt+.019,o+c/2],[r-a/2,Wt+.019,o+c/2],[r-a/2,Wt+.019,o-c/2]],"#bb9561",!0)}}var _r=[];function op(){xi=!xi,at("#measureBtn").classList.toggle("active",xi),at("#measureReadout").hidden=!xi,_r=[],Ss(xr),at("#measureReadout").textContent="Click two points on the floor.",Ae.domElement.style.cursor=xi?"crosshair":""}function qy(i){_r.length===2&&(_r=[],Ss(xr)),i.y=Wt+.035,_r.push(i);let t=new ve(new co(.035,12,8),new Ii({color:"#285747",depthTest:!1}));if(t.position.copy(i),t.userData.disposable=!0,xr.add(t),_r.length===2){let[e,n]=_r,s=e.distanceTo(n);ko(xr,[e.toArray(),n.toArray()],"#285747"),sp(xr,s.toFixed(2)+" m",(e.x+n.x)/2,.52,(e.z+n.z)/2),at("#measureReadout").textContent=`${s.toFixed(2)} m floor distance \xB7 click to start again`}}rp();function Mn(i,t){at("#personStatus").textContent=i,at("#personDetail").textContent=t||"Click the floor to walk somewhere."}function wn(i=!0){let t=Gt.action;t?.item&&Gt.phase!=="walking"&&Gt.phase!=="idle"&&he.root.position.set(t.x,qe(t.x,t.z)+.015,t.z),Gt={path:[],index:0,action:null,phase:"idle",elapsed:0,transition:null,routine:!1,routineIndex:0,wait:0},Ss(Gi),he.reset();let e=Vo();he.root.position.y=qe(e.x,e.z)+.015,(i||un==="simulate")&&(ws(),Mn("Ready to explore"))}function ap(){wn(!1),he.root.position.set(0,Wt+.015,1.3),he.root.rotation.y=0,ws(),Mn("Ready to explore")}function ws(){let i=Vo(),t=Jh(St.items,Ms),e=Zh(Ms);if(!Po(i.x,i.z,t,e))return;let n=[{x:0,z:1.3},{x:0,z:2},{x:0,z:3.5}];for(let r=-2;r<2;r+=.2)for(let o=-2;o<2;o+=.2)n.push({x:o,z:r});let s=n.find(r=>!Po(r.x,r.z,t,e));s&&he.root.position.set(s.x,qe(s.x,s.z)+.015,s.z)}function Yy(i){if(Ss(Gi),Gi.visible=at("#pathToggle").checked,!i?.length)return;ko(Gi,i.map(n=>[n.x,qe(n.x,n.z)+.035,n.z]),"#397b5e",!0);let t=i[i.length-1],e=new ve(new lo(.12,.16,32),new Ii({color:"#4d8d68",side:We,depthTest:!1}));e.rotation.x=-Math.PI/2,e.position.set(t.x,qe(t.x,t.z)+.04,t.z),e.userData.disposable=!0,Gi.add(e)}function lp(i,t=null,e=!1){let n=Gt.routine,s=Gt.routineIndex;he.reset(),Gt={path:i,index:0,action:t,phase:"walking",elapsed:0,transition:null,routine:e&&n,routineIndex:s,wait:0},Yy(i),Mn("Walking\u2026",t?.label||"Finding a little breathing room.")}function $y(i){wn(!1),ws();let t=ec(Vo(),i,St.items,Ms);if(!t){_e("No walkable route there. Try a clear floor area or move the blocking furniture."),Mn("That spot is blocked","Try another spot, or make more room.");return}lp(t)}function fu(i,t=!1){if(i==="tour"){wn(!1),Gt.routine=!0,Gt.routineIndex=0,fu("desk",!0);return}if(t?(he.reset(),ws()):wn(!1),i==="bed"){let r=St.items.find(o=>Ee[o.type].kind==="sofabed");r&&!r.open&&!St.items.some(o=>["bed","loft"].includes(Ee[o.type].kind))&&(kn(),r.open=!0,Ho(),Go(),br())}let e=Kh(i,St.items);if(!e.length){_e(`Add ${i==="bed"?"a bed":"a desk"} first.`),Mn("Destination not available"),Gt.routine=!1;return}let n=null,s=null;for(let r of e){let o=ec(Vo(),r,St.items,Ms);o&&(!s||o.length<s.length)&&(n=r,s=o)}if(!s){_e("Route blocked. Move furniture, resize it, or check the door clearances."),Mn("Cannot reach "+i,"The walking route is blocked."),Gt.routine=!1;return}lp(s,n,t)}function Zy(){Gt.phase="rest",Gt.elapsed=0,Gt.path=[],Ss(Gi);let i=Gt.action;if(!i){Mn("Arrived");return}if(i.pose==="sleep"&&i.item){let t=St.items.find(r=>r.id===i.item.id);if(!t){wn();return}let e=Ee[t.type].kind,n=On(t,0,e==="sofabed"?.65*t.d/Ee[t.type].d:0),s=e==="loft"?t.h*1.88/2.25:e==="sofabed"?t.h*.45/.84:t.h*.55/Ee[t.type].h;Gt.phase="settle",Gt.transition={from:he.root.position.clone(),to:new C(n.x,qe(n.x,n.z)+s+.1,n.z),yaw:t.rot,pose:"sleep",loft:e==="loft",duration:e==="loft"?2.8:1.1},Mn(e==="loft"?"Climbing up\u2026":"Getting comfortable\u2026","A simplified pose transition; not an ergonomic test.")}else if(i.pose==="sit"&&i.item){let t=i.item;Gt.phase="settle",Gt.transition={from:he.root.position.clone(),to:new C(t.x,qe(t.x,t.z)+.015,t.z),yaw:t.rot,pose:"sit",duration:.85},Mn("Taking a seat\u2026")}else Mn(i.label),Gt.wait=0}function Jy(i,t){let e=he.root;if(e.scale.setScalar(Ms/1.7),Gt.phase==="walking"){let o=i*.92;for(;o>0&&Gt.index<Gt.path.length;){let a=Gt.path[Gt.index],c=a.x-e.position.x,l=a.z-e.position.z,h=Math.hypot(c,l);if(h<.001){Gt.index++;continue}e.rotation.y=Math.atan2(c,l);let u=Math.min(o,h);e.position.x+=c/h*u,e.position.z+=l/h*u,o-=u,u>=h-1e-4&&Gt.index++}e.position.y=qe(e.position.x,e.position.z)+.015,he.legs[0].rotation.x=Math.sin(t*9)*.32,he.legs[1].rotation.x=-Math.sin(t*9)*.32,he.arms[0].rotation.x=-Math.sin(t*9)*.31,he.arms[1].rotation.x=Math.sin(t*9)*.31,he.body.position.y=Math.abs(Math.sin(t*9))*.018,Gt.index>=Gt.path.length&&(he.reset(),Zy())}else if(Gt.phase==="settle"){let o=Gt.transition;Gt.elapsed+=i;let a=Math.min(1,Gt.elapsed/o.duration),c=a*a*(3-2*a);if(e.rotation.y=o.yaw,e.position.lerpVectors(o.from,o.to,c),o.pose==="sleep"){let l=o.loft?Math.max(0,(a-.65)/.35):c;he.body.rotation.x=-Math.PI/2*l,he.body.position.z=.72*l,he.body.position.y=0}else{he.body.position.y=-.32*c;for(let l of he.legs)l.rotation.x=-Math.PI/2*c;for(let l of he.arms)l.rotation.x=-.6*c}a===1&&(Gt.phase="rest",Gt.wait=0,Mn(o.pose==="sleep"?"Resting on the bed":"Working at the desk",o.pose==="sleep"?"Stop / stand up to get moving again.":"Taking a seat, six-block style."))}else if(Gt.phase==="rest"&&Gt.routine&&(Gt.wait+=i,Gt.wait>3)){let o=["desk","bathroom","balcony","bed","entrance"];Gt.routineIndex=(Gt.routineIndex+1)%o.length;let a=Gt.action;a&&(he.reset(),e.position.set(a.x,qe(a.x,a.z)+.015,a.z)),fu(o[Gt.routineIndex],!0)}let n=e.position.x,s=e.position.z,r=Math.min(1,i*5);for(let o of St.structure.openings.filter(a=>a.kind==="door")){let a=Ve.doorLeaves[o.id];if(!a)continue;let c=oe(St.structure,o.side),l=n-(c.axis==="x"?o.at:c.fixed),h=s-(c.axis==="x"?c.fixed:o.at),u=Math.hypot(l,h)<1.2;o.id==="front-door"&&o.w>=1.3?a.position.x=ur.lerp(a.position.x,u?o.w/2-.06:0,r):a.rotation.y=ur.lerp(a.rotation.y,u?-1.4:0,r)}if(Yf&&un==="simulate"&&ke===vr){let a=new C(n,1,s).sub(ge.target).multiplyScalar(i*2.1);ge.target.add(a),ke.position.add(a)}}function Ky(){ws();let i=Vo(),t=["bed","desk","bathroom","balcony","entrance"].map(e=>{let n=Kh(e,St.items),s=n.some(r=>ec(i,r,St.items,Ms));return{name:e,pass:s,exists:!!n.length}});return at("#pathResults").innerHTML=t.map(e=>`<div><span>${e.name[0].toUpperCase()+e.name.slice(1)}</span><b class="${e.pass?"pass":"fail"}">${e.pass?"\u2713 Reachable":e.exists?"Blocked":"Not placed"}</b></div>`).join(""),_e("Access checked from Blocky\u2019s current position."),t}function cp(){let i=new Blob([JSON.stringify(St,null,2)],{type:"application/json"});hp(i,"House-Studio-Layout.json"),_e("Layout exported. Keep this file as your portable backup.")}function hp(i,t){let e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}function up(){let i=qf("house-studio-layouts-v1",[]);return Array.isArray(i)?i:[]}function pu(){let i=up();at("#savedLayouts").innerHTML=i.length?i.map((t,e)=>`<div class="saved-layout"><button data-load="${e}">${Oo(t.name)}<small>${t.items?.length||0} objects</small></button><button class="icon-btn" data-remove-save="${e}" title="Delete saved copy" aria-label="Delete ${Oo(t.name)}">${gi("trash")}</button></div>`).join(""):'<div class="empty-copy">No named copies yet.</div>',Ne("[data-load]").forEach(t=>t.onclick=()=>{try{let e=xs(i[Number(t.dataset.load)]);e.structure||(e.structure=_i()),kn(),St=e,$e=null,Vn(),at("#layoutsDialog").close(),_e("Saved layout loaded.")}catch(e){_e(e.message)}}),Ne("[data-remove-save]").forEach(t=>t.onclick=()=>{confirm("Remove this named copy? Your current layout stays unchanged.")&&(i.splice(Number(t.dataset.removeSave),1),cu("house-studio-layouts-v1",i),pu())})}function mu(i){document.body.classList.toggle("presentation",i),at("#exitPresent").hidden=!i,$e=null,Mr(),at("#sidebar").classList.remove("mobile-open"),lc()}function jy(){Ae.render(Ue,ke),Ae.domElement.toBlob(i=>{i&&hp(i,"House-Studio-View.png")}),_e("Scene image saved.")}Ne("[data-mode]").forEach(i=>i.onclick=()=>Oy(i.dataset.mode));Ne("[data-light]").forEach(i=>i.onclick=()=>tp(i.dataset.light));Ne("[data-view]").forEach(i=>i.onclick=()=>cc(i.dataset.view));Ne("[data-action]").forEach(i=>i.onclick=()=>fu(i.dataset.action));at("#roofBtn").onclick=()=>{Sn=!Sn,Sn&&be==="hidden"&&(be="full",at("#wallSelect").value=be),ei()};at("#wallSelect").onchange=i=>{be=i.target.value,ei()};at("#fitBtn").onclick=()=>cc("iso");at("#lightsToggle").onchange=hu;at("#gardenToggle").onchange=i=>Ve.garden.visible=i.target.checked;at("#measureBtn").onclick=op;at("#dimensionBtn").onclick=()=>{vi.visible=!vi.visible,at("#dimensionBtn").classList.toggle("active",vi.visible)};at("#undoBtn").onclick=Kf;at("#redoBtn").onclick=lu;at("#snapToggle").onchange=i=>{Wi=i.target.checked,Ts.visible=un==="decorate"&&Wi,Wo()};at("#searchInput").oninput=uu;at("#heightInput").oninput=i=>{Ms=Number(i.target.value)/100,at("#heightLabel").textContent=i.target.value+" cm",wn()};at("#followToggle").onchange=i=>Yf=i.target.checked;at("#pathToggle").onchange=i=>Gi.visible=i.target.checked;at("#stopPerson").onclick=()=>{let i=Gt.action;i?.item&&Gt.phase!=="walking"&&he.root.position.set(i.x,qe(i.x,i.z)+.015,i.z),wn()};at("#resetPerson").onclick=ap;at("#checkPaths").onclick=Ky;at("#cameraTourBtn").onclick=()=>{ke===yi&&cc("iso"),No=!No,at("#cameraTourBtn").innerHTML=gi(No?"pause":"play")};at("#screenshotBtn").onclick=jy;at("#helpBtn").onclick=()=>at("#helpDialog").showModal();at("#referenceBtn").onclick=()=>{at("#helpDialog details").open=!0,at("#helpDialog").showModal()};Ne("[data-close]").forEach(i=>i.onclick=()=>i.closest("dialog").close());Ne("dialog").forEach(i=>i.addEventListener("click",t=>{if(t.target===i){let e=i.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&i.close()}}));at("#saveBtn").onclick=()=>{pu(),at("#layoutsDialog").showModal()};at("#saveLayoutForm").onsubmit=i=>{i.preventDefault();let t=at("#layoutName").value.trim();if(!t)return;let e=up();if(e.length>=25){_e("Export or remove a saved copy before adding more (limit 25).");return}let n=JSON.parse(JSON.stringify({...St,name:t}));e.push(n),cu("house-studio-layouts-v1",e)?(pu(),_e("Named copy saved.")):_e("Browser storage is full or unavailable. Export JSON instead.")};at("#exportBtn").onclick=cp;at("#downloadLayoutBtn").onclick=cp;at("#importBtn").onclick=()=>at("#importFile").click();at("#importFile").onchange=async i=>{let t=i.target.files[0];if(i.target.value="",!!t){if(t.size>2e6){_e("Layout file is too large (maximum 2 MB).");return}try{let e=xs(JSON.parse(await t.text()));kn(),St=e,$e=null,Vn(),at("#layoutsDialog").close(),_e("Layout imported.")}catch(e){_e("Import stopped: "+e.message)}}};at("#presentBtn").onclick=()=>mu(!0);at("#exitPresent").onclick=()=>mu(!1);at("#mobilePanelBtn").onclick=()=>at("#sidebar").classList.toggle("mobile-open");function dp(i,t){let e={front:0,back:Math.PI,left:-Math.PI/2,right:Math.PI/2},n=(e[t.side]||0)-(e[i.side]||0),s=Math.abs(Math.sin(n))>.5;for(let r of St.items)if(r.x>=i.x-i.w/2&&r.x<=i.x+i.w/2&&r.z>=i.z-i.d/2&&r.z<=i.z+i.d/2){let o=On({x:0,z:0,rot:n},r.x-i.x,r.z-i.z);r.x=t.x+o.x*t.w/(s?i.d:i.w),r.z=t.z+o.z*t.d/(s?i.w:i.d),r.rot=((r.rot+n)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)}}function fp(i,t){let e=i.bathroom,n=t.bathroom;if(e.side===n.side)for(let s of t.openings){if(!s.side.startsWith("bath-"))continue;let r=i.openings.find(a=>a.id===s.id&&a.side===s.side);if(!r)continue;let o=oe(t,s.side);s.at=o.axis==="x"?n.x+(r.at-e.x)*n.w/e.w:n.z+(r.at-e.z)*n.d/e.d}}function gu(i){let t=St.structure,e=JSON.parse(JSON.stringify(t));try{i(e),Ro(e),JSON.stringify(t.bathroom)!==JSON.stringify(e.bathroom)&&fp(t,e);let n=xs({...St,structure:e}).structure;return kn(),St.structure=n,JSON.stringify(t.bathroom)!==JSON.stringify(n.bathroom)&&dp(t.bathroom,n.bathroom),St.preset="custom",Vn(),!0}catch(n){return _e(n.message),_u(),!1}}function Qy(i,t,e){let n=JSON.parse(JSON.stringify(St.structure)),s=St.structure,r=Wi?.1:.01,o=f=>Math.round(Math.max(-5.5,Math.min(5.5,f))/r)*r,a=s.openings.find(f=>f.id===i);if(a){let f=oe(s,a.side),d=f.start+a.w/2+.1,m=f.end-a.w/2-.1;a.at=Math.max(d,Math.min(m,o(f.axis==="x"?t:e)));return}let c=s.partitions.find(f=>f.id===i);if(c){c.x=o(t),c.z=o(e);return}let l=Re.find(f=>i===f+"-wall");if(!l)return;let h=s.bounds,u=o(l==="left"||l==="right"?t:e);h[l]=l==="left"?Math.min(u,h.right-2):l==="right"?Math.max(u,h.left+2):l==="back"?Math.min(u,h.front-2):Math.max(u,h.back+2),Ro(s),fp(n,s),dp(n.bathroom,s.bathroom)}function _u(){pp.render()}var pp=Vf({$:at,$$:Ne,escapeHTML:Oo,scene:Ue,renderer:Ae,controls:ge,ray:du,raycaster:uc,pointAt:dc,cloneStructure:_i,toast:_e,view:cc,edit:gu,checkpoint:kn,commit:Vn,rebuildStructure:ac,moveStructure:Qy,getState:()=>St,getHouse:()=>Ve,getMode:()=>un,getMeasure:()=>xi,getSnap:()=>Wi});Ne("[data-keep-wall]").forEach(i=>i.onclick=()=>{be="cutaway",gu(t=>{for(let e of Fn)t.wallVisibility[e]=e===i.dataset.keepWall||e==="bath-"+i.dataset.keepWall?"full":"hidden";for(let e of t.partitions)t.wallVisibility[e.id]="low"})});if(document.modelContext?.registerTool){let i=new AbortController;window.addEventListener("pagehide",()=>i.abort(),{once:!0});for(let t of[{name:"read_house_layout",description:"Read the current house layout and furniture dimensions in metres.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>JSON.parse(JSON.stringify(St))},{name:"load_house_preset",description:"Replace furniture with a starting preset, keeping the change available in undo.",inputSchema:{type:"object",properties:{preset:{type:"string",enum:_s.map(e=>e.id)}},required:["preset"],additionalProperties:!1},execute:e=>{if(!e||!_s.some(n=>n.id===e.preset))throw new Error("Unknown preset.");return Qf(e.preset),{name:St.name,objects:St.items.length}}}])try{Promise.resolve(document.modelContext.registerTool(t,{signal:i.signal})).catch(()=>{})}catch{}}Ho();ky();ei();tp("day");br();lc();ge.update();Go();var Xf=new po;function mp(){requestAnimationFrame(mp);let i=Math.min(Xf.getDelta(),.05),t=Xf.elapsedTime;if(Qn){Qn.t+=i;let e=Math.min(1,Qn.t/.65),n=e*e*(3-2*e);ke.position.lerpVectors(Qn.from,Qn.to,n),ge.target.lerpVectors(Qn.targetFrom,Qn.targetTo,n),e===1&&(Qn=null)}ge.autoRotate=No,ge.autoRotateSpeed=.6,ge.update(i),un==="simulate"&&Jy(i,t),Ae.render(Ue,ke)}mp();at("#loading").hidden=!0;window.addEventListener("error",i=>{console.error(i.error),_e("Something went wrong. Export your layout, then reload the page.")});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
