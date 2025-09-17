import {Editor}  from '@tinymce/tinymce-react'
import {useEffect, useRef, useState} from 'react'

const TinyEditor = () =>{

    
    const EditorRef = useRef<any>(null);
    const [initialContent, setInitialContent] = useState<string | null >(null)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        fetch("/api/notes/getcontent")
        .then(res=>  res.json())
        .then(data=>{
            if(data.content){
                setInitialContent(data.content)
            }
        }).catch(err=>console.error("error loading",err));
    },[]);
    

    const saveContent = async () =>{
        if(EditorRef.current){
            const content = EditorRef.current.getContent();
            try{
                const res = await fetch("/api/notes/savecontent",{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({content})
                });
                const data = await res.json();
                console.log('save response',data)
                
            } catch(err){
console.error("Error saving content", err)
            }
        }
    }


    return (
        <div className='p-4'> 
        
            <Editor 
            apiKey = "tet3z53xfsntdj5d4stc7i84ct2dg6u88tyk3jx2r6zey937"
            onInit={(evt, editor) =>{
                
                 EditorRef.current = editor
            }}
            initialValue={initialContent ||'<p>Start writing here..</p>'}

            init={{
                height:500,
                menuBar:false,
                plugins: [
                    'advlist', 'autolink', 'lists','link','image',
                    'charmap','preview','anchor','searchreplace',
                    'visualblocks','code','fullscreen','insertdatetime',
                    'media','table','code','help','wordcount'
                ],
                toolbar:[
                    'undo redo | blocks | bold italic backcolor |'+
                    'alignleft aligncenter alignright alignjustify|'+
                    'bullist numlist outdent indent | removeformat | help'
                ]
            }} />
            <button onClick={saveContent} className='mt-4 px-4 py-2 bg-blue-600  text-white rounded'>Save Content!</button>
        
        </div>
    )
}

export default TinyEditor