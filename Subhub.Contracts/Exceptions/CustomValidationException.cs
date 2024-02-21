using Subhub.Contracts.Errors;

namespace Subhub.Contracts.Exceptions;

public class CustomValidationException : Exception
{
    public CustomValidationException(List<ValidationError> validationErrors)
    {
        ValidationErrors = validationErrors;
    }
    public List<ValidationError> ValidationErrors {get; set;}
}
