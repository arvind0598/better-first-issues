import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
 --w:10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 1.2em;
  letter-spacing: var(--w);
  width:var(--w);
  overflow: hidden;
  white-space: nowrap;
  color:#0000;
  animation: loading 2s infinite linear;

  &::before {
    content:"Loading...";
  }

  @keyframes loading {
    0% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
      }
    4% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    8% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    12% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    16% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    20% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    24% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    28% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    32% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
        }
    36% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0
        }
    40%,
    60% {
      text-shadow:
          calc( 0*var(--w)) 0 #000,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    64% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0 #000,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    68% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0 #000,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    72% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0 #000,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    76% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0 #000,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    80% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0 #000,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    84% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0 #000,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    88% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0 #000,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    92% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0 #000,calc(-9*var(--w)) 0 #000
        }
    96% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0 #000}
    100% {
      text-shadow:
          calc( 0*var(--w)) 0,calc(-1*var(--w)) 0,calc(-2*var(--w)) 0,calc(-3*var(--w)) 0,calc(-4*var(--w)) 0,
          calc(-5*var(--w)) 0,calc(-6*var(--w)) 0,calc(-7*var(--w)) 0,calc(-8*var(--w)) 0,calc(-9*var(--w)) 0
      }
  }
`;

export const Error = styled.div`
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  overflow: hidden;
  white-space: nowrap;
  color: red;
`;