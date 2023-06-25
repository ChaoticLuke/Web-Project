"use client"

export default function Error({ error, reset }) {
    return(
        <div>
            whoopsie {error.message}
            <button onClick={() => reset()}>Try again fuckhead</button>
        </div>
    )
}