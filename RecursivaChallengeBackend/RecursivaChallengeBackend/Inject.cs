using RecursivaChallengeBackend.Extensions;
using System.Reflection;

namespace RecursivaChallengeBackend
{
    public class Inject
    {
        public static void Run(IServiceCollection services)
        {
            string path = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            string[] files = Directory.GetFiles(path, "*.dll");
            IEnumerable<Assembly> assemblies = files.Select(Assembly.LoadFrom);

            Type handlerType = typeof(Injectable);
            IEnumerable<Type> types = assemblies
                .SelectMany(s => s.GetTypes())
                .Where(p => handlerType.IsAssignableFrom(p) && p.IsClass);

            foreach (Type type in types)
            {
                services.AddTransient(type);
            }
        }        
    }
}
