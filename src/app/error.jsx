"use client"

export default function Error({ error, reset }) {
    return(
        <div>
            {error.message}
            <button onClick={() => reset()}>Oops, there was an error! Please try again.</button>
        </div>
    )
}