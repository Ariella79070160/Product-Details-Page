import { useState } from "react"
import TextInput from "../ui/TextInput"
import Button from "../ui/Button"

import { useToast } from '../../context/ToastContext'

const EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/;

const NewsLetterForm = () => {
    const { toast } = useToast()

    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!email.match(EMAIL_REGEX)){
            setErrorMessage('Please enter a valid email address.')
            return
        } else if(!email){
            setErrorMessage('Email address is required.');
            return;
        } else{
            setErrorMessage('');
        }

        setSubmitting(true)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
            }),
        }

        const res = await fetch(
            'https://www.greatfrontend.com/api/projects/challenges/newsletter',
            requestOptions,
        )

        const result = await res.json()

        if(result){
            setEmail('')
            if(result.message){
                toast.success(result.message)
            }else if(result.error){
                toast.error(result.error)
            }
        }
        setSubmitting(false)

    }
    return(
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4 md:flex-row">
            <TextInput
                placeholder="Enter your email"
                errorMessage={errorMessage}
                onChange={(value) => setEmail(value)}
                value={email}
                required
            />
            <Button label="Subscribe" type="submit" isDisabled={submitting} />
        </form>
    )
}
export default NewsLetterForm