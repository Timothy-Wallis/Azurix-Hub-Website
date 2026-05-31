interface ColorSelectorProps{
    Color: string;
}
export default function ColorSelector(props: ColorSelectorProps){
    return(
        <div style={{backgroundColor: props.Color, borderRadius: '100px', borderColor: 'white'}}>
        </div>
    )
} 