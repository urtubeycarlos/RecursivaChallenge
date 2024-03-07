﻿namespace RecursivaChallengeBackend.Models
{
    public class RegistroCsvSuperLiga : IComparable<RegistroCsvSuperLiga>
    {
        public string Nombre { get; set; }
        public byte Edad { get; set; }
        public string Equipo { get; set; }
        public string EstadoCivil { get; set; }
        public string NivelEstudios { get; set; }

        public int CompareTo(RegistroCsvSuperLiga? other)
        {            
            return Nombre.CompareTo(other.Nombre);
        }
    }
}
