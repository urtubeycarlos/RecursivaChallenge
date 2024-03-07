using RecursivaChallengeBackend.Extensions;

namespace RecursivaChallengeBackend.Handlers
{
    public interface IHandler<T, R> : Injectable
    {
        public Task<R> HandleAsync(T request);
    }
}
