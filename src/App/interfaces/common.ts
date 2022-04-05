export default interface I_Meme{
    id?:number
    text:string
    x:number
    y:number
    fontWeight:string
    fontSize:Number
    underline:boolean
    italic:boolean
    imageId:number|null
    color:string
};
export const DummyMeme:I_Meme={
    text:"Demat Breizh",
    x:50,
    y:100,
    fontWeight: '900',
    fontSize: 14,
    underline: false,
    italic: false,
    imageId: 0,
    color:'#DCDCDC',
};
export interface I_Image{
    id:number
    url:string
    w:number
    h:number
    name:string
}