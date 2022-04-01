import { useState } from 'react'

export default function SearchInput(props) {
    const [value, setValue] = useState('');
    const placeholder = 'Busca tu ciudad...'

    const captureEventEnter = (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        props.value(value);
        setValue('');
    }

    return (
        <>
            <input type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                className="outline-none text-black opacity-50 p-4 rounded-lg duration-500 hover:opacity-70"
                onKeyDown={captureEventEnter} />
        </>
    )
}