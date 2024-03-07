using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace RecursivaChallengeBackend.Extensions
{
    public class FileTypeAttribute : ValidationAttribute
    {
        private readonly string[] _fileTypes;

        public FileTypeAttribute(params string[] fileTypes)
        {
            _fileTypes = fileTypes;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null)
            {
                var file = value as IFormFile;
                if (file != null)
                {
                    var extension = Path.GetExtension(file.FileName);
                    if (!_fileTypes.Contains(extension, StringComparer.OrdinalIgnoreCase))
                    {
                        return new ValidationResult(ErrorMessage);
                    }
                }
            }
            return ValidationResult.Success;
        }
    }
}
