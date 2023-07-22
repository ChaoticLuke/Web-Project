"use client"

export default function Error({ error, reset }) {
    return(
        <div>
            {error.message}
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}