using Esprima.Ast;

namespace Jint.Runtime.Interpreter.Expressions
{
    internal sealed class JintMetaPropertyExpression : JintExpression
    {
        private readonly bool _newTarget;

        public JintMetaPropertyExpression(Engine engine, MetaProperty expression) : base(engine, expression)
        {
            _newTarget = expression.Meta.Name == "new" && expression.Property.Name == "target";
        }

        protected override object EvaluateInternal()
        {
            if (_newTarget)
            {
                return _engine.GetNewTarget();
            }
            
            ExceptionHelper.ThrowNotImplementedException();
            return null;
        }
    }
}